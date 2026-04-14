import React, { useEffect, useState } from 'react'
import API from '../../api/api';
import { getSecureApiData, securePostData } from '../../Service/api';
import { toast } from 'react-toastify';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from "react-select";
import Loader from '../Common/Loader';
function AddAllotmentTest({ allotmentId }) {
  const [loading, setLoading] = useState(false)
  const [allotmentDetail, setAllotmentDetail] = useState()
  const [testOptions, setTestOptions] = useState([])
  const user = JSON.parse(localStorage.getItem('user'))
  const [selectedTest, setSelectedTest] = useState([])
  const [isSaving,setIsSaving]=useState()
  const userId = user.id
  const fetchDetails = async () => {
    if (!allotmentId) {
      return
    }
    try {
      const res = await API.get(`/bed/allotment/${allotmentId}`);
      const data = res?.data?.data
      const ids = data?.labAppointment?.testId?.map(item =>
        typeof item === "object" ? item._id : item
      ) || [];

      setSelectedTest(ids);
      setAllotmentDetail(data);

    } finally {
      setLoading(false);
    }
  };
  console.log(allotmentDetail)
  useEffect(() => {
    if (allotmentId) {
      fetchDetails()
    }
  }, [allotmentId])
  async function addLabTests(e) {
    e.preventDefault()
    setIsSaving(true)
    const data = { allotmentId, testIds: selectedTest }
    try {
      const res = await securePostData(`api/bed/add-tests`, data)
      if (res.success) {
        document.getElementById("closeTest")?.click()
        toast.success("Test added successfully")
      }else{
        toast.error(res.message)
      }
    } catch (error) {
      toast.error(error?.response?.data?.message)
    } finally {
      setIsSaving(false)
    }
  }
  async function fetchSelectedLabData() {
    setLoading(true)
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

    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchSelectedLabData()
  }, [allotmentId])
  return (
    <>
      {loading ? <Loader /> : <div className="modal step-modal fade" id="add-LabTest" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content rounded-0">
            <div className="d-flex align-items-center justify-content-between border-bottom py-3 px-4">
              <div>
                <h6 className="lg_title mb-0">{allotmentDetail?.labAppointment ? 'View' : 'Add'}  Lab Test </h6>
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

                  <form onSubmit={addLabTests}>
                    <div className="custom-frm-bx">
                      <label htmlFor="">Test Select</label>
                      <div class="select-wrapper">
                        <Select
                          options={testOptions}
                          isMulti
                          required
                          name="testId"
                          value={testOptions?.filter(item =>
                            selectedTest?.includes(item.value)   // 👈 correct
                          )}
                          classNamePrefix="custom-select"
                          placeholder="Select areas(s)"
                          onChange={(options) => {
                            setSelectedTest(options.map(opt => opt.value)); // ✅ array of IDs
                          }}
                        />
                      </div>
                    </div>

                    <div className="mt-3">
                      <button type="submit" className="nw-thm-btn w-100" disabled={isSaving}> {isSaving?'Submiting...':'Submit'}</button>
                    </div>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>}
    </>
  )
}

export default AddAllotmentTest
