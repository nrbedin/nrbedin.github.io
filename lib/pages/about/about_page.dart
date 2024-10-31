import 'package:flutter/material.dart';

import 'package:portfolio_nrbedin/shared/constants.dart';

class AboutPage extends StatelessWidget {
  const AboutPage({super.key});

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
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Card(
                      color: const Color(0xFF003C52),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(16),
                      ),
                      child: const Padding(
                        padding: EdgeInsets.all(16.0),
                        child: Column(
                          children: [
                            CircleAvatar(
                              backgroundColor: Colors.white,
                              radius: 70,
                              backgroundImage:
                                  AssetImage('assets/images/perfil.png'),
                            ),
                            SizedBox(height: 20),
                            Text(
                              'Sobre Mim',
                              style: TextStyle(
                                color: Colors.white,
                                fontSize: 25,
                                fontWeight: FontWeight.w600,
                                fontFamily: 'Montserrat',
                              ),
                            ),
                            SizedBox(height: 20),
                            Padding(
                              padding: EdgeInsets.symmetric(horizontal: 20.0),
                              child: Text(
                                '''Naiara Rafaela Bedin - Graduada em Ciência da Computação.

Com mais de uma década de experiência no campo da tecnologia da informação, desenvolvi uma trajetória marcada por desafios e conquistas. Minha atuação abrange suporte técnico, qualidade de software e, atualmente, desenvolvimento de software.

Minha carreira é guiada por um compromisso constante com a excelência e a busca contínua por aprimoramento. Como Analista Desenvolvedora Flutter, trabalho em projetos de aplicativos para Android e iOS, sempre focada em proporcionar uma experiência de usuário consistente e de alta qualidade.''',
                                style: TextStyle(
                                  color: Colors.white,
                                  fontSize: 15,
                                  height: 1.5,
                                ),
                                textAlign: TextAlign.justify,
                              ),
                            ),
                            SizedBox(height: 30),
                          ],
                        ),
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
