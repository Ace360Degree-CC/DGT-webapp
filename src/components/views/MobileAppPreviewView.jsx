import React, { useState } from "react";
import {
  Smartphone,
  Shield,
  AlertTriangle,
  CheckCircle2,
  Clock,
  MapPin,
  Receipt,
  Bell,
  LogOut,
  LogIn,
  Truck
} from "lucide-react";

export default function MobileAppPreviewView() {
  const [mobileRole, setMobileRole] = useState("Guard");
  const [isCheckedIn, setIsCheckedIn] = useState(true);
  const [showSosModal, setShowSosModal] = useState(false);
  const [sosSent, setSosSent] = useState(false);
  const [sosReason, setSosReason] = useState("Intruder / Security Breach");
  const [relieverStatus, setRelieverStatus] = useState(null);

  // Inspection Checklist State
  const [checklist, setChecklist] = useState([
    { id: 1, title: "Guard Uniform & Lanyard Audit", category: "Appearance", done: true },
    { id: 2, title: "Torch & Walkie-Talkie Battery Check", category: "Equipment", done: true },
    { id: 3, title: "Visitor Register Book Updates", category: "Compliance", done: false },
    { id: 4, title: "Fire Extinguisher Pressure Gauge Audit", category: "Safety", done: false },
    { id: 5, title: "Guard Alertness & Post Presence Check", category: "Duty Check", done: true },
  ]);

  const toggleChecklist = (id) => {
    setChecklist(checklist.map(item => item.id === id ? { ...item, done: !item.done } : item));
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', animation: 'fadeIn 0.3s ease' }}>
      {/* Header Banner */}
      <div className="glass-panel" style={{ padding: '20px 24px', marginBottom: '24px', background: 'linear-gradient(135deg, #0284c7 0%, #1e40af 100%)', color: '#fff' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <Smartphone size={24} />
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }}>DGT Mobile App Simulator</h2>
              <span className="glass-pill" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', border: 'none' }}>Flutter Demo UI</span>
            </div>
            <p style={{ fontSize: '0.88rem', opacity: 0.9 }}>
              Interactive live mobile preview of the 4 Key User Roles (Guard, Supervisor, Admin, Client).
            </p>
          </div>
          <div style={{ textAlign: 'right', background: 'rgba(255,255,255,0.15)', padding: '10px 16px', borderRadius: '12px', backdropFilter: 'blur(8px)' }}>
            <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', fontWeight: 700, opacity: 0.8 }}>Flutter Code Location</div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>dgt_mobile_app/</div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '360px 1fr', gap: '32px', alignItems: 'start' }}>
        
        {/* MOBILE PHONE CONTAINER SIMULATOR */}
        <div style={{
          width: '360px',
          height: '740px',
          background: '#090d16',
          borderRadius: '44px',
          padding: '14px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 10px #1e293b',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}>
          {/* Phone Top Notch / Speaker */}
          <div style={{
            width: '130px',
            height: '24px',
            background: '#0f172a',
            borderRadius: '0 0 14px 14px',
            margin: '0 auto 8px auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10
          }}>
            <div style={{ width: '40px', height: '4px', background: '#334155', borderRadius: '2px' }} />
          </div>

          {/* APP SCREEN CONTAINER */}
          <div style={{
            flex: 1,
            background: '#f8fafc',
            borderRadius: '30px',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            fontFamily: 'system-ui, sans-serif'
          }}>
            
            {/* APP BAR & ROLE SWITCHER */}
            <div style={{ background: '#0f172a', color: '#fff', padding: '12px 14px 10px 14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <img 
                    src="/DGT-logo.png" 
                    alt="Delhi Guard Team Logo" 
                    style={{ height: '28px', objectFit: 'contain' }}
                  />
                  <div>
                    <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>{mobileRole} View</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <button 
                    onClick={() => setShowSosModal(true)}
                    style={{
                      background: 'linear-gradient(135deg, #e11d48, #be123c)',
                      border: 'none',
                      color: '#fff',
                      fontSize: '0.65rem',
                      fontWeight: 900,
                      padding: '4px 8px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '3px',
                      boxShadow: '0 2px 8px rgba(225,29,72,0.4)'
                    }}
                  >
                    <AlertTriangle size={12} />
                    SOS
                  </button>
                  <Bell size={18} style={{ color: '#94a3b8' }} />
                </div>
              </div>

              {/* Role Selection Chips */}
              <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '4px' }}>
                {["Guard", "Supervisor", "Admin", "Client"].map((r) => (
                  <button
                    key={r}
                    onClick={() => setMobileRole(r)}
                    style={{
                      background: mobileRole === r ? '#0284c7' : '#1e293b',
                      color: mobileRole === r ? '#fff' : '#94a3b8',
                      border: 'none',
                      padding: '4px 10px',
                      borderRadius: '20px',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            {/* SCREEN BODY */}
            <div style={{ flex: 1, padding: '12px', overflowY: 'auto' }}>
              
              {/* GUARD ROLE VIEW */}
              {mobileRole === "Guard" && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {/* Active Shift Card */}
                  <div style={{ background: isCheckedIn ? '#ecfdf5' : '#f0f9ff', border: `1px solid ${isCheckedIn ? '#a7f3d0' : '#bae6fd'}`, padding: '12px', borderRadius: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <span style={{ fontSize: '0.65rem', fontWeight: 800, color: isCheckedIn ? '#047857' : '#0369a1' }}>
                        {isCheckedIn ? 'ON DUTY • GEOFENCE VERIFIED' : 'SCHEDULED SHIFT'}
                      </span>
                      <span style={{ fontSize: '0.65rem', background: isCheckedIn ? '#10b981' : '#0284c7', color: '#fff', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>
                        {isCheckedIn ? 'ACTIVE' : 'READY'}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a' }}>Max Healthcare Saket</div>
                    <div style={{ fontSize: '0.72rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                      <MapPin size={12} /> Main Lobby Gate 1 (Delhi)
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', pt: '8px', borderTop: '1px solid rgba(0,0,0,0.06)', fontSize: '0.72rem' }}>
                      <div>
                        <span style={{ color: '#64748b' }}>Shift: </span>
                        <strong>08:00 AM - 08:00 PM</strong>
                      </div>
                      <div>
                        <span style={{ color: '#64748b' }}>Check-in: </span>
                        <strong>{isCheckedIn ? '07:58 AM' : '--:--'}</strong>
                      </div>
                    </div>

                    <button
                      onClick={() => setIsCheckedIn(!isCheckedIn)}
                      style={{
                        width: '100%',
                        marginTop: '10px',
                        padding: '8px',
                        borderRadius: '8px',
                        border: 'none',
                        background: isCheckedIn ? '#e11d48' : '#059669',
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '0.78rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px'
                      }}
                    >
                      {isCheckedIn ? <LogOut size={14} /> : <LogIn size={14} />}
                      {isCheckedIn ? 'PUNCH OUT (END SHIFT)' : 'PUNCH IN (START SHIFT)'}
                    </button>
                  </div>

                  {/* SOP Checklist */}
                  <div style={{ background: '#fff', padding: '12px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 800, marginBottom: '8px', color: '#0f172a' }}>Post SOP Instructions</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.72rem', color: '#334155' }}>
                      <div style={{ display: 'flex', gap: '6px' }}><CheckCircle2 size={14} color="#059669" /> Scan QR visitor pass on entry</div>
                      <div style={{ display: 'flex', gap: '6px' }}><CheckCircle2 size={14} color="#059669" /> Check vehicle pass for Basement B2</div>
                      <div style={{ display: 'flex', gap: '6px' }}><CheckCircle2 size={14} color="#059669" /> 45-min patrol sweep check</div>
                    </div>
                  </div>
                </div>
              )}

              {/* SUPERVISOR ROLE VIEW */}
              {mobileRole === "Supervisor" && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {/* Reliever Shortage Banner */}
                  <div style={{ background: '#fffbeb', border: '1px solid #fde68a', padding: '10px', borderRadius: '12px' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#b45309', display: 'flex', justifyContent: 'space-between' }}>
                      <span>DLF CYBER PARK PH 2</span>
                      <span style={{ color: '#e11d48' }}>2 SHORTAGES</span>
                    </div>
                    <div style={{ fontSize: '0.7rem', color: '#78350f', marginTop: '2px' }}>22/24 Guards Deployed</div>
                    
                    <button
                      onClick={() => setRelieverStatus("Reliever Sunil Dutt Dispatched (ETA 18m)")}
                      style={{
                        width: '100%',
                        marginTop: '8px',
                        background: '#d97706',
                        color: '#fff',
                        border: 'none',
                        padding: '6px',
                        borderRadius: '6px',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '4px'
                      }}
                    >
                      <Truck size={12} /> DISPATCH RELIEVER
                    </button>
                    {relieverStatus && <div style={{ fontSize: '0.65rem', color: '#047857', marginTop: '4px', fontWeight: 700 }}>✓ {relieverStatus}</div>}
                  </div>

                  {/* Audit Checklist */}
                  <div style={{ background: '#fff', padding: '10px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 800, marginBottom: '6px' }}>Site Inspection Checklist</div>
                    {checklist.map(item => (
                      <div key={item.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 0', fontSize: '0.72rem', borderBottom: '1px solid #f1f5f9' }}>
                        <span>{item.title}</span>
                        <input type="checkbox" checked={item.done} onChange={() => toggleChecklist(item.id)} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ADMIN ROLE VIEW */}
              {mobileRole === "Admin" && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    <div style={{ background: '#fff', padding: '10px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                      <div style={{ fontSize: '0.65rem', color: '#64748b' }}>Active Guards</div>
                      <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#059669' }}>142 / 150</div>
                    </div>
                    <div style={{ background: '#fff', padding: '10px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                      <div style={{ fontSize: '0.65rem', color: '#64748b' }}>PSARA License</div>
                      <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#d97706' }}>14 Expiring</div>
                    </div>
                  </div>

                  <div style={{ background: '#fff', padding: '10px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 800, marginBottom: '6px' }}>Pending Approvals</div>
                    <div style={{ fontSize: '0.72rem', color: '#334155', background: '#f8fafc', padding: '6px', borderRadius: '6px', marginBottom: '4px' }}>
                      <strong>OT Request (4 Hrs)</strong> - Guard Vikram Singh
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#334155', background: '#f8fafc', padding: '6px', borderRadius: '6px' }}>
                      <strong>Incident Sign-off #INC-102</strong> - DLF Cyber Park
                    </div>
                  </div>
                </div>
              )}

              {/* CLIENT ROLE VIEW */}
              {mobileRole === "Client" && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ background: '#0284c7', color: '#fff', padding: '12px', borderRadius: '12px' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700 }}>Max Healthcare Saket</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 800, marginTop: '2px' }}>100% Staffed SLA</div>
                    <div style={{ fontSize: '0.7rem', opacity: 0.9, marginTop: '2px' }}>12/12 Day Shift Guards Active</div>
                  </div>

                  <div style={{ background: '#fff', padding: '10px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 800, marginBottom: '6px' }}>Invoices Summary</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', padding: '4px 0', borderBottom: '1px solid #f1f5f9' }}>
                      <span>INV-2026-089 (Sept)</span>
                      <strong style={{ color: '#d97706' }}>₹4,85,000 (Pending)</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', padding: '4px 0' }}>
                      <span>INV-2026-074 (Aug)</span>
                      <strong style={{ color: '#059669' }}>₹4,85,000 (Paid)</strong>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* SOS EMERGENCY MODAL IN SIMULATOR */}
            {showSosModal && (
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(15, 23, 42, 0.85)',
                backdropFilter: 'blur(4px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px',
                zIndex: 20
              }}>
                <div style={{ background: '#fff', borderRadius: '16px', padding: '16px', width: '100%' }}>
                  <div style={{ color: '#e11d48', fontWeight: 900, fontSize: '0.9rem', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <AlertTriangle size={18} /> SOS EMERGENCY ALARM
                  </div>

                  {sosSent ? (
                    <div style={{ textAlign: 'center', padding: '10px 0' }}>
                      <div style={{ color: '#047857', fontWeight: 800, fontSize: '0.85rem' }}>✓ ALARM BROADCASTED!</div>
                      <div style={{ fontSize: '0.7rem', color: '#64748b', marginTop: '4px' }}>Command Center & Supervisor Insp. Rajesh notified with GPS coordinates.</div>
                      <button
                        onClick={() => { setShowSosModal(false); setSosSent(false); }}
                        style={{ marginTop: '10px', background: '#e11d48', color: '#fff', border: 'none', padding: '6px 14px', borderRadius: '6px', fontSize: '0.72rem', fontWeight: 700 }}
                      >
                        CLOSE
                      </button>
                    </div>
                  ) : (
                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#475569', marginBottom: '8px' }}>Select emergency reason:</div>
                      <select
                        value={sosReason}
                        onChange={(e) => setSosReason(e.target.value)}
                        style={{ width: '100%', padding: '6px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.72rem', marginBottom: '12px' }}
                      >
                        <option>Intruder / Security Breach</option>
                        <option>Medical Emergency / Guard Injured</option>
                        <option>Fire Hazard / Smoke Detected</option>
                      </select>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        <button onClick={() => setShowSosModal(false)} style={{ flex: 1, padding: '6px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.7rem' }}>CANCEL</button>
                        <button onClick={() => setSosSent(true)} style={{ flex: 1, background: '#e11d48', color: '#fff', border: 'none', padding: '6px', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 800 }}>SEND SOS</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* BOTTOM NAV BAR */}
            <div style={{ background: '#fff', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-around', padding: '8px 0', fontSize: '0.62rem', color: '#64748b' }}>
              <div style={{ textAlign: 'center', color: '#0284c7', fontWeight: 700 }}><Shield size={14} style={{ display: 'block', margin: '0 auto' }} />Home</div>
              <div style={{ textAlign: 'center' }}><Clock size={14} style={{ display: 'block', margin: '0 auto' }} />Attendance</div>
              <div style={{ textAlign: 'center' }}><AlertTriangle size={14} style={{ display: 'block', margin: '0 auto' }} />Alerts</div>
              <div style={{ textAlign: 'center' }}><Receipt size={14} style={{ display: 'block', margin: '0 auto' }} />Profile</div>
            </div>
          </div>
        </div>

        {/* SIMULATOR FEATURES & EXPLANATION SIDE PANEL */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="glass-panel" style={{ padding: '20px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '12px', color: '#0f172a' }}>
              Interactive Mobile Features Checklist
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem' }}>
                <CheckCircle2 color="#059669" size={18} />
                <span><strong>Role Switcher:</strong> Tap the chips at top (Guard, Supervisor, Admin, Client) to switch mobile screens.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem' }}>
                <CheckCircle2 color="#059669" size={18} />
                <span><strong>One-Tap Attendance:</strong> Click "PUNCH OUT" / "PUNCH IN" on Guard View to test attendance toggle.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem' }}>
                <CheckCircle2 color="#059669" size={18} />
                <span><strong>Emergency SOS Alarm:</strong> Click the red "SOS" button in the phone app bar to trigger panic alert.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem' }}>
                <CheckCircle2 color="#059669" size={18} />
                <span><strong>Supervisor Reliever Dispatch:</strong> Switch to Supervisor View and click "DISPATCH RELIEVER".</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem' }}>
                <CheckCircle2 color="#059669" size={18} />
                <span><strong>Site Audit Checklist:</strong> Check/uncheck inspection items on Supervisor View.</span>
              </li>
            </ul>
          </div>

          <div className="glass-panel" style={{ padding: '20px', background: '#f0f9ff', borderColor: '#bae6fd' }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0369a1', marginBottom: '6px' }}>
              Flutter Source Code Structure
            </h4>
            <p style={{ fontSize: '0.82rem', color: '#0f172a', lineHeight: 1.5 }}>
              The complete native Flutter mobile codebase is located in <code style={{ background: '#fff', padding: '2px 6px', borderRadius: '4px', border: '1px solid #cbd5e1' }}>dgt_mobile_app/</code> with clean Dart architecture (<code style={{ background: '#fff', padding: '2px 6px', borderRadius: '4px' }}>lib/main.dart</code>, <code style={{ background: '#fff', padding: '2px 6px', borderRadius: '4px' }}>lib/models/</code>, <code style={{ background: '#fff', padding: '2px 6px', borderRadius: '4px' }}>lib/screens/</code>).
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
