import React from "react";
import {
  LayoutDashboard,
  ShieldCheck,
  Building2,
  Users,
  CalendarDays,
  Clock,
  AlertTriangle,
  FileText,
  BadgeIndianRupee,
  Briefcase,
  PackageCheck,
  ChevronRight,
  ShieldAlert
} from "lucide-react";

export const NAVIGATION_ITEMS = [
  { id: "dashboard", label: "MIS Dashboard", icon: LayoutDashboard, category: "Core" },
  { id: "guards", label: "Guard Master", icon: ShieldCheck, category: "Operations" },
  { id: "compliance", label: "Document Compliance", icon: FileText, category: "Operations", badgeAlert: true },
  { id: "sites", label: "Clients & Sites", icon: Building2, category: "Operations" },
  { id: "roster", label: "Roster & Shifts", icon: CalendarDays, category: "Operations" },
  { id: "attendance", label: "Guard Attendance", icon: Clock, category: "Operations" },
  { id: "supervisor", label: "Supervisor Ops", icon: ShieldAlert, category: "Operations" },
  { id: "incidents", label: "Incidents & Patrols", icon: AlertTriangle, category: "Operations" },
  { id: "recruitment", label: "Recruitment Pipeline", icon: Users, category: "HR & Admin" },
  { id: "payroll", label: "Payroll & Statutory", icon: BadgeIndianRupee, category: "Finance" },
  { id: "billing", label: "Client Billing & GST", icon: FileText, category: "Finance" },
  { id: "crm", label: "CRM & Leads", icon: Briefcase, category: "Sales" },
  { id: "assets", label: "Assets & Inventory", icon: PackageCheck, category: "Logistics" }
];

export default function Sidebar({ activeTab, setActiveTab, activeRole, expiringDocsCount = 2 }) {
  return (
    <aside style={{
      width: '260px',
      height: '100vh',
      position: 'fixed',
      left: 0,
      top: 0,
      background: '#ffffff',
      borderRight: '1px solid #e2e8f0',
      display: 'flex',
      flexDirection: 'column',
      zIndex: 50,
      overflowY: 'auto',
      boxShadow: '2px 0 10px rgba(0,0,0,0.02)'
    }}>
      {/* Brand Header with fitted logo */}
      <div style={{
        padding: '16px 20px',
        borderBottom: '1px solid #e2e8f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fafafa',
        minHeight: '74px'
      }}>
        <img 
          src="/DGT-logo.png" 
          alt="Delhi Guard Team Logo" 
          style={{ 
            maxWidth: '100%', 
            maxHeight: '52px', 
            width: 'auto',
            height: 'auto',
            objectFit: 'contain' 
          }}
        />
      </div>

      {/* Role Badge Indicator */}
      <div style={{ padding: '12px 16px 4px 16px' }}>
        <div style={{
          background: 'rgba(2, 132, 199, 0.06)',
          border: '1px solid rgba(2, 132, 199, 0.18)',
          borderRadius: '10px',
          padding: '8px 12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ fontSize: '0.62rem', textTransform: 'uppercase', color: '#64748b', fontWeight: 700, letterSpacing: '0.05em' }}>
              ACTIVE ROLE
            </div>
            <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0284c7' }}>
              {activeRole}
            </div>
          </div>
          <span style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#059669',
            boxShadow: '0 0 6px #059669'
          }} />
        </div>
      </div>

      {/* Navigation Group List */}
      <div style={{ flex: 1, padding: '12px 14px' }}>
        {["Core", "Operations", "HR & Admin", "Finance", "Sales", "Logistics"].map((category) => {
          const catItems = NAVIGATION_ITEMS.filter((item) => item.category === category);
          if (catItems.length === 0) return null;

          return (
            <div key={category} style={{ marginBottom: '14px' }}>
              <div style={{
                fontSize: '0.68rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#94a3b8',
                padding: '4px 10px 6px 10px'
              }}>
                {category}
              </div>

              {catItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeTab === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '9px 12px',
                      marginBottom: '2px',
                      borderRadius: '10px',
                      border: 'none',
                      background: isActive 
                        ? 'linear-gradient(90deg, rgba(2, 132, 199, 0.12) 0%, rgba(37, 99, 235, 0.05) 100%)' 
                        : 'transparent',
                      color: isActive ? '#0284c7' : '#475569',
                      fontWeight: isActive ? 800 : 600,
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                      borderLeft: isActive ? '3px solid #0284c7' : '3px solid transparent'
                    }}
                  >
                    <IconComponent size={18} style={{ color: isActive ? '#0284c7' : '#64748b' }} />
                    <span style={{ flex: 1, textAlign: 'left' }}>{item.label}</span>

                    {item.badgeAlert && expiringDocsCount > 0 && (
                      <span style={{
                        background: '#fff1f2',
                        color: '#be123c',
                        border: '1px solid #fecdd3',
                        fontSize: '0.68rem',
                        fontWeight: 800,
                        padding: '1px 6px',
                        borderRadius: '999px'
                      }}>
                        {expiringDocsCount}
                      </span>
                    )}

                    {isActive && <ChevronRight size={14} style={{ color: '#0284c7' }} />}
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* System Footer Note */}
      <div style={{
        padding: '14px 20px',
        borderTop: '1px solid #e2e8f0',
        fontSize: '0.72rem',
        color: '#64748b',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#fafafa'
      }}>
        <span>BGF ERP Engine</span>
        <span style={{ color: '#059669', fontWeight: 700 }}>v2.4 Active</span>
      </div>
    </aside>
  );
}
