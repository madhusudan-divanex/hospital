import React from "react";
import "./invoice.css";

const Invoice = () => {
  return (
    <div className="invoice-wrapper d-flex justify-content-center py-5 bg-light">
      <div className="invoice-card bg-white shadow">

        {/* HEADER */}
        <div className="d-flex justify-content-between p-4 border-bottom">
          <div>
            <h5 className="fw-semibold mb-1">Pharmacy Invoice</h5>
            <div className="text-muted small">Apollo General Hospital</div>
            <div className="text-muted small">
              Plot 22, Healthcare Ave, Andheri West, Mumbai – 400053
            </div>
          </div>

          <div className="text-end">
            <span className="badge bg-teal text-white px-3 py-2">
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
          <Meta title="Invoice ID" value="NHC-PHARM-00456" />
          <Meta title="Prescription Ref" value="NHC-RX-00011" />
          <Meta title="Invoice Date" value="12/04/2026" />
          <Meta title="Pharmacist" value="Ravi Sharma" />
          <Meta title="Status" value={<span className="text-success">Paid · Cash</span>} />
        </div>

        {/* PATIENT */}
        <div className="px-4 py-3 border-bottom">
          <h6 className="fw-semibold mb-2">Vijay Kumar</h6>
          <div className="row small text-muted">
            <div className="col">Age: 24</div>
            <div className="col">Sex: Male</div>
            <div className="col">Blood: B+</div>
            <div className="col">Contact: +91 9658265898</div>
          </div>
        </div>

        {/* TABLE */}
        <div className="p-4">
          <table className="table table-borderless invoice-table">
            <thead className="text-muted small border-bottom">
              <tr>
                <th>Item</th>
                <th className="text-center">Batch</th>
                <th className="text-center">Manufacturer</th>
                <th className="text-center">Qty</th>
                <th className="text-center">Price</th>
                <th className="text-center">GST</th>
                <th className="text-center">Discount</th>
                <th className="text-end">Total</th>
              </tr>
            </thead>
            <tbody>
              <Row item="Paracetamol 500mg" batch="B-4821" manufacturer="Cipla" qty="10" price="₹2.50" gst="5%" discount="-" total="₹26.25" />
              <Row item="Ibuprofen 400mg" batch="B-3210" manufacturer="Sun Pharma" qty="2" price="₹5.50" gst="5%" discount="-" total="₹30.24" />
              <Row item="Amoxicillin 250mg" batch="B-1109" manufacturer="Mankind" qty="5" price="₹8.50" gst="3%" discount="10%" total="₹66.64" />
              <Row item="Cetirizine 10mg" batch="B-5543" manufacturer="Lupin" qty="13" price="₹6.50" gst="5%" discount="-" total="₹110.25" />
            </tbody>
          </table>
        </div>

        {/* TOTAL */}
        <div className="d-flex justify-content-end px-4 pb-4 border-top">
          <div className="totals-box">
            <TotalRow label="Sub Total" value="₹458.52" />
            <TotalRow label="GST" value="₹25.48" />
            <TotalRow label="Discount" value="-₹84.00" className="text-danger" />
            <div className="d-flex justify-content-between fw-bold fs-5 border-top pt-2 mt-2">
              <span>Grand Total</span>
              <span>₹400.00</span>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="row border-top small text-muted">
          <div className="col p-3">
            <div className="text-secondary">Payment Mode</div>
            Cash
          </div>
          <div className="col p-3 border-start">
            <div className="text-secondary">Transaction ID</div>
            TXN-2026041200083
          </div>
          <div className="col p-3 border-start">
            <div className="text-secondary">Status</div>
            <span className="text-success">Paid</span>
          </div>
        </div>

        <div className="footer-bar text-center text-white py-2">
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

const Row = ({ item, batch, manufacturer, qty, price, gst, discount, total }) => (
  <tr className="border-bottom">
    <td>{item}</td>
    <td className="text-center">{batch}</td>
    <td className="text-center">{manufacturer}</td>
    <td className="text-center">x{qty}</td>
    <td className="text-center">{price}</td>
    <td className="text-center">{gst}</td>
    <td className="text-center">{discount}</td>
    <td className="text-end">{total}</td>
  </tr>
);

const TotalRow = ({ label, value, className }) => (
  <div className={`d-flex justify-content-between ${className}`}>
    <span>{label}</span>
    <span>{value}</span>
  </div>
);

export default Invoice;