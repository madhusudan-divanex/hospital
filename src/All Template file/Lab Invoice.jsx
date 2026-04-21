import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const LabInvoice = () => {
  return (
    <div style={{ background: "#f4f6f8", padding: "24px", fontFamily: "Inter, sans-serif" }}>
      <div style={{ width: "1120px", margin: "0 auto", background: "#fff", border: "1px solid #e5e7eb" }}>

        {/* HEADER */}
        <div style={{ display: "flex", justifyContent: "space-between", padding: "18px 20px", borderBottom: "1px solid #e5e7eb" }}>
          <div>
            <div style={{ fontSize: "22px", fontWeight: 600 }}>Lab Invoice</div>
            <div style={{ fontSize: "12px" }}>City Diagnostics & Lab</div>
            <div style={{ fontSize: "11px", color: "#6b7280" }}>
              NHC-H-2022-MH-000009 · Reg. MH-HOSP-2010-00891 · NABH Accredited
            </div>
            <div style={{ fontSize: "11px", color: "#6b7280" }}>
              Plot 22, Healthcare Ave, Andheri West, Mumbai – 400053
            </div>
          </div>

          <div style={{ textAlign: "right" }}>
            <div style={{ border: "1px solid #0ea5a4", padding: "4px 12px", borderRadius: "20px", fontSize: "11px", color: "#0ea5a4" }}>
              NeoHealthCard Network
            </div>
            <div style={{ fontSize: "11px", color: "#6b7280" }}>
              Fully Automated · Ecosystem Connected
            </div>
            <div style={{ fontSize: "11px", color: "#6b7280" }}>
              hospital@apollogeneral.com · +91 98765 43210
            </div>
          </div>
        </div>

        {/* META */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", borderBottom: "1px solid #e5e7eb" }}>
          {[
            ["INVOICE ID", "NHC-AMB-DISP-2026-0412-00001"],
            ["LAB ORDER REF", "NHC-LO-2026-0412-00007"],
            ["REPORT REF", "NHC-OPD-2026-0412-00022"],
            ["DATE", "12/04/2026"],
            ["STATUS", "Paid"]
          ].map((item, i) => (
            <div key={i} style={{ padding: "10px 14px", borderRight: "1px solid #e5e7eb" }}>
              <div style={{ fontSize: "10px", color: "#6b7280" }}>{item[0]}</div>
              <div style={{ fontSize: "12px", fontWeight: 600, color: item[0] === "STATUS" ? "#0ea5a4" : "#111827" }}>
                {item[1]}
              </div>
            </div>
          ))}
        </div>

        {/* PATIENT */}
        <div style={{ padding: "16px 20px", borderBottom: "1px solid #e5e7eb", display: "flex" }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "18px", fontWeight: 600, marginBottom: "8px" }}>Vijay Kumar</div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", fontSize: "12px", rowGap: "6px" }}>
              <div>Age / Sex: 24 / Male</div>
              <div>Email Address: V@gmail.com</div>
              <div>Patient ID: NHC-P-2026-MH-000123</div>

              <div>DOB: 15/03/2001</div>
              <div>Address: 32-A, Vashali Nagar, Jaipur</div>
              <div>Attending Doctor: Dr Amit Mishra</div>

              <div>Blood: B+</div>
              <div>Contact no: +91 9658265898</div>
              <div>Lab: City Diagnostics</div>
            </div>
          </div>

          <div style={{ width: "120px", textAlign: "center" }}>
            <div style={{ width: "90px", height: "90px", border: "1px solid #d1d5db", margin: "0 auto" }} />
            <div style={{ fontSize: "10px" }}>Scan to verify</div>
            <div style={{ fontSize: "10px", color: "#0ea5a4" }}>verify.neohealthcard.in</div>
          </div>
        </div>

        {/* TABLE */}
        <div style={{ padding: "16px 20px" }}>
          <div style={{ fontSize: "11px", marginBottom: "6px", color: "#6b7280" }}>TEST CHARGES</div>

          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px" }}>
            <thead>
              <tr style={{ background: "#f3f4f6" }}>
                {["TEST NAME", "SAC CODE", "MRP", "DISCOUNT", "GST%", "AMOUNT"].map((h, i) => (
                  <th key={i} style={{ border: "1px solid #e5e7eb", padding: "8px", textAlign: "left" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["Complete Blood Count (CBC)", "998331", "Rs.300.00", "10%", "5%", "Rs.283.50"],
                ["Peripheral Blood Smear", "998331", "Rs.200.00", "10%", "5%", "Rs.189.00"],
                ["Serum Iron + TIBC + Ferritin", "998332", "Rs.800.00", "10%", "5%", "Rs.756.00"],
                ["Vitamin B12 + Folate", "998332", "Rs.700.00", "10%", "5%", "Rs.661.50"],
                ["LFT — Liver Function Test", "998332", "Rs.250.00", "10%", "5%", "Rs.236.25"],
                ["Blood Culture × 2 Sets", "998334", "Rs.1,200.00", "10%", "5%", "Rs.1,134.00"],
                ["Widal Test", "998333", "Rs.250.00", "10%", "5%", "Rs.236.25"],
                ["NS1 Antigen (Dengue)", "998333", "Rs.400.00", "10%", "5%", "Rs.378.00"]
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} style={{ border: "1px solid #e5e7eb", padding: "8px" }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          {/* TOTALS */}
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "12px" }}>
            <div style={{ width: "280px", fontSize: "12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Total MRP</span><span>Rs.4,350.00</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>NHC Discount (10%)</span><span>-Rs.435.00</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>GST (5%)</span><span>Rs.195.75</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600, marginTop: "4px" }}>
                <span>Grand Total</span><span>Rs.4,110.75</span>
              </div>
            </div>
          </div>
        </div>

        {/* PAYMENT */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>
          <div style={{ padding: "14px" }}>
            <div style={{ fontSize: "11px", color: "#6b7280" }}>Payment Mode</div>
            <div style={{ fontSize: "12px" }}>UPI</div>
          </div>
          <div style={{ padding: "14px" }}>
            <div style={{ fontSize: "11px", color: "#6b7280" }}>Transaction ID</div>
            <div style={{ fontSize: "12px" }}>TXN-2026041200083</div>
          </div>
          <div style={{ padding: "14px" }}>
            <div style={{ fontSize: "11px", color: "#6b7280" }}>Status</div>
            <div style={{ fontSize: "12px" }}>Paid</div>
          </div>
        </div>

        {/* NOTES */}
        <div style={{ padding: "16px 20px" }}>
          <div style={{ fontSize: "11px", marginBottom: "6px", color: "#6b7280" }}>LAB TERMS</div>
          <ol style={{ fontSize: "12px", marginLeft: "16px" }}>
            <li>Reports will be available on NeoHealthCard app as soon as processed.</li>
            <li>Critical values will be immediately communicated to ordering doctor.</li>
            <li>Sample storage: 72 hours post-reporting for repeat testing if required.</li>
            <li>Disputes regarding results must be raised within 7 days of report date.</li>
          </ol>
        </div>

        {/* FOOTER */}
        <div style={{ background: "#0ea5a4", color: "#fff", fontSize: "11px", padding: "8px 14px", display: "flex", justifyContent: "space-between" }}>
          <span>Apollo General Hospital, Mumbai · hospital@apollogeneral.com · +91 98765 43210</span>
          <span>Wishing you a speedy recovery</span>
        </div>

      </div>
    </div>
  );
};

export default LabInvoice;