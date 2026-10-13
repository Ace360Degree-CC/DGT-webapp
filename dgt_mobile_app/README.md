# DGT Mobile App (Flutter Demo)

Digital Guard Tracking & Security Operations Platform Mobile Application built with Flutter & Material 3, designed as a companion mobile experience to the **DGT WebApp**.

---

## 📱 Features & Role-Based Views

The mobile app includes an interactive **Role Switcher** in the top navigation bar to showcase all 4 core mobile user perspectives:

### 1. 🛡️ Guard View
- **Shift Roster & Details**: Current site post, hours, supervisor info.
- **Geofenced Punch In / Punch Out**: One-tap attendance check-in/out with live location status.
- **Leave & Overtime (OT) Requests**: Modal form to submit leave, medical, or shift swap requests.
- **Site Instructions & SOPs**: Actionable checklist of post instructions.
- **Emergency SOS Button**: Instant panic alert trigger with sound/visual alarm simulation.

### 2. 👨‍✈️ Field Supervisor View
- **Guard Attendance Verification & Roll Call**: Real-time post deployment monitoring.
- **Site Shortage Alert & Reliever Dispatch**: One-tap emergency reliever guard dispatch with ETA.
- **Site Audit Inspection Checklist**: Interactive uniform, equipment, and alertness audit.
- **Incident Escalation**: Incident logbook and escalation triggers.

### 3. 👑 Management / Admin View
- **Executive KPI Dashboard**: Active guard count, site coverage %, pending statutory alerts.
- **Approval Queue**: One-tap approval for guard OT requests and incident sign-offs.
- **Statutory PSARA & Police Verification Feed**: Renewal countdown alerts.

### 4. 🏢 Client Portal View
- **Client Dashboard**: Real-time deployment SLA compliance (100% Staffed status).
- **Manpower Tracking**: Day/night shift guard counts per site location.
- **Billing & Invoices**: Monthly invoice listing with status badges (Paid, Pending, Overdue).

---

## 🚀 How to Run the App

### Prerequisites
- Flutter SDK installed (`>=3.0.0`)
- Android Studio / Xcode / VS Code with Flutter extension, or Google Chrome for Flutter Web demo.

### Steps
1. Navigate into the mobile directory:
   ```bash
   cd dgt_mobile_app
   ```

2. Fetch dependencies:
   ```bash
   flutter pub get
   ```

3. Run on connected device, emulator, or Chrome (Web Preview):
   ```bash
   # Run on Web (Chrome)
   flutter run -d chrome

   # Run on Android / iOS device or emulator
   flutter run
   ```

---

## 📦 Pushing to a Separate Repository

This app is isolated inside the `dgt_mobile_app/` subfolder. To push it to a separate GitHub/GitLab mobile repository:

```bash
cd dgt_mobile_app
git init
git add .
git commit -m "Initial commit: DGT Mobile App Frontend Demo"
git remote add origin <your-mobile-repo-url>
git branch -M main
git push -u origin main
```
