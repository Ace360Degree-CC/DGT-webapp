import 'package:flutter/material.dart';
import '../../theme/app_theme.dart';
import '../../widgets/glass_card.dart';

class AdminHomeScreen extends StatelessWidget {
  const AdminHomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      padding: const EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // KPI Summary Grid
          GridView.count(
            crossAxisCount: 2,
            crossAxisSpacing: 12,
            mainAxisSpacing: 12,
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            childAspectRatio: 1.4,
            children: [
              _buildKpiCard("Active Guards", "142 / 150", "94.6% Staffed", Icons.security_rounded, AppTheme.emeraldGreen),
              _buildKpiCard("Active Sites", "18 Sites", "2 Shortages", Icons.domain_rounded, AppTheme.primaryCyan),
              _buildKpiCard("PSARA License", "14 Expiring", "Audit Pending", Icons.verified_user_rounded, AppTheme.amberWarning),
              _buildKpiCard("Monthly Billing", "₹ 24.8 Lakhs", "₹ 4.8L Pending", Icons.receipt_long_rounded, AppTheme.accentPurple),
            ],
          ),
          const SizedBox(height: 24),

          // Approvals & Action Items Queue
          const Text("Pending Approvals & Sign-offs", style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
          const SizedBox(height: 10),
          GlassCard(
            child: Column(
              children: [
                _buildApprovalItem(
                  context,
                  title: "OT Request (4 Hrs) - Guard Vikram Singh",
                  subtitle: "Site: Max Healthcare Tower A • Reason: Shift Extension",
                  type: "warning",
                ),
                const Divider(),
                _buildApprovalItem(
                  context,
                  title: "Incident Incident Report Sign-Off #INC-102",
                  subtitle: "Perimeter Intrusion near Gate 3 resolved by Supervisor",
                  type: "danger",
                ),
              ],
            ),
          ),
          const SizedBox(height: 24),

          // Statutory Compliance Alerts
          const Text("Statutory Compliance & PSARA Feed", style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
          const SizedBox(height: 10),
          GlassCard(
            backgroundColor: AppTheme.amberWarning.withOpacity(0.06),
            borderColor: AppTheme.amberWarning.withOpacity(0.3),
            child: const Row(
              children: [
                Icon(Icons.warning_amber_rounded, color: AppTheme.amberWarning, size: 24),
                SizedBox(width: 12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text("Police Verification Renewal Alert", style: TextStyle(fontWeight: FontWeight.bold, fontSize: 13)),
                      Text("3 Guards in Sector 4 require police re-verification before 30 Oct.", style: TextStyle(fontSize: 11, color: AppTheme.textMuted)),
                    ],
                  ),
                )
              ],
            ),
          )
        ],
      ),
    );
  }

  Widget _buildKpiCard(String title, String value, String sub, IconData icon, Color accentColor) {
    return GlassCard(
      padding: const EdgeInsets.all(12),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(title, style: const TextStyle(fontSize: 11, color: AppTheme.textMuted, fontWeight: FontWeight.w600)),
              Icon(icon, color: accentColor, size: 20),
            ],
          ),
          const SizedBox(height: 6),
          Text(value, style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w800)),
          const SizedBox(height: 2),
          Text(sub, style: TextStyle(fontSize: 10, color: accentColor, fontWeight: FontWeight.bold)),
        ],
      ),
    );
  }

  Widget _buildApprovalItem(BuildContext context, {required String title, required String subtitle, required String type}) {
    return Row(
      children: [
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(title, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.bold)),
              const SizedBox(height: 2),
              Text(subtitle, style: const TextStyle(fontSize: 11, color: AppTheme.textMuted)),
            ],
          ),
        ),
        const SizedBox(width: 8),
        IconButton(
          icon: const Icon(Icons.check_circle_rounded, color: AppTheme.emeraldGreen),
          onPressed: () {
            ScaffoldMessenger.of(context).showSnackBar(
              const SnackBar(content: Text("Approved! Updated in master registry.")),
            );
          },
        )
      ],
    );
  }
}
