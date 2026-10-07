import React, { useState } from "react";
import { ShieldCheck, MapPin, Camera, Clock, AlertOctagon, CheckCircle2 } from "lucide-react";

export default function GuardPortalView({ addNotification }) {
  const [checkedIn, setCheckedIn] = useState(true);

  const handleToggleCheckIn = () => {
    const newState = !checkedIn;
    setCheckedIn(newState);
    addNotification({
      id: Date.now(),
      title: newState ? "Guard Duty Check-In Success" : "Guard Duty Check-Out Recorded",
      message: newState ? "GPS Geofence (28.4950° N, 77.0895° E) & Selfie Verified." : "Check-out logged.",
      type: newState ? "success" : "info",
      time: "Just now"
    });
  };

  const handleSOS = () => {
    addNotification({
      id: Date.now(),
      title: "🚨 EMERGENCY SOS DISTRESS SIGNAL BROADCAST",
      message: "GPS Location (DLF Tower B) broadcasted to Supervisor Suresh Chandra & Control Room.",
      type: "danger",
      time: "Just now"
    });
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '480px', margin: '0 auto' }}>
      
      {/* Mobile Frame Simulation */}
      <div className="glass-panel" style={{ padding: '24px', background: '#121a2b', borderRadius: '24px', border: '2px solid var(--accent-cyan-glow)' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderBottom: '1px solid var(--border-color)', paddingBottom: '16px' }}>
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" alt="Rajesh" style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover' }} />
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Rajesh Kumar Sharma</h3>
            <div style={{ fontSize: '0.78rem', color: 'var(--accent-cyan)' }}>Head Guard / Supervisor (DGT-G101)</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>DLF Cyber City - Tower B</div>
          </div>
        </div>

        {/* Check-In / Out Big Button */}
        <div style={{ margin: '24px 0', textAlign: 'center' }}>
          <button 
            onClick={handleToggleCheckIn}
            className={checkedIn ? "btn-emerald" : "btn-primary"}
            style={{
              width: '140px',
              height: '140px',
              borderRadius: '50%',
              flexDirection: 'column',
              justifyContent: 'center',
              margin: '0 auto',
              boxShadow: checkedIn ? '0 0 30px rgba(16, 185, 129, 0.4)' : '0 0 30px rgba(56, 189, 248, 0.4)'
            }}
          >
            <Camera size={28} />
            <span style={{ fontSize: '0.85rem', marginTop: '6px' }}>{checkedIn ? 'Duty Checked-In' : 'Punch Duty Selfie'}</span>
          </button>
          
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
            <MapPin size={14} style={{ color: '#34d399' }} />
            <span>GPS Geofence: <strong>Inside DLF Tower B Boundary</strong></span>
          </div>
        </div>

        {/* Duty Schedule Card */}
        <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '16px', borderRadius: '14px', margin: '16px 0' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 700 }}>Today's Shift Roster</div>
          <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginTop: '4px' }}>Day Shift (08:00 AM - 08:00 PM)</div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Post: Main Gate Guard Post 1</div>
        </div>

        {/* SOS Emergency Trigger */}
        <button 
          onClick={handleSOS}
          className="btn-danger" 
          style={{ width: '100%', padding: '14px', borderRadius: '14px', justifyContent: 'center', fontWeight: 800, fontSize: '0.95rem' }}
        >
          <AlertOctagon size={20} />
          <span>EMERGENCY SOS DISTRESS BUTTON</span>
        </button>
      </div>

    </div>
  );
}
