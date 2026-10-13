import 'package:flutter/material.dart';
import '../../models/app_models.dart';
import '../../theme/app_theme.dart';
import '../../widgets/glass_card.dart';
import '../../widgets/status_badge.dart';

class GuardHomeScreen extends StatefulWidget {
  final ShiftDetail shift;
  final VoidCallback onSOSTriggered;

  const GuardHomeScreen({
    super.key,
    required this.shift,
    required this.onSOSTriggered,
  });

  @override
  State<GuardHomeScreen> createState() => _GuardHomeScreenState();
}

class _GuardHomeScreenState extends State<GuardHomeScreen> {
  final GuardAttendance _attendance = GuardAttendance();
  String _leaveReason = "Medical Leave";

  void _toggleCheckIn() {
    setState(() {
      if (_attendance.isCheckedIn) {
        _attendance.isCheckedIn = false;
        _attendance.checkOutTime = "08:02 PM";
        _attendance.status = "Shift Completed";
      } else {
        _attendance.isCheckedIn = true;
        _attendance.checkInTime = "07:58 AM";
        _attendance.status = "On Duty (Geofenced Verified)";
      }
    });

    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(_attendance.isCheckedIn
            ? "Checked In successfully! GPS Location Verified."
            : "Shift Checked Out! Attendance logged."),
        backgroundColor: _attendance.isCheckedIn ? AppTheme.emeraldGreen : AppTheme.primaryCyan,
      ),
    );
  }

  void _showLeaveOTModal() {
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
      ),
      builder: (context) => Padding(
        padding: EdgeInsets.only(
          bottom: MediaQuery.of(context).viewInsets.bottom + 20,
          top: 20,
          left: 20,
          right: 20,
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              "Request Leave / Overtime (OT)",
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 14),
            const Text("Select Request Type:", style: TextStyle(fontWeight: FontWeight.w600, fontSize: 13)),
            const SizedBox(height: 6),
            DropdownButtonFormField<String>(
              value: _leaveReason,
              decoration: InputDecoration(
                border: OutlineInputBorder(borderRadius: BorderRadius.circular(10)),
                contentPadding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
              ),
              items: ["Medical Leave", "Personal Emergency", "Overtime (OT) Request (2-4 Hrs)", "Shift Swap"]
                  .map((e) => DropdownMenuItem(value: e, child: Text(e, style: const TextStyle(fontSize: 13))))
                  .toList(),
              onChanged: (val) => setState(() => _leaveReason = val!),
            ),
            const SizedBox(height: 16),
            Row(
              children: [
                Expanded(
                  child: ElevatedButton(
                    onPressed: () {
                      Navigator.pop(context);
                      ScaffoldMessenger.of(context).showSnackBar(
                        const SnackBar(
                          content: Text("Leave/OT request submitted to Supervisor for approval!"),
                          backgroundColor: AppTheme.emeraldGreen,
                        ),
                      );
                    },
                    child: const Text("SUBMIT REQUEST"),
                  ),
                ),
              ],
            )
          ],
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      padding: const EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // On Duty Banner Card
          GlassCard(
            backgroundColor: _attendance.isCheckedIn
                ? AppTheme.emeraldGreen.withOpacity(0.1)
                : AppTheme.primaryCyan.withOpacity(0.08),
            borderColor: _attendance.isCheckedIn ? AppTheme.emeraldGreen : AppTheme.primaryCyan,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      _attendance.isCheckedIn ? "CURRENTLY ON DUTY" : "SCHEDULED SHIFT TODAY",
                      style: TextStyle(
                        color: _attendance.isCheckedIn ? AppTheme.emeraldGreen : AppTheme.primaryCyan,
                        fontSize: 12,
                        fontWeight: FontWeight.w900,
                        letterSpacing: 0.8,
                      ),
                    ),
                    StatusBadge(
                      label: _attendance.status,
                      type: _attendance.isCheckedIn ? 'active' : 'info',
                    ),
                  ],
                ),
                const SizedBox(height: 10),
                Text(
                  widget.shift.siteName,
                  style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w800),
                ),
                const SizedBox(height: 4),
                Row(
                  children: [
                    const Icon(Icons.location_on_outlined, size: 14, color: AppTheme.textMuted),
                    const SizedBox(width: 4),
                    Expanded(
                      child: Text(
                        widget.shift.location,
                        style: const TextStyle(fontSize: 12, color: AppTheme.textMuted),
                      ),
                    ),
                  ],
                ),
                const Divider(height: 24),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Text("Shift Time", style: TextStyle(fontSize: 11, color: AppTheme.textMuted)),
                        Text(widget.shift.shiftTime, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.bold)),
                      ],
                    ),
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.end,
                      children: [
                        const Text("Check-In Time", style: TextStyle(fontSize: 11, color: AppTheme.textMuted)),
                        Text(_attendance.checkInTime ?? "--:-- AM", style: const TextStyle(fontSize: 13, fontWeight: FontWeight.bold)),
                      ],
                    )
                  ],
                ),
                const SizedBox(height: 16),
                SizedBox(
                  width: double.infinity,
                  child: ElevatedButton.icon(
                    onPressed: _toggleCheckIn,
                    icon: Icon(_attendance.isCheckedIn ? Icons.logout_rounded : Icons.login_rounded),
                    label: Text(_attendance.isCheckedIn ? "PUNCH OUT (END SHIFT)" : "PUNCH IN (START SHIFT)"),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: _attendance.isCheckedIn ? AppTheme.roseDanger : AppTheme.emeraldGreen,
                      padding: const EdgeInsets.symmetric(vertical: 14),
                    ),
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 20),

          // Quick Action Buttons Grid
          Row(
            children: [
              Expanded(
                child: GlassCard(
                  onTap: _showLeaveOTModal,
                  child: const Column(
                    children: [
                      Icon(Icons.calendar_month_outlined, color: AppTheme.primaryCyan, size: 28),
                      SizedBox(height: 8),
                      Text("Leave / OT Request", style: TextStyle(fontSize: 13, fontWeight: FontWeight.bold)),
                    ],
                  ),
                ),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: GlassCard(
                  onTap: widget.onSOSTriggered,
                  backgroundColor: AppTheme.roseDanger.withOpacity(0.08),
                  borderColor: AppTheme.roseDanger.withOpacity(0.3),
                  child: const Column(
                    children: [
                      Icon(Icons.warning_amber_rounded, color: AppTheme.roseDanger, size: 28),
                      SizedBox(height: 8),
                      Text("Emergency SOS", style: TextStyle(fontSize: 13, fontWeight: FontWeight.bold, color: AppTheme.roseDanger)),
                    ],
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: 24),

          // SOP Site Instructions Section
          const Text(
            "Site Instructions & SOPs",
            style: TextStyle(fontSize: 17, fontWeight: FontWeight.bold),
          ),
          const SizedBox(height: 10),
          ...widget.shift.sopInstructions.map(
            (sop) => Padding(
              padding: const EdgeInsets.only(bottom: 8),
              child: GlassCard(
                padding: const EdgeInsets.all(12),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Icon(Icons.check_circle_outline_rounded, color: AppTheme.emeraldGreen, size: 18),
                    const SizedBox(width: 10),
                    Expanded(
                      child: Text(
                        sop,
                        style: const TextStyle(fontSize: 13, height: 1.3),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
