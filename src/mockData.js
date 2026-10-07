// Delhi Guard Team (BGF) ERP Initial Mock Dataset

export const INITIAL_GUARDS = [
  {
    id: "DGT-G101",
    name: "Rajesh Kumar Sharma",
    rank: "Head Guard / Supervisor",
    category: "Ex-Serviceman",
    phone: "+91 98765 43210",
    email: "rajesh.sharma@dgt.in",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    joiningDate: "2022-04-15",
    status: "Deployed",
    assignedSite: "DLF Cyber City - Tower B",
    assignedPost: "Main Gate Guard Post 1",
    shift: "Day (08:00 - 20:00)",
    bankAccount: "SBIN0004521 - 30894218942",
    documents: {
      aadhaar: { status: "Verified", expiry: "2030-12-31" },
      pan: { status: "Verified", expiry: "N/A" },
      policeVerification: { status: "Verified", expiry: "2027-08-15" },
      medicalCertificate: { status: "Verified", expiry: "2027-02-10" },
      psaraTraining: { status: "Verified", expiry: "2026-11-20" }
    },
    metrics: { rating: 4.9, attendanceRate: 98.5, incidentsHandled: 12 }
  },
  {
    id: "DGT-G102",
    name: "Vikram Singh Tanwar",
    rank: "Armed Guard",
    category: "Armed Security",
    phone: "+91 98123 76543",
    email: "vikram.singh@dgt.in",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    joiningDate: "2021-09-10",
    status: "Deployed",
    assignedSite: "Select CITYWALK Mall - Saket",
    assignedPost: "Jewelry Vault Escalator",
    shift: "Night (20:00 - 08:00)",
    bankAccount: "HDFC0001290 - 50100298412",
    documents: {
      aadhaar: { status: "Verified", expiry: "2031-05-12" },
      pan: { status: "Verified", expiry: "N/A" },
      policeVerification: { status: "Expiring Soon", expiry: "2026-10-25" }, // Expiring in ~18 days!
      medicalCertificate: { status: "Verified", expiry: "2027-01-15" },
      gunLicense: { status: "Verified", expiry: "2028-09-30" }
    },
    metrics: { rating: 4.8, attendanceRate: 97.2, incidentsHandled: 8 }
  },
  {
    id: "DGT-G103",
    name: "Amitabh Verma",
    rank: "Security Guard",
    category: "Unskilled / Civil",
    phone: "+91 97112 34567",
    email: "amit.verma@dgt.in",
    photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=200",
    joiningDate: "2023-01-20",
    status: "Absent",
    assignedSite: "Max Healthcare Hospital - Saket",
    assignedPost: "ER Reception Desk",
    shift: "Day (08:00 - 20:00)",
    bankAccount: "ICIC0000412 - 04120159483",
    documents: {
      aadhaar: { status: "Verified", expiry: "2029-06-18" },
      pan: { status: "Verified", expiry: "N/A" },
      policeVerification: { status: "Expired", expiry: "2026-09-15" }, // Expired!
      medicalCertificate: { status: "Verified", expiry: "2027-04-10" }
    },
    metrics: { rating: 4.2, attendanceRate: 88.0, incidentsHandled: 3 }
  },
  {
    id: "DGT-G104",
    name: "Sunil Dutt Yadav",
    rank: "Reliever / Floater Guard",
    category: "Semi-Skilled",
    phone: "+91 99580 11223",
    email: "sunil.yadav@dgt.in",
    photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=200",
    joiningDate: "2023-06-01",
    status: "Available",
    assignedSite: "Unassigned / Standby Pool",
    assignedPost: "Standby Reliever",
    shift: "Rotational",
    bankAccount: "PUNB0002810 - 28100015923",
    documents: {
      aadhaar: { status: "Verified", expiry: "2032-01-01" },
      pan: { status: "Verified", expiry: "N/A" },
      policeVerification: { status: "Verified", expiry: "2027-11-30" },
      medicalCertificate: { status: "Verified", expiry: "2027-05-20" }
    },
    metrics: { rating: 4.7, attendanceRate: 99.0, incidentsHandled: 15 }
  },
  {
    id: "DGT-G105",
    name: "Suresh Chandra",
    rank: "Field Supervisor",
    category: "Supervisor",
    phone: "+91 98991 88776",
    email: "suresh.chandra@dgt.in",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
    joiningDate: "2020-03-01",
    status: "Deployed",
    assignedSite: "Embassy Tech Zone - Noida",
    assignedPost: "Mobile Patrol Supervisor",
    shift: "Day (08:00 - 20:00)",
    bankAccount: "UTIB0000102 - 91201004829",
    documents: {
      aadhaar: { status: "Verified", expiry: "2028-10-10" },
      pan: { status: "Verified", expiry: "N/A" },
      policeVerification: { status: "Verified", expiry: "2027-09-01" },
      medicalCertificate: { status: "Verified", expiry: "2027-03-15" }
    },
    metrics: { rating: 4.95, attendanceRate: 100.0, incidentsHandled: 42 }
  },
  {
    id: "DGT-G106",
    name: "Deepak Kumar Chaurasia",
    rank: "Security Guard",
    category: "Unskilled",
    phone: "+91 97177 33445",
    email: "deepak.c@dgt.in",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    joiningDate: "2023-09-15",
    status: "Deployed",
    assignedSite: "Fortis Hospital - Vasant Kunj",
    assignedPost: "Main Gate Entry",
    shift: "Day (08:00 - 20:00)",
    bankAccount: "BARB0NIGAMX - 58291003829",
    documents: {
      aadhaar: { status: "Verified", expiry: "2032-07-20" },
      pan: { status: "Verified", expiry: "N/A" },
      policeVerification: { status: "Verified", expiry: "2027-03-30" },
      medicalCertificate: { status: "Verified", expiry: "2027-08-10" }
    },
    metrics: { rating: 4.6, attendanceRate: 96.0, incidentsHandled: 4 }
  }
];

export const INITIAL_CLIENTS = [
  {
    id: "CLI-001",
    name: "DLF Cyber City Developers",
    contactPerson: "Mr. Alok Nandan (Chief Security Officer)",
    phone: "+91 124 4567 890",
    email: "security@dlfcybercity.com",
    gstin: "07AAACD1234F1Z2",
    billingCycle: "Monthly (1st to 30th)",
    sitesCount: 3,
    manpowerSanctioned: 45,
    manpowerDeployed: 42,
    shortage: 3,
    contractStatus: "Active",
    contractEnd: "2027-03-31",
    rateCard: { guardDay: 24500, guardNight: 26000, supervisor: 32000, armed: 38000 }
  },
  {
    id: "CLI-002",
    name: "Select CITYWALK Mall Saket",
    contactPerson: "Capt. R. S. Rathore (Head of Safety)",
    phone: "+91 11 4051 7000",
    email: "safety@selectcitywalk.com",
    gstin: "07AABCS9876E1Z5",
    billingCycle: "Monthly (26th to 25th)",
    sitesCount: 1,
    manpowerSanctioned: 30,
    manpowerDeployed: 30,
    shortage: 0,
    contractStatus: "Active",
    contractEnd: "2026-12-31",
    rateCard: { guardDay: 25000, guardNight: 26500, supervisor: 33500, armed: 40000 }
  },
  {
    id: "CLI-003",
    name: "Max Healthcare Institute",
    contactPerson: "Dr. Parul Mehta (Ops Director)",
    phone: "+91 11 2651 5050",
    email: "facility@maxhealthcare.in",
    gstin: "07AACCM5544K1Z9",
    billingCycle: "Monthly (1st to 30th)",
    sitesCount: 2,
    manpowerSanctioned: 24,
    manpowerDeployed: 22,
    shortage: 2,
    contractStatus: "Active",
    contractEnd: "2027-01-15",
    rateCard: { guardDay: 23500, guardNight: 25000, supervisor: 31000, armed: 36000 }
  }
];

export const INITIAL_SITES = [
  {
    id: "SITE-101",
    clientId: "CLI-001",
    clientName: "DLF Cyber City Developers",
    name: "DLF Cyber City - Tower B",
    address: "DLF Phase 2, Sector 24, Gurugram, Haryana 122002",
    gpsLat: 28.4950,
    gpsLng: 77.0895,
    geofenceRadiusMeters: 150,
    posts: [
      { id: "P1", name: "Main Gate Guard Post 1", requiredDay: 2, requiredNight: 2 },
      { id: "P2", name: "Basement Parking Ramp", requiredDay: 1, requiredNight: 1 },
      { id: "P3", name: "Executive Lobby Control", requiredDay: 2, requiredNight: 1 }
    ],
    sanctioned: 9,
    deployed: 8,
    shortage: 1,
    supervisorName: "Rajesh Kumar Sharma"
  },
  {
    id: "SITE-102",
    clientId: "CLI-002",
    clientName: "Select CITYWALK Mall Saket",
    name: "Select CITYWALK Saket Main Complex",
    address: "A-3, District Centre, Saket, New Delhi, Delhi 110017",
    gpsLat: 28.5286,
    gpsLng: 77.2192,
    geofenceRadiusMeters: 200,
    posts: [
      { id: "P4", name: "Jewelry Vault Escalator", requiredDay: 2, requiredNight: 2 },
      { id: "P5", name: "Central Atrium & Security Desk", requiredDay: 3, requiredNight: 2 }
    ],
    sanctioned: 9,
    deployed: 9,
    shortage: 0,
    supervisorName: "Vikram Singh Tanwar"
  },
  {
    id: "SITE-103",
    clientId: "CLI-003",
    clientName: "Max Healthcare Institute",
    name: "Max Healthcare Hospital - Saket",
    address: "1, 2, Press Enclave Marg, Saket, New Delhi 110017",
    gpsLat: 28.5273,
    gpsLng: 77.2132,
    geofenceRadiusMeters: 100,
    posts: [
      { id: "P6", name: "ER Reception Desk", requiredDay: 2, requiredNight: 2 },
      { id: "P7", name: "ICU Access Gate", requiredDay: 1, requiredNight: 1 }
    ],
    sanctioned: 6,
    deployed: 5,
    shortage: 1,
    supervisorName: "Suresh Chandra"
  }
];

export const INITIAL_RECRUITMENT_PIPELINE = [
  {
    id: "APP-501",
    name: "Manish Kumar Pandey",
    phone: "+91 98109 99887",
    appliedDate: "2026-10-02",
    category: "Armed Security (Ex-CRPF)",
    experienceYears: 6,
    documentsStatus: "Complete (Aadhaar, Gun License verified)",
    stage: "Interview Passed",
    rating: 4.8
  },
  {
    id: "APP-502",
    name: "Harminder Singh Gill",
    phone: "+91 97188 55443",
    appliedDate: "2026-10-04",
    category: "Unskilled Guard",
    experienceYears: 2,
    documentsStatus: "Pending Police Verification",
    stage: "Document Verification",
    rating: 4.1
  },
  {
    id: "APP-503",
    name: "Dharmendra Pratap",
    phone: "+91 99100 44332",
    appliedDate: "2026-10-05",
    category: "Field Supervisor",
    experienceYears: 8,
    documentsStatus: "Complete",
    stage: "Pre-Employment Approval",
    rating: 4.9
  }
];

export const INITIAL_INCIDENTS = [
  {
    id: "INC-8901",
    date: "2026-10-06 14:30",
    clientName: "Select CITYWALK Mall",
    siteName: "Select CITYWALK Saket Main Complex",
    postName: "Central Atrium",
    category: "Unidentified Package / Suspicious Bag",
    reportedBy: "Vikram Singh Tanwar",
    severity: "High",
    description: "Unattended black duffel bag spotted near Escalator #2. Bomb squad protocol initiated. Verified as misplaced luggage of a shopper.",
    status: "Closed & Resolved",
    photoUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "INC-8902",
    date: "2026-10-07 09:15",
    clientName: "Max Healthcare Hospital",
    siteName: "Max Healthcare Hospital - Saket",
    postName: "ER Reception Desk",
    category: "Guard Absence / Post Gap",
    reportedBy: "Suresh Chandra (Supervisor)",
    severity: "Medium",
    description: "Guard Amitabh Verma failed to report for 08:00 Day Shift without prior notification. Post was unmanned for 45 minutes until Reliever Sunil Dutt was dispatched.",
    status: "Action Taken - Reliever Deployed",
    photoUrl: null
  }
];

export const INITIAL_INVOICES = [
  {
    invoiceNo: "DGT/2026-27/INV-0412",
    clientId: "CLI-001",
    clientName: "DLF Cyber City Developers",
    billingMonth: "September 2026",
    contractedGuards: 45,
    actualDutyHours: 10800,
    baseAmount: 1102500,
    otAmount: 45000,
    subtotal: 1147500,
    cgst: 103275, // 9%
    sgst: 103275, // 9%
    totalAmount: 1354050,
    status: "Pending Payment",
    dueDate: "2026-10-15"
  },
  {
    invoiceNo: "DGT/2026-27/INV-0411",
    clientId: "CLI-002",
    clientName: "Select CITYWALK Mall Saket",
    billingMonth: "September 2026",
    contractedGuards: 30,
    actualDutyHours: 7200,
    baseAmount: 765000,
    otAmount: 22000,
    subtotal: 787000,
    cgst: 70830,
    sgst: 70830,
    totalAmount: 928660,
    status: "Paid",
    dueDate: "2026-10-05"
  }
];

export const INITIAL_PAYROLL_SUMMARY = {
  month: "September 2026",
  totalGuards: 96,
  totalManDays: 2496,
  grossWages: 2350000,
  otPayments: 125000,
  pfDeduction: 282000, // 12%
  esicDeduction: 17625, // 0.75%
  tdsDeduction: 23500,
  netPayable: 2151875,
  status: "Locked & Approved"
};
