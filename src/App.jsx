import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import WorkflowsBar from "./components/WorkflowsBar";

import DashboardView from "./components/views/DashboardView";
import MobileAppPreviewView from "./components/views/MobileAppPreviewView";
import GuardsView from "./components/views/GuardsView";
import ComplianceView from "./components/views/ComplianceView";
import RecruitmentView from "./components/views/RecruitmentView";
import ClientsSitesView from "./components/views/ClientsSitesView";
import DeploymentRosterView from "./components/views/DeploymentRosterView";
import AttendanceView from "./components/views/AttendanceView";
import SupervisorOpsView from "./components/views/SupervisorOpsView";
import IncidentsPatrolsView from "./components/views/IncidentsPatrolsView";
import PayrollView from "./components/views/PayrollView";
import BillingReceivablesView from "./components/views/BillingReceivablesView";
import CRMView from "./components/views/CRMView";
import AssetsInventoryView from "./components/views/AssetsInventoryView";

import {
  INITIAL_GUARDS,
  INITIAL_CLIENTS,
  INITIAL_SITES,
  INITIAL_RECRUITMENT_PIPELINE,
  INITIAL_INCIDENTS,
  INITIAL_INVOICES
} from "./mockData";

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [activeRole, setActiveRole] = useState("Owner / Management");
  const [searchTerm, setSearchTerm] = useState("");

  // Data States (In-Memory for Demo)
  const [guards, setGuards] = useState(INITIAL_GUARDS);
  const [clients, setClients] = useState(INITIAL_CLIENTS);
  const [sites, setSites] = useState(INITIAL_SITES);
  const [recruitment, setRecruitment] = useState(INITIAL_RECRUITMENT_PIPELINE);
  const [incidents, setIncidents] = useState(INITIAL_INCIDENTS);
  const [invoices, setInvoices] = useState(INITIAL_INVOICES);

  // Workflow Trigger State
  const [showWorkflowsModal, setShowWorkflowsModal] = useState(false);
  const [workflowType, setWorkflowType] = useState(null);

  // Notifications state
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Statutory Compliance Expiry Alert",
      message: "Guard Vikram Singh's Police Verification expires in 18 days.",
      type: "warning",
      time: "10m ago"
    },
    {
      id: 2,
      title: "Site Shortage Reliever Dispatched",
      message: "Reliever Sunil Dutt assigned to Max Healthcare Saket.",
      type: "info",
      time: "25m ago"
    }
  ]);

  const addNotification = (n) => {
    setNotifications([n, ...notifications]);
  };

  const handleOpenWorkflow = (type) => {
    setWorkflowType(type);
    setShowWorkflowsModal(true);
  };

  return (
    <div className="app-container">
      {/* Navigation Sidebar */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        activeRole={activeRole}
      />

      {/* Main Content Area */}
      <div className="main-content">
        <Header 
          activeRole={activeRole}
          setActiveRole={setActiveRole}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          notifications={notifications}
        />

        <main className="page-wrapper">
          {activeTab === "dashboard" && (
            <DashboardView 
              guards={guards}
              clients={clients}
              sites={sites}
              incidents={incidents}
              invoices={invoices}
              setActiveTab={setActiveTab}
              onOpenOnboarding={() => handleOpenWorkflow('onboarding')}
              onOpenAbsence={() => handleOpenWorkflow('absence')}
            />
          )}

          {activeTab === "mobile_app" && <MobileAppPreviewView />}

          {activeTab === "guards" && <GuardsView guards={guards} setGuards={setGuards} onOpenOnboarding={() => handleOpenWorkflow('onboarding')} />}
          {activeTab === "compliance" && <ComplianceView guards={guards} setGuards={setGuards} addNotification={addNotification} />}
          {activeTab === "recruitment" && <RecruitmentView recruitment={recruitment} guards={guards} setGuards={setGuards} onOpenOnboarding={() => handleOpenWorkflow('onboarding')} />}
          {activeTab === "sites" && <ClientsSitesView clients={clients} sites={sites} onOpenNewClient={() => handleOpenWorkflow('new_client')} />}
          {activeTab === "roster" && <DeploymentRosterView guards={guards} sites={sites} addNotification={addNotification} />}
          {activeTab === "attendance" && <AttendanceView guards={guards} addNotification={addNotification} />}
          {activeTab === "supervisor" && <SupervisorOpsView sites={sites} onOpenAbsence={() => handleOpenWorkflow('absence')} addNotification={addNotification} />}
          {activeTab === "incidents" && <IncidentsPatrolsView incidents={incidents} setIncidents={setIncidents} addNotification={addNotification} />}
          {activeTab === "payroll" && <PayrollView guards={guards} addNotification={addNotification} />}
          {activeTab === "billing" && <BillingReceivablesView invoices={invoices} setInvoices={setInvoices} clients={clients} addNotification={addNotification} />}
          {activeTab === "crm" && <CRMView />}
          {activeTab === "assets" && <AssetsInventoryView />}
        </main>
      </div>

      {/* Shared Workflows Modal */}
      {showWorkflowsModal && (
        <WorkflowsBar 
          guards={guards}
          setGuards={setGuards}
          clients={clients}
          setClients={setClients}
          sites={sites}
          setSites={setSites}
          incidents={incidents}
          setIncidents={setIncidents}
          invoices={invoices}
          setInvoices={setInvoices}
          addNotification={addNotification}
        />
      )}
    </div>
  );
}
