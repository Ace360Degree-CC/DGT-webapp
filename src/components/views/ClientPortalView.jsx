import React from "react";
import { Building2, ShieldCheck, Clock, FileText, AlertTriangle } from "lucide-react";

export default function ClientPortalView({ guards, sites, invoices }) {
  const clientSite = sites[0]; // DLF Cyber City Tower B
  const siteGuards = guards.filter(g => g.assignedSite.includes('DLF'));

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      <div className="glass-panel" style={{ padding: '24px 28px', background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(15, 23, 42, 0.8) 100%)', borderLeft: '4px solid var(--accent-blue)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent-cyan)' }}>Client Self-Service Portal</span>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }}>DLF Cyber City Developers</h2>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Site: DLF Cyber City - Tower B (Contract Active)</p>
          </div>
          <span className="status-badge status-compliant">Contract Status: Active</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        <div className="glass-panel" style={{ padding: '20px' }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Sanctioned Guards</span>
          <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginTop: '4px' }}>9 Guards</h3>
        </div>
        <div className="glass-panel" style={{ padding: '20px' }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Currently On-Duty</span>
          <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#34d399', marginTop: '4px' }}>8 Guards</h3>
        </div>
        <div className="glass-panel" style={{ padding: '20px' }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Pending Shortage</span>
          <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fbbf24', marginTop: '4px' }}>1 Reliever On Way</h3>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '24px' }}>
        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '16px' }}>Live Deployed Guard List at Your Site</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--text-dim)', textAlign: 'left' }}>
              <th style={{ padding: '10px' }}>Guard Name</th>
              <th style={{ padding: '10px' }}>Rank</th>
              <th style={{ padding: '10px' }}>Duty Post</th>
              <th style={{ padding: '10px' }}>Attendance Status</th>
            </tr>
          </thead>
          <tbody>
            {siteGuards.map(g => (
              <tr key={g.id} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                <td style={{ padding: '12px', fontWeight: 700, color: '#fff' }}>{g.name}</td>
                <td style={{ padding: '12px', color: 'var(--accent-cyan)' }}>{g.rank}</td>
                <td style={{ padding: '12px', color: 'var(--text-muted)' }}>{g.assignedPost}</td>
                <td style={{ padding: '12px' }}><span className="status-badge status-compliant">On-Duty GPS Verified</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
