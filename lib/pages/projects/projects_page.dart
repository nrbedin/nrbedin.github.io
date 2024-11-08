import 'package:flutter/material.dart';

import 'package:carousel_slider/carousel_slider.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:url_launcher/url_launcher.dart';

import 'package:portfolio_nrbedin/shared/constants.dart';

class ProjectsPage extends StatelessWidget {
  const ProjectsPage({super.key});

  @override
  Widget build(BuildContext context) {
    final double screenWidth = MediaQuery.of(context).size.width;
    final bool isMobile = screenWidth < 600;

    return Scaffold(
      appBar: appBar(),
      drawer: sideMenu(),
      body: Stack(
        alignment: Alignment.center,
        children: [
          background(context),
          SingleChildScrollView(
            child: CarouselSlider(
              options: CarouselOptions(
                height: 500.0,
                enlargeCenterPage: true,
              ),
              items: projetos.map((projeto) {
                return Builder(
                  builder: (BuildContext context) {
                    return Container(
                      width: screenWidth * (isMobile ? 0.9 : 0.7),
                      margin: const EdgeInsets.symmetric(horizontal: 5.0),
                      child: Card(
                        color: const Color(0xFF003C52),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.center,
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            const SizedBox(height: 10),
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
                            Expanded(
                              child: Padding(
                                padding: const EdgeInsets.all(10.0),
                                child: SingleChildScrollView(
                                  child: projeto.descricao,
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

  final RichText descricao;
  final String githubLink;

  Projeto({
    required this.nome,
    required this.descricao,
    required this.githubLink,
  });
}

final List<Projeto> projetos = [
  Projeto(
    nome: "Delivery Bida - Flutter WEB",
    descricao: RichText(
      text: const TextSpan(
        style: TextStyle(color: Colors.white),
        children: [
          TextSpan(
              text:
                  'Delivery Bida é um sistema de backoffice desenvolvido em Flutter WEB, utilizando arquitetura MVC com Design Pattern Repository e Service, e os pacotes Modular e MobX.\nO desenvolvimento do Delivery Bida envolveu a criação de um sistema, capaz de gerenciar pedidos de delivery de maneira integrada e prática.\nUtilizando o poder do Flutter e pacotes modernos como Modular e MobX, o sistema garante uma performance excepcional e uma interface intuitiva.\n\n'),
          TextSpan(
              text: '- Gestão de pedidos delivery;\n\n',
              style: TextStyle(fontWeight: FontWeight.bold)),
          TextSpan(
              text: '- Monitoramento de pedidos em tempo real;\n\n',
              style: TextStyle(fontWeight: FontWeight.bold)),
          TextSpan(
              text:
                  '- Interface intuitiva e responsiva para uma experiência otimizada;\n\n',
              style: TextStyle(fontWeight: FontWeight.bold)),
        ],
      ),
    ),
    githubLink: "https://github.com/nrbedin/deliverybida",
  ),
  Projeto(
    nome: "OhMyDog - Flutter",
    descricao: RichText(
      text: const TextSpan(
        style: TextStyle(color: Colors.white),
        children: [
          TextSpan(
              text:
                  'É um aplicativo para petshop desenvolvido em Flutter, utilizando Modular e MobX.\nFacilita agendamentos e gerenciamento de serviços para pets, proporcionando uma experiência integrada e eficiente para os clientes.\n\n'),
          TextSpan(
              text:
                  '- Permite que os clientes agendem serviços para seus pets;\n\n',
              style: TextStyle(fontWeight: FontWeight.bold)),
          TextSpan(
              text:
                  '- Facilita o gerenciamento dos diversos serviços oferecidos pelo petshop;\n\n',
              style: TextStyle(fontWeight: FontWeight.bold)),
          TextSpan(
              text:
                  '- Proporciona uma experiência integrada e eficiente para os clientes;\n\n',
              style: TextStyle(fontWeight: FontWeight.bold)),
        ],
      ),
    ),
    githubLink: "https://github.com/nrbedin/ohmydog",
  ),
  Projeto(
    nome: "Portfólio - Flutter WEB",
    descricao: RichText(
      text: const TextSpan(
        style: TextStyle(color: Colors.white),
        children: [
          TextSpan(
              text:
                  'Este é o portfólio de Naiara Rafaela Bedin, graduada em Ciência da Computação, com mais de uma década de experiência em TI.\nAqui, você encontrará detalhes sobre minhas habilidades, experiências e alguns dos projetos que desenvolvi.\n\n'),
          TextSpan(
              text:
                  '- Exibir minhas habilidades técnicas e interpessoais;\n\n',
              style: TextStyle(fontWeight: FontWeight.bold)),
          TextSpan(
              text: '- Detalhar minhas experiências profissionais;\n\n',
              style: TextStyle(fontWeight: FontWeight.bold)),
          TextSpan(
              text:
                  '- Apresentar projetos desenvolvidos, com exemplos práticos;\n\n',
              style: TextStyle(fontWeight: FontWeight.bold)),
        ],
      ),
    ),
    githubLink: "https://github.com/nrbedin/nrbedin.github.io",
  ),
  Projeto(
    nome: "Loja Virtual - Flutter",
    descricao: RichText(
      text: const TextSpan(
        style: TextStyle(color: Colors.white),
        children: [
          TextSpan(
              text:
                  'É uma plataforma de comércio eletrônico desenvolvida para facilitar pedidos de fast food e sobremesas, incluindo pizzas, doces e lanches.\nAtravés de um sistema de login, os usuários podem acessar uma lista de produtos, adicionar itens ao carrinho de compras, e finalizar pedidos de forma prática e rápida.\n\n'),
          TextSpan(
              text:
                  '- Permite que os usuários se registrem e façam login para acessar a loja;\n\n',
              style: TextStyle(fontWeight: FontWeight.bold)),
          TextSpan(
              text:
                  '- Exibe uma lista de produtos disponíveis, permitindo aos usuários adicionar itens ao carrinho;\n\n',
              style: TextStyle(fontWeight: FontWeight.bold)),
          TextSpan(
              text:
                  '- Os usuários podem adicionar, remover e ajustar a quantidade de produtos no carrinho;\n\n',
              style: TextStyle(fontWeight: FontWeight.bold)),
          TextSpan(
              text: '- Facilita o processo de conclusão do pedido;\n\n',
              style: TextStyle(fontWeight: FontWeight.bold)),
          TextSpan(
              text:
                  '- Os usuários podem consultar o status de entrega dos pedidos realizados;\n\n',
              style: TextStyle(fontWeight: FontWeight.bold)),
        ],
      ),
    ),
    githubLink: "https://github.com/nrbedin/lojaVirtual",
  ),
];



//final List<Projeto> projetos = [
//  Projeto(
//    nome: "Delivery Bida - Flutter WEB",
//    descricao:
//        '''Delivery Bida é um sistema de backoffice desenvolvido em Flutter WEB, utilizando arquitetura MVC com Design Pattern Repository e Service,
//e os pacotes Modular e MobX.
//O desenvolvimento do Delivery Bida envolveu a criação de um sistema, capaz de gerenciar pedidos de delivery de maneira integrada e prática.
//           Utilizando o poder do Flutter e pacotes modernos como Modular e MobX, o sistema garante uma performance excepcional e uma interface intuitiva.\n
//              - Gestão de pedidos delivery;\n
//              - Monitoramento de pedidos em tempo real;\n
//              - Interface intuitiva e responsiva para uma experiência otimizada;\n''',
//    githubLink: "https://github.com/nrbedin/deliverybida",
//  ),
//  Projeto(
//    nome: "OhMyDog - Flutter",
//    descricao:
//        '''É um aplicativo para petshop desenvolvido em Flutter, utilizando Modular e MobX. Facilita agendamentos e
//gerenciamento de serviços para pets, proporcionando uma experiência integrada e eficiente para os clientes.\n
//              - Permite que os clientes agendem serviços para seus pets;\n
//              - Facilita o gerenciamento dos diversos serviços oferecidos pelo petshop;\n
//              - Proporciona uma experiência integrada e eficiente para os clientes;\n''',
//    githubLink: "https://github.com/nrbedin/ohmydog",
//  ),
//  Projeto(
//    nome: "Portfólio - Flutter WEB",
//    descricao:
//        '''Este é o portfólio de Naiara Rafaela Bedin, graduada em Ciência da Computação, com mais de uma década de experiência em TI.
//           Aqui, você encontrará detalhes sobre minhas habilidades, experiências e alguns dos projetos que desenvolvi.\n
//              - Exibir minhas habilidades técnicas e interpessoais;\n
//              - Detalhar minhas experiências profissionais;\n
//              - Apresentar projetos desenvolvidos, com exemplos práticos;\n''',
//    githubLink: "https://github.com/nrbedin/nrbedin.github.io",
//  ),
//  Projeto(
//    nome: "Loja Virtual - Flutter",
//    descricao:
//        '''É uma plataforma de comércio eletrônico desenvolvida para facilitar pedidos de fast food e sobremesas, incluindo pizzas, doces e lanches.
//           Através de um sistema de login, os usuários podem acessar uma lista de produtos, adicionar itens ao carrinho de compras, e finalizar pedidos de forma prática e rápida.\n
//              - Permite que os usuários se registrem e façam login para acessar a loja;\n
//              - Exibe uma lista de produtos disponíveis, permitindo aos usuários adicionar itens ao carrinho;\n
//              - Os usuários podem adicionar, remover e ajustar a quantidade de produtos no carrinho;\n
//              - Facilita o processo de conclusão do pedido;\n
//              - Os usuários podem consultar o status de entrega dos pedidos realizados;\n''',
//    githubLink: "https://github.com/nrbedin/lojaVirtual",
//  ),
//];
