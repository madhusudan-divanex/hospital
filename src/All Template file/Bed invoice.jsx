import React from "react";

const Label = ({ children }) => (
  <p className="text-[10px] text-[#868686] leading-[12px] mb-[2px] tracking-[0.02em]">
    {children}
  </p>
);

const Value = ({ children }) => (
  <p className="text-[11px] text-[#1C1C1C] font-medium leading-[13px]">
    {children}
  </p>
);

const Meta = ({ l, v }) => (
  <div className="leading-[1.2]">
    <Label>{l}</Label>
    <Value>{v}</Value>
  </div>
);

const KV = ({ k, v }) => (
  <div className="leading-[1.2]">
    <Label>{k}</Label>
    <Value>{v}</Value>
  </div>
);

export default function BedInvoice() {
  return (
    <div className="bg-[#0B0B0B] min-h-screen flex justify-center items-center p-6 font-sans">
      <div className="w-[880px] bg-white text-[#1C1C1C] text-[12px] relative overflow-hidden">

        {/* WATERMARK */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none translate-y-[40px]">
          <div className="w-[420px] h-[420px] bg-[#14b8a6] opacity-[0.04] rounded-full" />
        </div>

        {/* HEADER */}
        <div className="px-6 pt-6 pb-4 border-b border-[#E6E6E6] flex justify-between">
          <div>
            <h1 className="text-[20px] font-semibold leading-[24px]">
              IPD / Bed Invoice
            </h1>
            <p className="text-[12px] text-[#4A4A4A] mt-[2px]">
              Apollo General Hospital
            </p>
            <p className="text-[10px] text-[#868686] mt-[2px]">
              NHC-H-2022-MH-000009 · Reg. MH-HOSP-2010-00891 · NABH Accredited
            </p>
            <p className="text-[10px] text-[#868686]">
              Plot 22, Healthcare Ave, Andheri West, Mumbai – 400053
            </p>
          </div>

          <div className="text-right space-y-[2px]">
            <div className="border border-[#14b8a6] text-[#14b8a6] text-[10px] px-3 py-[2px] rounded-full inline-block">
              NeoHealthCard Network
            </div>
            <p className="text-[10px] text-[#868686]">
              Fully Automated · Ecosystem Connected
            </p>
            <p className="text-[10px] text-[#868686]">
              hospital@apollogeneral.com · +91 98765 43210
            </p>
          </div>
        </div>

        {/* META */}
        <div className="px-6 py-4 border-b border-[#E6E6E6] grid grid-cols-4 gap-4">
          <Meta l="IPD INVOICE ID" v="NHC-DS-2026-0412-00001" />
          <Meta l="DISCHARGE REF" v="NHC-DS-2026-0412-00001" />
          <Meta l="BILL DATE" v="12/04/2026" />
          <Meta l="TOTAL STAY" v="10/04 – 12/04 · 2 Days" />
        </div>

        {/* PATIENT */}
        <div className="px-6 py-5 border-b border-[#E6E6E6] flex">
          <div className="flex-1">
            <h2 className="text-[16px] font-semibold leading-[20px]">
              Vijay Kumar
            </h2>

            <div className="grid grid-cols-3 gap-x-5 gap-y-2 mt-3">
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

          {/* QR */}
          <div className="w-[100px] border-l border-[#E6E6E6] pl-4 flex flex-col items-center">
            <div className="w-[72px] h-[72px] bg-[#E6E6E6]" />
            <p className="text-[10px] text-[#868686] mt-2">Scan to verify</p>
            <p className="text-[10px] text-[#14b8a6]">verify.neohealthcard.in</p>
          </div>
        </div>

        {/* ADMISSION + CLINICAL */}
        <div className="px-6 py-4 border-b border-[#E6E6E6] grid grid-cols-2 gap-6 text-[11px]">
          <div className="space-y-1">
            <p className="text-[10px] text-[#868686] tracking-[0.05em]">
              ADMISSION DETAILS
            </p>
            <KV k="Ward Type" v="General Ward" />
            <KV k="Bed / Room" v="B-12 / R-204" />
            <KV k="Admission" v="10/04/2026 09:00" />
            <KV k="Discharge" v="12/04/2026 11:00" />
            <KV k="Total Stay" v="2 Days" />
          </div>

          <div className="space-y-1">
            <p className="text-[10px] text-[#868686] tracking-[0.05em]">
              CLINICAL REFERENCE
            </p>
            <KV k="Diagnosis" v="Viral Fever" />
            <KV k="Discharge Type" v="LAMA / DAMA" />
            <KV k="Condition" v="Stable at Discharge" />
            <KV k="Attending Doctor" v="Dr. Amit Mishra" />
            <KV k="Department" v="IPD · Internal Medicine" />
          </div>
        </div>

        {/* TABLE */}
        <div className="px-6 py-4 border-b border-[#E6E6E6]">
          <p className="text-center text-[10px] text-[#868686] mb-2 tracking-[0.05em]">
            SERVICES & CHARGES
          </p>

          <table className="w-full text-[11px] border border-[#E6E6E6]">
            <thead className="bg-[#FAFAFA] text-[#868686]">
              <tr>
                <th className="text-left px-3 py-[6px]">SERVICE / DESCRIPTION</th>
                <th className="text-center px-3 py-[6px]">SAC CODE</th>
                <th className="text-right px-3 py-[6px]">UNIT PRICE</th>
                <th className="text-center px-3 py-[6px]">QTY</th>
                <th className="text-center px-3 py-[6px]">GST%</th>
                <th className="text-right px-3 py-[6px]">TOTAL</th>
              </tr>
            </thead>

            <tbody>
              {[
                ["Bed Charge", "General Ward · B-12 · 2 days", "₹1500.00", "x2", "0%", "₹3,000.00"],
                ["Nursing Charges", "Post-operative nursing & patient care", "₹1500.00", "x2", "0%", "₹3,000.00"],
                ["Facility & Admin Charges", "", "₹300.00", "-", "18%", "₹354.00"],
              ].map((r, i) => (
                <tr key={i} className="border-t border-[#E6E6E6]">
                  <td className="px-3 py-[6px]">
                    <div>{r[0]}</div>
                    {r[1] && (
                      <div className="text-[10px] text-[#868686] mt-[2px]">
                        {r[1]}
                      </div>
                    )}
                  </td>
                  <td className="text-center px-3 py-[6px]">999311</td>
                  <td className="text-right px-3 py-[6px]">{r[2]}</td>
                  <td className="text-center px-3 py-[6px]">{r[3]}</td>
                  <td className="text-center px-3 py-[6px]">{r[4]}</td>
                  <td className="text-right px-3 py-[6px]">{r[5]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAYMENT */}
        <div className="grid grid-cols-3 border-b border-[#E6E6E6] text-[11px]">
          <div className="px-6 py-3">
            <Label>Payment Mode</Label>
            <Value>Cash</Value>
          </div>
          <div className="px-6 py-3 border-l border-[#E6E6E6]">
            <Label>Transaction ID</Label>
            <Value>TXN-202604120083</Value>
          </div>
          <div className="px-6 py-3 border-l border-[#E6E6E6]">
            <Label>Status</Label>
            <Value>Paid</Value>
          </div>
        </div>

        {/* NOTES */}
        <div className="px-6 py-4 border-b border-[#E6E6E6]">
          <p className="text-[10px] text-[#868686] mb-2 tracking-[0.05em]">
            IMPORTANT NOTES
          </p>
          <ol className="text-[10px] text-[#868686] space-y-1 list-decimal ml-4">
            <li>Bed charges calculated on daily basis from admission time.</li>
            <li>Partial day is billed as full day for IPD purposes.</li>
            <li>Charges vary by ward category and level of care required.</li>
            <li>This invoice is linked to Discharge Summary.</li>
          </ol>
        </div>

        {/* FOOTER */}
        <div className="bg-[#0ea5a4] text-white text-[10px] flex justify-between px-6 py-[6px]">
          <span>
            Apollo General Hospital, Mumbai · hospital@apollogeneral.com · +91 98765 43210
          </span>
          <span>Wishing you a speedy recovery</span>
        </div>

      </div>
    </div>
  );
}