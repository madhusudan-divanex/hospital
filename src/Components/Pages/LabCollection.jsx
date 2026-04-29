import { faPrint } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSecureApiData, securePostData } from "../../Service/api";
import Barcode from "react-barcode";
import Loader from "../Common/Loader";
import { toast } from "react-toastify";

function LabCollection() {
    const params = useParams()
    const componentRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const appointmentId = params.id
    const [demoData, setDemoData] = useState()
    const [testId, setTestId] = useState([]);
    const [testData, setTestData] = useState([]);
    const [allComponentResults, setAllComponentResults] = useState({});
    const [allComments, setAllComments] = useState({});
    const [reportMeta, setReportMeta] = useState({});


    const [appointmentData, setAppointmentData] = useState({})
    const fetchAppointmentData = async () => {
        setIsLoading(true)
        try {
            const response = await getSecureApiData(`lab/appointment-data/${appointmentId}`)
            if (response.success) {
                setTestId(response.data.subCatId)
                setAppointmentData(response.data)
            } else {
                toast.error(response.message)
            }
        } catch (error) {

        } finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {
        fetchAppointmentData()
    }, [appointmentId])
    const fetchTestReport = async (testId) => {
        try {
            const payload = {subCatId: testId, appointmentId };
            const response = await securePostData('lab/test-report-data', payload);

            if (response.success && response.data) {
                setReportMeta(prev => ({
                    ...prev,
                    [testId]: {
                        id: response.data._id,
                        createdAt: response.data.createdAt
                    }
                }));
                return response.data;
            } else {
                return null;
            }
        } catch (err) {
            console.error(`Error fetching report for test ${testId}:`, err);
            return null;
        }
    };
    useEffect(() => {
        const fetchTestsOneByOne = async () => {

            if (testId.length === 0) return;
            const allTests = [];
            setIsLoading(true);

            for (const id of testId) {
                try {
                    const response = await getSecureApiData(`api/comman/sub-test-category-data/${id._id}`);
                    if (response.success) {
                        const test = response.data;

                        // Fetch report for this test
                        const report = await fetchTestReport(test._id);

                        if (report) {
                            const mergedResults = {};
                            test.component.forEach((c, i) => {
                                const comp = report.component.find(rc => rc.cmpId === c._id);
                                mergedResults[i] = {
                                    result: comp?.result || "",
                                    status: comp?.status || "",
                                };
                            });
                            // Set results and comments keyed by test._id
                            setAllComponentResults(prev => ({ ...prev, [test._id]: mergedResults }));
                            setAllComments(prev => ({ ...prev, [test._id]: report.upload.comment || "" }));


                        } else {
                            // If no report found, initialize empty for this test
                            setAllComponentResults(prev => ({ ...prev, [test._id]: {} }));
                            setAllComments(prev => ({ ...prev, [test._id]: "" }));
                        }

                        allTests.push(test);

                    } else {
                        toast.error(response.message);
                    }
                } catch (err) {
                    console.error(`Error fetching test ${id}:`, err);
                }
            }
            setIsLoading(false);
            setTestData(allTests);
        };

        fetchTestsOneByOne();
    }, [testId]);

    async function sampleCollected() {
        try {
            const res = await securePostData('lab/test-sample', { appointmentId: appointmentData?._id })
            if (res.success) {
                fetchAppointmentData()
                toast.success("Sample collected")
            } else {
                toast.error(res.message)
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || "Something went wrong")
        }
    }

    return (
        <>
            {isLoading ? <Loader />
                : <div className="main-content flex-grow-1 p-3 overflow-auto">
                    <form action="">
                        <div className="row mb-3">
                            <div className="d-flex align-items-center justify-content-between">
                                <div>
                                    <h3 className="innr-title mb-2">Collection</h3>
                                    <div className="admin-breadcrumb">
                                        <nav aria-label="breadcrumb">
                                            <ol class="breadcrumb custom-breadcrumb">
                                                <li className="breadcrumb-item">
                                                    <a href="#" className="breadcrumb-link">
                                                        Dashboard
                                                    </a>
                                                </li>

                                                <li className="breadcrumb-item">
                                                    <a href="#" className="breadcrumb-link">
                                                        Test  Request
                                                    </a>
                                                </li>
                                                <li
                                                    className="breadcrumb-item active"
                                                    aria-current="page"
                                                >
                                                    Collection
                                                </li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>



                    <div className="new-panel-card">
                        <div className="row">
                            <div ref={componentRef} className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                    {testData?.map((item, key) =>
                                        <div className="new-invoice-card" key={key}>
                                            <div>
                                                <h5 className="first_para fw-700 fz-20 text-capitalize">{item?.packageType} Plan</h5>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6 mb-3" >
                                                    <div className="laboratory-bill-bx">
                                                        <p><span className="laboratory-phne">Code :</span> {item?.code}</p>
                                                        <p><span className="laboratory-phne">Test :</span> {item?.shortName}</p>
                                                        <p><span className="laboratory-phne text-capitalize">Category :</span> {item?.category?.name}</p>
                                                        <p><span className="laboratory-phne">Special Approval :</span> {item?.specialApproval ? 'Yes' : 'No'}</p>
                                                        <p><span className="laboratory-phne text-capitalize">Fasting :</span> {item?.fastingRequired ? 'Yes' : 'No'}</p>
                                                    </div>
                                                    <h5>Sample</h5>
                                                    {item?.sample?.map((s, k) =>
                                                        <ul className="appointment-booking-list">
                                                            <li className="appoint-item"> Type : <span className="appoint-title">{s?.type}</span></li>
                                                            <li className="appoint-item"> Volume : <span className="appoint-title">{s?.volume}</span></li>

                                                        </ul>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {!appointmentData?.collectionDate && <div className="mt-3" >
                                <button onClick={sampleCollected} className="nw-thm-btn">Mark Collected</button>
                            </div>}
                        </div>
                    </div>
                    <div className="text-end mt-5">
                        <Link to={-1} className="nw-thm-btn rounded-3 outline" >
                            Go Back
                        </Link>
                    </div>
                </div>}
        </>
    )
}

export default LabCollection