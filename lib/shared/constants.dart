import 'package:flutter/material.dart';

import 'package:font_awesome_flutter/font_awesome_flutter.dart';

import 'package:portfolio_nrbedin/pages/about/about_page.dart';
import 'package:portfolio_nrbedin/pages/experience/experience_page.dart';
import 'package:portfolio_nrbedin/pages/home/home_page.dart';
import 'package:portfolio_nrbedin/pages/perfil/contact_page.dart';
import 'package:portfolio_nrbedin/pages/projects/projects_page.dart';
import 'package:portfolio_nrbedin/pages/skills/skills_page_new.dart';

final ButtonStyle raisedButtonStyle = ElevatedButton.styleFrom(
  foregroundColor: const Color(0xFFF2F2F2),
  backgroundColor: const Color(0xFF003C52),
  shape: const RoundedRectangleBorder(
    borderRadius: BorderRadius.all(Radius.circular(20)),
  ),
  textStyle: const TextStyle(
    fontSize: 20,
    fontWeight: FontWeight.w500,
  ),
);

appBar() {
  return PreferredSize(
    preferredSize: const Size.fromHeight(140.0),
    child: AppBar(
      toolbarHeight: 150,
      centerTitle: true,
      title: Image.asset(
        "assets/images/logo.png",
        fit: BoxFit.cover,
      ),
      backgroundColor: const Color(0xFF002D3D),
      leading: Builder(
        builder: (BuildContext context) {
          return IconButton(
            icon: const Icon(
              Icons.menu,
              color: Colors.white,
              size: 30,
            ),
            onPressed: () {
              Scaffold.of(context).openDrawer();
            },
            tooltip: MaterialLocalizations.of(context).openAppDrawerTooltip,
          );
        },
      ),
    ),
  );
}

sideMenu() {
  return Drawer(
    elevation: 20,
    backgroundColor: const Color(0xFF001E29),
    child: Container(
      decoration: BoxDecoration(borderRadius: BorderRadius.circular(50)),
      child: Column(children: [
        const SizedBox(
          height: 50,
        ),
        menuItems(Icons.home, 'Home', const HomePage()),
        menuItems(Icons.person, 'Sobre', const AboutPage()),
        menuItems(
            Icons.emoji_objects_rounded, 'Habilidades', const SkillsPage()),
        menuItems(Icons.computer_sharp, 'Experiências', const ExperiencePage()),
        menuItems(Icons.construction, 'Projetos', const ProjectsPage()),
        //objetosMenu(Icons.contact_page, 'Contato', ContatoPage()),
      ]),
    ),
  );
}

menuItems(icon, label, route) {
  return Container(
    decoration: const BoxDecoration(
      border: Border(
        bottom: BorderSide(width: 2.0, color: Colors.white12),
      ),
    ),
    padding: const EdgeInsets.only(left: 7),
    child: Column(
      children: [
        const SizedBox(
          height: 10,
        ),
        Builder(builder: (BuildContext context) {
          return ListTile(
            leading: Icon(
              icon,
              color: Colors.white,
            ),
            title: Text(
              label,
              style: const TextStyle(fontSize: 15, color: Colors.white),
            ),
            onTap: () {
              Navigator.of(context)
                  .push(MaterialPageRoute(builder: (context) => route));
            },
          );
        }),
      ],
    ),
  );
}

background(context) {
  return Container(
    decoration: const BoxDecoration(
      gradient: LinearGradient(
        colors: [
          Color(0xFF002D3D),
          Colors.black,
        ],
        begin: Alignment.topCenter,
        end: Alignment.bottomCenter,
        //stops: [],
      ),
    ),
  );
}

contactButton(context, counter) {
  return SizedBox(
    height: 100,
    width: 100,
    child: Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        const SizedBox(height: 5),
        FloatingActionButton(
          backgroundColor: const Color(0xFFDD664A), // const Color(0xFF003C52),
          onPressed: () {
            showDialog(
              context: context,
              builder: (context) {
                return const ContactPage();
              },
            );
          },
          child: const Icon(
            FontAwesomeIcons.headset,
            color: Colors.white,
          ),
        ),
      ],
    ),
  );
}
