import React, { useState } from "react";
import {
  Bell,
  Search,
  Shield,
  ChevronDown,
  X
} from "lucide-react";

export const ROLES = [
  { id: "Owner / Management", label: "Owner / Management (Full Access)", icon: "👑" },
  { id: "Operations / Supervisor", label: "Operations & Supervisor", icon: "👮" },
  { id: "HR / Recruitment", label: "HR & Onboarding Specialist", icon: "📋" },
  { id: "Accounts & Payroll", label: "Finance, Billing & Payroll", icon: "💼" }
];

export default function Header({ 
  activeRole, 
  setActiveRole, 
  searchTerm, 
  setSearchTerm,
  notifications = []
}) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showRoleMenu, setShowRoleMenu] = useState(false);

  return (
    <header style={{
      height: '70px',
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid #e2e8f0',
      padding: '0 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 40
    }}>
      {/* Search Bar */}
      <div style={{ position: 'relative', width: '380px' }}>
        <Search 
          size={16} 
          style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} 
        />
        <input 
          type="text" 
          placeholder="Search Guard ID, Client, Site, Invoice..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-input"
          style={{ paddingLeft: '40px', height: '40px', borderRadius: '20px', fontSize: '0.82rem', background: '#f8fafc' }}
        />
      </div>

      {/* Action Controls & Role Switcher */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>

        {/* Notification Bell */}
        <div style={{ position: 'relative' }}>
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: '#f1f5f9',
              border: '1px solid #e2e8f0',
              color: '#0f172a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              position: 'relative',
              transition: 'all 0.2s ease'
            }}
          >
            <Bell size={18} />
            {notifications.length > 0 && (
              <span style={{
                position: 'absolute',
                top: '-2px',
                right: '-2px',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                background: '#e11d48',
                color: '#fff',
                fontSize: '0.65rem',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {notifications.length}
              </span>
            )}
          </button>

          {/* Notifications Popover */}
          {showNotifications && (
            <div className="glass-panel animate-fade-in" style={{
              position: 'absolute',
              right: 0,
              top: '48px',
              width: '340px',
              padding: '16px',
              zIndex: 60,
              background: '#ffffff',
              boxShadow: '0 20px 40px rgba(0,0,0,0.12)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a' }}>System Notifications</h4>
                <button 
                  onClick={() => setShowNotifications(false)} 
                  style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer' }}
                >
                  <X size={16} />
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '300px', overflowY: 'auto' }}>
                {notifications.map((n) => (
                  <div key={n.id} style={{
                    padding: '10px 12px',
                    borderRadius: '8px',
                    background: '#f8fafc',
                    borderLeft: `3px solid ${n.type === 'danger' ? '#e11d48' : n.type === 'warning' ? '#d97706' : '#0284c7'}`,
                    fontSize: '0.78rem'
                  }}>
                    <div style={{ fontWeight: 700, color: '#0f172a' }}>{n.title}</div>
                    <div style={{ color: '#475569', marginTop: '2px' }}>{n.message}</div>
                    <div style={{ fontSize: '0.68rem', color: '#64748b', marginTop: '4px' }}>{n.time}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Role Switcher Menu */}
        <div style={{ position: 'relative' }}>
          <button 
            onClick={() => setShowRoleMenu(!showRoleMenu)}
            style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '20px',
              padding: '8px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              color: '#0f172a',
              fontSize: '0.82rem',
              fontWeight: 600,
              boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
            }}
          >
            <Shield size={16} style={{ color: '#0284c7' }} />
            <span>Switch Role: <strong>{activeRole.split(' ')[0]}</strong></span>
            <ChevronDown size={14} style={{ color: '#64748b' }} />
          </button>

          {showRoleMenu && (
            <div className="glass-panel animate-fade-in" style={{
              position: 'absolute',
              right: 0,
              top: '48px',
              width: '280px',
              padding: '8px',
              zIndex: 60,
              background: '#ffffff',
              boxShadow: '0 20px 40px rgba(0,0,0,0.12)'
            }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#64748b', padding: '6px 10px', textTransform: 'uppercase' }}>
                Select User Perspective
              </div>
              {ROLES.map((r) => (
                <button
                  key={r.id}
                  onClick={() => {
                    setActiveRole(r.id);
                    setShowRoleMenu(false);
                  }}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: 'none',
                    background: activeRole === r.id ? 'rgba(2, 132, 199, 0.1)' : 'transparent',
                    color: activeRole === r.id ? '#0284c7' : '#0f172a',
                    fontSize: '0.82rem',
                    fontWeight: activeRole === r.id ? 700 : 500,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  <span>{r.icon}</span>
                  <span>{r.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>

      </div>
    </header>
  );
}
