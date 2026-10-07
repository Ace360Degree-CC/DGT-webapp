import React, { useState } from "react";
import {
  ClipboardCheck,
  AlertTriangle,
  BookOpen
} from "lucide-react";

export default function SupervisorOpsView({ sites, onOpenAbsence, addNotification }) {
  const [checklist, setChecklist] = useState([
    { id: 1, task: "Verify Guard Uniform & Grooming Standard", done: true },
    { id: 2, task: "Inspect Metal Detectors & Baggage Scanners", done: true },
    { id: 3, task: "Verify Visitor & Material Gate Registers", done: false },
    { id: 4, task: "Perform Night Patrol Checkpoint Scan (QR Code)", done: true },
    { id: 5, task: "Digital Shift Handover Log Verification", done: true }
  ]);

  const toggleCheck = (id) => {
    setChecklist(checklist.map(c => c.id === id ? { ...c, done: !c.done } : c));
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      <div className="glass-panel" style={{ padding: '24px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a' }}>Supervisor Mobile Operations & Inspections</h2>
          <p style={{ fontSize: '0.82rem', color: '#64748b' }}>
            Field site inspections, guard verification, shortage reliever deployment & digital handover logbooks.
          </p>
        </div>

        <button className="btn-danger" onClick={onOpenAbsence}>
          <AlertTriangle size={16} />
          <span>Report Site Shortage & Assign Reliever</span>
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        
        {/* Inspection Checklist */}
        <div className="glass-panel" style={{ padding: '24px' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ClipboardCheck size={20} style={{ color: '#0284c7' }} />
            <span>Daily Site Inspection Checklist (DLF Cyber City)</span>
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {checklist.map((item) => (
              <div 
                key={item.id}
                onClick={() => toggleCheck(item.id)}
                style={{
                  padding: '12px 16px',
                  borderRadius: '10px',
                  background: item.done ? '#ecfdf5' : '#ffffff',
                  border: `1px solid ${item.done ? '#a7f3d0' : '#e2e8f0'}`,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <input type="checkbox" checked={item.done} readOnly style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
                <span style={{ fontSize: '0.85rem', fontWeight: item.done ? 700 : 500, color: item.done ? '#047857' : '#0f172a' }}>
                  {item.task}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Shift Handover Logbook */}
        <div className="glass-panel" style={{ padding: '24px' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BookOpen size={20} style={{ color: '#b45309' }} />
            <span>Digital Shift Handover Logbook</span>
          </h3>

          <div style={{ background: '#f8fafc', padding: '14px', borderRadius: '10px', fontSize: '0.82rem', color: '#475569', border: '1px solid #e2e8f0' }}>
            <div style={{ fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>Shift Log #8902 - Day Shift Handover</div>
            <p>"All 8 guard posts manned at DLF Cyber City Tower B. Keys for South Ramp access handed over to Night Shift Supervisor Rajesh Sharma. No key breaches."</p>
            <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '8px' }}>Recorded by Supervisor Suresh Chandra at 20:00</div>
          </div>
        </div>

      </div>

    </div>
  );
}
