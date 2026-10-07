import React from "react";
import {
  Users,
  Building2,
  ShieldAlert,
  BadgeIndianRupee,
  AlertTriangle,
  TrendingUp,
  FileText,
  ArrowUpRight,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function DashboardView({ 
  guards = [], 
  clients = [], 
  sites = [], 
  incidents = [], 
  invoices = [],
  setActiveTab,
  onOpenOnboarding,
  onOpenAbsence
}) {
  const totalGuards = guards.length;
  const deployedGuards = guards.filter(g => g.status === 'Deployed').length;
  const availableGuards = guards.filter(g => g.status === 'Available').length;

  const totalSanctioned = sites.reduce((sum, s) => sum + s.sanctioned, 0);
  const totalShortage = sites.reduce((sum, s) => sum + s.shortage, 0);
  const totalRevenue = invoices.reduce((sum, inv) => sum + inv.totalAmount, 0);

  const expiringDocsCount = guards.filter(g => 
    Object.values(g.documents || {}).some(d => d.status === 'Expiring Soon' || d.status === 'Expired')
  ).length;

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Top Banner & Quick Actions */}
      <div className="glass-panel" style={{
        padding: '24px 28px',
        background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)',
        borderLeft: '4px solid #0284c7',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <Sparkles size={18} style={{ color: '#0284c7' }} />
            <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#0284c7' }}>
              EXECUTIVE MIS OVERVIEW
            </span>
          </div>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>Delhi Guard Team ERP Dashboard</h2>
          <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '2px' }}>
            Real-time manpower deployment, site shortages, document compliance & financial metrics.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn-emerald" onClick={onOpenOnboarding}>
            <Users size={16} />
            <span>Onboard Guard</span>
          </button>
          <button className="btn-danger" onClick={onOpenAbsence}>
            <ShieldAlert size={16} />
            <span>Handle Absence</span>
          </button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
        
        {/* KPI 1: Total Workforce */}
        <div className="glass-panel glass-panel-hover" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>Total Active Guards</span>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginTop: '4px', color: '#0f172a' }}>{totalGuards}</h3>
            </div>
            <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(2, 132, 199, 0.1)', color: '#0284c7' }}>
              <Users size={22} />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '14px', fontSize: '0.75rem' }}>
            <span style={{ color: '#047857', fontWeight: 700 }}>{deployedGuards} Deployed</span>
            <span style={{ color: '#94a3b8' }}>|</span>
            <span style={{ color: '#0369a1', fontWeight: 700 }}>{availableGuards} Standby</span>
          </div>
        </div>

        {/* KPI 2: Site Manpower Shortage */}
        <div className="glass-panel glass-panel-hover" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>Sanctioned vs Shortage</span>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginTop: '4px', color: totalShortage > 0 ? '#b45309' : '#0f172a' }}>
                {totalShortage} <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#64748b' }}>/ {totalSanctioned}</span>
              </h3>
            </div>
            <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(217, 119, 6, 0.1)', color: '#d97706' }}>
              <Building2 size={22} />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '14px', fontSize: '0.75rem', color: totalShortage > 0 ? '#b45309' : '#047857' }}>
            <AlertTriangle size={14} />
            <span>{totalShortage > 0 ? `${totalShortage} site post gaps require reliever` : 'All posts 100% manned'}</span>
          </div>
        </div>

        {/* KPI 3: Document Compliance Alert */}
        <div className="glass-panel glass-panel-hover" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>Compliance Alerts</span>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginTop: '4px', color: expiringDocsCount > 0 ? '#be123c' : '#047857' }}>
                {expiringDocsCount} <span style={{ fontSize: '0.8rem', fontWeight: 500, color: '#94a3b8' }}>Docs</span>
              </h3>
            </div>
            <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(225, 29, 72, 0.1)', color: '#e11d48' }}>
              <FileText size={22} />
            </div>
          </div>
          <button 
            onClick={() => setActiveTab('compliance')}
            style={{ background: 'none', border: 'none', color: '#0284c7', fontSize: '0.75rem', fontWeight: 700, marginTop: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            <span>Audit Expiry Calendar</span>
            <ArrowUpRight size={14} />
          </button>
        </div>

        {/* KPI 4: Monthly Billed Revenue */}
        <div className="glass-panel glass-panel-hover" style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>Billed Revenue (Sep 2026)</span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginTop: '4px', color: '#047857' }}>
                ₹ {(totalRevenue / 100000).toFixed(2)} L
              </h3>
            </div>
            <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(5, 150, 105, 0.1)', color: '#059669' }}>
              <BadgeIndianRupee size={22} />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '14px', fontSize: '0.75rem', color: '#047857' }}>
            <TrendingUp size={14} />
            <span>+8.4% vs last month profit margin</span>
          </div>
        </div>

      </div>

      {/* Main Grid Section: Site Hierarchy Status & Recent Incidents */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        
        {/* Left Column: Live Site Manpower Deployment Table */}
        <div className="glass-panel" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a' }}>Client Site Deployment Status</h3>
            <button 
              onClick={() => setActiveTab('sites')}
              style={{ background: 'none', border: 'none', color: '#0284c7', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              <span>View All Sites</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #e2e8f0', color: '#64748b', textAlign: 'left' }}>
                <th style={{ padding: '10px 12px' }}>Site / Client</th>
                <th style={{ padding: '10px 12px' }}>Supervisor</th>
                <th style={{ padding: '10px 12px', textAlign: 'center' }}>Sanctioned</th>
                <th style={{ padding: '10px 12px', textAlign: 'center' }}>Deployed</th>
                <th style={{ padding: '10px 12px', textAlign: 'center' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {sites.map((site) => (
                <tr key={site.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '14px 12px' }}>
                    <div style={{ fontWeight: 700, color: '#0f172a' }}>{site.name}</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{site.clientName}</div>
                  </td>
                  <td style={{ padding: '14px 12px', color: '#475569' }}>{site.supervisorName}</td>
                  <td style={{ padding: '14px 12px', textAlign: 'center', fontWeight: 700, color: '#0f172a' }}>{site.sanctioned}</td>
                  <td style={{ padding: '14px 12px', textAlign: 'center', fontWeight: 700, color: '#047857' }}>{site.deployed}</td>
                  <td style={{ padding: '14px 12px', textAlign: 'center' }}>
                    {site.shortage > 0 ? (
                      <span className="status-badge status-warning">
                        -{site.shortage} Shortage
                      </span>
                    ) : (
                      <span className="status-badge status-compliant">
                        Full Strength
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right Column: Live Incident & Patrol Feed */}
        <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a' }}>Security Incidents</h3>
            <button 
              onClick={() => setActiveTab('incidents')}
              style={{ background: 'none', border: 'none', color: '#0284c7', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer' }}
            >
              Log Incident
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', flex: 1, overflowY: 'auto' }}>
            {incidents.map((inc) => (
              <div key={inc.id} style={{
                padding: '12px',
                borderRadius: '10px',
                background: '#f8fafc',
                border: '1px solid #e2e8f0'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, color: inc.severity === 'High' ? '#be123c' : '#b45309' }}>
                    [{inc.severity} SEVERITY]
                  </span>
                  <span style={{ fontSize: '0.68rem', color: '#64748b' }}>{inc.date}</span>
                </div>
                <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#0f172a', marginTop: '4px' }}>
                  {inc.category}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#475569', marginTop: '2px' }}>
                  {inc.siteName} - Reported by {inc.reportedBy}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
