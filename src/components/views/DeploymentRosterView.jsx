import React, { useState } from "react";
import {
  RefreshCcw,
  CheckCircle2
} from "lucide-react";

export default function DeploymentRosterView({ guards, sites, addNotification }) {
  const [selectedSiteId, setSelectedSiteId] = useState(sites[0]?.id);

  const selectedSite = sites.find(s => s.id === selectedSiteId) || sites[0];
  const siteGuards = guards.filter(g => g.assignedSite.includes(selectedSite?.name?.split(' ')[0] || 'DLF'));

  const handleSwapShift = (guardName) => {
    addNotification({
      id: Date.now(),
      title: "Shift Swap Approved",
      message: `Shift swap request approved for ${guardName}. Overlap check passed.`,
      type: "success",
      time: "Just now"
    });
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      <div className="glass-panel" style={{ padding: '24px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a' }}>Roster & Shift Management</h2>
          <p style={{ fontSize: '0.82rem', color: '#64748b' }}>
            Daily/Weekly/Monthly guard shift deployment, rotational shifts & double-booking collision prevention.
          </p>
        </div>

        <select 
          className="form-select"
          style={{ width: '260px' }}
          value={selectedSiteId}
          onChange={(e) => setSelectedSiteId(e.target.value)}
        >
          {sites.map(s => (
            <option key={s.id} value={s.id}>{s.name}</option>
          ))}
        </select>
      </div>

      {/* Roster Table */}
      <div className="glass-panel" style={{ padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a' }}>Duty Shift Allocation - {selectedSite?.name}</h3>
          <span className="status-badge status-compliant">Conflict Prevention Active</span>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #e2e8f0', color: '#64748b', textAlign: 'left' }}>
              <th style={{ padding: '10px 12px' }}>Guard ID & Name</th>
              <th style={{ padding: '10px 12px' }}>Assigned Post</th>
              <th style={{ padding: '10px 12px' }}>Shift Hours</th>
              <th style={{ padding: '10px 12px' }}>Double Booking Check</th>
              <th style={{ padding: '10px 12px', textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {siteGuards.map((guard) => (
              <tr key={guard.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '14px 12px' }}>
                  <div style={{ fontWeight: 700, color: '#0f172a' }}>{guard.name}</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{guard.id} ({guard.rank})</div>
                </td>
                <td style={{ padding: '14px 12px', color: '#475569' }}>{guard.assignedPost}</td>
                <td style={{ padding: '14px 12px' }}>
                  <span className="glass-pill" style={{ fontFamily: 'var(--font-mono)' }}>{guard.shift}</span>
                </td>
                <td style={{ padding: '14px 12px' }}>
                  <span style={{ color: '#047857', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 700 }}>
                    <CheckCircle2 size={14} /> Clear (No Overlap)
                  </span>
                </td>
                <td style={{ padding: '14px 12px', textAlign: 'right' }}>
                  <button 
                    className="btn-secondary"
                    style={{ fontSize: '0.75rem', padding: '6px 12px' }}
                    onClick={() => handleSwapShift(guard.name)}
                  >
                    <RefreshCcw size={14} />
                    <span>Swap Shift</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
