import { faCheck, faCircleXmark, faEye, faFileExport, faFilePdf, faLocationDot, faMessage, faPhone, faPrint } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, NavLink, useNavigate, useParams } from "react-router-dom"
import { TbGridDots } from "react-icons/tb";
import { useEffect, useRef, useState } from "react";
import { deleteApiData, getApiData, getSecureApiData, securePostData, updateApiData } from "../../Service/api";
import { toast } from "react-toastify";
import base_url from "../../baseUrl";
import { calculateAge, formatDateTime } from "../../Service/globalFunction";
import Select from "react-select";
import { Modal } from "bootstrap";
import Loader from "../Common/Loader";
import { useSelector } from "react-redux";
function AppointmentSuccessDetails() {
    const navigate = useNavigate()
    const params = useParams()
    const user = JSON.parse(localStorage.getItem('user'))
    const userId = user.id
    const [loading, setLoading] = useState(false)
    const [appointmentData, setAppointmentData] = useState()
    const [doctorAddress, setDoctorAddress] = useState()
    const [pastPresData, setPastPresData] = useState()
    const [labData, setLabData] = useState()
    const [labAddress, setLabAddress] = useState()
    const [testData, setTestData] = useState([])
    const [labReport, setLabReport] = useState([])
    const [selectedTest, setSelectedTest] = useState([])
    const [labStatus, setLabStatus] = useState()
    const [showDownload, setShowDownload] = useState(false);
    const [pdfLoading, setPdfLoading] = useState(null)
    const [selectedReport, setSelectedReport] = useState(null);
    const [labOptions, setLabOptions] = useState()
    const [testOptions, setTestOptions] = useState([])
    const [selectedLab, setSelectedLab] = useState()
    const [patientDemo, setPatientDemo] = useState()
    const [doctorAbout, setDoctorAbout] = useState()
    const { hospitalBasic } = useSelector(state => state.user)
    const [selectedCategory, setSelectedCategory] = useState()
    const [selectedSubCat, setSelectedSubCat] = useState([])
    const [catAndSub, setCatAndSub] = useState([])
    const [subCatOptions, setSubCatOptions] = useState([])
    async function fetchAppointmentData() {
        setLoading(true)
        try {
            const result = await getSecureApiData(`api/hospital/appointment-data/${params.id}`)
            if (result.success) {
                setAppointmentData(result.data)
                setDoctorAddress(result.doctorAddress)
            } else {
                toast.error(result.message)
                navigate(-1)
            }
        } catch (error) {
            toast.error(error?.response?.data?.message)
        } finally {
            setLoading(false)
        }
    }
    async function fetchPatientData() {
        setLoading(true)
        try {
            const result = await getSecureApiData(`patient/demographic/${appointmentData?.patientId?._id}`)
            if (result.success) {
                setPatientDemo(result.data)
            }
        } catch (error) {

        } finally {
            setLoading(false)
        }
    }
    async function fetchDoctorData() {
        setLoading(true)
        try {
            const result = await getSecureApiData(`doctor/about/${appointmentData?.doctorId?._id}`)
            if (result.success) {
                setDoctorAbout(result.data)
            }
        } catch (error) {

        } finally {
            setLoading(false)
        }
    }
    async function fetchLabData() {
        if (!appointmentData?.labTest) {
            return
        }
        try {
            const result = await getSecureApiData(`patient/appointment-test-detail/${params.id}`)
            if (result.success) {
                setLabReport(result.labReport)
                setTestData(result.labTests)
                setLabStatus(result.labStatus.status)
            }
        } catch (error) {

        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        if (appointmentData) {
            fetchDoctorData()
            fetchLabData()
            fetchPatientData()
        }
    }, [appointmentData])


    useEffect(() => {
        fetchAppointmentData()
    }, [params])

    const startChatWithUser = async (user) => {
        // create or get conversation
        sessionStorage.setItem('chatUser', JSON.stringify(user))
        navigate('/chat')
    };


    async function fetchSelectedLabData() {

        try {
            const result = await getSecureApiData(`lab/test/${userId}?limit=1000&type=hospital`)
            if (result.success) {
                const options = result.data?.filter(item => item?.status == 'active')?.map((lab) => ({
                    value: lab._id,
                    label: lab.shortName
                }));
                setTestOptions(options)
            }
        } catch (error) {

        }
    }
    useEffect(() => {
        fetchSelectedLabData()
    }, [])
    const handleReportDownload = (appointmentId, testId, id) => {
        setPdfLoading(id)
        setSelectedReport({ appointmentId, testId });
        setShowDownload(true);
    };
    useEffect(() => {
        if (pastPresData) {
            const modalEl = document.getElementById("prescription-Modal");
            if (modalEl) {
                const modal = new window.bootstrap.Modal(modalEl);
                modal.show();
            }
        }
    }, [pastPresData]);

    const prescriptionAction = async (item, status) => {
        const data = { prescriptionId: item?.prescriptionId?._id, status: status ? 'Active' : 'Inactive' }
        try {
            const response = await securePostData(`appointment/prescription-action`, data);
            if (response.success) {
                // setCurrentPage(response.pagination.page)
                // setTotalPage(response.pagination.totalPages)
                fetchAppointmentData()
            } else {
                toast.error(response.message)
            }
        } catch (err) {
            toast.error(err?.response?.data?.message || "Something went wrong");;
        }
    }
    const deletePrescription = async (id) => {
        try {
            const response = await deleteApiData(`appointment/prescription/${id}`);
            if (response.success) {
                toast.success("Prescription Deleted")
                fetchAppointmentData()
            } else {
                toast.error(response.message)
            }
        } catch (err) {
            toast.error(err?.response?.data?.message || "Something went wrong");;
        }
    }
    const handleTestSubmit = async (e) => {
        e.preventDefault()

        const data = {
            doctorId: appointmentData?.doctorId?._id, patientId: appointmentData?.patientId?._id, appointmentId: params.id,
            // labTest: { lab: userId, labTests: selectedTest }
            labTest: { testCat: selectedCategory, subCat: selectedSubCat }
        }
        try {
            const result = await updateApiData('appointment/doctor', data)
            if (result.success) {
                toast.success("Test added to the prescriptions")
                fetchAppointmentData()
                document.getElementById('closeTest')?.click()
            }
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }
    const appointmentAction = async (status) => {
        const data = { doctorId: userId, appointmentId: params?.id, status }
        try {
            const response = await updateApiData(`appointment/hospital/doctor-action`, data);
            if (response.success) {
                // setCurrentPage(response.pagination.page)
                // setTotalPage(response.pagination.totalPages)
                fetchAppointmentData()
            } else {
                toast.error(response.message)
            }
        } catch (err) {
            toast.error(err?.response?.data?.message || "Something went wrong");;
        }
    }
    async function fetchTestAndSub() {
        try {
            const res = await getApiData('api/comman/test-category')
            if (res.success) {
                setCatAndSub(res.data)
            }
        } catch (error) {

        }
    }
    useEffect(() => {
        fetchTestAndSub()
    }, [])
    async function fetchSubCategory(id) {
        const res = await getApiData(`api/comman/sub-test-category/${id}`)
        if (res.success) {
            const data = res?.data?.map(sub => ({
                label: sub?.subCategory,
                value: sub?._id
            })) || [];
            setSubCatOptions(data)
        }
    }
    useEffect(() => {
        if (selectedCategory) {
            fetchSubCategory(selectedCategory)
        }
    }, [selectedCategory])
    return (
        <>
            {loading ? <Loader />
                : <div className="main-content flex-grow-1 p-3 overflow-auto">
                    <div className="row mb-3">
                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                            <div>
                                <h3 className="innr-title mb-2 gradient-text">Appointment Details</h3>
                                <div className="admin-breadcrumb">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb custom-breadcrumb">
                                            <li className="breadcrumb-item">
                                                <NavLink to="/" className="breadcrumb-link">
                                                    Dashboard
                                                </NavLink>
                                            </li>
                                            <li className="breadcrumb-item">
                                                <NavLink to="#" className="breadcrumb-link">
                                                    Appointments
                                                </NavLink>
                                            </li>
                                            <li
                                                className="breadcrumb-item active"
                                                aria-current="page"
                                            >
                                                Appointment Details
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                            <div className="exprt-bx d-flex align-items-center gap-2">
                                {appointmentData?.status == 'approved' &&
                                    <>
                                        <NavLink to={`/appointment-prescription/${appointmentData?._id}`} className="nw-thm-btn w-auto">{appointmentData?.prescriptionId ? 'Edit' : 'Add'} Prescriptions</NavLink>
                                        { !appointmentData?.labTest?.testCat &&<button className="nw-thm-btn w-auto" data-bs-toggle="modal" data-bs-target="#add-Lab">Add  Lab Test </button>}
                                        {appointmentData?.status !== 'approved' && <button className="progress-btn"> <FontAwesomeIcon icon={faCheck} onClick={() => appointmentAction('approved')} /> Mark as in progress</button>}
                                    </>}
                                <button className="nw-exprt-btn"><FontAwesomeIcon icon={faPrint} /> Print </button>
                                <button className="nw-exprt-btn"><FontAwesomeIcon icon={faFileExport} /> Export </button>
                            </div>
                        </div>
                    </div>

                    <div className='new-panel-card'>
                        <div className="row mt-3">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="neo-health-patient-info-card mb-3">
                                    <h5>Patient Information</h5>
                                    <div className="d-flex align-items-center justify-content-between my-3">
                                        <div className="admin-table-bx">
                                            <div className="admin-table-sub-bx">
                                                <img src={appointmentData?.patientId?.patientId?.profileImage ?
                                                    `${base_url}/${appointmentData?.patientId?.patientId?.profileImage}` : "/admin-tb-logo.png"} alt="" />
                                                <div className="admin-table-sub-details doctor-title">
                                                    <h6>{appointmentData?.patientId?.name}</h6>
                                                    <p>{appointmentData?.patientId?.nh12}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="neo-health-contact-bx">
                                            <button className="neo-health-contact-btn"><FontAwesomeIcon icon={faMessage} /></button>
                                            <button className="neo-health-contact-btn"><FontAwesomeIcon icon={faPhone} /></button>
                                        </div>
                                    </div>

                                    <div className="neo-health-user-information my-3">
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <div>
                                                <h6>Age</h6>
                                                <p>{calculateAge(patientDemo?.dob)} Years</p>
                                            </div>
                                            <div>
                                                <h6>Gender</h6>
                                                <p>{appointmentData?.patientId?.patientId?.gender}</p>
                                            </div>
                                        </div>

                                        {/* <div className="d-flex align-items-center justify-content-between">
                                        <div>
                                            <h6>Address</h6>
                                            <p>23 Medical Center Blvd, Suite 45,  jaipur,  india</p>
                                        </div>
                                    </div> */}
                                    </div>
                                    <div>
                                        <NavLink to={`/patient-view/${appointmentData?.patientId?._id}`} className="view-patient-btn text-center"><FontAwesomeIcon icon={faEye} /> View Patient Record</NavLink>
                                    </div>
                                </div>

                                <div className="neo-health-patient-info-card mb-3">
                                    <h5>Doctor Information</h5>
                                    <div className="d-flex align-items-center justify-content-between my-3">
                                        <div className="admin-table-bx">
                                            <div className="admin-table-sub-bx ">
                                                <img src={appointmentData?.doctorId?.doctorId?.profileImage ?
                                                    `${base_url}/${appointmentData?.doctorId?.doctorId?.profileImage}` : "/doctor-avatr.png"} alt="" />
                                                <div className="admin-table-sub-details doctor-title">
                                                    <h6>{appointmentData?.doctorId?.name} </h6>
                                                    <p>{appointmentData?.doctorId?.nh12}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="neo-health-contact-bx">
                                            <button className="neo-health-contact-btn"><FontAwesomeIcon icon={faMessage} /></button>
                                            <button className="neo-health-contact-btn"><FontAwesomeIcon icon={faPhone} /></button>
                                        </div>
                                    </div>
                                    <div className="neo-health-user-information my-3">
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <div>
                                                <h6>Fees</h6>
                                                <p>₹ {doctorAbout?.fees}</p>
                                            </div>
                                            <div>
                                                <h6>Specialization </h6>
                                                <p>{doctorAbout?.specialty?.name} </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <NavLink to={`/doctor-view/${appointmentData?.doctorId?._id}`} className="view-patient-btn text-center"><FontAwesomeIcon icon={faEye} /> View Doctor Profile</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="neo-health-patient-info-card mb-3">
                                    <h5>Appointment Information</h5>

                                    <div className="neo-health-user-information d-flex align-items-center justify-content-between my-3">
                                        <div className=" mb-3">
                                            <div className="mb-3">
                                                <h6>Created Date</h6>
                                                <p>{new Date(appointmentData?.createdAt).toLocaleDateString('en-GB',
                                                    { day: 'numeric', month: 'long', year: 'numeric' })} </p>
                                            </div>
                                            <div className="mb-3">
                                                <h6 className="">Appointment Date</h6>
                                                <p>{formatDateTime(appointmentData?.date)}</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="mb-3">
                                                <h6>Appointment  Id</h6>
                                                <p> #{appointmentData?.customId}</p>
                                            </div>

                                            <div className="mb-3">
                                                <h6>Status</h6>
                                                <p>{appointmentData?.status == 'completed' ? <span className="approved rounded-5">Completed</span>
                                                    : appointmentData?.status == 'cancel' ? <span className="approved inactive rounded-5">Canceled</span>
                                                        : <span className="approved nw-pending ">Pending </span>}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="neo-health-patient-info-card mb-3">
                                    <h5>Payment Information</h5>

                                    <div className=" my-3">
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <div>
                                                <h6>Fees</h6>

                                            </div>
                                            <div>

                                                <p>₹ {appointmentData?.fees}</p>
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <h6>Payment Status</h6>

                                            </div>

                                            <div>

                                                <p>{appointmentData?.paymentStatus == 'paid' ? <span className="approved rounded-5">Payment Complete</span> :
                                                    <span className="approved nw-pending ">Pending </span>}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {appointmentData?.prescriptionId && <div className="neo-health-patient-info-card mb-3">
                                    <h5>Prescriptions</h5>

                                    <div className="prescriptin-bx">
                                        <div className="prescriptin-content">

                                            <div className="prescriptin-picture">
                                                <img src="/prescriptin-pic.png" alt="" />
                                                <div>
                                                    <p>Prescription Date</p>
                                                    <h6>{new Date(appointmentData?.prescriptionId?.createdAt)?.toLocaleString()}</h6>
                                                </div>
                                            </div>

                                            <div className="d-flex align-items-center gap-3 flex-wrap">
                                                <div className="switch">
                                                    <input type="checkbox" id="toggle7" checked={appointmentData?.prescriptionId?.status == 'Active'}
                                                        onChange={(e) => prescriptionAction(appointmentData, e.target.checked)} />
                                                    <label for="toggle7"></label>
                                                </div>

                                                <div>
                                                    <div className="dropdown">
                                                        <a
                                                            href="javascript:void(0)"
                                                            className="grid-dots-btn"
                                                            id="acticonMenu1"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                            <TbGridDots />
                                                        </a>
                                                        <ul
                                                            className="dropdown-menu dropdown-menu-end  tble-action-menu admin-dropdown-card"
                                                            aria-labelledby="acticonMenu1"
                                                        >
                                                            <li className="prescription-item">
                                                                <NavLink to={`/appointment-prescription/${appointmentData?._id}`} className="prescription-nav" >
                                                                    Edit
                                                                </NavLink>
                                                            </li>
                                                            <li className="prescription-item">
                                                                <NavLink to={`/view/${appointmentData?.prescriptionId?._id}`} className="prescription-nav" >
                                                                    View
                                                                </NavLink>
                                                            </li>
                                                            <li className="prescription-item">
                                                                <button className="prescription-nav" onClick={() => deletePrescription(appointmentData?.prescriptionId?._id)} >
                                                                    Delete
                                                                </button>
                                                            </li>


                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>}

                                {/* {appointmentData?.labTest?.labTests?.length > 0 &&
                                    <div className="neo-health-patient-info-card mb-3">
                                        <h5>Lab tests prescribed by the doctor</h5>


                                        <div className="prescriptin-bx">
                                            {labStatus !== 'deliver-report' &&
                                                <div className="my-3">
                                                    <ul className="permision-check-list">
                                                        {testData?.map((item, key) =>
                                                            <li className="permission-item" key={key}>
                                                                <div className="accordion-body-concet nw-select-test-bx">
                                                                    <input className="form-check-input mt-0"
                                                                        onChange={(e) => {
                                                                            setSelectedTest((prev) => {
                                                                                if (e.target.checked) {
                                                                                    return [...prev, item];
                                                                                } else {
                                                                                    return prev.filter(i => i.id !== item.id);
                                                                                }
                                                                            });
                                                                        }} type="checkbox" id={`available-${key}`} />
                                                                    <doctorel htmlFor={`available-${key}`}>{item?.shortName}</doctorel>
                                                                </div>
                                                            </li>)}
                                                    </ul>
                                                </div>}
                                            {labStatus == 'deliver-report' &&
                                                labReport?.map((item, key) =>
                                                    <div className="prescriptin-bx my-3" key={key}>
                                                        <div className="prescriptin-content">
                                                            <div className="prescriptin-picture lab-test-bx">
                                                                <img src="/test-tubs.svg" alt="" style={{ width: "50px", height: "50px" }} />
                                                                <div>
                                                                    <h6 className="fz-18 fw-700 mb-0">{item?.testId?.shortName} Report</h6>
                                                                    <p>{new Date(item?.createdAt).toLocaleDateString("en-GB", {
                                                                        day: "2-digit",
                                                                        month: "long",
                                                                        year: "numeric",
                                                                    })}</p>
                                                                </div>
                                                            </div>

                                                            <div>
                                                                <button
                                                                    disabled={pdfLoading !== null}
                                                                    onClick={() =>
                                                                        handleReportDownload(item?.appointmentId, item?.testId?._id, item?._id)
                                                                    }
                                                                    className="thm-btn thm-outline-btn rounded-2">
                                                                    <FontAwesomeIcon icon={faFilePdf} style={{ color: "#EF5350" }} />
                                                                    {pdfLoading == item?._id ? 'Downloading' : 'Download'}</button>
                                                            </div>
                                                        </div>
                                                    </div>)
                                            }

                                        </div>

                                    </div>} */}
                                {appointmentData?.labTest?.testCat &&
                                    <div className="neo-health-patient-info-card mb-3">
                                        <h5>Lab tests prescribed by the doctor</h5>


                                        <div className="prescriptin-bx">
                                            <h4 className="mb-2">{appointmentData?.labTest?.testCat?.name}</h4>
                                            {appointmentData?.labTest?.subCat?.map(s => <p className="ms-2"> {s?.subCategory}</p>)}

                                        </div>

                                    </div>}
                                {appointmentData?.status == 'cancel' &&
                                    <div className="neo-health-patient-info-card mb-3">
                                        <h5>Cancel  Information</h5>
                                        <div className="cancel-appoinment-content mt-4">
                                            <h4>Cancel Date :{formatDateTime(appointmentData?.updatedAt)}</h4>
                                            <h6>Reason of cancellation : </h6>
                                            <p>{appointmentData?.cancelMessage}</p>
                                        </div>

                                    </div>}


                            </div>

                        </div>

                    </div>
                    <div className="text-end mt-3">
                        <Link to={-1} className="nw-thm-btn outline" >
                            Go Back
                        </Link>
                    </div>
                </div>}
            <div className="modal step-modal fade" id="add-Lab" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-md">
                    <div className="modal-content rounded-0">
                        <div className="d-flex align-items-center justify-content-between border-bottom py-3 px-4">
                            <div>
                                <h6 className="lg_title mb-0">Add  Lab Test </h6>
                            </div>
                            <div>
                                <button type="button" className="" id="closeTest" data-bs-dismiss="modal" aria-label="Close" style={{ color: "rgba(239, 0, 0, 1)" }}>
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                </button>
                            </div>
                        </div>
                        <div className="modal-body pb-5 px-4 pb-5">
                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    <div className="add-deprtment-pic">
                                        <img src="/add-lab.png" alt="" />
                                        <p className="pt-2">Please add new lab test assign to patient</p>
                                    </div>

                                    <form onSubmit={handleTestSubmit}>
                                        <div className="custom-frm-bx">
                                            <label htmlFor="">Test Category</label>
                                            <select name="" id="" className="form-select" required value={selectedCategory}
                                                onChange={(e) => setSelectedCategory(e.target.value)}>
                                                <option value="">----Select----</option>
                                                {catAndSub?.map((item, index) => (
                                                    <option key={index} value={item._id} >{item.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        {subCatOptions?.length > 0 && <div className="row">
                                            <h6>Sub Category</h6>
                                            {subCatOptions?.map((item, key) => (
                                                <div className="col-lg-6" key={key}>
                                                    <div className="form-check custom-check">
                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input"
                                                            id={`sub-${key}`}
                                                            value={item?.value}
                                                            checked={selectedSubCat.includes(item.value)}
                                                            onChange={(e) => {
                                                                if (e.target.checked) {
                                                                    setSelectedSubCat([...selectedSubCat, item.value]);
                                                                } else {
                                                                    setSelectedSubCat(
                                                                        selectedSubCat.filter(id => id !== item.value)
                                                                    );
                                                                }
                                                            }}
                                                        />
                                                        <label htmlFor={`sub-${key}`} className="form-check-label">
                                                            {item?.label}
                                                        </label>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>}
                                        {subCatOptions?.length > 1 && <div className="form-check custom-check justify-content-end">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                checked={
                                                    subCatOptions.length > 0 &&
                                                    selectedSubCat.length === subCatOptions.length
                                                }
                                                onChange={(e) => {
                                                    if (e.target.checked) {
                                                        const allIds = subCatOptions.map(item => item.value);
                                                        setSelectedSubCat(allIds);
                                                    } else {
                                                        setSelectedSubCat([]);
                                                    }
                                                }}
                                            />
                                            <label className="form-check-label">Select All</label>
                                        </div>}


                                        {/* <div className="custom-frm-bx">
                                            <label htmlFor="">Test Select</label>
                                            <div class="select-wrapper">
                                                <Select
                                                    options={testOptions}
                                                    isMulti
                                                    required
                                                    name="testId"
                                                    classNamePrefix="custom-select"
                                                    placeholder="Select areas(s)"
                                                    onChange={(options) => {
                                                        setSelectedTest(options.map(opt => opt.value)); // ✅ array of IDs
                                                    }}
                                                />
                                            </div>

                                        </div> */}

                                        <div className="mt-3">
                                            <button type="submit" className="nw-thm-btn w-100"> Submit</button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppointmentSuccessDetails