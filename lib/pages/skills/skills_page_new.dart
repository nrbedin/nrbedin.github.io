import 'package:flutter/material.dart';

import 'package:portfolio_nrbedin/shared/constants.dart';

class SkillsPage extends StatelessWidget {
  const SkillsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: appBar(),
      drawer: sideMenu(),
      body: Stack(
        children: [
          background(context),
          Center(
            child: SingleChildScrollView(
              child: Padding(
                padding: const EdgeInsets.symmetric(horizontal: 10.0),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Expanded(
                      child: Column(
                        children: [
                          cardHardSoft(
                            'Hard Skills',
                            [
                              'Flutter e Dart',
                              'Material Design',
                              'Firebase',
                              'GitHub',
                              'Lógica de Programação',
                              'SQL',
                              'Qualidade de Software',
                              'Delphi'
                            ],
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(width: 10),
                    Expanded(
                      child: Column(
                        children: [
                          cardHardSoft(
                            'Soft Skills',
                            [
                              'Comunicação eficaz e cooperativa',
                              'Resolução de problemas',
                              'Organização',
                              'Proatividade',
                              'Liderança'
                            ],
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

Widget cardHardSoft(String labelText, List<String> skills) {
  return Card(
    color: Colors.transparent,
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Container(
          decoration: const BoxDecoration(
            color: Color(0xFF003C52),
            borderRadius: BorderRadius.only(
              topRight: Radius.circular(20),
              bottomRight: Radius.circular(20),
            ),
          ),
          child: Padding(
            padding: const EdgeInsets.all(10.0),
            child: Text(
              labelText,
              style: const TextStyle(
                color: Colors.white,
                fontSize: 15,
                fontFamily: 'Montserrat',
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
        ),
        Padding(
          padding: const EdgeInsets.all(8.0),
          child: Wrap(
            spacing: 10,
            runSpacing: 10,
            children: skills.map((skill) => skillCard(skill)).toList(),
          ),
        ),
      ],
    ),
  );
}

Widget skillCard(String skill) {
  return Card(
    margin: const EdgeInsets.symmetric(vertical: 5, horizontal: 5),
    shape: RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(10),
    ),
    color: const Color(0xFF003C52),
    child: Container(
      padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 10),
      child: ListTile(
        leading: const Icon(
          Icons.check,
          color: Colors.white,
        ),
        title: Text(
          skill,
          style: const TextStyle(color: Colors.white),
        ),
      ),
    ),
  );
}
