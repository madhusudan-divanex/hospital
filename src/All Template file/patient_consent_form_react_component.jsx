import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const styles = {
  page: {
    background: "#f3f4f6",
    padding: "24px",
    fontFamily: "Inter, Arial, sans-serif",
  },
  wrapper: {
    maxWidth: "1150px",
    margin: "0 auto",
    background: "#fff",
    border: "1px solid #e5e7eb",
  },
  header: {
    padding: "16px 20px 10px",
    borderBottom: "1px solid #e5e7eb",
  },
  title: {
    fontSize: "22px",
    fontWeight: 600,
    color: "#111827",
  },
  sub: { fontSize: "12px", color: "#6b7280" },
  small: { fontSize: "11px", color: "#6b7280" },
  metaRow: {
    padding: "10px 20px",
    borderBottom: "1px solid #e5e7eb",
    fontSize: "11px",
  },
  patientBlock: {
    padding: "14px 20px",
    borderBottom: "1px solid #e5e7eb",
  },
  patientName: {
    fontSize: "18px",
    fontWeight: 600,
    marginBottom: "6px",
  },
  consentBox: {
    margin: "16px 20px",
    border: "1.5px solid #0ea5a4",
    borderRadius: "10px",
    background: "#f8fffe",
    padding: "18px",
  },
  consentTitle: {
    textAlign: "center",
    color: "#0ea5a4",
    fontWeight: 600,
    fontSize: "18px",
  },
  footerBar: {
    background: "#0ea5a4",
    color: "#fff",
    fontSize: "11px",
    padding: "6px 12px",
    display: "flex",
    justifyContent: "space-between",
  },
};

const PatientConsentForm = () => {
  return (
    <div style={styles.page}>
      <div style={styles.wrapper}>
        {/* HEADER */}
        <div style={styles.header}>
          <Row>
            <Col>
              <div style={styles.title}>Patient Consent Form</div>
              <div style={styles.sub}>Apollo Ambulance Services</div>
              <div style={styles.small}>
                NHC-H-2022-MH-000009 · Reg. MH-HOSP-2010-00891 · NABH Accredited
              </div>
              <div style={styles.small}>
                Plot 22, Healthcare Ave, Andheri West, Mumbai – 400053
              </div>
            </Col>

            <Col style={{ textAlign: "right" }}>
              <div
                style={{
                  display: "inline-block",
                  border: "1px solid #0ea5a4",
                  borderRadius: "20px",
                  padding: "4px 10px",
                  fontSize: "11px",
                  color: "#0ea5a4",
                  marginBottom: "4px",
                }}
              >
                NeoHealthCard Network
              </div>
              <div style={styles.small}>
                Fully Automated · Ecosystem Connected
              </div>
              <div style={styles.small}>
                hospital@apollogeneral.com · +91 98765 43210
              </div>
            </Col>
          </Row>
        </div>

        {/* META */}
        <Row style={styles.metaRow}>
          <Col>CONSENT ID<br /><b>NHC-INS-PA-2026-0410-00001</b></Col>
          <Col>DATE & TIME<br /><b>10/04/2026 09:30</b></Col>
          <Col>ADMISSION REF<br /><b>NHC-ADM-2026-0410-00001</b></Col>
          <Col>DOCTOR<br /><b>Dr. Amit Mishra</b></Col>
          <Col>STATUS<br /><b style={{ color: "#0ea5a4" }}>Signed</b></Col>
        </Row>

        {/* PATIENT */}
        <div style={styles.patientBlock}>
          <Row>
            <Col md={9}>
              <div style={styles.patientName}>Vijay Kumar</div>
              <Row style={{ fontSize: "12px" }}>
                <Col>Age / Sex: 24 / Male</Col>
                <Col>Email Address: V@gmail.com</Col>
                <Col>Patient ID: NHC-P-2026-MH-000123</Col>
              </Row>
              <Row style={{ fontSize: "12px" }}>
                <Col>DOB: 15/03/2001</Col>
                <Col>Address: 32-A, Vashali Nagar, Jaipur</Col>
                <Col>Guardian Name: Suresh Kumar (Father)</Col>
              </Row>
              <Row style={{ fontSize: "12px" }}>
                <Col>Blood: B+</Col>
                <Col>Contact no: +91 9658265898</Col>
                <Col>Guardian Contact: +91 98745 00001</Col>
              </Row>
            </Col>

            <Col md={3} style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "90px",
                  height: "90px",
                  border: "1px solid #d1d5db",
                  margin: "0 auto",
                }}
              ></div>
              <div style={{ fontSize: "10px", marginTop: "4px" }}>
                Scan to verify
              </div>
              <div style={{ fontSize: "10px", color: "#0ea5a4" }}>
                verify.neohealthcard.in
              </div>
            </Col>
          </Row>
        </div>

        {/* CONSENT */}
        <div style={styles.consentBox}>
          <div style={styles.consentTitle}>Informed Consent to Treatment</div>
          <div style={{ textAlign: "center", fontSize: "12px", marginBottom: 10 }}>
            Apollo General Hospital · NHC-CONS-2026-0410-00001
          </div>

          <div style={{ fontSize: "12px", textAlign: "center" }}>
            I / We, the undersigned, hereby consent to the following
          </div>

          <ol style={{ fontSize: "12px", marginTop: 10 }}>
            <li>Admission and treatment of Mr. Vijay Kumar</li>
            <li>Clinical investigations as deemed necessary</li>
            <li>Medications, IV fluids, and blood tests</li>
            <li>Minor procedures including IV insertion</li>
            <li>Photography for medical purposes</li>
          </ol>

          <div style={{ fontSize: "12px", marginTop: 10 }}>
            <div style={{ textAlign: "center" }}>I understand that:</div>
            <div>- No guarantee of specific outcome</div>
            <div>- I may withdraw consent anytime</div>
            <div>- Medical info may be shared</div>
            <div>- Records stored digitally</div>
          </div>
        </div>

        {/* PROCEDURES */}
        <div style={{ padding: "0 20px", fontSize: "12px" }}>
          <div style={{ marginBottom: 6 }}>
            PROCEDURES CONSENTED (CHECK APPLICABLE)
          </div>
          <Row>
            <Col>[X] IV Fluid Therapy</Col>
            <Col>[ ] Blood Transfusion</Col>
            <Col>[ ] Surgery</Col>
            <Col>[ ] Anesthesia</Col>
          </Row>
          <Row>
            <Col>[X] CBC / Lab Tests</Col>
            <Col>[ ] X-Ray / Imaging</Col>
            <Col>[ ] ICU Admission</Col>
            <Col>[X] Transfer to Another Hospital</Col>
          </Row>
        </div>

        {/* SIGNATURES */}
        <Row style={{ marginTop: 60, textAlign: "center", padding: "0 20px" }}>
          <Col>
            <div>Dr. Amit Mishra</div>
            <div style={styles.small}>Treating Physician - Apollo</div>
          </Col>
          <Col>
            <div>Vijay Kumar / Suresh Kumar</div>
            <div style={styles.small}>Patient / Guardian</div>
          </Col>
          <Col>
            <div>Witness</div>
            <div style={styles.small}>Hospital Staff – Front Desk</div>
          </Col>
        </Row>

        {/* FOOTER */}
        <div style={styles.footerBar}>
          <span>
            Apollo General Hospital, Mumbai · hospital@apollogeneral.com · +91 98765 43210
          </span>
          <span>Wishing you a speedy recovery</span>
        </div>
      </div>
    </div>
  );
};

export default PatientConsentForm;
