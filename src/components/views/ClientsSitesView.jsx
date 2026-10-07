import React, { useState } from "react";
import {
  Building2,
  MapPin,
  Plus
} from "lucide-react";

export default function ClientsSitesView({ clients, sites, onOpenNewClient }) {
  const [selectedClientId, setSelectedClientId] = useState(clients[0]?.id);

  const selectedClient = clients.find(c => c.id === selectedClientId) || clients[0];
  const clientSites = sites.filter(s => s.clientId === selectedClientId);

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* Header Banner */}
      <div className="glass-panel" style={{ padding: '24px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a' }}>Client & Site Management Hierarchy</h2>
          <p style={{ fontSize: '0.82rem', color: '#64748b' }}>
            Client Master → Site GPS Coordinates → Guard Posts → Manpower Requirement Rate Cards.
          </p>
        </div>

        <button className="btn-primary" onClick={onOpenNewClient}>
          <Plus size={16} />
          <span>Onboard Client & Site</span>
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '24px' }}>
        
        {/* Left List: Client Master */}
        <div className="glass-panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>Client Directory</h3>
          
          {clients.map((client) => {
            const isSelected = client.id === selectedClientId;
            return (
              <button
                key={client.id}
                onClick={() => setSelectedClientId(client.id)}
                style={{
                  textAlign: 'left',
                  padding: '14px',
                  borderRadius: '12px',
                  border: isSelected ? '1px solid #0284c7' : '1px solid #e2e8f0',
                  background: isSelected ? 'rgba(2, 132, 199, 0.08)' : '#ffffff',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.01)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.7rem', color: '#0284c7', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>{client.id}</span>
                  <span className="status-badge status-compliant">{client.contractStatus}</span>
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginTop: '4px' }}>{client.name}</div>
                <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '2px' }}>GSTIN: {client.gstin}</div>
              </button>
            );
          })}
        </div>

        {/* Right Detail: Selected Client & Sites Breakdown */}
        {selectedClient && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="glass-panel" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a' }}>{selectedClient.name}</h3>
                  <div style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '4px' }}>
                    Contact: <strong style={{ color: '#0f172a' }}>{selectedClient.contactPerson}</strong> ({selectedClient.phone})
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Contract Expiry</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#b45309', fontFamily: 'var(--font-mono)' }}>{selectedClient.contractEnd}</div>
                </div>
              </div>

              {/* Commercial Terms Summary */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', marginTop: '20px', background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <div>
                  <span style={{ fontSize: '0.72rem', color: '#64748b' }}>Guard Day Rate</span>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#047857' }}>₹ {selectedClient.rateCard?.guardDay?.toLocaleString('en-IN') || '24,500'} / mo</div>
                </div>
                <div>
                  <span style={{ fontSize: '0.72rem', color: '#64748b' }}>Guard Night Rate</span>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#047857' }}>₹ {selectedClient.rateCard?.guardNight?.toLocaleString('en-IN') || '26,000'} / mo</div>
                </div>
                <div>
                  <span style={{ fontSize: '0.72rem', color: '#64748b' }}>Supervisor Rate</span>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#047857' }}>₹ {selectedClient.rateCard?.supervisor?.toLocaleString('en-IN') || '32,000'} / mo</div>
                </div>
              </div>
            </div>

            {/* Sites Hierarchy */}
            <div className="glass-panel" style={{ padding: '24px' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>Configured Sites & Security Posts</h4>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {clientSites.map((site) => (
                  <div key={site.id} style={{ padding: '16px', borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>{site.name}</div>
                        <div style={{ fontSize: '0.78rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                          <MapPin size={12} /> {site.address}
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <span className="status-badge status-compliant">Sanctioned: {site.sanctioned}</span>
                      </div>
                    </div>

                    <h5 style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0284c7', marginTop: '14px', marginBottom: '8px' }}>Security Guard Posts</h5>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {site.posts?.map((post) => (
                        <div key={post.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', padding: '8px 12px', background: '#ffffff', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                          <span style={{ fontWeight: 600, color: '#0f172a' }}>{post.name}</span>
                          <span style={{ color: '#64748b' }}>Day Shift: {post.requiredDay} | Night Shift: {post.requiredNight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
