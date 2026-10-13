import 'package:flutter/material.dart';

class AppTheme {
  // Brand Color Palette matching DGT-webapp
  static const Color primaryCyan = Color(0xFF0284C7);
  static const Color primaryBlue = Color(0xFF2563EB);
  static const Color accentIndigo = Color(0xFF4F46E5);
  static const Color accentPurple = Color(0xFF7C3AED);
  static const Color emeraldGreen = Color(0xFF059669);
  static const Color amberWarning = Color(0xFFD97706);
  static const Color roseDanger = Color(0xFFE11D48);

  // Background & Surface Colors
  static const Color bgMain = Color(0xFFF8FAFC);
  static const Color bgDark = Color(0xFF0F172A);
  static const Color cardLight = Colors.white;
  static const Color cardDark = Color(0xFF1E293B);

  // Text Colors
  static const Color textMain = Color(0xFF0F172A);
  static const Color textMuted = Color(0xFF475569);
  static const Color textLight = Colors.white;

  // Glassmorphic Shadows & Borders
  static const Color borderLight = Color(0xFFE2E8F0);
  static const Color borderDark = Color(0xFF334155);

  static ThemeData get lightTheme {
    return ThemeData(
      useMaterial3: true,
      brightness: Brightness.light,
      scaffoldBackgroundColor: bgMain,
      colorScheme: ColorScheme.fromSeed(
        seedColor: primaryCyan,
        primary: primaryCyan,
        secondary: emeraldGreen,
        error: roseDanger,
        surface: bgMain,
      ),
      fontFamily: 'PlusJakartaSans',
      appBarTheme: const AppBarTheme(
        backgroundColor: Colors.transparent,
        elevation: 0,
        centerTitle: false,
        iconTheme: IconThemeData(color: textMain),
        titleTextStyle: TextStyle(
          color: textMain,
          fontSize: 20,
          fontWeight: FontWeight.bold,
        ),
      ),
      cardTheme: CardTheme(
        elevation: 0,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(16),
          side: const BorderSide(color: borderLight, width: 1),
        ),
        color: cardLight.withOpacity(0.9),
      ),
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(
          backgroundColor: primaryCyan,
          foregroundColor: Colors.white,
          elevation: 2,
          padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 14),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(12),
          ),
          textStyle: const TextStyle(
            fontWeight: FontWeight.bold,
            fontSize: 15,
          ),
        ),
      ),
    );
  }

  static ThemeData get darkTheme {
    return ThemeData(
      useMaterial3: true,
      brightness: Brightness.dark,
      scaffoldBackgroundColor: bgDark,
      colorScheme: ColorScheme.fromSeed(
        seedColor: primaryCyan,
        brightness: Brightness.dark,
        primary: primaryCyan,
        secondary: emeraldGreen,
        error: roseDanger,
        surface: cardDark,
      ),
      appBarTheme: const AppBarTheme(
        backgroundColor: Colors.transparent,
        elevation: 0,
        centerTitle: false,
        iconTheme: IconThemeData(color: textLight),
        titleTextStyle: TextStyle(
          color: textLight,
          fontSize: 20,
          fontWeight: FontWeight.bold,
        ),
      ),
      cardTheme: CardTheme(
        elevation: 0,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(16),
          side: const BorderSide(color: borderDark, width: 1),
        ),
        color: cardDark.withOpacity(0.9),
      ),
    );
  }
}
