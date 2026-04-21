import React from "react";
import "./followup.css";

const FollowUpPrescription = () => {
  return (
    <div className="fp-wrapper d-flex justify-content-center bg-light py-4">
      <div className="fp-a4 bg-white">

        {/* HEADER */}
        <div className="d-flex justify-content-between p-4 border-bottom">
          <div>
            <h5 className="fw-bold mb-1">Follow-up Prescription</h5>
            <div className="text-muted small">Apollo General Hospital</div>
            <div className="text-muted small">
              Plot 22, Healthcare Ave, Andheri West, Mumbai – 400053
            </div>
          </div>

          <div className="text-end">
            <span className="badge bg-teal px-3 py-2">
              NeoHealthCard Network
            </span>
            <div className="small text-muted mt-2">
              hospital@apollogeneral.com
            </div>
            <div className="small text-muted">+91 98765 43210</div>
          </div>
        </div>

        {/* META */}
        <div className="row px-4 py-3 border-bottom small text-muted">
          <Meta title="Follow-up ID" value="NHC-FU-2026-00003" />
          <Meta title="Follow-up Date" value="15/04/2026 11:00" />
          <Meta title="Previous Visit" value="12/04/2026" />
          <Meta title="Visit #" value="2" />
          <Meta title="Next Visit" value="22/04/2026" />
        </div>

        {/* PATIENT */}
        <div className="px-4 py-3 border-bottom">
          <h6 className="fw-semibold mb-2">Vijay Kumar</h6>
          <div className="row small text-muted">
            <div className="col">Age: 24 / Male</div>
            <div className="col">DOB: 15/03/2001</div>
            <div className="col">Blood: B+</div>
            <div className="col">Contact: +91 9658265898</div>
          </div>
        </div>

        {/* VITALS */}
        <div className="px-4 py-3 d-flex justify-content-between gap-2 flex-wrap">
          <Vital label="BP" value="118/76" unit="mmHg" />
          <Vital label="Temperature" value="103°F" unit="Normal" />
          <Vital label="Pulse" value="88" unit="bpm" />
          <Vital label="HB" value="9.2" unit="g/dl" />
          <Vital label="Weight" value="62" unit="kg" />
        </div>

        {/* PROGRESS + LAB */}
        <div className="row px-4 py-3 border-top border-bottom small">
          <div className="col">
            <h6 className="section-title">Progress Since Last Visit</h6>
            <InfoRow label="Fever" value="Not" />
            <InfoRow label="Fatigue" value="Improving" />
            <InfoRow label="Appetite" value="Fair – Improving" />
            <InfoRow label="Hemoglobin" value="9.2 (was 8.5)" />
          </div>

          <div className="col border-start">
            <h6 className="section-title">Lab Results Review</h6>
            <InfoRow label="CBC" value="Done · Hb 8.5" />
            <InfoRow label="Blood Culture" value="Negative" />
            <InfoRow label="Widal / Dengue" value="Negative" />
            <InfoRow label="Iron Studies" value="Low ferritin" />
          </div>
        </div>

        {/* MEDICINES */}
        <div className="px-4 py-3">
          <h6 className="text-center text-muted small mb-2">
            MEDICINES PRESCRIBED
          </h6>

          <table className="table table-borderless fp-table">
            <thead className="small text-muted border-bottom">
              <tr>
                <th>Medicine</th>
                <th>Dose</th>
                <th>Frequency</th>
                <th>Duration</th>
                <th>Route</th>
                <th>Instruction</th>
              </tr>
            </thead>

            <tbody>
              <MedRow name="Iron Sucrose" dose="1 Tab" freq="Twice daily" dur="30 Days" route="Oral" note="After food" />
              <MedRow name="Vitamin C" dose="1 Tab" freq="Night" dur="30 Days" route="Oral" note="Before sleep" />
              <MedRow name="Amoxicillin" dose="1 Cap" freq="Daily" dur="4 Days" route="Oral" note="After meal" />
            </tbody>
          </table>
        </div>

        {/* ADVICE */}
        <div className="px-4 py-3 small text-muted">
          <h6 className="section-title">Dietary Advice</h6>
          <ol>
            <li>Iron-rich foods: spinach, jaggery</li>
            <li>High protein diet</li>
            <li>Vitamin C intake</li>
            <li>Avoid tea after iron tablet</li>
          </ol>
        </div>

        {/* NEXT VISIT */}
        <div className="px-4 py-3 small border-top">
          <h6 className="section-title">Next Follow-up Plan</h6>
          <InfoRow label="Next Visit Date" value="22/04/2026 11:00 AM" />
          <InfoRow label="Tests" value="Repeat CBC" />
        </div>

        {/* SIGN */}
        <div className="row border-top text-center small text-muted">
          <div className="col p-3">
            Dr. Amit Mishra
          </div>
          <div className="col p-3 border-start">
            Vijay Kumar
          </div>
        </div>

        {/* FOOTER */}
        <div className="footer-bar text-white text-center py-2 small">
          Apollo General Hospital · Wishing you a speedy recovery
        </div>

      </div>
    </div>
  );
};

const Meta = ({ title, value }) => (
  <div className="col">
    <div className="text-secondary">{title}</div>
    <div className="fw-medium">{value}</div>
  </div>
);

const Vital = ({ label, value, unit }) => (
  <div className="vital-box text-center">
    <div className="label">{label}</div>
    <div className="value">{value}</div>
    <div className="unit">{unit}</div>
  </div>
);

const InfoRow = ({ label, value }) => (
  <div className="d-flex justify-content-between mb-1">
    <span className="text-muted">{label}</span>
    <span>{value}</span>
  </div>
);

const MedRow = ({ name, dose, freq, dur, route, note }) => (
  <tr className="border-bottom">
    <td>{name}</td>
    <td>{dose}</td>
    <td>{freq}</td>
    <td>{dur}</td>
    <td>{route}</td>
    <td>{note}</td>
  </tr>
);

export default FollowUpPrescription;