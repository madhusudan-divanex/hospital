import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { getSecureApiData, securePostData } from '../../Service/api'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaPlusCircle } from 'react-icons/fa'
import Select from 'react-select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
function AddLabAppointment() {
    const navigate = useNavigate()
    const [userData, setUserData] = useState()
    const [doctorData, setDoctorData] = useState()
    const [doctors, setDoctors] = useState([])
    const user = JSON.parse(localStorage.getItem('user'))
    const userId = user.id
    // const doctorId = localStorage.getItem('userId')
    const [loading, setLoading] = useState(false)
    const [patientId, setPatientId] = useState()
    const [fees, setFees] = useState()
    const [doctorId, setDoctorId] = useState()
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const [testOptions, setTestOptions] = useState([])
    const [selectedSubCats, setSelectedSubCats] = useState([])
    const [selectedCatId, setSelectedCatId] = useState()
    const [nh12, setNh12] = useState('')
    async function fetchPatient() {
        if (nh12?.length < 12) {
            toast.error("Please enter valid id")
        }
        setLoading(true)
        try {
            const result = await getSecureApiData(`api/comman/user-data/${nh12}`)
            if (result.success) {
                if (result.data.role !== "patient") {
                    return toast.error("The user is not registerd for patient")
                }
                setUserData(result.data)
            } else {
                toast.error(result.message)
            }
        } catch (error) {

        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchTestData()
    }, [])
    const handleBook = async (e) => {
        e.preventDefault();

        if (!userData?._id || !date || !time) {
            toast.error("Please fill all fields");
            return;
        }

        setLoading(true);

        try {
            // Combine date + time into Date object
            const appointmentDate = new Date(`${date}T${time}`);

            const data = {
                patientId: userData?._id,
                labId: userId,
                date: appointmentDate,
                testId:[selectedCatId],
                subCatId: selectedSubCats,
                fees
            };
            const response = await securePostData("api/hospital/lab-appointment", data);

            if (response?.success) {
                toast.success("Appointment add successfully!");
                // reset form if needed
                setPatientId("");
                setDate("");
                setTime("");
                navigate('/test-report-appointment')
            } else {
                toast.error(response?.message || "Booking failed");
            }
        } catch (error) {
            console.error("Booking error:", error);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };
    async function fetchTestData() {
        setLoading(true)
        try {
            const result = await getSecureApiData(`lab/test/${userId}?limit=1000&type=hospital`)
            if (result.success) {

                setTestOptions(result.data);
            }
        } catch (error) {

        } finally {
            setLoading(false)
        }
    }
    const selectedLabTest = testOptions.find(t => t._id === selectedCatId)

    // Sirf active subCats dikhao
    const activeSubCats = selectedLabTest?.subCatData?.filter(
        s => s.status === 'active'
    ) || []
    const allSelected =
        activeSubCats.length > 0 &&
        activeSubCats.every(s => selectedSubCats.includes(s.subCat._id))
    const handleSelectAll = (e) => {
        if (e.target.checked) {
            // Is category ke sabhi active subCat IDs add karo
            const ids = activeSubCats.map(s => s.subCat._id)
            setSelectedSubCats(prev => [...new Set([...prev, ...ids])])
        } else {
            // Is category ke sabhi active subCat IDs hata do
            const ids = activeSubCats.map(s => s.subCat._id)
            setSelectedSubCats(prev => prev.filter(id => !ids.includes(id)))
        }
    }

    return (
        <form onSubmit={handleBook} className="main-content flex-grow-1 p-3 overflow-auto">
            <div className="row mb-3">
                <div>
                    <h3 className="innr-title mb-2 gradient-text">Add Appointment</h3>
                    <div className="admin-breadcrumb">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb custom-breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="#" className="breadcrumb-link">
                                        Dashboard
                                    </a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="#" className="breadcrumb-link">
                                        Appointment
                                    </a>
                                </li>
                                <li
                                    className="breadcrumb-item active"
                                    aria-current="page"
                                >
                                    Add Appointment
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <div className='new-panel-card'>
                <div className="new-panel-card mb-3">
                    <div >
                        <div className="row">
                            <div>
                                <h4 className="fz-18 fw-700 text-black">Appointment Details</h4>
                                <p className="fw-400 fz-16">Enter the details for the new appointment.</p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="custom-frm-bx">
                                    <label htmlFor="">Appointment Date</label>
                                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)}
                                        className="form-control nw-frm-select" required />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="custom-frm-bx">
                                    <label htmlFor="">Appointment Time</label>
                                    <input type="time"
                                        value={time} onChange={(e) => setTime(e.target.value)} required className="form-control nw-frm-select" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <div className="new-panel-card">
                            <div className="d-flex align-items-center justify-content-between flex-wrap">
                                <div>
                                    <h4 className="fz-18 fw-700 text-black">Select Patient</h4>
                                    <p className="fw-400 fz-16">select a patient for this appointment.</p>
                                </div>
                                <div>
                                    <NavLink to="/add-patient" className="nw-exprt-btn">
                                        <FaPlusCircle />  Add Patient
                                    </NavLink>
                                </div>
                            </div>
                            <div className="custom-frm-bx">
                                <label htmlFor="">Patient Id</label>
                                <div className="d-flex gap-2">

                                    <input type="text" className="form-control" value={nh12}
                                        onChange={(e) => setNh12(e.target.value)} />
                                    <button className="thm-btn" type="button" onClick={() => fetchPatient()}>
                                        <FontAwesomeIcon icon={faSearch} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                        <div className="new-panel-card">
                            <div className="d-flex align-items-center justify-content-between flex-wrap">
                                <div>
                                    <h4 className="fz-18 fw-700 text-black">Select Test</h4>
                                    <p className="fw-400 fz-16">Choose  test for this appointment.</p>
                                </div>
                                <div>
                                    <NavLink to="/add-tests" className="nw-exprt-btn">
                                        <FaPlusCircle />  Add Test
                                    </NavLink>
                                </div>
                            </div>
                            <div className="custom-frm-bx mb-3">
                                <label htmlFor="catSelect">Select Category</label>
                                <select
                                    id="catSelect"
                                    className="form-select nw-control-frm"
                                    value={selectedCatId}
                                    onChange={(e) => {
                                        setSelectedCatId(e.target.value)
                                        setSelectedSubCats([])
                                    }}
                                >
                                    <option value="">--- Select Category ---</option>
                                    {testOptions.map(test => (
                                        <option key={test._id} value={test._id}>
                                            {test.category?.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {selectedLabTest && (
                                <div className="custom-frm-bx mb-3">
                                    <label>Select Tests</label>

                                    {activeSubCats.length > 0 ? (
                                        <div className="border rounded p-3"
                                            style={{ maxHeight: '260px', overflowY: 'auto' }}>

                                            {/* Select All */}
                                            <div className="form-check custom-check mb-2 border-bottom pb-2">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="selectAll"
                                                    checked={allSelected}
                                                    onChange={handleSelectAll}
                                                />
                                                <label className="form-check-label fw-semibold d-flex justify-content-between" htmlFor="selectAll">
                                                   <span> Select All </span>
                                                    {allSelected && <span className="text-muted">₹ {selectedLabTest?.totalAmount} </span>}
                                                </label>
                                            </div>

                                            {/* Individual SubCats */}
                                            {activeSubCats.map(s => (
                                                <div className="form-check custom-check mb-2" key={s.subCat._id}>
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id={`sub-${s.subCat._id}`}
                                                        checked={selectedSubCats.includes(s.subCat._id)}
                                                        onChange={() => handleCheckbox(s.subCat._id)}
                                                    />
                                                    <label
                                                        className="form-check-label d-flex justify-content-between"
                                                        htmlFor={`sub-${s.subCat._id}`}
                                                    >
                                                        <span>{s.subCat.subCategory}</span>
                                                        <span className="text-muted">₹{s.price}</span>
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-muted text-center py-2">
                                            No active test found in this category
                                        </p>
                                    )}
                                </div>
                            )}

                            {/* Selected count */}
                            {selectedSubCats.length > 0 && (
                                <p className="text-muted small mb-2">
                                    {selectedSubCats.length} test(s) selected
                                </p>
                            )}
                        </div>
                    </div>
                </div>
                {userData && <div className="row">
                    <h3>Patient Data</h3>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3">

                        <div className="custom-frm-bx">
                            <label htmlFor="">Patient Name  </label>
                            <input type="text" className="form-control" value={userData?.name} readOnly />
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3">

                        <div className="custom-frm-bx">
                            <label htmlFor="">Patient Email  </label>
                            <input type="text" className="form-control" value={userData?.email} readOnly />
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3">

                        <div className="custom-frm-bx">
                            <label htmlFor="">Patient Contact Number  </label>
                            <input type="text" className="form-control" value={userData?.contactNumber} readOnly />
                        </div>

                    </div>
                </div>}
                <div className="d-flex justify-content-between mt-3">
                    <Link to={-1} className="nw-thm-btn outline" >
                        Go Back
                    </Link>
                    <button className="nw-thm-btn" type="submit">Submit</button>
                </div>
            </div>
        </form>
    )
}

export default AddLabAppointment
