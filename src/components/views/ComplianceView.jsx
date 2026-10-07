import React, { useState } from "react";
import {
  AlertTriangle,
  Lock,
  BellRing
} from "lucide-react";

export default function ComplianceView({ guards, setGuards, addNotification }) {
  const [blockNonCompliant, setBlockNonCompliant] = useState(true);

  // Extract all documents from all guards with their status
  const documentAudits = [];
  guards.forEach((g) => {
    Object.entries(g.documents || {}).forEach(([docType, docData]) => {
      documentAudits.push({
        guardId: g.id,
        guardName: g.name,
        assignedSite: g.assignedSite,
        docType: docType.toUpperCase(),
        status: docData.status,
        expiry: docData.expiry
      });
    });
  });

  const expiringAlerts = documentAudits.filter(d => d.status === 'Expiring Soon' || d.status === 'Expired');

  const handleSendReminder = (guardName, docType) => {
    addNotification({
      id: Date.now(),
      title: "Document Renewal Alert Sent",
      message: `Automated WhatsApp/SMS alert sent to ${guardName} for ${docType} renewal.`,
      type: "warning",
      time: "Just now"
    });
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* Header Banner */}
      <div className="glass-panel" style={{ padding: '24px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a' }}>Guard Document Compliance & Expiry Engine</h2>
          <p style={{ fontSize: '0.82rem', color: '#64748b' }}>
            Configurable statutory document alerts (30/60/90 days) for Aadhaar, Police Verification, Gun Licenses & PSARA.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#f8fafc', padding: '8px 14px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
          <Lock size={16} style={{ color: blockNonCompliant ? '#047857' : '#64748b' }} />
          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0f172a' }}>Auto-Block Deployment Policy</span>
          <input 
            type="checkbox" 
            checked={blockNonCompliant} 
            onChange={(e) => setBlockNonCompliant(e.target.checked)}
            style={{ width: '18px', height: '18px', cursor: 'pointer' }}
          />
        </div>
      </div>

      {/* Critical Alerts Banner */}
      {expiringAlerts.length > 0 && (
        <div style={{ background: '#fff1f2', border: '1px solid #fecdd3', padding: '16px 20px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <AlertTriangle size={24} style={{ color: '#be123c' }} />
            <div>
              <div style={{ fontWeight: 800, color: '#be123c', fontSize: '0.95rem' }}>{expiringAlerts.length} Critical Compliance Flags Identified</div>
              <div style={{ fontSize: '0.8rem', color: '#475569' }}>Guards with expired/expiring Police Verification or Aadhaar cannot be deployed per BGF policy.</div>
            </div>
          </div>
        </div>
      )}

      {/* Audit Matrix Table */}
      <div className="glass-panel" style={{ padding: '24px' }}>
        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>Statutory Document Audit Matrix</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #e2e8f0', color: '#64748b', textAlign: 'left' }}>
              <th style={{ padding: '10px 12px' }}>Guard Name</th>
              <th style={{ padding: '10px 12px' }}>Document Type</th>
              <th style={{ padding: '10px 12px' }}>Expiration Date</th>
              <th style={{ padding: '10px 12px' }}>Status</th>
              <th style={{ padding: '10px 12px', textAlign: 'right' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {documentAudits.map((item, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '12px' }}>
                  <div style={{ fontWeight: 700, color: '#0f172a' }}>{item.guardName}</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{item.guardId} - {item.assignedSite}</div>
                </td>
                <td style={{ padding: '12px', fontWeight: 600, color: '#0f172a' }}>{item.docType}</td>
                <td style={{ padding: '12px', color: '#475569', fontFamily: 'var(--font-mono)' }}>{item.expiry}</td>
                <td style={{ padding: '12px' }}>
                  <span className={`status-badge status-${item.status === 'Verified' ? 'compliant' : item.status === 'Expiring Soon' ? 'warning' : 'expired'}`}>
                    {item.status}
                  </span>
                </td>
                <td style={{ padding: '12px', textAlign: 'right' }}>
                  {item.status !== 'Verified' && (
                    <button 
                      className="btn-secondary"
                      style={{ fontSize: '0.75rem', padding: '6px 12px' }}
                      onClick={() => handleSendReminder(item.guardName, item.docType)}
                    >
                      <BellRing size={14} />
                      <span>Send Renewal SMS</span>
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
