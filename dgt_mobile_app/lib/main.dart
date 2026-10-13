import 'package:flutter/material.dart';
import 'models/app_models.dart';
import 'theme/app_theme.dart';
import 'widgets/role_header.dart';
import 'screens/guard/guard_home_screen.dart';
import 'screens/supervisor/supervisor_home_screen.dart';
import 'screens/admin/admin_home_screen.dart';
import 'screens/client/client_home_screen.dart';
import 'screens/shared/sos_dialog.dart';
import 'screens/shared/notifications_screen.dart';

void main() {
  runApp(const DGTApp());
}

class DGTApp extends StatelessWidget {
  const DGTApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'DGT Mobile',
      debugShowCheckedModeBanner: false,
      theme: AppTheme.lightTheme,
      darkTheme: AppTheme.darkTheme,
      themeMode: ThemeMode.system,
      home: const MainContainerScreen(),
    );
  }
}

class MainContainerScreen extends StatefulWidget {
  const MainContainerScreen({super.key});

  @override
  State<MainContainerScreen> createState() => _MainContainerScreenState();
}

class _MainContainerScreenState extends State<MainContainerScreen> {
  AppUserRole _currentRole = AppUserRole.guard;
  int _currentBottomNavIndex = 0;

  void _triggerSOS() {
    showDialog(
      context: context,
      builder: (context) => const SOSTriggerDialog(),
    );
  }

  void _openNotifications() {
    Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => const NotificationsScreen()),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: RoleHeader(
        currentRole: _currentRole,
        onRoleChanged: (newRole) {
          setState(() {
            _currentRole = newRole;
            _currentBottomNavIndex = 0;
          });
        },
        onSOSTriggered: _triggerSOS,
        onNotificationsTap: _openNotifications,
      ),
      body: _buildCurrentRoleBody(),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _currentBottomNavIndex,
        onTap: (index) => setState(() => _currentBottomNavIndex = index),
        selectedItemColor: AppTheme.primaryCyan,
        unselectedItemColor: Colors.grey,
        type: BottomNavigationBarType.fixed,
        items: const [
          BottomNavigationBarItem(
            icon: Icon(Icons.dashboard_outlined),
            activeIcon: Icon(Icons.dashboard_rounded),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.assignment_outlined),
            activeIcon: Icon(Icons.assignment_rounded),
            label: 'Ops',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.notifications_none_rounded),
            activeIcon: Icon(Icons.notifications_rounded),
            label: 'Alerts',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person_outline_rounded),
            activeIcon: Icon(Icons.person_rounded),
            label: 'Profile',
          ),
        ],
      ),
    );
  }

  Widget _buildCurrentRoleBody() {
    switch (_currentRole) {
      case AppUserRole.guard:
        return GuardHomeScreen(
          shift: DemoData.currentShift,
          onSOSTriggered: _triggerSOS,
        );
      case AppUserRole.supervisor:
        return const SupervisorHomeScreen();
      case AppUserRole.admin:
        return const AdminHomeScreen();
      case AppUserRole.client:
        return const ClientHomeScreen();
    }
  }
}
