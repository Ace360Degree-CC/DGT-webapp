import 'package:flutter/material.dart';
import '../../theme/app_theme.dart';

class SOSTriggerDialog extends StatefulWidget {
  const SOSTriggerDialog({super.key});

  @override
  State<SOSTriggerDialog> createState() => _SOSTriggerDialogState();
}

class _SOSTriggerDialogState extends State<SOSTriggerDialog> {
  String selectedReason = "Intruder / Security Breach";
  bool isDispatched = false;

  final List<String> reasons = [
    "Intruder / Security Breach",
    "Medical Emergency / Guard Injured",
    "Fire Hazard / Smoke Detected",
    "Physical Conflict / Assault",
    "Equipment / CCTV Power Failure"
  ];

  @override
  Widget build(BuildContext context) {
    return Dialog(
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
      child: Padding(
        padding: const EdgeInsets.all(20),
        child: isDispatched
            ? Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Container(
                    padding: const EdgeInsets.all(16),
                    decoration: const BoxDecoration(
                      color: AppTheme.roseDanger,
                      shape: BoxShape.circle,
                    ),
                    child: const Icon(Icons.emergency_rounded, color: Colors.white, size: 48),
                  ),
                  const SizedBox(height: 16),
                  const Text(
                    "SOS ALARM BROADCASTED!",
                    style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: AppTheme.roseDanger),
                  ),
                  const SizedBox(height: 8),
                  const Text(
                    "Command Center & Area Supervisor Insp. Rajesh Kumar notified with live GPS coordinates.",
                    textAlign: TextAlign.center,
                    style: TextStyle(fontSize: 13, color: AppTheme.textMuted),
                  ),
                  const SizedBox(height: 20),
                  ElevatedButton(
                    onPressed: () => Navigator.pop(context),
                    style: ElevatedButton.styleFrom(backgroundColor: AppTheme.roseDanger),
                    child: const Text("CLOSE ALERT"),
                  )
                ],
              )
            : Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      Container(
                        padding: const EdgeInsets.all(8),
                        decoration: BoxDecoration(
                          color: AppTheme.roseDanger.withOpacity(0.1),
                          borderRadius: BorderRadius.circular(8),
                        ),
                        child: const Icon(Icons.warning_amber_rounded, color: AppTheme.roseDanger),
                      ),
                      const SizedBox(width: 12),
                      const Text(
                        "Trigger SOS Panic Alert",
                        style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                      ),
                    ],
                  ),
                  const SizedBox(height: 12),
                  const Text(
                    "Select emergency reason to dispatch response team immediately:",
                    style: TextStyle(fontSize: 13, color: AppTheme.textMuted),
                  ),
                  const SizedBox(height: 16),
                  DropdownButtonFormField<String>(
                    value: selectedReason,
                    decoration: InputDecoration(
                      border: OutlineInputBorder(borderRadius: BorderRadius.circular(10)),
                      contentPadding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
                    ),
                    items: reasons.map((r) => DropdownMenuItem(value: r, child: Text(r, style: const TextStyle(fontSize: 13)))).toList(),
                    onChanged: (val) => setState(() => selectedReason = val!),
                  ),
                  const SizedBox(height: 20),
                  Row(
                    children: [
                      Expanded(
                        child: OutlinedButton(
                          onPressed: () => Navigator.pop(context),
                          style: OutlinedButton.styleFrom(padding: const EdgeInsets.symmetric(vertical: 12)),
                          child: const Text("CANCEL"),
                        ),
                      ),
                      const SizedBox(width: 12),
                      Expanded(
                        child: ElevatedButton(
                          onPressed: () => setState(() => isDispatched = true),
                          style: ElevatedButton.styleFrom(
                            backgroundColor: AppTheme.roseDanger,
                            padding: const EdgeInsets.symmetric(vertical: 12),
                          ),
                          child: const Text("BROADCAST SOS"),
                        ),
                      ),
                    ],
                  )
                ],
              ),
      ),
    );
  }
}
