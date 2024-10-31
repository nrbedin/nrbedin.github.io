import 'package:flutter/material.dart';

import 'package:portfolio_nrbedin/pages/splash/splash_page.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  // Inicialize o Firebase
  // await Firebase.initializeApp(
  //   options: DefaultFirebaseOptions.currentPlatform,
  // );

  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Portfólio',
      theme: ThemeData(
        useMaterial3: true,
      ),
      home: const SplashPage(),
    );
  }
}
