import React from "react";

// ─── Fonts & Bootstrap (CDN — no install needed) ─────────────────────────
const ExternalLinks = () => (
  <>
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
  </>
);

// ─── QR Code (pure SVG) ───────────────────────────────────────────────────
const QRCode = () => (
  <svg
    width="70" height="70" viewBox="0 0 70 70"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: "block" }}
  >
    <rect width="70" height="70" fill="white" />
    {/* TL finder */}
    <rect x="3"  y="3"  width="19" height="19" fill="#222" rx="1" />
    <rect x="6"  y="6"  width="13" height="13" fill="white" />
    <rect x="9"  y="9"  width="7"  height="7"  fill="#222" />
    {/* TR finder */}
    <rect x="48" y="3"  width="19" height="19" fill="#222" rx="1" />
    <rect x="51" y="6"  width="13" height="13" fill="white" />
    <rect x="54" y="9"  width="7"  height="7"  fill="#222" />
    {/* BL finder */}
    <rect x="3"  y="48" width="19" height="19" fill="#222" rx="1" />
    <rect x="6"  y="51" width="13" height="13" fill="white" />
    <rect x="9"  y="54" width="7"  height="7"  fill="#222" />
    {/* Data modules */}
    {[
      [26,3],[32,3],[38,3],[44,3],
      [26,9],[35,9],[41,9],
      [26,15],[32,15],[38,15],
      [3,26],[9,26],[15,26],[21,26],
      [6,32],[12,32],[18,32],
      [3,38],[9,38],[15,38],
      [3,44],[9,44],[15,44],[21,44],
      [26,26],[32,26],[38,26],[44,26],
      [29,32],[38,32],[47,32],[53,32],[59,32],[65,32],
      [26,38],[35,38],[44,38],[50,38],[56,38],[65,38],
      [26,44],[32,44],[38,44],[47,44],[53,44],[59,44],
      [47,47],[53,47],[62,47],
      [47,53],[56,53],[65,53],
      [50,56],[59,56],
      [47,62],[53,62],[59,62],[65,62],
      [50,65],[56,65],[62,65],
    ].map(([x, y], i) => (
      <rect key={i} x={x} y={y} width="3" height="3" fill="#222" />
    ))}
  </svg>
);

// ─── Lab tests data ───────────────────────────────────────────────────────
const tests = [
  {
    name:     "Complete Blood Count (CBC)",
    panel:    "Haematology",
    sample:   "Blood (EDTA)",
    reason:   "Anemia workup · fever",
  },
  {
    name:     "Peripheral Blood Smear",
    panel:    "Haematology",
    sample:   "Blood (EDTA)",
    reason:   "Anemia morphology",
  },
  {
    name:     "Serum Iron + TIBC + Ferritin",
    panel:    "Iron Studies",
    sample:   "Blood (Plain)",
    reason:   "Iron deficiency eval",
  },
  {
    name:     "Vitamin B12 + Folate",
    panel:    "Vitamins",
    sample:   "Blood (Plain)",
    reason:   "Nutritional anemia",
  },
];

// ─── Component ────────────────────────────────────────────────────────────
export default function LabTestOrder() {
  return (
    <>
      <ExternalLinks />

      <style>{`
        /* ── Reset / base ── */
        .lto * { font-family: 'Inter', sans-serif; box-sizing: border-box; }

        /* ── Page background ── */
        .lto-page { background: #e2e2e2; min-height: 100vh; padding: 32px 16px; }

        /* ── Card ── */
        .lto-card {
          background: #fff;
          border: 1px solid #c8c8c8;
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 2px 18px rgba(0,0,0,0.10);
          max-width: 880px;
          margin: 0 auto;
        }

        /* ── Header ── */
        .lto-header { padding: 17px 24px 13px; border-bottom: 1px solid #e0e0e0; }
        .lto-logo {
          width: 40px; height: 40px; border-radius: 50%;
          background: linear-gradient(140deg, #1b90c8, #1fcdd8);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .lto-h-title   { font-size: 19px;   font-weight: 700; color: #111; letter-spacing: -0.3px; line-height: 1; }
        .lto-h-name    { font-size: 12.5px; font-weight: 600; color: #222; margin-top: 2px; }
        .lto-h-addr    { font-size: 10px;   color: #666; margin-top: 3px; line-height: 1.6; }
        .lto-badge {
          border: 1.5px solid #1ecece; color: #1ecece;
          border-radius: 30px; padding: 3px 10px;
          font-size: 9.5px; font-weight: 600;
          display: inline-flex; align-items: center; gap: 5px;
        }
        .lto-eco { font-size: 9.5px; color: #1aab5f; display: flex; align-items: center; gap: 4px; }
        .lto-eco::before { content: "●"; font-size: 6px; }
        .lto-h-contact { font-size: 10px; color: #555; margin-top: 2px; }

        /* ── Meta strip ── */
        .lto-meta { background: #f7f7f7; border-bottom: 1px solid #e0e0e0; display: flex; }
        .lto-mc { padding: 9px 18px; border-right: 1px solid #e0e0e0; flex: 1; }
        .lto-mc:last-child { border-right: none; }
        .lto-mc.wide { flex: 2.5; }
        .lto-ml { font-size: 8px; font-weight: 700; text-transform: uppercase; letter-spacing: .9px; color: #aaa; margin-bottom: 3px; }
        .lto-mv { font-size: 11.5px; font-weight: 500; color: #111; }
        .lto-mv.mono { font-family: 'Courier New', monospace; font-size: 11px; }
        .lto-mv.urgent { font-weight: 700; color: #d0021b; }

        /* ── Patient section ── */
        .lto-patient { padding: 15px 24px 16px; border-bottom: 1px solid #e0e0e0; display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; }
        .lto-pt-sec-lbl { font-size: 8px; font-weight: 700; text-transform: uppercase; letter-spacing: .9px; color: #aaa; margin-bottom: 5px; }
        .lto-pt-name    { font-size: 22px; font-weight: 700; color: #111; letter-spacing: -.4px; margin-bottom: 10px; line-height: 1; }
        .lto-pt-grid    { display: grid; grid-template-columns: 128px 1fr 148px 1fr; row-gap: 5px; }
        .lto-pt-l  { font-size: 10.5px; color: #777; }
        .lto-pt-v  { font-size: 10.5px; color: #111; font-weight: 500; }
        .lto-pt-v.mono { font-family: 'Courier New', monospace; font-size: 10px; }
        .lto-qr-wrap { border: 1px solid #ddd; border-radius: 4px; padding: 2px; background: #fff; flex-shrink: 0; }
        .lto-scan { font-size: 8.5px; color: #1ecece; text-align: right; margin-top: 5px; line-height: 1.6; }

        /* ── Tests table ── */
        .lto-tbl-wrap { padding: 0 24px; }
        .lto-tbl-title {
          text-align: center; font-size: 8.5px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 1.8px; color: #888;
          padding: 10px 0 7px;
        }
        .lto-tbl { width: 100%; border-collapse: collapse; }
        .lto-tbl thead tr { background: #f2f2f2; }
        .lto-tbl th {
          font-size: 8px; font-weight: 700; text-transform: uppercase;
          letter-spacing: .8px; color: #666;
          padding: 8px 11px; text-align: left;
          border-bottom: 1.5px solid #ddd;
        }
        .lto-tbl tbody tr { border-bottom: 1px solid #efefef; }
        .lto-tbl tbody tr:last-child { border-bottom: none; }
        .lto-tbl td { font-size: 11.5px; color: #222; padding: 8.5px 11px; vertical-align: middle; }

        /* ── Clinical notes ── */
        .lto-notes {
          margin: 12px 24px 14px;
          border: 1px solid #e0e0e0; border-radius: 5px;
          padding: 11px 16px; background: #fafafa;
        }
        .lto-notes-title { font-size: 8px; font-weight: 700; text-transform: uppercase; letter-spacing: .9px; color: #aaa; margin-bottom: 8px; }
        .lto-notes-body  { font-size: 11.5px; color: #333; line-height: 1.65; }

        /* ── Signatures ── */
        .lto-sig-row { display: flex; border-top: 1px solid #e0e0e0; margin: 0 24px; }
        .lto-sig-blk { flex: 1; padding: 14px 0; text-align: center; }
        .lto-sig-blk:first-child { border-right: 1px solid #e0e0e0; }
        .lto-sig-name { font-size: 12.5px; font-weight: 700; color: #111; }
        .lto-sig-role { font-size: 10px;   color: #555; margin-top: 2px; }
        .lto-sig-id   { font-size: 9px;    color: #1ecece; margin-top: 3px; font-family: 'Courier New', monospace; }

        /* ── Footer bar ── */
        .lto-footer {
          background: #1ecece;
          display: flex; justify-content: space-between; align-items: center;
          padding: 9px 24px; margin-top: 14px;
        }
        .lto-footer span { font-size: 10px; color: #fff; }
        .lto-tagline { font-style: italic; }
      `}</style>

      <div className="lto lto-page">
        <div className="lto-card">

          {/* ── HEADER ── */}
          <div className="lto-header d-flex justify-content-between align-items-start">
            <div className="d-flex align-items-start gap-3">
              <div className="lto-logo">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="rgba(255,255,255,0.18)" />
                  <path d="M8 12h8M12 8v8" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <div className="lto-h-title">Lab Test Order</div>
                <div className="lto-h-name">Apollo General Hospital</div>
                <div className="lto-h-addr">
                  NHC-H-2022-MH-G00009 · Reg. MH-HOSP-2010-00891 · NABH Accredited<br />
                  Plot 22, Healthcare Ave, Andheri West, Mumbai — 400053
                </div>
              </div>
            </div>
            <div className="text-end">
              <div className="mb-1">
                <span className="lto-badge">
                  <svg width="9" height="9" viewBox="0 0 10 10" fill="#1ecece">
                    <polygon points="5,0.5 6.2,3.5 9.5,3.8 7.2,6 7.9,9.5 5,7.8 2.1,9.5 2.8,6 0.5,3.8 3.8,3.5" />
                  </svg>
                  NeoHealthCard Network
                </span>
              </div>
              <div className="d-flex gap-3 justify-content-end mb-1">
                <span className="lto-eco">Fully Automated</span>
                <span className="lto-eco">Ecosystem Connected</span>
              </div>
              <div className="lto-h-contact">hospital@apollogeneral.com · +91 98765 43210</div>
            </div>
          </div>

          {/* ── META STRIP ── */}
          <div className="lto-meta">
            <div className="lto-mc">
              <div className="lto-ml">Lab ID</div>
              <div className="lto-mv mono">NHC-RX-2026-0412-00011</div>
            </div>
            <div className="lto-mc">
              <div className="lto-ml">Date &amp; Time</div>
              <div className="lto-mv">12/04/2026 10:45</div>
            </div>
            <div className="lto-mc">
              <div className="lto-ml">Urgency</div>
              <div className="lto-mv urgent">Urgent</div>
            </div>
            <div className="lto-mc wide">
              <div className="lto-ml">Report To</div>
              <div className="lto-mv">City Diagnostics Lab · NHC-L-000071</div>
            </div>
          </div>

          {/* ── PATIENT ── */}
          <div className="lto-patient">
            <div className="flex-fill">
              <div className="lto-pt-sec-lbl">Patient</div>
              <div className="lto-pt-name">Vijay Kumar</div>
              <div className="lto-pt-grid">
                <span className="lto-pt-l">Age / Sex</span>      <span className="lto-pt-v">24 / Male</span>
                <span className="lto-pt-l">Email Address</span>   <span className="lto-pt-v">V@gmail.com</span>

                <span className="lto-pt-l">DOB</span>             <span className="lto-pt-v">15/03/2001</span>
                <span className="lto-pt-l">Address</span>         <span className="lto-pt-v">32-A, Vashali Nagar, Jaipur</span>

                <span className="lto-pt-l">Blood</span>           <span className="lto-pt-v">B+</span>
                <span className="lto-pt-l">Patient ID</span>      <span className="lto-pt-v mono">NHC-P-2026-MH-000123</span>

                <span className="lto-pt-l">Contact no</span>      <span className="lto-pt-v">+91 9658265898</span>
                <span className="lto-pt-l">Dr Name</span>         <span className="lto-pt-v">Dr. Amit Mishra</span>

                <span className="lto-pt-l"></span>                 <span className="lto-pt-v"></span>
                <span className="lto-pt-l">Dr ID</span>           <span className="lto-pt-v mono">NHC-D-2024-MH-007821</span>
              </div>
            </div>
            <div>
              <div className="lto-qr-wrap"><QRCode /></div>
              <div className="lto-scan">Scan to verify<br />verify.neohealthcard.in</div>
            </div>
          </div>

          {/* ── TESTS TABLE ── */}
          <div className="lto-tbl-wrap">
            <div className="lto-tbl-title">Tests Ordered</div>
            <table className="lto-tbl">
              <thead>
                <tr>
                  <th>Test Name</th>
                  <th>Panel / Group</th>
                  <th>Sample Type</th>
                  <th>Clinical Reason</th>
                </tr>
              </thead>
              <tbody>
                {tests.map((t, i) => (
                  <tr key={i}>
                    <td>{t.name}</td>
                    <td>{t.panel}</td>
                    <td>{t.sample}</td>
                    <td>{t.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── CLINICAL NOTES ── */}
          <div className="lto-notes">
            <div className="lto-notes-title">Clinical Notes for Lab</div>
            <div className="lto-notes-body">
              Patient presenting with 3-week history of fever (103°F), weight loss (32kg underweight),
              and CBC showing Hb 8.5 g/dl. Requesting urgent panel to rule out infectious cause of fever
              and investigate anemia aetiology. Please report all values with reference ranges. Contact
              ordering doctor immediately if any critical values found.
            </div>
          </div>

          {/* ── SIGNATURES ── */}
          <div className="lto-sig-row">
            <div className="lto-sig-blk">
              <div className="lto-sig-name">Dr. Amit Mishra</div>
              <div className="lto-sig-role">MD, General Physician · Apollo Hospital</div>
              <div className="lto-sig-id">NHC-D-2024-MH-004512 · MMC Reg: 04821</div>
            </div>
            <div className="lto-sig-blk">
              <div className="lto-sig-name">City Diagnostics Lab</div>
              <div className="lto-sig-role">Accepted &amp; Registered</div>
              <div className="lto-sig-id">NHC-L-2023-MH-000071</div>
            </div>
          </div>

          {/* ── FOOTER ── */}
          <div className="lto-footer">
            <span>Apollo General Hospital, Mumbai · hospital@apollogeneral.com · +91 98765 43210</span>
            <span className="lto-tagline">Wishing you a speedy recovery</span>
          </div>

        </div>
      </div>
    </>
  );
}
