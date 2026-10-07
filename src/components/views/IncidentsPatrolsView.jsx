import React, { useState } from "react";
import {
  AlertTriangle,
  Plus
} from "lucide-react";

export default function IncidentsPatrolsView({ incidents, setIncidents, addNotification }) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [newIncident, setNewIncident] = useState({
    category: "Security Intrusion / Breach",
    siteName: "DLF Cyber City - Tower B",
    reportedBy: "Rajesh Kumar Sharma",
    severity: "High",
    description: "Tailgating observed at Parking Gate B. Unauthorised vehicle stopped by barrier guard."
  });

  const handleAddIncident = () => {
    const item = {
      id: `INC-${8900 + incidents.length + 1}`,
      date: new Date().toISOString().replace('T', ' ').substring(0, 16),
      clientName: "DLF Cyber City",
      ...newIncident,
      status: "Investigating",
      photoUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=400"
    };

    setIncidents([item, ...incidents]);
    addNotification({
      id: Date.now(),
      title: "New Incident Logged & Escalated",
      message: `Incident ${item.id} logged. Client CSO notified via SMS.`,
      type: "danger",
      time: "Just now"
    });
    setShowAddModal(false);
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      <div className="glass-panel" style={{ padding: '24px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a' }}>Incident, Complaint & Security Operations</h2>
          <p style={{ fontSize: '0.82rem', color: '#64748b' }}>
            Real-time occurrence logging, photo evidence attachments, escalation matrix & corrective action tracking.
          </p>
        </div>

        <button className="btn-danger" onClick={() => setShowAddModal(true)}>
          <Plus size={16} />
          <span>Log Security Incident</span>
        </button>
      </div>

      {/* Incident Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '20px' }}>
        {incidents.map((inc) => (
          <div key={inc.id} className="glass-panel" style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#0284c7' }}>{inc.id}</span>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a' }}>{inc.category}</h3>
              </div>
              <span className={`status-badge status-${inc.severity === 'High' ? 'danger' : 'warning'}`}>
                {inc.severity} Severity
              </span>
            </div>

            <div style={{ fontSize: '0.8rem', color: '#475569', margin: '12px 0' }}>
              <div><strong>Site:</strong> {inc.siteName}</div>
              <div><strong>Reported By:</strong> {inc.reportedBy} ({inc.date})</div>
              <p style={{ marginTop: '8px', color: '#0f172a' }}>{inc.description}</p>
            </div>

            {inc.photoUrl && (
              <img src={inc.photoUrl} alt="Incident Photo Evidence" style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '8px', marginBottom: '12px', border: '1px solid #e2e8f0' }} />
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #e2e8f0', paddingTop: '12px' }}>
              <span className="status-badge status-compliant">{inc.status}</span>
              <button className="btn-secondary" style={{ fontSize: '0.75rem', padding: '4px 10px' }}>Export MIS</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
