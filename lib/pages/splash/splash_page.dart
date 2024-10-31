import 'package:flutter/material.dart';

import 'package:portfolio_nrbedin/pages/home/home_page.dart';

class SplashPage extends StatefulWidget {
  const SplashPage({super.key});

  @override
  State<SplashPage> createState() => _SplashPageState();
}

class _SplashPageState extends State<SplashPage> with TickerProviderStateMixin {
  late AnimationController _translationController;

  @override
  void initState() {
    super.initState();

    _translationController = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 2),
    )..repeat(reverse: true);

    Future.delayed(const Duration(seconds: 5)).then(
      (value) => Navigator.of(context).pushReplacement(
        MaterialPageRoute(
          builder: (BuildContext context) => const HomePage(),
        ),
      ),
    );
  }

  @override
  void dispose() {
    _translationController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          Center(
            child: AnimatedBuilder(
              animation: _translationController,
              builder: (context, child) {
                return Transform.translate(
                  offset: Offset(0.0, _translationController.value * 10),
                  child: SizedBox(
                    width: 500,
                    height: 600,
                    child: Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 25),
                      child: Column(
                        children: [
                          Image.asset(
                            "assets/images/fundo.png",
                            fit: BoxFit.cover,
                          ),
                          const Text(
                            "Bem-vindo(a) ao meu Portfólio",
                            textAlign: TextAlign.center,
                            style: TextStyle(
                              fontSize: 20.00,
                              color: Color(0xFF003C52),
                              fontWeight: FontWeight.w600,
                              fontFamily: 'Montserrat',
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}
