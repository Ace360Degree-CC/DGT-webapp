import React, { useState } from "react";
import {
  UserPlus,
  ShieldCheck
} from "lucide-react";

export default function RecruitmentView({ recruitment, guards, setGuards, onOpenOnboarding }) {
  const [pipeline, setPipeline] = useState(recruitment || []);

  const handleApproveApplicant = (app) => {
    const newGuard = {
      id: `DGT-G${100 + guards.length + 1}`,
      name: app.name,
      rank: app.category.includes("Supervisor") ? "Supervisor" : "Security Guard",
      category: app.category,
      phone: app.phone,
      email: `${app.name.toLowerCase().replace(/\s+/g, ".")}@dgt.in`,
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
      joiningDate: new Date().toISOString().split('T')[0],
      status: "Available",
      assignedSite: "Unassigned / Standby Pool",
      assignedPost: "Standby Reliever",
      shift: "Day/Night",
      bankAccount: "SBIN0001092 - 30192019482",
      documents: {
        aadhaar: { status: "Verified", expiry: "2031-10-10" },
        pan: { status: "Verified", expiry: "N/A" },
        policeVerification: { status: "Verified", expiry: "2027-09-15" }
      },
      metrics: { rating: 4.8, attendanceRate: 100, incidentsHandled: 0 }
    };

    setGuards([newGuard, ...guards]);
    setPipeline(pipeline.filter(p => p.id !== app.id));
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      <div className="glass-panel" style={{ padding: '24px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a' }}>Recruitment & Onboarding Pipeline</h2>
          <p style={{ fontSize: '0.82rem', color: '#64748b' }}>
            Candidate sourcing, document collection, verification & zero-re-entry employee conversion.
          </p>
        </div>

        <button className="btn-emerald" onClick={onOpenOnboarding}>
          <UserPlus size={16} />
          <span>New Applicant Form</span>
        </button>
      </div>

      {/* Pipeline Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
        {pipeline.map((applicant) => (
          <div key={applicant.id} className="glass-panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: '#0284c7', fontWeight: 700 }}>{applicant.id}</span>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginTop: '2px' }}>{applicant.name}</h3>
                </div>
                <span className="status-badge status-info">{applicant.stage}</span>
              </div>

              <div style={{ fontSize: '0.8rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '6px', margin: '14px 0' }}>
                <div><strong>Category:</strong> {applicant.category}</div>
                <div><strong>Experience:</strong> {applicant.experienceYears} Years</div>
                <div><strong>Phone:</strong> {applicant.phone}</div>
                <div><strong>Docs Status:</strong> {applicant.documentsStatus}</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', marginTop: '14px' }}>
              <button 
                className="btn-emerald" 
                style={{ flex: 1, justifyContent: 'center', fontSize: '0.8rem' }}
                onClick={() => handleApproveApplicant(applicant)}
              >
                <ShieldCheck size={14} />
                <span>Approve & Onboard</span>
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
