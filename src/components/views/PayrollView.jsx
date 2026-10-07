import React, { useState } from "react";
import {
  Lock,
  Download,
  FileCheck,
  Printer
} from "lucide-react";

export default function PayrollView({ guards, addNotification }) {
  const [payrollLocked, setPayrollLocked] = useState(true);
  const [selectedGuardForPayslip, setSelectedGuardForPayslip] = useState(null);

  const handleDownloadBankExport = () => {
    // Generate CSV content
    const csvRows = [
      ["Employee ID", "Guard Name", "Bank Name & IFSC", "Account Number", "Net Payable (INR)"],
      ...guards.map(g => [g.id, g.name, g.bankAccount.split(' - ')[0], g.bankAccount.split(' - ')[1], 24500])
    ];

    const csvContent = "data:text/csv;charset=utf-8," + csvRows.map(e => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "DGT_Salary_Bank_Transfer_Sep2026.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    addNotification({
      id: Date.now(),
      title: "Bank Salary Export Generated",
      message: "HDFC/SBI formatted salary transfer CSV downloaded.",
      type: "success",
      time: "Just now"
    });
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* Header */}
      <div className="glass-panel" style={{ padding: '24px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a' }}>Payroll & Statutory Deductions Processing</h2>
          <p style={{ fontSize: '0.82rem', color: '#64748b' }}>
            Attendance-linked monthly payroll, statutory PF (12%), ESIC (0.75%), TDS & bank salary transfer export.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <button 
            className="btn-secondary"
            onClick={() => setPayrollLocked(!payrollLocked)}
          >
            <Lock size={16} style={{ color: payrollLocked ? '#047857' : '#be123c' }} />
            <span>{payrollLocked ? 'Attendance Locked' : 'Unlock Attendance'}</span>
          </button>
          
          <button className="btn-emerald" onClick={handleDownloadBankExport}>
            <Download size={16} />
            <span>Export Salary Bank File (CSV)</span>
          </button>
        </div>
      </div>

      {/* Summary KPI Panel */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
        <div className="glass-panel" style={{ padding: '16px 20px' }}>
          <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Gross Salary Expense</span>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginTop: '4px' }}>₹ 23,50,000</h3>
        </div>
        <div className="glass-panel" style={{ padding: '16px 20px' }}>
          <span style={{ fontSize: '0.75rem', color: '#64748b' }}>PF Contribution (12%)</span>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0284c7', marginTop: '4px' }}>₹ 2,82,000</h3>
        </div>
        <div className="glass-panel" style={{ padding: '16px 20px' }}>
          <span style={{ fontSize: '0.75rem', color: '#64748b' }}>ESIC Contribution (0.75%)</span>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0284c7', marginTop: '4px' }}>₹ 17,625</h3>
        </div>
        <div className="glass-panel" style={{ padding: '16px 20px' }}>
          <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Net Salary Disbursement</span>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#047857', marginTop: '4px' }}>₹ 21,51,875</h3>
        </div>
      </div>

      {/* Payroll Table */}
      <div className="glass-panel" style={{ padding: '24px' }}>
        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>September 2026 Guard Salary Register</h3>

        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #e2e8f0', color: '#64748b', textAlign: 'left' }}>
              <th style={{ padding: '10px 12px' }}>Guard ID & Name</th>
              <th style={{ padding: '10px 12px' }}>Duty Days</th>
              <th style={{ padding: '10px 12px' }}>Basic + HRA</th>
              <th style={{ padding: '10px 12px' }}>PF Deduct</th>
              <th style={{ padding: '10px 12px' }}>ESIC Deduct</th>
              <th style={{ padding: '10px 12px' }}>Net Salary</th>
              <th style={{ padding: '10px 12px', textAlign: 'right' }}>Payslip</th>
            </tr>
          </thead>
          <tbody>
            {guards.map((guard) => (
              <tr key={guard.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '12px' }}>
                  <div style={{ fontWeight: 700, color: '#0f172a' }}>{guard.name}</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{guard.id} ({guard.rank})</div>
                </td>
                <td style={{ padding: '12px', fontWeight: 700, color: '#0f172a' }}>26 Days</td>
                <td style={{ padding: '12px', color: '#475569' }}>₹ 25,000</td>
                <td style={{ padding: '12px', color: '#be123c' }}>- ₹ 3,000</td>
                <td style={{ padding: '12px', color: '#be123c' }}>- ₹ 187.5</td>
                <td style={{ padding: '12px', fontWeight: 800, color: '#047857' }}>₹ 21,812.5</td>
                <td style={{ padding: '12px', textAlign: 'right' }}>
                  <button 
                    className="btn-secondary" 
                    style={{ fontSize: '0.75rem', padding: '4px 10px' }}
                    onClick={() => setSelectedGuardForPayslip(guard)}
                  >
                    <FileCheck size={14} />
                    <span>View Payslip</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Printable Payslip Modal */}
      {selectedGuardForPayslip && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(15, 23, 42, 0.6)',
          backdropFilter: 'blur(8px)',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px'
        }}>
          <div className="glass-panel animate-fade-in" style={{
            width: '100%',
            maxWidth: '600px',
            background: '#ffffff',
            color: '#0f172a',
            padding: '32px',
            borderRadius: '16px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.2)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #0f172a', paddingBottom: '16px' }}>
              <div>
                <h2 style={{ fontSize: '1.2rem', fontWeight: 800 }}>DELHI GUARD TEAM (BGF ERP)</h2>
                <p style={{ fontSize: '0.8rem', color: '#64748b' }}>Payslip for the month of September 2026</p>
              </div>
              <img src="/DGT-logo.png" alt="Logo" style={{ height: '40px' }} />
            </div>

            <div style={{ margin: '20px 0', fontSize: '0.85rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div><strong>Employee Name:</strong> {selectedGuardForPayslip.name}</div>
              <div><strong>Guard ID:</strong> {selectedGuardForPayslip.id}</div>
              <div><strong>Designation:</strong> {selectedGuardForPayslip.rank}</div>
              <div><strong>Bank Account:</strong> {selectedGuardForPayslip.bankAccount}</div>
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', marginBottom: '20px' }}>
              <thead>
                <tr style={{ background: '#f1f5f9' }}>
                  <th style={{ padding: '8px', textAlign: 'left' }}>Earnings</th>
                  <th style={{ padding: '8px', textAlign: 'right' }}>Amount (₹)</th>
                  <th style={{ padding: '8px', textAlign: 'left' }}>Deductions</th>
                  <th style={{ padding: '8px', textAlign: 'right' }}>Amount (₹)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '8px' }}>Basic Pay + HRA</td>
                  <td style={{ padding: '8px', textAlign: 'right' }}>25,000</td>
                  <td style={{ padding: '8px' }}>Provident Fund (PF)</td>
                  <td style={{ padding: '8px', textAlign: 'right' }}>3,000</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px' }}>Overtime Allowance</td>
                  <td style={{ padding: '8px', textAlign: 'right' }}>0</td>
                  <td style={{ padding: '8px' }}>ESIC Insurance</td>
                  <td style={{ padding: '8px', textAlign: 'right' }}>187.5</td>
                </tr>
                <tr style={{ fontWeight: 800, background: '#f8fafc', borderTop: '1px solid #cbd5e1' }}>
                  <td style={{ padding: '8px' }}>Gross Earnings</td>
                  <td style={{ padding: '8px', textAlign: 'right' }}>25,000</td>
                  <td style={{ padding: '8px' }}>Total Deductions</td>
                  <td style={{ padding: '8px', textAlign: 'right' }}>3,187.5</td>
                </tr>
              </tbody>
            </table>

            <div style={{ background: '#ecfdf5', padding: '12px', borderRadius: '8px', border: '1px solid #a7f3d0', fontSize: '0.9rem', fontWeight: 800, color: '#047857', display: 'flex', justifyContent: 'space-between' }}>
              <span>NET PAYABLE AMOUNT:</span>
              <span>₹ 21,812.50</span>
            </div>

            <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
              <button className="btn-secondary" style={{ color: '#0f172a' }} onClick={() => window.print()}>
                <Printer size={16} /> Print Payslip
              </button>
              <button className="btn-primary" onClick={() => setSelectedGuardForPayslip(null)}>Close</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
