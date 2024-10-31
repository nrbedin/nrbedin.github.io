import 'package:flutter/material.dart';

import 'package:carousel_slider/carousel_slider.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:url_launcher/url_launcher.dart';

import 'package:portfolio_nrbedin/shared/constants.dart';

class ProjectsPage extends StatelessWidget {
  const ProjectsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: appBar(),
      drawer: sideMenu(),
      body: Stack(
        alignment: Alignment.center,
        children: [
          background(context),
          CarouselSlider(
            options: CarouselOptions(
              height: 500.0,
              enlargeCenterPage: true,
            ),
            items: projetos.map((projeto) {
              return Builder(
                builder: (BuildContext context) {
                  return Container(
                    width: MediaQuery.of(context).size.width,
                    margin: const EdgeInsets.symmetric(horizontal: 5.0),
                    child: Card(
                      color: const Color(0xFF003C52), // Colors.transparent,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: [
                          const SizedBox(
                            height: 10,
                          ),
                          Padding(
                            padding: const EdgeInsets.all(10.0),
                            child: Text(
                              projeto.nome,
                              style: const TextStyle(
                                fontFamily: 'Montserrat',
                                color: Colors.white,
                                fontSize: 20.0,
                                fontWeight: FontWeight.bold,
                              ),
                              textAlign: TextAlign.center,
                            ),
                          ),
                          Padding(
                            padding: const EdgeInsets.all(10.0),
                            child: Text(
                              projeto.descricao,
                              style: const TextStyle(color: Colors.white),
                              textAlign: TextAlign.justify,
                            ),
                          ),
                          Padding(
                            padding: const EdgeInsets.all(10.0),
                            child: Text(
                              "Data de Desenvolvimento: ${projeto.data}",
                              style: const TextStyle(
                                color: Colors.white,
                              ),
                            ),
                          ),
                          Padding(
                            padding: const EdgeInsets.all(10.0),
                            child: Row(
                              children: [
                                Expanded(
                                  child: ElevatedButton.icon(
                                    onPressed: () {
                                      _launchURL(projeto.githubLink);
                                    },
                                    icon: const Icon(FontAwesomeIcons.github),
                                    label: const Text('GitHub'),
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                  );
                },
              );
            }).toList(),
          ),
        ],
      ),
    );
  }

  Future<void> _launchURL(String url) async {
    if (await canLaunch(url)) {
      await launch(url);
    } else {
      throw 'Could not launch $url';
    }
  }
}

class Projeto {
  final String nome;
  final String data;
  final String descricao;
  final String githubLink;

  Projeto({
    required this.nome,
    required this.data,
    required this.descricao,
    required this.githubLink,
  });
}

final List<Projeto> projetos = [
  Projeto(
    nome: "Aplicativo Delivery - Flutter web",
    data: "Setembro de 2023",
    descricao:
        "Desenvolvimento em Dart, usando a framework Flutter, um aplicativo que realiza o controle dos pedidos de delivery",
    githubLink: "https://github.com/nrbedin/deliverybida",
  ),
  Projeto(
    nome: "Aplicativo para PetShop- Flutter",
    data: "Agosto 2024",
    descricao: "Desenvolvimento em Dart, usando a framework Flutter,",
    githubLink: "https://github.com/nrbedin/ohmydog",
  ),
  Projeto(
    nome: "Aplicativo Portfólio - Flutter",
    data: "Outubro de 2024",
    descricao: "Desenvolvimento em Dart, usando a framework Flutter,",
    githubLink: "https://github.com/nrbedin",
  ),
];
