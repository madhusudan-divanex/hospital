import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const DoctorEmpanelmentCertificate = () => {
  return (
    <div style={{ background: "#f4f6f8", padding: 24, fontFamily: "Inter, sans-serif" }}>
      <div style={{ width: 1120, margin: "0 auto", background: "#fff", border: "1px solid #e5e7eb" }}>

        {/* HEADER */}
        <div style={{ display: "flex", justifyContent: "space-between", padding: "18px 20px", borderBottom: "1px solid #e5e7eb" }}>
          <div>
            <div style={{ fontSize: 22, fontWeight: 600 }}>Doctor Empanelment Certificate</div>
            <div style={{ fontSize: 12 }}>Apollo Ambulance Services</div>
            <div style={{ fontSize: 11, color: "#6b7280" }}>
              NHC-H-2022-MH-000009 · Reg. MH-HOSP-2010-00891 · NABH Accredited
            </div>
            <div style={{ fontSize: 11, color: "#6b7280" }}>
              Plot 22, Healthcare Ave, Andheri West, Mumbai – 400053
            </div>
          </div>

          <div style={{ textAlign: "right" }}>
            <div style={{ border: "1px solid #0ea5a4", padding: "4px 12px", borderRadius: 20, fontSize: 11, color: "#0ea5a4" }}>
              NeoHealthCard Network
            </div>
            <div style={{ fontSize: 11, color: "#6b7280" }}>Fully Automated · Ecosystem Connected</div>
            <div style={{ fontSize: 11, color: "#6b7280" }}>
              hospital@apollogeneral.com · +91 98765 43210
            </div>
          </div>
        </div>

        {/* META */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", borderBottom: "1px solid #e5e7eb" }}>
          {[
            ["RELEASE ID", "NHC-INS-PA-2026-0410-00001"],
            ["DATE & TIME", "10/04/2026 09:30"],
            ["DEATH CERT REF", "NHC-OPD-2026-0412-00022"],
            ["RELEASED TO", "Suresh Sharma"],
            ["STATUS", "Paid"]
          ].map((item, i) => (
            <div key={i} style={{ padding: "10px 14px", borderRight: "1px solid #e5e7eb" }}>
              <div style={{ fontSize: 10, color: "#6b7280" }}>{item[0]}</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: i === 4 ? "#0ea5a4" : "#111827" }}>
                {item[1]}
              </div>
            </div>
          ))}
        </div>

        {/* CERTIFICATE */}
        <div style={{ padding: 20 }}>
          <div
            style={{
              border: "2px solid #0ea5a4",
              borderRadius: 12,
              padding: "30px 40px",
              textAlign: "center",
              lineHeight: "1.6"
            }}
          >
            <div style={{ fontSize: 20, fontWeight: 600, color: "#0ea5a4" }}>
              Doctor Empanelment Certificate
            </div>

            <div style={{ fontSize: 12, marginTop: 6 }}>
              Apollo General Hospital · NHC-VAC-2026-0412-000001 · NeoHealthCard Network
            </div>

            <div style={{ marginTop: 18, fontSize: 13 }}>
              This is to certify that
            </div>

            <div style={{ fontSize: 14, fontWeight: 600, marginTop: 6 }}>
              Dr. Payal Shah
            </div>

            <div style={{ fontSize: 12 }}>MD — General Physician</div>

            <div style={{ fontSize: 12, marginTop: 4 }}>
              MMC Registration No.: MMC-2016-04821
            </div>

            <div style={{ fontSize: 12 }}>
              NHC Doctor ID: NHC-D-2024-MH-004512
            </div>

            <div style={{ marginTop: 16, fontSize: 12 }}>
              has been successfully verified, credentialed, and empanelled
              <br />
              as an authorised provider on the NeoHealthCard Network
            </div>

            <div style={{ marginTop: 14, fontSize: 12 }}>
              Empanelled at: Apollo General Hospital (NHC-H-2022-MH-000009)
              <br />
              Specialisation: General Medicine · OPD & IPD
            </div>

            <div style={{ marginTop: 14, fontSize: 12 }}>
              Valid From: 01/06/2024 | Valid Until: 31/05/2027
            </div>

            <div style={{ fontSize: 12, marginTop: 6 }}>
              This doctor is authorised to issue digitally signed prescriptions,
              lab orders, certificates and referrals on the NeoHealthCard ecosystem.
            </div>
          </div>
        </div>

        {/* SIGNATURE */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", borderTop: "1px solid #e5e7eb", padding: "20px", textAlign: "center" }}>
          <div>
            <div style={{ fontSize: 13 }}>NHC Medical Board</div>
            <div style={{ fontSize: 11, color: "#6b7280" }}>NeoHealthCard Credentialing</div>
            <div style={{ fontSize: 10, color: "#0ea5a4" }}>admin@neohealthcard.in</div>
          </div>

          <div>
            <div style={{ fontSize: 13 }}>Dr Amit Mishra</div>
            <div style={{ fontSize: 11, color: "#6b7280" }}>Empanelled Doctor</div>
            <div style={{ fontSize: 10, color: "#0ea5a4" }}>
              NHC-D-2024-MH-004512 · MMC: 04821
            </div>
          </div>

          <div>
            <div style={{ fontSize: 13 }}>Apollo General Hospital</div>
            <div style={{ fontSize: 11, color: "#6b7280" }}>Empanelled Hospital</div>
            <div style={{ fontSize: 10, color: "#0ea5a4" }}>
              NHC-H-2022-MH-000009
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div style={{ background: "#0ea5a4", color: "#fff", fontSize: 11, padding: "8px 14px", display: "flex", justifyContent: "space-between" }}>
          <span>
            Apollo General Hospital, Mumbai · hospital@apollogeneral.com · +91 98765 43210
          </span>
          <span>Wishing you a speedy recovery</span>
        </div>

      </div>
    </div>
  );
};

export default DoctorEmpanelmentCertificate;