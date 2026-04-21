import React from "react";

const Label = ({ children }) => (
  <p className="text-[10px] text-[#868686] leading-[12px] mb-[2px]">
    {children}
  </p>
);

const Value = ({ children }) => (
  <p className="text-[11px] text-[#1C1C1C] font-medium leading-[13px]">
    {children}
  </p>
);

const KV = ({ k, v }) => (
  <div>
    <Label>{k}</Label>
    <Value>{v}</Value>
  </div>
);

const Meta = ({ l, v }) => (
  <div>
    <Label>{l}</Label>
    <Value>{v}</Value>
  </div>
);

export default function OPDReceipt() {
  return (
    <div className="bg-[#0B0B0B] min-h-screen flex justify-center items-center p-6 font-sans">
      <div className="w-[880px] bg-white text-[#1C1C1C] relative overflow-hidden">

        {/* WATERMARK */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none translate-y-[40px]">
          <div className="w-[420px] h-[420px] bg-[#14b8a6] opacity-[0.04] rounded-full" />
        </div>

        {/* HEADER */}
        <div className="px-6 pt-6 pb-4 border-b border-[#E6E6E6] flex justify-between">
          <div>
            <h1 className="text-[20px] font-semibold">OPD Receipt</h1>
            <p className="text-[12px] text-[#4A4A4A]">Apollo General Hospital</p>
            <p className="text-[10px] text-[#868686]">
              NHC-H-2022-MH-000009 · Reg. MH-HOSP-2010-00891 · NABH Accredited
            </p>
            <p className="text-[10px] text-[#868686]">
              Plot 22, Healthcare Ave, Andheri West, Mumbai – 400053
            </p>
          </div>

          <div className="text-right">
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
          <Meta l="OPD RECEIPT ID" v="NHC-OPD-2026-0412-00022" />
          <Meta l="DATE & TIME" v="12/04/2026 10:30" />
          <Meta l="OPD TOKEN" v="T-042" />
          <Meta l="STATUS" v="Paid · Attended" />
        </div>

        {/* PATIENT */}
        <div className="px-6 py-5 border-b border-[#E6E6E6] flex">
          <div className="flex-1">
            <h2 className="text-[16px] font-semibold">Vijay Kumar</h2>

            <div className="grid grid-cols-3 gap-x-5 gap-y-2 mt-3">
              <KV k="Age / Sex" v="24 / Male" />
              <KV k="Email Address" v="v@gmail.com" />
              <KV k="Patient ID" v="NHC-P-2026-MH-000123" />

              <KV k="DOB" v="15/03/2001" />
              <KV k="Address" v="32-A, Vashali Nagar, Jaipur" />
              <KV k="" v="" />

              <KV k="Blood" v="B+" />
              <KV k="Contact no" v="+91 9658265898" />
              <KV k="" v="" />
            </div>
          </div>

          {/* QR */}
          <div className="w-[100px] border-l border-[#E6E6E6] pl-4 flex flex-col items-center">
            <div className="w-[72px] h-[72px] bg-[#E6E6E6]" />
            <p className="text-[10px] text-[#868686] mt-2">Scan to verify</p>
            <p className="text-[10px] text-[#14b8a6]">
              verify.neohealthcard.in
            </p>
          </div>
        </div>

        {/* CONSULTATION + VITALS */}
        <div className="px-6 py-4 border-b border-[#E6E6E6] grid grid-cols-2 gap-6 text-[11px]">
          <div className="space-y-1">
            <p className="text-[10px] text-[#868686] tracking-[0.05em]">
              CONSULTATION DETAILS
            </p>
            <KV k="Doctor" v="Dr. Amit Mishra" />
            <KV k="Specialisation" v="General Physician · MD" />
            <KV k="Department" v="OPD · General Medicine" />
            <KV k="Clinic / Room" v="OPD Room 3" />
            <KV k="Visit Type" v="New Patient" />
          </div>

          <div className="space-y-1">
            <p className="text-[10px] text-[#868686] tracking-[0.05em]">
              COMPLAINT & VITALS
            </p>
            <KV k="Chief Complaint" v="Fever · Fatigue · Weight Loss" />
            <KV k="Temp" v="103°F" />
            <KV k="BP" v="118/76 mmHg" />
            <KV k="Weight" v="62 kg" />
            <KV k="Referred To" v="IPD · Admitted" />
          </div>
        </div>

        {/* TABLE */}
        <div className="px-6 py-4 border-b border-[#E6E6E6]">
          <p className="text-center text-[10px] text-[#868686] mb-2 tracking-[0.05em]">
            OPD CHARGES
          </p>

          <table className="w-full text-[11px] border border-[#E6E6E6]">
            <thead className="bg-[#FAFAFA] text-[#868686]">
              <tr>
                <th className="text-left px-3 py-[6px]">DESCRIPTION</th>
                <th className="text-center px-3 py-[6px]">SAC CODE</th>
                <th className="text-center px-3 py-[6px]">GST%</th>
                <th className="text-right px-3 py-[6px]">TOTAL</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t border-[#E6E6E6]">
                <td className="px-3 py-[6px]">
                  <div>OPD Consultation – Dr. Amit Mishra</div>
                  <div className="text-[10px] text-[#868686]">
                    General Medicine · New Patient
                  </div>
                </td>
                <td className="text-center px-3 py-[6px]">999311</td>
                <td className="text-center px-3 py-[6px]">0%</td>
                <td className="text-right px-3 py-[6px]">₹3,000.00</td>
              </tr>

              <tr className="border-t border-[#E6E6E6]">
                <td className="px-3 py-[6px]">
                  <div>Registration & File Charges</div>
                  <div className="text-[10px] text-[#868686]">
                    New patient file opening
                  </div>
                </td>
                <td className="text-center px-3 py-[6px]">999311</td>
                <td className="text-center px-3 py-[6px]">18%</td>
                <td className="text-right px-3 py-[6px]">₹3,000.00</td>
              </tr>
            </tbody>
          </table>

          {/* TOTAL */}
          <div className="flex justify-end mt-4 text-[11px]">
            <div className="w-[220px] space-y-1">
              <div className="flex justify-between">
                <span className="text-[#868686]">Sub Total</span>
                <span>₹6,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#868686]">GST Total</span>
                <span>₹1,200</span>
              </div>
              <div className="flex justify-between font-semibold text-[13px]">
                <span>Grand Total</span>
                <span>₹7,200</span>
              </div>
            </div>
          </div>
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