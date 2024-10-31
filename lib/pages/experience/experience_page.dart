import 'package:flutter/material.dart';

import 'package:portfolio_nrbedin/shared/constants.dart';

class ExperiencePage extends StatelessWidget {
  const ExperiencePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: appBar(),
      drawer: sideMenu(),
      body: Stack(
        children: [
          background(context),
          SingleChildScrollView(
            padding: const EdgeInsets.symmetric(horizontal: 10),
            child: Column(
              children: [
                Card(
                  color: const Color(0xFF003C52),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(20),
                  ),
                  child: Padding(
                    padding: const EdgeInsets.all(20),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        const SizedBox(
                          height: 30,
                        ),
                        const Text(
                          'Experiências:',
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 25,
                            fontWeight: FontWeight.w600,
                            fontFamily: 'Montserrat',
                          ),
                        ),
                        const SizedBox(
                          height: 20,
                        ),
                        Container(
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(15),
                            color: Colors.transparent,
                          ),
                          child: const Padding(
                            padding: EdgeInsets.symmetric(horizontal: 5),
                            child: Column(
                              mainAxisAlignment: MainAxisAlignment.start,
                              children: [
                                SizedBox(
                                  height: 20,
                                ),
                                Text(
                                  "Accesys Solutions",
                                  style: TextStyle(
                                    color: Colors.white,
                                    fontSize: 20,
                                    fontWeight: FontWeight.bold,
                                    fontFamily: 'Montserrat',
                                  ),
                                ),
                                SizedBox(
                                  height: 10,
                                ),
                                Text(
                                  'Analista de Suporte de T.I. (Fevereiro/2011 – Julho/2014)',
                                  textAlign: TextAlign.start,
                                  style: TextStyle(
                                    color: Colors.white,
                                    fontSize: 15,
                                    fontWeight: FontWeight.w600,
                                    fontFamily: 'Montserrat',
                                  ),
                                ),
                                Text(
                                  'Principais atribuições: Diagnóstico e resolução de problemas de hardware e software,configurações de sistemas, suporte a redes, instalações de softwares, treinamentos de usuários e manutenção preventiva. Além disso, desempenhava um papel crucial na garantia da disponibilidade e desempenho dos sistemas, assegurando que as operações de T.I. ocorram de forma eficiente e sem interrupções significativas.',
                                  style: TextStyle(
                                    color: Colors.white,
                                    fontSize: 15,
                                    //fontFamily: 'Montserrat',
                                  ),
                                  textAlign: TextAlign.justify,
                                ),
                                SizedBox(
                                  height: 10,
                                ),
                                Text(
                                  'Analista de Qualidade de Software (Julho/2014 – Fevereiro/2023)',
                                  textAlign: TextAlign.start,
                                  style: TextStyle(
                                    color: Colors.white,
                                    fontSize: 15,
                                    fontWeight: FontWeight.w600,
                                    fontFamily: 'Montserrat',
                                  ),
                                ),
                                Text(
                                  'Execução de testes manuais no ERP próprio da empresa, com foco na identificação de possíveis bug’s e garantia da qualidade do software. Realização de análise e desenvolvimento de importação de dados em Delphi, assegurando a integridade e consistência das informações processadas pelo sistema. Além de colaboração ativa no ciclo de vida do desenvolvimento de software, participando de reuniões de planejamento e interagindo com as equipes de desenvolvimento para compreender requisitos e cenários de teste.',
                                  style: TextStyle(
                                    color: Colors.white,
                                    fontSize: 15,
                                    //fontFamily: 'Montserrat',
                                  ),
                                  textAlign: TextAlign.justify,
                                ),
                                SizedBox(
                                  height: 10,
                                ),
                                Text(
                                  'Analista Desenvolvedora Flutter (Fevereiro/2023 – Atualmente)',
                                  textAlign: TextAlign.start,
                                  style: TextStyle(
                                    color: Colors.white,
                                    fontSize: 15,
                                    fontWeight: FontWeight.w600,
                                    fontFamily: 'Montserrat',
                                  ),
                                ),
                                Text(
                                  'Desenvolvimento de aplicativos para Android e iOS utilizando a tecnologia Flutter, garantindo uma experiência de usuário consistente e de alta qualidade. Responsável pela publicação dos aplicativos nas respectivas lojas (Google Play Store e Apple App Store), assegurando conformidade com as diretrizes e padrões estabelecidos por cada plataforma. Além de atuar no ciclo completo de desenvolvimento de software, desde a concepção e análise de requisitos até o desenvolvimento e manutenção. Com conhecimento em tecnologias como: Dart, SQL, MariaDB,SQFlite, Firebase, AWS, Jira, Github e consumo de APIs Rest.',
                                  style: TextStyle(
                                    color: Colors.white,
                                    fontSize: 15,
                                    //fontFamily: 'Montserrat',
                                  ),
                                  textAlign: TextAlign.justify,
                                ),
                                SizedBox(
                                  height: 10,
                                ),
                              ],
                            ),
                          ),
                        ),
                        const SizedBox(height: 10),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
