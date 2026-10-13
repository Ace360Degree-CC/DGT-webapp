import 'package:flutter/material.dart';

class StatusBadge extends StatelessWidget {
  final String label;
  final String type; // active, warning, danger, info

  const StatusBadge({
    super.key,
    required this.label,
    this.type = 'info',
  });

  @override
  Widget build(BuildContext context) {
    Color bg;
    Color border;
    Color text;

    switch (type.toLowerCase()) {
      case 'active':
      case 'compliant':
      case 'on duty':
      case 'approved':
      case 'fully staffed':
      case 'paid':
        bg = const Color(0xFFECFDF5);
        border = const Color(0xFFA7F3D0);
        text = const Color(0xFF047857);
        break;
      case 'warning':
      case 'shortage alert':
      case 'pending':
      case 'expiring':
      case 'medium':
        bg = const Color(0xFFFFFBEB);
        border = const Color(0xFFFDE68A);
        text = const Color(0xFFB45309);
        break;
      case 'danger':
      case 'open':
      case 'expired':
      case 'high':
      case 'overdue':
      case 'absent':
        bg = const Color(0xFFFFF1F2);
        border = const Color(0xFFFECDD3);
        text = const Color(0xFFBE123C);
        break;
      case 'info':
      case 'resolved':
      case 'scheduled':
      default:
        bg = const Color(0xFFF0F9FF);
        border = const Color(0xFFBAE6FD);
        text = const Color(0xFF0369A1);
        break;
    }

    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
      decoration: BoxDecoration(
        color: bg,
        borderRadius: BorderRadius.circular(999),
        border: Border.all(color: border, width: 1),
      ),
      child: Text(
        label.toUpperCase(),
        style: TextStyle(
          color: text,
          fontSize: 10,
          fontWeight: FontWeight.bold,
          letterSpacing: 0.5,
        ),
      ),
    );
  }
}
