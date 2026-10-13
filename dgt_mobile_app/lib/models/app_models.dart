enum AppUserRole {
  guard('Security Guard', '🛡️', 'Guard View'),
  supervisor('Field Supervisor', '👨‍✈️', 'Supervisor Ops'),
  admin('Management / Admin', '👑', 'Admin Portal'),
  client('Client Representative', '🏢', 'Client Portal');

  final String label;
  final String icon;
  final String title;
  const AppUserRole(this.label, this.icon, this.title);
}

class ShiftDetail {
  final String id;
  final String siteName;
  final String location;
  final String shiftTime;
  final String postType;
  final String status;
  final String supervisorName;
  final List<String> sopInstructions;

  ShiftDetail({
    required this.id,
    required this.siteName,
    required this.location,
    required this.shiftTime,
    required this.postType,
    required this.status,
    required this.supervisorName,
    required this.sopInstructions,
  });
}

class GuardAttendance {
  bool isCheckedIn;
  String? checkInTime;
  String? checkOutTime;
  String locationCoordinates;
  double overtimeHours;
  String status;

  GuardAttendance({
    this.isCheckedIn = false,
    this.checkInTime,
    this.checkOutTime,
    this.locationCoordinates = "28.5355° N, 77.2610° E (Saket, Delhi)",
    this.overtimeHours = 0.0,
    this.status = "Scheduled",
  });
}

class IncidentReport {
  final String id;
  final String category;
  final String siteName;
  final String reportedBy;
  final String timestamp;
  final String severity; // High, Medium, Low
  final String status;   // Open, Under Review, Resolved
  final String description;

  IncidentReport({
    required this.id,
    required this.category,
    required this.siteName,
    required this.reportedBy,
    required this.timestamp,
    required this.severity,
    required this.status,
    required this.description,
  });
}

class InspectionTask {
  final String id;
  final String title;
  final String category;
  bool isCompleted;
  String remarks;

  InspectionTask({
    required this.id,
    required this.title,
    required this.category,
    this.isCompleted = false,
    this.remarks = "",
  });
}

class SiteStatus {
  final String siteName;
  final String clientName;
  final int requiredGuards;
  final int deployedGuards;
  final int shortage;
  final String status;

  SiteStatus({
    required this.siteName,
    required this.clientName,
    required this.requiredGuards,
    required this.deployedGuards,
    required this.shortage,
    required this.status,
  });
}

class ClientInvoice {
  final String invoiceNo;
  final String month;
  final double amount;
  final String dueDate;
  final String status; // Paid, Pending, Overdue

  ClientInvoice({
    required this.invoiceNo,
    required this.month,
    required this.amount,
    required this.dueDate,
    required this.status,
  });
}

// Global Demo Dataset
class DemoData {
  static ShiftDetail currentShift = ShiftDetail(
    id: "SFT-8849",
    siteName: "Max Healthcare Tower A",
    location: "Plot 12, Press Enclave Marg, Saket, New Delhi",
    shiftTime: "08:00 AM - 08:00 PM (12 Hr Shift)",
    postType: "Main Lobby & Visitor Access Gate 1",
    status: "ON DUTY",
    supervisorName: "Insp. Rajesh Kumar (+91 98765-43210)",
    sopInstructions: [
      "Ensure all visitors scan QR badge before entry",
      "Verify vehicle parking pass for Underground Basement B2",
      "Maintain active patrol log every 45 minutes",
      "Report any unauthorized entry directly via SOS trigger"
    ],
  );

  static List<IncidentReport> incidents = [
    IncidentReport(
      id: "INC-102",
      category: "Perimeter Intrusion",
      siteName: "DLF Cyber Park, Gate 3",
      reportedBy: "Guard Vikram Singh",
      timestamp: "10 mins ago",
      severity: "High",
      status: "Open",
      description: "Unauthorized individual attempted entry near loading bay.",
    ),
    IncidentReport(
      id: "INC-101",
      category: "CCTV Blindspot Warning",
      siteName: "Max Healthcare Tower A",
      reportedBy: "Sup. Rajesh Kumar",
      timestamp: "2 hours ago",
      severity: "Medium",
      status: "Resolved",
      description: "Camera #14 power supply glitch rectified by electrician.",
    ),
  ];

  static List<InspectionTask> inspectionChecklist = [
    InspectionTask(id: "CHK-1", title: "Guard Uniform & Lanyard Verification", category: "Appearance"),
    InspectionTask(id: "CHK-2", title: "Torch & Walkie-Talkie Battery Check", category: "Equipment"),
    InspectionTask(id: "CHK-3", title: "Visitor Register Book Updates", category: "Compliance"),
    InspectionTask(id: "CHK-4", title: "Fire Extinguisher Pressure Gauge Audit", category: "Safety"),
    InspectionTask(id: "CHK-5", title: "Guard Alertness & Post Presence Check", category: "Duty Check"),
  ];

  static List<SiteStatus> sites = [
    SiteStatus(siteName: "Max Healthcare Saket", clientName: "Max Healthcare Ltd", requiredGuards: 12, deployedGuards: 12, shortage: 0, status: "Fully Staffed"),
    SiteStatus(siteName: "DLF Cyber Park Ph 2", clientName: "DLF Commercial", requiredGuards: 24, deployedGuards: 22, shortage: 2, status: "Shortage Alert"),
    SiteStatus(siteName: "Embassy Tech Zone", clientName: "Embassy Group", requiredGuards: 16, deployedGuards: 16, shortage: 0, status: "Fully Staffed"),
    SiteStatus(siteName: "Fortis Escorts Okhla", clientName: "Fortis Hospitals", requiredGuards: 10, deployedGuards: 9, shortage: 1, status: "Reliever En Route"),
  ];

  static List<ClientInvoice> clientInvoices = [
    ClientInvoice(invoiceNo: "INV-2026-089", month: "September 2026", amount: 485000.0, dueDate: "15 Oct 2026", status: "Pending"),
    ClientInvoice(invoiceNo: "INV-2026-074", month: "August 2026", amount: 485000.0, dueDate: "15 Sep 2026", status: "Paid"),
    ClientInvoice(invoiceNo: "INV-2026-058", month: "July 2026", amount: 462000.0, dueDate: "15 Aug 2026", status: "Paid"),
  ];
}
