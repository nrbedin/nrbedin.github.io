import 'dart:async';

import 'package:flutter/material.dart';

import 'package:portfolio_nrbedin/pages/about/about_page.dart';
import 'package:portfolio_nrbedin/pages/experience/experience_page.dart';
import 'package:portfolio_nrbedin/pages/projects/projects_page.dart';
import 'package:portfolio_nrbedin/pages/skills/skills_page_new.dart';
import 'package:portfolio_nrbedin/shared/constants.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> with TickerProviderStateMixin {
  late AnimationController _translationController;
  late Timer _timer;
  int _counter = 0;

  @override
  void initState() {
    super.initState();
    _translationController = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 2),
    )..repeat(reverse: true);
    _timer = Timer.periodic(const Duration(seconds: 10), (timer) {
      setState(() {
        _counter++;
      });
    });
  }

  @override
  void dispose() {
    _translationController.dispose();
    _timer.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final double screenWidth = MediaQuery.of(context).size.width;
    final bool isMobile = screenWidth < 600;

    return Scaffold(
      appBar: appBar(),
      drawer: sideMenu(),
      body: Stack(
        children: [
          background(context),
          Center(
            child: SingleChildScrollView(
              padding: const EdgeInsets.symmetric(horizontal: 25),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: <Widget>[
                  buttonRow(
                    context: context,
                    label1: 'Sobre',
                    route1: const AboutPage(),
                    icon1: Icons.person,
                    label2: 'Habilidades',
                    route2: const SkillsPage(),
                    icon2: Icons.emoji_objects_rounded,
                    isMobile: isMobile,
                  ),
                  const SizedBox(height: 20),
                  buttonRow(
                    context: context,
                    label1: 'Experiências',
                    route1: const ExperiencePage(),
                    icon1: Icons.computer_sharp,
                    label2: 'Projetos',
                    route2: const ProjectsPage(),
                    icon2: Icons.construction,
                    isMobile: isMobile,
                  ),
                  const SizedBox(height: 20),
                ],
              ),
            ),
          ),
        ],
      ),
      floatingActionButton: contactButton(context, _counter),
    );
  }

  Widget buttonRow({
    required BuildContext context,
    required String label1,
    required Widget route1,
    required IconData icon1,
    required String label2,
    required Widget route2,
    required IconData icon2,
    required bool isMobile,
  }) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceAround,
      children: [
        Expanded(
          child: homeButton(
            context: context,
            route: route1,
            label: label1,
            icon: icon1,
            isMobile: isMobile,
          ),
        ),
        const SizedBox(width: 10),
        Expanded(
          child: homeButton(
            context: context,
            route: route2,
            label: label2,
            icon: icon2,
            isMobile: isMobile,
          ),
        ),
      ],
    );
  }

  Widget homeButton({
    required BuildContext context,
    required Widget route,
    required String label,
    required IconData icon,
    required bool isMobile,
  }) {
    return Card(
      color: const Color(0xFF003C52),
      elevation: 5.0,
      child: SizedBox(
        height: isMobile ? 120 : 170,
        child: ElevatedButton(
          style: raisedButtonStyle,
          onPressed: () {
            Navigator.of(context)
                .push(MaterialPageRoute(builder: (context) => route));
          },
          child: Padding(
            padding: const EdgeInsets.all(10.0),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Icon(icon, size: 40, color: Colors.white),
                const SizedBox(height: 10),
                Text(
                  label,
                  style: TextStyle(
                    fontSize: isMobile ? 14.0 : 18.0,
                    color: Colors.white,
                  ),
                  textAlign: TextAlign.center,
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
