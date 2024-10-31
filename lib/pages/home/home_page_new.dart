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
    return Scaffold(
      body: Stack(
        children: [
          Center(
            child: SingleChildScrollView(
              padding: const EdgeInsets.symmetric(horizontal: 25),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: <Widget>[
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: [
                      Expanded(
                        child: homeButton(
                          context,
                          const AboutPage(),
                          'Sobre',
                        ),
                      ),
                      Expanded(
                        child: homeButton(
                          context,
                          const SkillsPage(),
                          'Habilidades',
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 5),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: [
                      Expanded(
                        child: homeButton(
                          context,
                          const ExperiencePage(),
                          'Experiências',
                        ),
                      ),
                      Expanded(
                        child: homeButton(
                          context,
                          const ProjectsPage(),
                          'Projetos',
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 5),
                ],
              ),
            ),
          ),
        ],
      ),
      floatingActionButton: contactButton(context, _counter),
    );
  }
}

homeButton(context, route, label) {
  return Card(
    color: const Color(0xFF003C52),
    elevation: 5.0,
    child: SizedBox(
      height: 200,
      child: ElevatedButton(
        style: raisedButtonStyle,
        onPressed: () {
          Navigator.of(context)
              .push(MaterialPageRoute(builder: (context) => route));
        },
        child: Padding(
          padding: const EdgeInsets.all(10.0),
          child: Text(
            label,
            style: const TextStyle(fontSize: 18.0),
          ),
        ),
      ),
    ),
  );
}
