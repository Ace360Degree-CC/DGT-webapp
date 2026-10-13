import 'package:flutter/material.dart';
import '../../theme/app_theme.dart';
import '../../widgets/glass_card.dart';

class NotificationsScreen extends StatelessWidget {
  const NotificationsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Notifications Feed"),
      ),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          _buildNotificationCard(
            title: "Statutory Compliance Expiry Alert",
            message: "Guard Vikram Singh's Police Verification expires in 18 days.",
            time: "10m ago",
            color: AppTheme.amberWarning,
          ),
          const SizedBox(height: 10),
          _buildNotificationCard(
            title: "Site Shortage Reliever Dispatched",
            message: "Reliever Sunil Dutt assigned to Max Healthcare Saket.",
            time: "25m ago",
            color: AppTheme.primaryCyan,
          ),
          const SizedBox(height: 10),
          _buildNotificationCard(
            title: "Shift Swap Request Approved",
            message: "Supervisor Insp. Rajesh approved shift swap for Gate 1 Post.",
            time: "1 hour ago",
            color: AppTheme.emeraldGreen,
          ),
        ],
      ),
    );
  }

  Widget _buildNotificationCard({
    required String title,
    required String message,
    required String time,
    required Color color,
  }) {
    return GlassCard(
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            padding: const EdgeInsets.all(8),
            decoration: BoxDecoration(
              color: color.withOpacity(0.15),
              shape: BoxShape.circle,
            ),
            child: Icon(Icons.notifications_active_outlined, color: color, size: 20),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(title, style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 13)),
                    Text(time, style: const TextStyle(fontSize: 10, color: AppTheme.textMuted)),
                  ],
                ),
                const SizedBox(height: 4),
                Text(message, style: const TextStyle(fontSize: 12, color: AppTheme.textMuted)),
              ],
            ),
          )
        ],
      ),
    );
  }
}
