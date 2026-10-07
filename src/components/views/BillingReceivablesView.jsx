import React, { useState } from "react";
import {
  FileText,
  Plus,
  Printer
} from "lucide-react";

export default function BillingReceivablesView({ invoices, setInvoices, clients, addNotification }) {
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const handleGenerateInvoice = () => {
    const newInv = {
      invoiceNo: `DGT/2026-27/INV-04${13 + invoices.length}`,
      clientId: "CLI-003",
      clientName: "Max Healthcare Institute",
      billingMonth: "September 2026",
      contractedGuards: 24,
      actualDutyHours: 5760,
      baseAmount: 564000,
      otAmount: 18000,
      subtotal: 582000,
      cgst: 52380, // 9%
      sgst: 52380, // 9%
      totalAmount: 686760,
      status: "Pending Payment",
      dueDate: "2026-10-25"
    };

    setInvoices([newInv, ...invoices]);
    addNotification({
      id: Date.now(),
      title: "GST Invoice Generated",
      message: `Invoice ${newInv.invoiceNo} generated for ${newInv.clientName}. Total: ₹${newInv.totalAmount.toLocaleString('en-IN')}`,
      type: "success",
      time: "Just now"
    });
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* Header */}
      <div className="glass-panel" style={{ padding: '24px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a' }}>Client Billing, GST Invoicing & Receivables</h2>
          <p style={{ fontSize: '0.82rem', color: '#64748b' }}>
            Contract/Attendance-linked client invoicing, 18% GST calculation (CGST+SGST) & ageing collection tracking.
          </p>
        </div>

        <button className="btn-emerald" onClick={handleGenerateInvoice}>
          <Plus size={16} />
          <span>Generate New GST Invoice</span>
        </button>
      </div>

      {/* Invoice Table */}
      <div className="glass-panel" style={{ padding: '24px' }}>
        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>Billing Invoices Register</h3>

        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #e2e8f0', color: '#64748b', textAlign: 'left' }}>
              <th style={{ padding: '10px 12px' }}>Invoice No</th>
              <th style={{ padding: '10px 12px' }}>Client Company</th>
              <th style={{ padding: '10px 12px' }}>Billing Period</th>
              <th style={{ padding: '10px 12px' }}>Subtotal (Excl. Tax)</th>
              <th style={{ padding: '10px 12px' }}>GST (18%)</th>
              <th style={{ padding: '10px 12px' }}>Total Amount</th>
              <th style={{ padding: '10px 12px' }}>Payment Status</th>
              <th style={{ padding: '10px 12px', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv) => (
              <tr key={inv.invoiceNo} style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '12px', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#0284c7' }}>
                  {inv.invoiceNo}
                </td>
                <td style={{ padding: '12px' }}>
                  <div style={{ fontWeight: 700, color: '#0f172a' }}>{inv.clientName}</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{inv.clientId}</div>
                </td>
                <td style={{ padding: '12px', color: '#475569' }}>{inv.billingMonth}</td>
                <td style={{ padding: '12px', color: '#475569' }}>₹ {inv.subtotal.toLocaleString('en-IN')}</td>
                <td style={{ padding: '12px', color: '#b45309', fontWeight: 700 }}>₹ {(inv.cgst + inv.sgst).toLocaleString('en-IN')}</td>
                <td style={{ padding: '12px', fontWeight: 800, color: '#047857' }}>₹ {inv.totalAmount.toLocaleString('en-IN')}</td>
                <td style={{ padding: '12px' }}>
                  <span className={`status-badge status-${inv.status === 'Paid' ? 'compliant' : 'warning'}`}>
                    {inv.status}
                  </span>
                </td>
                <td style={{ padding: '12px', textAlign: 'right' }}>
                  <button 
                    className="btn-secondary"
                    style={{ fontSize: '0.75rem', padding: '4px 10px' }}
                    onClick={() => setSelectedInvoice(inv)}
                  >
                    <FileText size={14} />
                    <span>View Tax Invoice</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Printable Invoice Modal */}
      {selectedInvoice && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(15, 23, 42, 0.6)',
          backdropFilter: 'blur(8px)',
          zIndex: 100,
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px'
        }}>
          <div className="glass-panel animate-fade-in" style={{
            width: '100%', maxWidth: '680px', background: '#ffffff', color: '#0f172a', padding: '36px', borderRadius: '16px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #0f172a', paddingBottom: '16px' }}>
              <div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>TAX INVOICE</h2>
                <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>DELHI GUARD TEAM SECURITY SERVICES</div>
                <div style={{ fontSize: '0.78rem', color: '#64748b' }}>GSTIN: 07AAACD9900K1Z1 | Saket District Centre, New Delhi</div>
              </div>
              <img src="/DGT-logo.png" alt="Logo" style={{ height: '48px' }} />
            </div>

            <div style={{ margin: '20px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '0.85rem' }}>
              <div>
                <strong>Billed To:</strong>
                <div>{selectedInvoice.clientName}</div>
                <div style={{ color: '#64748b' }}>GSTIN: 07AAACD1234F1Z2</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div><strong>Invoice No:</strong> {selectedInvoice.invoiceNo}</div>
                <div><strong>Invoice Date:</strong> 2026-10-01</div>
                <div><strong>Due Date:</strong> {selectedInvoice.dueDate}</div>
              </div>
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', marginBottom: '20px' }}>
              <thead>
                <tr style={{ background: '#f1f5f9', borderBottom: '1px solid #cbd5e1' }}>
                  <th style={{ padding: '10px', textAlign: 'left' }}>Description of Services</th>
                  <th style={{ padding: '10px', textAlign: 'center' }}>Guards</th>
                  <th style={{ padding: '10px', textAlign: 'right' }}>Amount (₹)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '10px' }}>Security Deployment Services ({selectedInvoice.billingMonth})</td>
                  <td style={{ padding: '10px', textAlign: 'center' }}>{selectedInvoice.contractedGuards}</td>
                  <td style={{ padding: '10px', textAlign: 'right' }}>{selectedInvoice.baseAmount.toLocaleString('en-IN')}</td>
                </tr>
                {selectedInvoice.otAmount > 0 && (
                  <tr>
                    <td style={{ padding: '10px' }}>Approved Overtime Duty Charges</td>
                    <td style={{ padding: '10px', textAlign: 'center' }}>-</td>
                    <td style={{ padding: '10px', textAlign: 'right' }}>{selectedInvoice.otAmount.toLocaleString('en-IN')}</td>
                  </tr>
                )}
                <tr style={{ borderTop: '1px solid #cbd5e1' }}>
                  <td colSpan={2} style={{ padding: '8px', textAlign: 'right', fontWeight: 700 }}>Subtotal:</td>
                  <td style={{ padding: '8px', textAlign: 'right', fontWeight: 700 }}>₹ {selectedInvoice.subtotal.toLocaleString('en-IN')}</td>
                </tr>
                <tr>
                  <td colSpan={2} style={{ padding: '6px', textAlign: 'right', color: '#64748b' }}>CGST @ 9%:</td>
                  <td style={{ padding: '6px', textAlign: 'right' }}>₹ {selectedInvoice.cgst.toLocaleString('en-IN')}</td>
                </tr>
                <tr>
                  <td colSpan={2} style={{ padding: '6px', textAlign: 'right', color: '#64748b' }}>SGST @ 9%:</td>
                  <td style={{ padding: '6px', textAlign: 'right' }}>₹ {selectedInvoice.sgst.toLocaleString('en-IN')}</td>
                </tr>
                <tr style={{ background: '#f8fafc', fontWeight: 800, borderTop: '2px solid #0f172a', fontSize: '1rem' }}>
                  <td colSpan={2} style={{ padding: '12px', textAlign: 'right' }}>TOTAL INVOICE AMOUNT:</td>
                  <td style={{ padding: '12px', textAlign: 'right', color: '#047857' }}>₹ {selectedInvoice.totalAmount.toLocaleString('en-IN')}</td>
                </tr>
              </tbody>
            </table>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
              <button className="btn-secondary" style={{ color: '#0f172a' }} onClick={() => window.print()}>
                <Printer size={16} /> Print Tax Invoice
              </button>
              <button className="btn-primary" onClick={() => setSelectedInvoice(null)}>Close</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
