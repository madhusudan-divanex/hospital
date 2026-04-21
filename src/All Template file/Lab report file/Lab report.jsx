import React from "react";
import "./lab-report.css";

const LabReport = () => {
  return (
    <div className="report-wrapper d-flex justify-content-center bg-light py-4">
      <div className="report-a4 bg-white position-relative">

        {/* WATERMARK */}
        <div className="watermark"></div>

        {/* HEADER */}
        <div className="d-flex justify-content-between p-4 border-bottom">
          <div>
            <h5 className="fw-bold mb-1">Lab Report</h5>
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
        <div className="row g-3 px-4 py-3 border-bottom small text-muted">
          <Meta title="Report ID" value="NHC-RPT-2026-00001" />
          <Meta title="Sample ID" value="CDL-000071" />
          <Meta title="Lab Order Ref" value="NHC-LO-00007" />
          <Meta title="Collected" value="12/04/2026 09:30" />
          <Meta title="Reported" value="12/04/2026 14:15" />
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

        {/* TABLE */}
        <div className="px-4 py-3">
          <h6 className="text-center text-muted small mb-3">
            COMPLETE BLOOD COUNT (CBC)
          </h6>

          <table className="table table-borderless report-table">
            <thead className="small text-muted border-bottom">
              <tr>
                <th>Test</th>
                <th>Result</th>
                <th>Reference Range</th>
                <th>Status</th>
                <th>Unit</th>
              </tr>
            </thead>

            <tbody>

              <Section title="Hemoglobin (Hb)" />
              <Row test="Hemoglobin (Hb)" result="8.5" range="13.0 - 17.0" status="Low" unit="g/dl" />

              <Section title="Body Test" />
              <Row test="Body Temperature" result="103" range="4.5 - 5.5" status="-" unit="mill/cumm" />
              <Row test="Body Weight" result="32" range="40 - 60" status="-" unit="kg/gm" />

              <Section title="Blood Indices" />
              <Row test="PCV" result="57.5" range="40 - 50" status="High" unit="mm/dl" />
              <Row test="MCV" result="87.75" range="83 - 101" status="-" unit="fl" />
              <Row test="MCH" result="27.2" range="27 - 32" status="-" unit="pg" />

              <Section title="Blood Count" />
              <Row test="Whole Blood" result="5.34" range="6 - 20" status="-" unit="mg/dl" />

              <Section title="Differential WBC Count" />
              <Row test="Sodium" result="57.5" range="40 - 50" status="High" unit="%" />
              <Row test="Potassium" result="87.75" range="83 - 101" status="-" unit="%" />

              <Section title="Platelet" />
              <Row test="Platelet Count" result="150000" range="150000 - 410000" status="-" unit="cumm" />

            </tbody>
          </table>
        </div>

        {/* INSTRUCTIONS */}
        <div className="px-4 py-3">
          <div className="instruction-box">
            <div className="small fw-semibold text-muted mb-2">
              GENERAL INSTRUCTION
            </div>
            <ol className="small text-muted mb-2">
              <li>Low Hemoglobin (8.5): Moderate anemia.</li>
              <li>High Temperature (103°F): Active fever.</li>
              <li>High PCV: Likely dehydration.</li>
              <li>Platelets normal.</li>
            </ol>
            <div className="small text-muted">
              Clinical correlation advised. Follow up in 3 days.
            </div>
          </div>
        </div>

        {/* SIGNATURES */}
        <div className="row border-top text-center small text-muted">
          <div className="col p-3">
            Lab Technician
          </div>
          <div className="col p-3 border-start">
            Dr. Amit Mishra
          </div>
          <div className="col p-3 border-start">
            Vijay Kumar
          </div>
        </div>

        {/* FOOTER */}
        <div className="footer-bar text-white text-center py-2 small">
          Wishing you a speedy recovery
        </div>

      </div>
    </div>
  );
};

const Meta = ({ title, value }) => (
  <div className="col">
    <div className="text-secondary">{title}</div>
    <div className="fw-medium text-dark">{value}</div>
  </div>
);

const Row = ({ test, result, range, status, unit }) => (
  <tr className="border-bottom">
    <td>{test}</td>
    <td>{result}</td>
    <td>{range}</td>
    <td className={status === "High" ? "text-danger" : status === "Low" ? "text-warning" : ""}>
      {status}
    </td>
    <td>{unit}</td>
  </tr>
);

const Section = ({ title }) => (
  <tr>
    <td colSpan="5" className="section-title">
      {title}
    </td>
  </tr>
);

export default LabReport;