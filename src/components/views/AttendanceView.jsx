import React, { useState } from "react";
import {
  MapPin
} from "lucide-react";

export default function AttendanceView({ guards, addNotification }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const attendanceLogs = [
    {
      id: "ATT-901",
      guardName: "Rajesh Kumar Sharma",
      guardId: "DGT-G101",
      site: "DLF Cyber City - Tower B",
      checkInTime: "07:54 AM",
      checkOutTime: "--:--",
      gpsStatus: "Inside Geofence (28.4950° N, 77.0895° E)",
      selfieUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      status: "Verified On-Duty",
      punctuality: "On Time"
    },
    {
      id: "ATT-902",
      guardName: "Vikram Singh Tanwar",
      guardId: "DGT-G102",
      site: "Select CITYWALK Mall Saket",
      checkInTime: "07:58 AM",
      checkOutTime: "--:--",
      gpsStatus: "Inside Geofence (28.5286° N, 77.2192° E)",
      selfieUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
      status: "Verified On-Duty",
      punctuality: "On Time"
    },
    {
      id: "ATT-903",
      guardName: "Amitabh Verma",
      guardId: "DGT-G103",
      site: "Max Healthcare Hospital - Saket",
      checkInTime: "NO PUNCH",
      checkOutTime: "--:--",
      gpsStatus: "GPS Off-Location Signal",
      selfieUrl: null,
      status: "Absent / Missed Punch",
      punctuality: "Absent"
    }
  ];

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      <div className="glass-panel" style={{ padding: '24px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a' }}>Mobile Attendance & GPS Geofence Log</h2>
          <p style={{ fontSize: '0.82rem', color: '#64748b' }}>
            Real-time GPS validation, selfie photo timestamping, QR site scan & missed-punch workflows.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <span className="status-badge status-compliant">GPS Geofencing Active</span>
          <span className="status-badge status-info">Selfie AI Verified</span>
        </div>
      </div>

      {/* Attendance Grid */}
      <div className="glass-panel" style={{ padding: '24px' }}>
        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>Today's Duty Punches</h3>

        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #e2e8f0', color: '#64748b', textAlign: 'left' }}>
              <th style={{ padding: '10px 12px' }}>Guard</th>
              <th style={{ padding: '10px 12px' }}>Duty Site</th>
              <th style={{ padding: '10px 12px' }}>Check-In Time</th>
              <th style={{ padding: '10px 12px' }}>GPS Geofence Status</th>
              <th style={{ padding: '10px 12px' }}>Selfie Photo</th>
              <th style={{ padding: '10px 12px', textAlign: 'right' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceLogs.map((log) => (
              <tr key={log.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '14px 12px' }}>
                  <div style={{ fontWeight: 700, color: '#0f172a' }}>{log.guardName}</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{log.guardId}</div>
                </td>
                <td style={{ padding: '14px 12px', color: '#475569' }}>{log.site}</td>
                <td style={{ padding: '14px 12px', fontFamily: 'var(--font-mono)', fontWeight: 700, color: log.checkInTime === 'NO PUNCH' ? '#be123c' : '#047857' }}>
                  {log.checkInTime}
                </td>
                <td style={{ padding: '14px 12px', fontSize: '0.78rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: log.gpsStatus.includes('Inside') ? '#047857' : '#be123c', fontWeight: 600 }}>
                    <MapPin size={14} /> {log.gpsStatus}
                  </div>
                </td>
                <td style={{ padding: '14px 12px' }}>
                  {log.selfieUrl ? (
                    <img 
                      src={log.selfieUrl} 
                      alt="Selfie"
                      onClick={() => setSelectedPhoto(log.selfieUrl)}
                      style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover', cursor: 'pointer', border: '1px solid #0284c7' }}
                    />
                  ) : (
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>No Selfie</span>
                  )}
                </td>
                <td style={{ padding: '14px 12px', textAlign: 'right' }}>
                  <span className={`status-badge status-${log.status.includes('Verified') ? 'compliant' : 'expired'}`}>
                    {log.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
