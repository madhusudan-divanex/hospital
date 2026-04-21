import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const LabReceipt = () => {
  return (
    <div style={{ background: "#f4f6f8", padding: "24px", fontFamily: "Inter, sans-serif" }}>
      <div style={{ width: "1120px", margin: "0 auto", background: "#ffffff", border: "1px solid #e5e7eb" }}>

        {/* HEADER */}
        <div style={{ display: "flex", justifyContent: "space-between", padding: "18px 20px", borderBottom: "1px solid #e5e7eb" }}>
          <div>
            <div style={{ fontSize: "22px", fontWeight: 600 }}>Lab Sample Collection Receipt</div>
            <div style={{ fontSize: "12px" }}>Apollo Ambulance Services</div>
            <div style={{ fontSize: "11px", color: "#6b7280" }}>NHC-H-2022-MH-000009 · Reg. MH-HOSP-2010-00891 · NABH Accredited</div>
            <div style={{ fontSize: "11px", color: "#6b7280" }}>Plot 22, Healthcare Ave, Andheri West, Mumbai – 400053</div>
          </div>

          <div style={{ textAlign: "right" }}>
            <div style={{ border: "1px solid #0ea5a4", padding: "4px 12px", borderRadius: "20px", fontSize: "11px", color: "#0ea5a4" }}>NeoHealthCard Network</div>
            <div style={{ fontSize: "11px", color: "#6b7280" }}>Fully Automated · Ecosystem Connected</div>
            <div style={{ fontSize: "11px", color: "#6b7280" }}>hospital@apollogeneral.com · +91 98765 43210</div>
          </div>
        </div>

        {/* META */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", borderBottom: "1px solid #e5e7eb" }}>
          {[
            ["COLLECTION ID", "NHC-AMB-DISP-2026-0412-00001"],
            ["LAB ORDER REF", "NHC-LO-2026-0412-00007"],
            ["VISIT TYPE", "OPD"],
            ["OPD REF", "NHC-OPD-2026-0412-00022"],
            ["STATUS", "Paid"]
          ].map((item, i) => (
            <div key={i} style={{ padding: "10px 14px", borderRight: "1px solid #e5e7eb" }}>
              <div style={{ fontSize: "10px", color: "#6b7280" }}>{item[0]}</div>
              <div style={{ fontSize: "12px", fontWeight: 600, color: i === 4 ? "#0ea5a4" : "#111827" }}>{item[1]}</div>
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
            <div style={{ width: "90px", height: "90px", border: "1px solid #d1d5db", margin: "0 auto" }}></div>
            <div style={{ fontSize: "10px" }}>Scan to verify</div>
            <div style={{ fontSize: "10px", color: "#0ea5a4" }}>verify.neohealthcard.in</div>
          </div>
        </div>

        {/* SAMPLES TABLE */}
        <div style={{ padding: "16px 20px" }}>
          <div style={{ fontSize: "11px", marginBottom: "6px", color: "#6b7280" }}>SAMPLES COLLECTED</div>

          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px" }}>
            <thead>
              <tr style={{ background: "#f3f4f6" }}>
                {[
                  "TEST NAME","SAMPLE TYPE","TUBE / CONTAINER","VOLUME","FASTING","COLLECTION TIME","CONDITION"
                ].map((h, i) => (
                  <th key={i} style={{ border: "1px solid #e5e7eb", padding: "8px", textAlign: "left" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ["CBC + PBS","EDTA Blood","Purple Tube","3 ml","No","09:30","Good"],
                ["Iron + TIBC + Ferritin","Plain Blood","Red Tube","5 ml","YES – 10hrs","09:30","Good"],
                ["Vitamin B12 + Folate","Plain Blood","Red Tube","3 ml","No","09:31","Good"],
                ["LFT","Plain Blood","Red Tube","5 ml","YES – 10hrs","09:31","Good"],
                ["Blood Culture ×2","Culture Blood","Culture Bottle","10 ml ×2","No","09:32","Sterile Technique"],
                ["NS1 Dengue Antigen","Plain Blood","Red Tube","5 ml","YES – 10hrs","09:30","Good"]
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} style={{ border: "1px solid #e5e7eb", padding: "8px" }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* TRACKING TABLE */}
        <div style={{ padding: "16px 20px" }}>
          <div style={{ fontSize: "11px", marginBottom: "6px", color: "#6b7280" }}>SAMPLE ID TRACKING</div>

          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px" }}>
            <thead>
              <tr style={{ background: "#f3f4f6" }}>
                {["SAMPLE ID","TEST","BARCODE","STORAGE TEMP","LAB SECTION","EXPECTED TAT"].map((h,i)=>(
                  <th key={i} style={{ border: "1px solid #e5e7eb", padding: "8px", textAlign: "left" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>CDL000071/CBC/260412/001</td>
                <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>CBC + PBS</td>
                <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>BC2026041200001</td>
                <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>4°C – Refrigerated</td>
                <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>Haematology</td>
                <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>4 hours</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>CDL000071/CBC/260412/002</td>
                <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>Iron Studies</td>
                <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>BC2026041200002</td>
                <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>4°C – Refrigerated</td>
                <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>Biochemistry</td>
                <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>6 hours</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>CDL000071/CBC/260412/003</td>
                <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>Blood Culture</td>
                <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>BC2026041200003</td>
                <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>37°C – Incubator</td>
                <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>Microbiology</td>
                <td style={{ border: "1px solid #e5e7eb", padding: "8px" }}>48–72 hours</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* NOTES */}
        <div style={{ padding: "16px 20px" }}>
          <div style={{ fontSize: "11px", marginBottom: "6px", color: "#6b7280" }}>COLLECTION NOTES</div>
          <ol style={{ fontSize: "12px", marginLeft: "16px" }}>
            <li>All samples collected under aseptic conditions. Patient was fasting 10 hours for Iron/LFT.</li>
            <li>Blood culture collected before antibiotic administration – sterile technique used.</li>
            <li>Samples labelled, bar-coded and entered into NHC Lab system at 09:35.</li>
            <li>Patient tolerated venipuncture well – no adverse events during collection.</li>
          </ol>
        </div>

        {/* SIGNATURE */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", textAlign: "center", padding: "20px", borderTop: "1px solid #e5e7eb" }}>
          <div>
            <div>Rahul K</div>
            <div style={{ fontSize: "11px", color: "#6b7280" }}>Phlebotomist / Lab Technician</div>
          </div>
          <div>
            <div>City Diagnostics Lab</div>
            <div style={{ fontSize: "11px", color: "#6b7280" }}>Accepted & Processing</div>
          </div>
          <div>
            <div>Vijay Kumar</div>
            <div style={{ fontSize: "11px", color: "#6b7280" }}>Patient</div>
          </div>
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

export default LabReceipt;