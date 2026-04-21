import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PharmacyReturn = () => {
  return (
    <div style={{ background: "#f4f6f8", padding: 24, fontFamily: "Inter, sans-serif" }}>
      <div style={{ width: 1120, margin: "0 auto", background: "#fff", border: "1px solid #e5e7eb" }}>

        {/* HEADER */}
        <div style={{ display: "flex", justifyContent: "space-between", padding: "18px 20px", borderBottom: "1px solid #e5e7eb" }}>
          <div>
            <div style={{ fontSize: 22, fontWeight: 600 }}>Pharmacy Return</div>
            <div style={{ fontSize: 12 }}>City Diagnostics & Lab</div>
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
            <div style={{ fontSize: 11, color: "#6b7280" }}>hospital@apollogeneral.com · +91 98765 43210</div>
          </div>
        </div>

        {/* META */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", borderBottom: "1px solid #e5e7eb" }}>
          {[
            ["DISPENSING ID", "NHC-AMB-DISP-2026-0412-00001"],
            ["PRESCRIPTION REF", "NHC-RX-2026-0412-00007"],
            ["RETURN DATE", "12/04/2026"],
            ["PHARMACIST", "Ravi Sharma NHC-T-PH-00321"],
            ["STATUS", "Return Approved"]
          ].map((item, i) => (
            <div key={i} style={{ padding: "10px 14px", borderRight: "1px solid #e5e7eb" }}>
              <div style={{ fontSize: 10, color: "#6b7280" }}>{item[0]}</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: i === 4 ? "#0ea5a4" : "#111827" }}>
                {item[1]}
              </div>
            </div>
          ))}
        </div>

        {/* PATIENT */}
        <div style={{ display: "flex", padding: "16px 20px", borderBottom: "1px solid #e5e7eb" }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Vijay Kumar</div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", fontSize: 12, rowGap: 6 }}>
              <div>Age / Sex: 24 / Male</div>
              <div>Email Address: V@gmail.com</div>
              <div>Patient ID: NHC-P-2026-MH-000123</div>

              <div>DOB: 15/03/2001</div>
              <div>Address: 32-A, Vashali Nagar, Jaipur</div>
              <div>Pharmacy: Apollo MedPlus</div>

              <div>Blood: B+</div>
              <div>Contact no: +91 9658265898</div>
              <div></div>
            </div>
          </div>

          {/* QR */}
          <div style={{ width: 120, textAlign: "center" }}>
            <div style={{ width: 90, height: 90, border: "1px solid #d1d5db", margin: "0 auto" }} />
            <div style={{ fontSize: 10 }}>Scan to verify</div>
            <div style={{ fontSize: 10, color: "#0ea5a4" }}>verify.neohealthcard.in</div>
          </div>
        </div>

        {/* TABLE */}
        <div style={{ padding: "16px 20px" }}>
          <div style={{ fontSize: 11, color: "#6b7280", marginBottom: 6 }}>ITEMS RETURNED</div>

          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
            <thead>
              <tr style={{ background: "#f3f4f6" }}>
                {[
                  "MEDICINE",
                  "QTY PURCHASED",
                  "QTY RETURNED",
                  "REASON FOR RETURN",
                  "BATCH NO",
                  "CONDITION",
                  "REFUND AMOUNT"
                ].map((h, i) => (
                  <th key={i} style={{ border: "1px solid #e5e7eb", padding: 8, textAlign: "left" }}>{h}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {[
                ["Cetirizine 10mg", "10 Tabs", "5 Tabs", "Doctor discontinued – no longer needed", "B-5543", "Unopened – Original Pack", "Rs.14.29"],
                ["ORS Sachets", "15 Sachets", "5 Sachets", "Not required – patient recovered", "B-9901", "Unopened", "Rs.33.33"]
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} style={{ border: "1px solid #e5e7eb", padding: 8 }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          {/* RIGHT SUMMARY */}
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 16 }}>
            <div style={{ width: 260, fontSize: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Total Refund Amount</span>
                <span>Rs.47.62</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Refund Mode</span>
                <span>Original Payment (UPI)</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
                <span>Refund Status</span>
                <span style={{ fontWeight: 600 }}>Processed</span>
              </div>
            </div>
          </div>
        </div>

        {/* POLICY */}
        <div style={{ padding: "16px 20px" }}>
          <div style={{ fontSize: 11, color: "#6b7280", marginBottom: 6 }}>RETURN POLICY</div>
          <ol style={{ fontSize: 12, marginLeft: 16 }}>
            <li>Medicines accepted for return only if unopened, in original packaging, and within 30 days of purchase.</li>
            <li>Medicines dispensed for scheduled/controlled substances are non-returnable.</li>
            <li>Refund will be processed to original payment method within 3–5 working days.</li>
            <li>This return note must be presented for any future disputes.</li>
          </ol>
        </div>

        {/* SIGNATURE */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", padding: 20, borderTop: "1px solid #e5e7eb", textAlign: "center" }}>
          <div>
            <div>Ravi Sharma</div>
            <div style={{ fontSize: 11, color: "#6b7280" }}>Pharmacist · Apollo MedPlus</div>
          </div>
          <div>
            <div>Vijay Kumar</div>
            <div style={{ fontSize: 11, color: "#6b7280" }}>Patient — Received Medicines</div>
          </div>
        </div>

        {/* FOOTER */}
        <div style={{ background: "#0ea5a4", color: "#fff", fontSize: 11, padding: "8px 14px", display: "flex", justifyContent: "space-between" }}>
          <span>Apollo General Hospital, Mumbai · hospital@apollogeneral.com · +91 98765 43210</span>
          <span>Wishing you a speedy recovery</span>
        </div>

      </div>
    </div>
  );
};

export default PharmacyReturn;