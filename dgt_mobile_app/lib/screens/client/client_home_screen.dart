import 'package:flutter/material.dart';
import '../../models/app_models.dart';
import '../../theme/app_theme.dart';
import '../../widgets/glass_card.dart';
import '../../widgets/status_badge.dart';

class ClientHomeScreen extends StatelessWidget {
  const ClientHomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final invoices = DemoData.clientInvoices;

    return SingleChildScrollView(
      padding: const EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Client Welcome Banner
          GlassCard(
            backgroundColor: AppTheme.primaryCyan.withOpacity(0.08),
            borderColor: AppTheme.primaryCyan.withOpacity(0.3),
            child: const Row(
              children: [
                CircleAvatar(
                  backgroundColor: AppTheme.primaryCyan,
                  child: Text("MH", style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
                ),
                SizedBox(width: 14),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text("Max Healthcare Ltd", style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
                    Text("Client Security Portal • Site: Saket Tower A", style: TextStyle(fontSize: 12, color: AppTheme.textMuted)),
                  ],
                ),
              ],
            ),
          ),
          const SizedBox(height: 20),

          // Live Manpower Coverage Card
          GlassCard(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text("Today's Manpower Deployment", style: TextStyle(fontSize: 15, fontWeight: FontWeight.bold)),
                    StatusBadge(label: "100% DEPLOYED", type: "active"),
                  ],
                ),
                const SizedBox(height: 12),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    _buildStatCol("12 / 12", "Day Shift Guards"),
                    Container(height: 30, width: 1, color: AppTheme.borderLight),
                    _buildStatCol("0", "Shortages"),
                    Container(height: 30, width: 1, color: AppTheme.borderLight),
                    _buildStatCol("100%", "SLA Compliance"),
                  ],
                )
              ],
            ),
          ),
          const SizedBox(height: 24),

          // Client Invoices Section
          const Text("Monthly Invoices & Billing Summary", style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
          const SizedBox(height: 10),
          ...invoices.map((inv) => Padding(
                padding: const EdgeInsets.only(bottom: 10),
                child: GlassCard(
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(inv.invoiceNo, style: const TextStyle(fontSize: 14, fontWeight: FontWeight.bold)),
                          Text("${inv.month} • Due: ${inv.dueDate}", style: const TextStyle(fontSize: 11, color: AppTheme.textMuted)),
                        ],
                      ),
                      Column(
                        crossAxisAlignment: CrossAxisAlignment.end,
                        children: [
                          Text("₹ ${(inv.amount).toStringAsFixed(0)}", style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w800)),
                          const SizedBox(height: 4),
                          StatusBadge(label: inv.status, type: inv.status.toLowerCase()),
                        ],
                      )
                    ],
                  ),
                ),
              )),
        ],
      ),
    );
  }

  Widget _buildStatCol(String val, String label) {
    return Column(
      children: [
        Text(val, style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w800, color: AppTheme.primaryCyan)),
        Text(label, style: const TextStyle(fontSize: 11, color: AppTheme.textMuted)),
      ],
    );
  }
}
