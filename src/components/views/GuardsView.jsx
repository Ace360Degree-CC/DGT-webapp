import React, { useState } from "react";
import {
  ShieldCheck,
  Search,
  Plus,
  FileCheck,
  Phone,
  MapPin,
  CreditCard,
  X
} from "lucide-react";

export default function GuardsView({ guards, setGuards, onOpenOnboarding }) {
  const [filterStatus, setFilterStatus] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGuard, setSelectedGuard] = useState(null);

  const filteredGuards = guards.filter((g) => {
    const matchesStatus = filterStatus === "All" || g.status === filterStatus;
    const matchesSearch = g.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          g.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          g.assignedSite.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* Header Controls */}
      <div className="glass-panel" style={{ padding: '20px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a' }}>Guard & Employee Master Directory</h2>
          <p style={{ fontSize: '0.82rem', color: '#64748b' }}>
            Complete profile, statutory identity, deployment records & document audit status.
          </p>
        </div>

        <button className="btn-emerald" onClick={onOpenOnboarding}>
          <Plus size={16} />
          <span>Add / Onboard New Guard</span>
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ position: 'relative', width: '320px' }}>
          <Search size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
          <input 
            type="text" 
            placeholder="Search Guard Name, ID or Site..."
            className="form-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ paddingLeft: '40px' }}
          />
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          {["All", "Deployed", "Available", "Absent"].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className="glass-pill"
              style={{
                background: filterStatus === status ? '#0284c7' : '#ffffff',
                color: filterStatus === status ? '#ffffff' : '#475569',
                fontWeight: filterStatus === status ? 700 : 600,
                cursor: 'pointer',
                border: '1px solid #e2e8f0',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
              }}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Guards Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
        {filteredGuards.map((guard) => (
          <div key={guard.id} className="glass-panel glass-panel-hover" style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <img 
                    src={guard.photo} 
                    alt={guard.name}
                    style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #0284c7' }}
                  />
                  <div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>{guard.name}</h3>
                    <div style={{ fontSize: '0.75rem', color: '#0284c7', fontWeight: 700 }}>{guard.rank}</div>
                    <div style={{ fontSize: '0.68rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>{guard.id}</div>
                  </div>
                </div>

                <span className={`status-badge status-${guard.status.toLowerCase()}`}>
                  {guard.status}
                </span>
              </div>

              <div style={{ fontSize: '0.8rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '6px', margin: '12px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <MapPin size={14} style={{ color: '#64748b' }} />
                  <span><strong>Site:</strong> {guard.assignedSite}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Phone size={14} style={{ color: '#64748b' }} />
                  <span>{guard.phone}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CreditCard size={14} style={{ color: '#64748b' }} />
                  <span>Bank: {guard.bankAccount.split(' - ')[0]}</span>
                </div>
              </div>

              {/* Document Expiry Quick Audit Pills */}
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '10px' }}>
                {Object.entries(guard.documents || {}).map(([docKey, docVal]) => (
                  <span 
                    key={docKey}
                    style={{
                      fontSize: '0.65rem',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontWeight: 700,
                      background: docVal.status === 'Verified' ? '#ecfdf5' : '#fff1f2',
                      color: docVal.status === 'Verified' ? '#047857' : '#be123c',
                      border: `1px solid ${docVal.status === 'Verified' ? '#a7f3d0' : '#fecdd3'}`
                    }}
                  >
                    {docKey.toUpperCase()}: {docVal.status}
                  </span>
                ))}
              </div>
            </div>

            <button 
              onClick={() => setSelectedGuard(guard)}
              className="btn-secondary" 
              style={{ width: '100%', marginTop: '16px', justifyContent: 'center' }}
            >
              <FileCheck size={14} />
              <span>Full Profile & Docs</span>
            </button>
          </div>
        ))}
      </div>

      {/* Guard Detail Modal */}
      {selectedGuard && (
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
            maxWidth: '560px',
            background: '#ffffff',
            padding: '28px',
            borderRadius: '20px',
            position: 'relative',
            boxShadow: '0 20px 50px rgba(0,0,0,0.15)'
          }}>
            <button 
              onClick={() => setSelectedGuard(null)}
              style={{ position: 'absolute', right: '20px', top: '20px', background: 'none', border: 'none', color: '#64748b', cursor: 'pointer' }}
            >
              <X size={20} />
            </button>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '20px' }}>
              <img src={selectedGuard.photo} alt={selectedGuard.name} style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover' }} />
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a' }}>{selectedGuard.name}</h3>
                <p style={{ color: '#0284c7', fontSize: '0.85rem', fontWeight: 700 }}>{selectedGuard.rank} ({selectedGuard.id})</p>
                <p style={{ color: '#64748b', fontSize: '0.78rem' }}>Joined: {selectedGuard.joiningDate}</p>
              </div>
            </div>

            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>Statutory Documents & Expiry Audit</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', background: '#f8fafc', padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              {Object.entries(selectedGuard.documents || {}).map(([key, val]) => (
                <div key={key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.82rem' }}>
                  <span style={{ textTransform: 'uppercase', fontWeight: 700, color: '#0f172a' }}>{key}</span>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <span style={{ color: '#64748b', fontSize: '0.75rem' }}>Expiry: {val.expiry}</span>
                    <span className={`status-badge status-${val.status === 'Verified' ? 'compliant' : 'expired'}`}>{val.status}</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '20px', textAlign: 'right' }}>
              <button className="btn-secondary" onClick={() => setSelectedGuard(null)}>Close Profile</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
