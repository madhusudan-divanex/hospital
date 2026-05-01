import React, { useEffect, useState } from 'react'
import API from '../../api/api';
import { getSecureApiData, securePostData } from '../../Service/api';
import { toast } from 'react-toastify';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from '../Common/Loader';

function AddAllotmentTest({ allotmentId }) {
  const [loading, setLoading] = useState(false)
  const [allotmentDetail, setAllotmentDetail] = useState()
  const [isSaving, setIsSaving] = useState(false)

  const user = JSON.parse(localStorage.getItem('user'))
  const userId = user.id

  // Sari lab tests (API se aayi) — category wise grouped
  const [labTests, setLabTests] = useState([])

  // Selected category (dropdown)
  const [selectedCatId, setSelectedCatId] = useState('')

  // Selected subCat IDs (checkboxes)
  const [selectedSubCats, setSelectedSubCats] = useState([])

  // ─── Allotment detail fetch ───────────────────────────────────

  const fetchDetails = async () => {
    if (!allotmentId) return
    try {
      const res = await API.get(`/bed/allotment/${allotmentId}`)
      const data = res?.data?.data
      setAllotmentDetail(data)

      // Pehle se jo subCats select hain unhe set karo
      const ids = data?.labAppointment?.subCatId?.map(item =>
        item._id 
      ) || []
      setSelectedCatId(data?.labAppointment?.testId)
      setSelectedSubCats(ids)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (allotmentId) fetchDetails()
  }, [allotmentId])

  // ─── Lab tests fetch ──────────────────────────────────────────

  async function fetchSelectedLabData() {
    setLoading(true)
    try {
      const result = await getSecureApiData(`lab/test/${userId}?limit=1000&type=hospital`)
      if (result.success) {
        setLabTests(result.data || [])
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (allotmentId) fetchSelectedLabData()
  }, [allotmentId])

  // ─── Derived: selected category ka test object ────────────────

  const selectedLabTest = labTests.find(t => t._id === selectedCatId)

  // Sirf active subCats dikhao
  const activeSubCats = selectedLabTest?.subCatData?.filter(
    s => s.status === 'active'
  ) || []
  const allSelected =
    activeSubCats.length > 0 &&
    activeSubCats.every(s => selectedSubCats.includes(s.subCat._id))

  // ─── Handlers ────────────────────────────────────────────────

  const handleCategoryChange = (e) => {
    setSelectedCatId(e.target.value)
    setSelectedSubCats([])
    // Category change hone par naye selections clear mat karo —
    // user pehle se kuch select kar chuka ho sakta hai doosri category mein
  }

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

  const handleCheckbox = (subCatId) => {
    setSelectedSubCats(prev =>
      prev.includes(subCatId)
        ? prev.filter(id => id !== subCatId)
        : [...prev, subCatId]
    )
  }

  // ─── Submit ───────────────────────────────────────────────────

  async function addLabTests(e) {
    e.preventDefault()

    if (selectedSubCats.length === 0) {
      toast.error('Please select at least one Test')
      return
    }

    setIsSaving(true)
    const data = { allotmentId, subCatIds: selectedSubCats ,testId:selectedCatId}
    try {
      const res = await securePostData(`api/bed/add-tests`, data)
      if (res.success) {
        document.getElementById("closeTest")?.click()
        toast.success("Test added successfully")
      } else {
        toast.error(res.message)
      }
    } catch (error) {
      toast.error(error?.response?.data?.message)
    } finally {
      setIsSaving(false)
    }
  }

  // ─── Modal close ──────────────────────────────────────────────

  const handleCloseModal = () => {
    const modal = document.getElementById("add-LabTest")
    if (modal) {
      modal.classList.remove("show")
      modal.style.display = "none"
    }
    const backdrops = document.getElementsByClassName("modal-backdrop")
    while (backdrops.length > 0) {
      backdrops[0].parentNode.removeChild(backdrops[0])
    }
    document.body.classList.remove("modal-open")
    document.body.style.overflow = ""
    document.body.style.paddingRight = ""
  }

  // ─── Render ───────────────────────────────────────────────────

  return (
    <>
      {loading ? <Loader /> :
        <div className="modal step-modal fade" id="add-LabTest" data-bs-backdrop="static"
          data-bs-keyboard="false" tabIndex="-1"
          aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-md">
            <div className="modal-content rounded-0">

              {/* Header */}
              <div className="d-flex align-items-center justify-content-between border-bottom py-3 px-4">
                <h6 className="lg_title mb-0">
                  {allotmentDetail?.labAppointment ? 'View' : 'Add'} Lab Test
                </h6>
                <button type="button" id="closeTest" onClick={handleCloseModal}
                  aria-label="Close" style={{ color: "rgba(239, 0, 0, 1)" }}>
                  <FontAwesomeIcon icon={faCircleXmark} />
                </button>
              </div>

              {/* Body */}
              <div className="modal-body px-4 pb-5">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="add-deprtment-pic">
                      <img src="/add-lab.png" alt="" />
                      <p className="pt-2">Please add new lab test assign to patient</p>
                    </div>

                    <form onSubmit={addLabTests}>

                      {/* Step 1: Category Select */}
                      <div className="custom-frm-bx mb-3">
                        <label htmlFor="catSelect">Select Category</label>
                        <select
                          id="catSelect"
                          className="form-select nw-control-frm"
                          value={selectedCatId}
                          onChange={handleCategoryChange}
                        >
                          <option value="">--- Select Category ---</option>
                          {labTests.map(test => (
                            <option key={test._id} value={test._id}>
                              {test.category?.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Step 2: SubCategory Checkboxes */}
                      {selectedCatId && (
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
                                <label className="form-check-label fw-semibold" htmlFor="selectAll">
                                  Select All
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

                      <div className="mt-3">
                        <button type="submit" className="nw-thm-btn w-100" disabled={isSaving}>
                          {isSaving ? 'Submitting...' : 'Submit'}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      }
    </>
  )
}

export default AddAllotmentTest