import React from "react";
import { Briefcase, Plus, CheckCircle2 } from "lucide-react";

export default function CRMView() {
  const leads = [
    { id: "LEAD-101", company: "Fortis MedCity Campus", contact: "Dr. Sandeep Malik", guardsNeeded: 24, status: "Quotation Generated", estimatedValue: "₹ 6.8 L / mo" },
    { id: "LEAD-102", company: "Unitech Cyber Park", contact: "Capt. A. K. Sharma", guardsNeeded: 50, status: "Commercial Negotiation", estimatedValue: "₹ 14.2 L / mo" },
    { id: "LEAD-103", company: "Amity International School", contact: "Mrs. Rachna Roy", guardsNeeded: 15, status: "Prospect Enquiry", estimatedValue: "₹ 4.1 L / mo" }
  ];

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div className="glass-panel" style={{ padding: '24px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a' }}>CRM, Leads & Commercial Quotations</h2>
          <p style={{ fontSize: '0.82rem', color: '#64748b' }}>Lead capture → Manpower Enquiry → Quotation Approval → Zero Re-entry Client Conversion</p>
        </div>
        <button className="btn-primary"><Plus size={16} /> New Prospect Enquiry</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
        {leads.map((lead) => (
          <div key={lead.id} className="glass-panel" style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.7rem', color: '#0284c7', fontFamily: 'var(--font-mono)' }}>{lead.id}</span>
              <span className="status-badge status-info">{lead.status}</span>
            </div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginTop: '6px' }}>{lead.company}</h3>
            <div style={{ fontSize: '0.8rem', color: '#475569', margin: '12px 0' }}>
              <div>Contact: {lead.contact}</div>
              <div>Guards Requested: <strong>{lead.guardsNeeded}</strong></div>
              <div>Estimated Contract Value: <strong style={{ color: '#047857' }}>{lead.estimatedValue}</strong></div>
            </div>
            <button className="btn-emerald" style={{ width: '100%', justifyContent: 'center', fontSize: '0.8rem' }}>
              <CheckCircle2 size={14} /> Convert to Client Contract
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
