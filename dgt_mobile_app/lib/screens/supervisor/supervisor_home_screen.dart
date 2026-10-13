import 'package:flutter/material.dart';
import '../../models/app_models.dart';
import '../../theme/app_theme.dart';
import '../../widgets/glass_card.dart';
import '../../widgets/status_badge.dart';

class SupervisorHomeScreen extends StatefulWidget {
  const SupervisorHomeScreen({super.key});

  @override
  State<SupervisorHomeScreen> createState() => _SupervisorHomeScreenState();
}

class _SupervisorHomeScreenState extends State<SupervisorHomeScreen> {
  final List<InspectionTask> _checklist = DemoData.inspectionChecklist;
  final List<SiteStatus> _sites = DemoData.sites;

  void _dispatchReliever(SiteStatus site) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text("Emergency Reliever Guard dispatched to ${site.siteName}! ETA 20 mins."),
        backgroundColor: AppTheme.emeraldGreen,
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
          // Supervisor Overview Banner
          GlassCard(
            backgroundColor: AppTheme.accentIndigo.withOpacity(0.08),
            borderColor: AppTheme.accentIndigo.withOpacity(0.3),
            child: Row(
              children: [
                Container(
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(
                    color: AppTheme.accentIndigo.withOpacity(0.15),
                    shape: BoxShape.circle,
                  ),
                  child: const Icon(Icons.supervisor_account_rounded, color: AppTheme.accentIndigo, size: 30),
                ),
                const SizedBox(width: 14),
                const Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text("Supervisor Operations", style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
                    Text("Sector 4 - South Delhi Division", style: TextStyle(fontSize: 12, color: AppTheme.textMuted)),
                  ],
                )
              ],
            ),
          ),
          const SizedBox(height: 20),

          // Site Shortage & Reliever Section
          const Text("Live Site Staffing & Shortages", style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
          const SizedBox(height: 10),
          ..._sites.map((site) => Padding(
                padding: const EdgeInsets.only(bottom: 10),
                child: GlassCard(
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(site.siteName, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.bold)),
                          const SizedBox(height: 2),
                          Text("${site.deployedGuards} / ${site.requiredGuards} Guards Deployed",
                              style: const TextStyle(fontSize: 12, color: AppTheme.textMuted)),
                        ],
                      ),
                      if (site.shortage > 0)
                        ElevatedButton.icon(
                          onPressed: () => _dispatchReliever(site),
                          icon: const Icon(Icons.local_shipping_outlined, size: 14),
                          label: const Text("DISPATCH RELIEVER", style: TextStyle(fontSize: 11)),
                          style: ElevatedButton.styleFrom(
                            backgroundColor: AppTheme.amberWarning,
                            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
                          ),
                        )
                      else
                        StatusBadge(label: site.status, type: 'active'),
                    ],
                  ),
                ),
              )),
          const SizedBox(height: 20),

          // Inspection Checklist Section
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const Text("Site Audit Inspection Checklist", style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
              Text(
                "${_checklist.where((t) => t.isCompleted).length}/${_checklist.length} Passed",
                style: const TextStyle(fontSize: 12, color: AppTheme.primaryCyan, fontWeight: FontWeight.bold),
              )
            ],
          ),
          const SizedBox(height: 10),
          ..._checklist.map((task) => Padding(
                padding: const EdgeInsets.only(bottom: 8),
                child: GlassCard(
                  padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                  child: CheckboxListTile(
                    value: task.isCompleted,
                    contentPadding: EdgeInsets.zero,
                    title: Text(task.title, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w600)),
                    subtitle: Text("Category: ${task.category}", style: const TextStyle(fontSize: 11, color: AppTheme.textMuted)),
                    activeColor: AppTheme.emeraldGreen,
                    onChanged: (val) {
                      setState(() {
                        task.isCompleted = val ?? false;
                      });
                    },
                  ),
                ),
              )),
        ],
      ),
    );
  }
}
