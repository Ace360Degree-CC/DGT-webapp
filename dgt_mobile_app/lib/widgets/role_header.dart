import 'package:flutter/material.dart';
import '../models/app_models.dart';
import '../theme/app_theme.dart';

class RoleHeader extends StatelessWidget implements PreferredSizeWidget {
  final AppUserRole currentRole;
  final ValueChanged<AppUserRole> onRoleChanged;
  final VoidCallback onSOSTriggered;
  final VoidCallback onNotificationsTap;
  final int notificationCount;

  const RoleHeader({
    super.key,
    required this.currentRole,
    required this.onRoleChanged,
    required this.onSOSTriggered,
    required this.onNotificationsTap,
    this.notificationCount = 2,
  });

  @override
  Size get preferredSize => const Size.fromHeight(115);

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;

    return Container(
      decoration: BoxDecoration(
        color: isDark ? AppTheme.bgDark : AppTheme.bgMain,
        border: Border(
          bottom: BorderSide(
            color: isDark ? AppTheme.borderDark : AppTheme.borderLight,
            width: 1,
          ),
        ),
      ),
      child: SafeArea(
        child: Column(
          children: [
            // Top Bar
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 6),
              child: Row(
                children: [
                  // Logo / App Name
                  Image.asset(
                    'assets/images/DGT-logo.png',
                    height: 34,
                    fit: BoxFit.contain,
                    errorBuilder: (context, error, stackTrace) => Container(
                      padding: const EdgeInsets.all(8),
                      decoration: BoxDecoration(
                        gradient: const LinearGradient(
                          colors: [AppTheme.primaryCyan, AppTheme.accentIndigo],
                        ),
                        borderRadius: BorderRadius.circular(10),
                      ),
                      child: const Icon(
                        Icons.shield_outlined,
                        color: Colors.white,
                        size: 20,
                      ),
                    ),
                  ),
                  const SizedBox(width: 8),
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        currentRole.title,
                        style: TextStyle(
                          fontSize: 11,
                          color: isDark ? Colors.grey[400] : AppTheme.textMuted,
                          fontWeight: FontWeight.w600,
                        ),
                      ),
                    ],
                  ),
                  const Spacer(),

                  // SOS Button
                  InkWell(
                    onTap: onSOSTriggered,
                    borderRadius: BorderRadius.circular(8),
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                      decoration: BoxDecoration(
                        gradient: const LinearGradient(
                          colors: [AppTheme.roseDanger, Color(0xFFBE123C)],
                        ),
                        borderRadius: BorderRadius.circular(8),
                        boxShadow: [
                          BoxShadow(
                            color: AppTheme.roseDanger.withOpacity(0.4),
                            blurRadius: 8,
                            offset: const Offset(0, 2),
                          )
                        ],
                      ),
                      child: const Row(
                        children: [
                          Icon(Icons.warning_amber_rounded, color: Colors.white, size: 16),
                          SizedBox(width: 4),
                          Text(
                            "SOS ALARM",
                            style: TextStyle(
                              color: Colors.white,
                              fontSize: 11,
                              fontWeight: FontWeight.w900,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                  const SizedBox(width: 10),

                  // Notifications Icon
                  Stack(
                    children: [
                      IconButton(
                        icon: const Icon(Icons.notifications_none_rounded),
                        onPressed: onNotificationsTap,
                        visualDensity: VisualDensity.compact,
                      ),
                      if (notificationCount > 0)
                        Positioned(
                          right: 6,
                          top: 6,
                          child: Container(
                            padding: const EdgeInsets.all(4),
                            decoration: const BoxDecoration(
                              color: AppTheme.roseDanger,
                              shape: BoxShape.circle,
                            ),
                            child: Text(
                              '$notificationCount',
                              style: const TextStyle(
                                color: Colors.white,
                                fontSize: 9,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                          ),
                        )
                    ],
                  ),
                ],
              ),
            ),

            // Role Switcher Selector Tabs
            SizedBox(
              height: 40,
              child: ListView.builder(
                scrollDirection: Axis.horizontal,
                padding: const EdgeInsets.symmetric(horizontal: 12),
                itemCount: AppUserRole.values.length,
                itemBuilder: (context, index) {
                  final role = AppUserRole.values[index];
                  final isSelected = role == currentRole;

                  return Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 4),
                    child: ChoiceChip(
                      selected: isSelected,
                      showCheckmark: false,
                      labelPadding: const EdgeInsets.symmetric(horizontal: 6),
                      label: Text(
                        '${role.icon}  ${role.label}',
                        style: TextStyle(
                          fontSize: 12,
                          fontWeight: isSelected ? FontWeight.bold : FontWeight.w500,
                          color: isSelected
                              ? Colors.white
                              : (isDark ? Colors.grey[300] : AppTheme.textMain),
                        ),
                      ),
                      selectedColor: AppTheme.primaryCyan,
                      backgroundColor: isDark ? AppTheme.cardDark : Colors.grey[200],
                      onSelected: (selected) {
                        if (selected) onRoleChanged(role);
                      },
                      padding: EdgeInsets.zero,
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(20),
                        side: BorderSide(
                          color: isSelected
                              ? AppTheme.primaryCyan
                              : (isDark ? AppTheme.borderDark : AppTheme.borderLight),
                        ),
                      ),
                    ),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
