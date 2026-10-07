import React, { useState } from "react";
import {
  UserPlus,
  Building,
  UserX,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  X
} from "lucide-react";

export default function WorkflowsBar({ 
  guards, 
  setGuards, 
  clients, 
  setClients, 
  sites, 
  setSites, 
  addNotification
}) {
  const [activeWorkflow, setActiveWorkflow] = useState(null);
  const [step, setStep] = useState(1);

  // Form states for workflow demos
  const [onboardData, setOnboardData] = useState({ name: "", phone: "", category: "Ex-Serviceman", verified: false });
  const [clientData, setClientData] = useState({ name: "", siteName: "", guardCount: 5, rate: 25000 });
  const [absenceGuardId, setAbsenceGuardId] = useState(guards.find(g => g.status === 'Deployed')?.id || guards[0]?.id);
  const [relieverId, setRelieverId] = useState(guards.find(g => g.status === 'Available')?.id || guards[3]?.id);

  const resetModal = () => {
    setActiveWorkflow(null);
    setStep(1);
  };

  // 1. Onboarding Workflow Execution
  const handleCompleteOnboarding = () => {
    const newGuard = {
      id: `DGT-G${100 + guards.length + 1}`,
      name: onboardData.name || "Karan Veer Singh",
      rank: onboardData.category === "Ex-Serviceman" ? "Supervisor" : "Security Guard",
      category: onboardData.category,
      phone: onboardData.phone || "+91 98980 77665",
      email: `${onboardData.name.toLowerCase().replace(/\s+/g, ".")}@dgt.in`,
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      joiningDate: new Date().toISOString().split('T')[0],
      status: "Available",
      assignedSite: "Unassigned / Standby Pool",
      assignedPost: "Standby Reliever",
      shift: "Day/Night",
      bankAccount: "HDFC0001890 - 50100492819",
      documents: {
        aadhaar: { status: "Verified", expiry: "2032-12-31" },
        pan: { status: "Verified", expiry: "N/A" },
        policeVerification: { status: "Verified", expiry: "2027-10-01" },
        medicalCertificate: { status: "Verified", expiry: "2027-04-01" }
      },
      metrics: { rating: 5.0, attendanceRate: 100, incidentsHandled: 0 }
    };

    setGuards([newGuard, ...guards]);
    addNotification({
      id: Date.now(),
      title: "New Guard Onboarded Successfully",
      message: `Guard ${newGuard.name} (${newGuard.id}) verified & added to Available Deployment Pool.`,
      type: "success",
      time: "Just now"
    });
    resetModal();
  };

  // 2. Absence & Replacement Workflow Execution
  const handleExecuteReplacement = () => {
    const absentGuard = guards.find(g => g.id === absenceGuardId);
    const relieverGuard = guards.find(g => g.id === relieverId);

    if (!absentGuard || !relieverGuard) return;

    const updatedGuards = guards.map(g => {
      if (g.id === absentGuard.id) {
        return { ...g, status: "Absent", notes: "Marked absent by replacement workflow" };
      }
      if (g.id === relieverGuard.id) {
        return { 
          ...g, 
          status: "Deployed", 
          assignedSite: absentGuard.assignedSite, 
          assignedPost: absentGuard.assignedPost,
          shift: absentGuard.shift
        };
      }
      return g;
    });

    setGuards(updatedGuards);
    addNotification({
      id: Date.now(),
      title: "Immediate Replacement Assigned",
      message: `Reliever ${relieverGuard.name} deployed to ${absentGuard.assignedSite} replacing ${absentGuard.name}.`,
      type: "warning",
      time: "Just now"
    });
    resetModal();
  };

  // 3. New Client Workflow Execution
  const handleCreateClient = () => {
    const newClient = {
      id: `CLI-00${clients.length + 1}`,
      name: clientData.name || "Fortis Healthcare Gurgaon",
      contactPerson: "Dr. Sandeep Malik",
      phone: "+91 124 9988 776",
      email: "security@fortishealth.in",
      gstin: "07AAACF8899M1Z2",
      billingCycle: "Monthly (1st to 30th)",
      sitesCount: 1,
      manpowerSanctioned: Number(clientData.guardCount),
      manpowerDeployed: Number(clientData.guardCount),
      shortage: 0,
      contractStatus: "Active",
      contractEnd: "2027-09-30",
      rateCard: { guardDay: Number(clientData.rate), guardNight: Number(clientData.rate) + 1500, supervisor: Number(clientData.rate) + 6000 }
    };

    const newSite = {
      id: `SITE-10${sites.length + 1}`,
      clientId: newClient.id,
      clientName: newClient.name,
      name: clientData.siteName || `${newClient.name} Main Facility`,
      address: "Sector 44, Gurugram, Haryana",
      gpsLat: 28.4595,
      gpsLng: 77.0266,
      geofenceRadiusMeters: 150,
      posts: [{ id: "P10", name: "Main Entry Ramp", requiredDay: Number(clientData.guardCount), requiredNight: Number(clientData.guardCount) }],
      sanctioned: Number(clientData.guardCount),
      deployed: Number(clientData.guardCount),
      shortage: 0,
      supervisorName: "Suresh Chandra"
    };

    setClients([newClient, ...clients]);
    setSites([newSite, ...sites]);
    addNotification({
      id: Date.now(),
      title: "New Client & Site Operational",
      message: `Contract for ${newClient.name} active with ${clientData.guardCount} sanctioned posts.`,
      type: "success",
      time: "Just now"
    });
    resetModal();
  };

  return (
    <>
      {activeWorkflow && (
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
            maxWidth: '640px',
            background: '#ffffff',
            borderRadius: '20px',
            padding: '28px',
            position: 'relative',
            boxShadow: '0 20px 50px rgba(0,0,0,0.15)'
          }}>
            <button 
              onClick={resetModal}
              style={{ position: 'absolute', right: '20px', top: '20px', background: 'none', border: 'none', color: '#64748b', cursor: 'pointer' }}
            >
              <X size={20} />
            </button>

            {/* Workflow 1: New Guard Onboarding */}
            {activeWorkflow === 'onboarding' && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <UserPlus style={{ color: '#0284c7' }} size={28} />
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a' }}>Guard Onboarding Assistant</h3>
                    <p style={{ fontSize: '0.8rem', color: '#64748b' }}>Candidate Entry $\rightarrow$ Document Audit $\rightarrow$ ID Generation</p>
                  </div>
                </div>

                {step === 1 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <label style={{ fontSize: '0.82rem', color: '#475569', fontWeight: 600 }}>Candidate Full Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Karan Veer Singh"
                      className="form-input"
                      value={onboardData.name}
                      onChange={(e) => setOnboardData({ ...onboardData, name: e.target.value })}
                    />
                    
                    <label style={{ fontSize: '0.82rem', color: '#475569', fontWeight: 600 }}>Contact Mobile Number</label>
                    <input 
                      type="text" 
                      placeholder="+91 98980 77665"
                      className="form-input"
                      value={onboardData.phone}
                      onChange={(e) => setOnboardData({ ...onboardData, phone: e.target.value })}
                    />

                    <label style={{ fontSize: '0.82rem', color: '#475569', fontWeight: 600 }}>Skill / Rank Category</label>
                    <select 
                      className="form-select"
                      value={onboardData.category}
                      onChange={(e) => setOnboardData({ ...onboardData, category: e.target.value })}
                    >
                      <option value="Ex-Serviceman">Ex-Serviceman / Ex-Paramilitary</option>
                      <option value="Armed Security">Armed Security Guard</option>
                      <option value="Unskilled / Civil">Civil Guard (PSARA Trained)</option>
                    </select>

                    <button className="btn-primary" style={{ marginTop: '12px' }} onClick={() => setStep(2)}>
                      <span>Proceed to Document Verification</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>Verify Statutory Documents</h4>
                    <div style={{ background: '#f8fafc', padding: '14px', borderRadius: '10px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontWeight: 600 }}>Aadhaar Card Copy & Biometrics</span>
                        <span className="status-badge status-compliant">Verified OK</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontWeight: 600 }}>PAN Card (Tax / PF Registration)</span>
                        <span className="status-badge status-compliant">Verified OK</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontWeight: 600 }}>Police Clearance Certificate</span>
                        <span className="status-badge status-compliant">Clearance Issued</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontWeight: 600 }}>Medical Fitness Certificate</span>
                        <span className="status-badge status-compliant">Fit for Duty</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
                      <button className="btn-secondary" onClick={() => setStep(1)}>Back</button>
                      <button className="btn-emerald" onClick={handleCompleteOnboarding}>
                        <CheckCircle2 size={16} />
                        <span>Generate Guard ID & Deploy</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Workflow 2: Guard Absence & Replacement */}
            {activeWorkflow === 'absence' && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <UserX style={{ color: '#e11d48' }} size={28} />
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a' }}>Guard Absence & Reliever Deployment</h3>
                    <p style={{ fontSize: '0.8rem', color: '#64748b' }}>Absence Detected $\rightarrow$ Shortage Alerted $\rightarrow$ Reliever Assigned</p>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <label style={{ fontSize: '0.82rem', color: '#475569', fontWeight: 600 }}>Select Absent Deployed Guard</label>
                  <select 
                    className="form-select"
                    value={absenceGuardId}
                    onChange={(e) => setAbsenceGuardId(e.target.value)}
                  >
                    {guards.filter(g => g.status === 'Deployed').map(g => (
                      <option key={g.id} value={g.id}>
                        {g.name} ({g.id}) - {g.assignedSite} [{g.shift}]
                      </option>
                    ))}
                  </select>

                  <div style={{ background: '#fff1f2', border: '1px solid #fecdd3', padding: '12px', borderRadius: '10px' }}>
                    <div style={{ fontWeight: 800, color: '#be123c', fontSize: '0.85rem' }}>⚠️ Post Gap Shortage Triggered</div>
                    <div style={{ fontSize: '0.78rem', color: '#475569', marginTop: '4px' }}>
                      Supervisor alerted via SMS. Screened available guards with valid PSARA and Police Clearance.
                    </div>
                  </div>

                  <label style={{ fontSize: '0.82rem', color: '#475569', fontWeight: 600 }}>Select Compliant Standby Reliever</label>
                  <select 
                    className="form-select"
                    value={relieverId}
                    onChange={(e) => setRelieverId(e.target.value)}
                  >
                    {guards.filter(g => g.status === 'Available').map(g => (
                      <option key={g.id} value={g.id}>
                        {g.name} ({g.id}) - Rating: ⭐ {g.metrics.rating} [Compliant]
                      </option>
                    ))}
                  </select>

                  <button className="btn-emerald" style={{ marginTop: '12px' }} onClick={handleExecuteReplacement}>
                    <ShieldCheck size={16} />
                    <span>Confirm Reliever Deployment</span>
                  </button>
                </div>
              </div>
            )}

            {/* Workflow 3: New Client Setup */}
            {activeWorkflow === 'new_client' && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <Building style={{ color: '#0284c7' }} size={28} />
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a' }}>New Client & Site Setup</h3>
                    <p style={{ fontSize: '0.8rem', color: '#64748b' }}>Rate Card $\rightarrow$ Contract Approval $\rightarrow$ Site Post Creation</p>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <label style={{ fontSize: '0.82rem', color: '#475569', fontWeight: 600 }}>Client Company Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Fortis Healthcare Gurgaon"
                    className="form-input"
                    value={clientData.name}
                    onChange={(e) => setClientData({ ...clientData, name: e.target.value })}
                  />

                  <label style={{ fontSize: '0.82rem', color: '#475569', fontWeight: 600 }}>Primary Site Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Fortis Med City Campus"
                    className="form-input"
                    value={clientData.siteName}
                    onChange={(e) => setClientData({ ...clientData, siteName: e.target.value })}
                  />

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <label style={{ fontSize: '0.82rem', color: '#475569', fontWeight: 600 }}>Sanctioned Guards Count</label>
                      <input 
                        type="number" 
                        className="form-input"
                        value={clientData.guardCount}
                        onChange={(e) => setClientData({ ...clientData, guardCount: e.target.value })}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.82rem', color: '#475569', fontWeight: 600 }}>Monthly Rate per Guard (₹)</label>
                      <input 
                        type="number" 
                        className="form-input"
                        value={clientData.rate}
                        onChange={(e) => setClientData({ ...clientData, rate: e.target.value })}
                      />
                    </div>
                  </div>

                  <button className="btn-primary" style={{ marginTop: '12px' }} onClick={handleCreateClient}>
                    <CheckCircle2 size={16} />
                    <span>Activate Contract & Generate Site Posts</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
