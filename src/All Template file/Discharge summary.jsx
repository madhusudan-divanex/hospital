import React from "react";

// Pixel-perfect (screen) Discharge Summary – Figma-matched
// 880px canvas, 8px spacing scale, Inter-like metrics

const Label = ({ children }) => (
  <p className="text-[10px] text-[#868686] tracking-[0.02em]">{children}</p>
);

const Value = ({ children, highlight }) => (
  <p className={highlight ? "text-[#0ea5a4] font-medium" : "text-[#1C1C1C] font-medium"}>{children}</p>
);

const Meta = ({ l, v, highlight }) => (
  <div className="min-w-0">
    <Label>{l}</Label>
    <Value highlight={highlight}>{v}</Value>
  </div>
);

const KV = ({ k, v }) => (
  <div className="leading-[1.25]">
    <Label>{k}</Label>
    <p className="text-[11px] font-medium">{v}</p>
  </div>
);

const Vital = ({ label, value, unit, sub }) => (
  <div className="flex-1 rounded-md border border-[#E6E6E6] bg-[#FAFAFA] px-4 py-3 text-center">
    <p className="text-[10px] text-[#868686] tracking-[0.02em]">{label}</p>
    <p className="text-[14px] font-semibold leading-[18px]">{value}</p>
    {unit && <p className="text-[10px] text-[#868686]">{unit}</p>}
    {sub && <p className="text-[10px] text-[#868686] mt-[2px]">{sub}</p>}
  </div>
);

export default function DischargeSummary() {
  return (
    <div className="bg-[#0B0B0B] min-h-screen flex items-center justify-center p-6">
      <div className="w-[880px] bg-white rounded-[6px] shadow-[0_12px_40px_rgba(0,0,0,0.28)] text-[#1C1C1C] text-[12px] relative overflow-hidden">

        {/* Watermark */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-[440px] h-[440px] rounded-full bg-[#14b8a6] opacity-[0.05]" />
        </div>

        {/* Header */}
        <div className="relative px-6 pt-6 pb-4 border-b border-[#E6E6E6] flex justify-between">
          <div>
            <h1 className="text-[20px] font-semibold leading-[24px]">Discharge Summary</h1>
            <p className="text-[12px] text-[#4A4A4A]">Apollo General Hospital</p>
            <p className="text-[10px] text-[#868686] mt-1">NHC-H-2022-MH-000009 · Reg. MH-HOSP-2010-00891 · NABH Accredited</p>
            <p className="text-[10px] text-[#868686]">Plot 22, Healthcare Ave, Andheri West, Mumbai – 400053</p>
          </div>
          <div className="flex flex-col items-end gap-[2px]">
            <div className="border border-[#14b8a6] text-[#14b8a6] text-[10px] px-3 py-[2px] rounded-full">NeoHealthCard Network</div>
            <p className="text-[10px] text-[#868686]">Fully Automated · Ecosystem Connected</p>
            <p className="text-[10px] text-[#868686]">hospital@apollogeneral.com · +91 98765 43210</p>
          </div>
        </div>

        {/* Meta */}
        <div className="px-6 py-4 border-b border-[#E6E6E6] grid grid-cols-6 gap-4 text-[11px]">
          <Meta l="DISCHARGE ID" v="NHC-DS-2026-0412-00001" />
          <Meta l="ADMISSION" v="10/04/2026 09:00" />
          <Meta l="DISCHARGE" v="12/04/2026 11:00" />
          <Meta l="TOTAL STAY" v="2 Days" />
          <Meta l="DISCHARGE TYPE" v="LAMA / DAMA" />
          <Meta l="STATUS" v="Final" highlight />
        </div>

        {/* Patient + QR */}
        <div className="px-6 py-5 border-b border-[#E6E6E6] flex">
          <div className="flex-1">
            <h2 className="text-[16px] font-semibold">Vijay Kumar</h2>
            <div className="grid grid-cols-3 gap-x-6 gap-y-3 mt-3 text-[11px]">
              <KV k="Age / Sex" v="24 / Male" />
              <KV k="Email Address" v="v@gmail.com" />
              <KV k="Patient ID" v="NHC-P-2026-MH-000123" />

              <KV k="DOB" v="15/03/2001" />
              <KV k="Address" v="32-A, Vashali Nagar, Jaipur" />
              <KV k="Dr Name" v="Dr. Amit Mishra" />

              <KV k="Blood" v="B+" />
              <KV k="Contact no" v="+91 9658265898" />
              <KV k="Dr ID" v="NHC-D-2024-MH-007821" />
            </div>
          </div>
          <div className="w-[120px] flex flex-col items-center justify-center border-l border-[#E6E6E6]">
            <div className="w-[82px] h-[82px] bg-[#E6E6E6]" />
            <p className="text-[10px] text-[#868686] mt-2">Scan to verify</p>
            <p className="text-[10px] text-[#14b8a6] mt-[2px]">verify.neohealthcard.in</p>
          </div>
        </div>

        {/* Vitals */}
        <div className="px-6 py-4 border-b border-[#E6E6E6] flex gap-3">
          <Vital label="BP" value="118/76" unit="mmHg" />
          <Vital label="TEMPERATURE" value="103°F" sub="at admission" />
          <Vital label="PULSE" value="88" unit="bpm" />
          <Vital label="SpO₂" value="98%" sub="at discharge" />
          <Vital label="WEIGHT" value="62" unit="kg" />
        </div>

        {/* Details */}
        <div className="px-6 py-4 border-b border-[#E6E6E6] grid grid-cols-2 gap-6 text-[11px]">
          <div>
            <Label>ADMISSION DETAILS</Label>
            <div className="mt-2 space-y-1">
              <div className="flex justify-between"><span className="text-[#868686]">Dept / Ward</span><span>IPD · Internal Medicine</span></div>
              <div className="flex justify-between"><span className="text-[#868686]">Bed / Room</span><span>B-12 / R-204 · General Ward</span></div>
              <div className="flex justify-between"><span className="text-[#868686]">Primary Diagnosis</span><span>Acute Viral Fever</span></div>
              <div className="flex justify-between"><span className="text-[#868686]">Secondary Diagnosis</span><span>Mild Anemia</span></div>
              <div className="flex justify-between"><span className="text-[#868686]">Procedures Done</span><span>IV Fluids · CBC · Antipyretics</span></div>
            </div>
          </div>
          <div>
            <Label>DISCHARGE STATUS</Label>
            <div className="mt-2 space-y-1">
              <div className="flex justify-between"><span className="text-[#868686]">Condition at Discharge</span><span>Stable</span></div>
              <div className="flex justify-between"><span className="text-[#868686]">Discharge Type</span><span>LAMA / DAMA</span></div>
              <div className="flex justify-between"><span className="text-[#868686]">Follow-up Date</span><span>15/04/2026 · Dr. Amit Mishra</span></div>
              <div className="flex justify-between"><span className="text-[#868686]">Red Flag Signs</span><span>Fever &gt;102°F · Vomiting</span></div>
              <div className="flex justify-between"><span className="text-[#868686]">Vitals at Discharge</span><span>BP 118/76 · Temp 98.6°F · SpO₂ 98%</span></div>
            </div>
          </div>
        </div>

        {/* Medicines */}
        <div className="px-6 py-4 border-b border-[#E6E6E6]">
          <p className="text-center text-[10px] text-[#868686] tracking-[0.02em] mb-2">MEDICINES PRESCRIBED AT DISCHARGE</p>
          <table className="w-full text-[11px] border border-[#E6E6E6]">
            <thead className="bg-[#FAFAFA] text-[#868686]">
              <tr>
                <th className="text-left px-3 py-2">MEDICINE</th>
                <th className="px-3 py-2">DOSE</th>
                <th className="px-3 py-2">FREQUENCY</th>
                <th className="px-3 py-2">DURATION</th>
                <th className="px-3 py-2">ROUTE</th>
                <th className="px-3 py-2">INSTRUCTION</th>
                <th className="px-3 py-2">PRESCRIBED BY</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Paracetamol 500mg", "1 Tab", "Twice daily", "5 Days", "Oral", "After food", "NHC-D-007821"],
                ["Ibuprofen 400mg", "1 Tab", "Thrice daily", "3 Days", "Oral", "Before food", "NHC-D-007821"],
                ["Amoxicillin 250mg", "1 Cap", "Once at night", "7 Days", "Oral", "Before sleep", "NHC-D-007821"],
                ["ORS Sachets", "1 Sachet", "Thrice daily", "5 Days", "Oral", "In 200ml water", "NHC-D-007821"],
              ].map((r, i) => (
                <tr key={i} className="border-t border-[#E6E6E6]">
                  <td className="px-3 py-2">{r[0]}</td>
                  <td className="px-3 py-2 text-center">{r[1]}</td>
                  <td className="px-3 py-2 text-center">{r[2]}</td>
                  <td className="px-3 py-2 text-center">{r[3]}</td>
                  <td className="px-3 py-2 text-center">{r[4]}</td>
                  <td className="px-3 py-2">{r[5]}</td>
                  <td className="px-3 py-2 text-center">{r[6]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Notes */}
        <div className="px-6 py-4 border-b border-[#E6E6E6]">
          <Label>DOCTOR'S REMARKS & DISCHARGE NOTES</Label>
          <div className="mt-2 bg-[#FAFAFA] border border-[#E6E6E6] rounded-md p-4 text-[11px] text-[#4A4A4A] leading-[1.6]">
            Patient responded well to IV fluid therapy and antipyretics. Fever resolved by Day 2. Advised complete bed rest, adequate fluid intake (3L/day), light meals. Avoid cold drinks and self-medication. Return immediately if fever exceeds 102°F, breathlessness, or persistent vomiting develops.
          </div>
        </div>

        {/* Signatures */}
        <div className="grid grid-cols-3 border-b border-[#E6E6E6] text-[11px]">
          <div className="p-4 text-center">
            <p className="font-medium">Dr. Amit Mishra</p>
            <p className="text-[#868686] text-[10px]">MD · Attending Physician · Apollo Hospital</p>
            <p className="text-[#14b8a6] text-[10px]">NHC-D-2024-MH-007821</p>
          </div>
          <div className="p-4 text-center border-l border-[#E6E6E6]">
            <p className="font-medium">Nurse In-Charge</p>
            <p className="text-[#868686] text-[10px]">Ward B-12 · Apollo Hospital</p>
            <p className="text-[#14b8a6] text-[10px]">NHC-T-2025-MH-003301</p>
          </div>
          <div className="p-4 text-center border-l border-[#E6E6E6]">
            <p className="font-medium">Vijay Kumar</p>
            <p className="text-[#868686] text-[10px]">Patient / Authorised Representative</p>
            <p className="text-[#14b8a6] text-[10px]">NHC-P-2026-MH-000123</p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#0ea5a4] text-white text-[11px] flex justify-between px-6 py-2">
          <span>Apollo General Hospital, Mumbai · hospital@apollogeneral.com · +91 98765 43210</span>
          <span>Wishing you a speedy recovery</span>
        </div>
      </div>
    </div>
  );
}
