import 'package:flutter/material.dart';

import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:url_launcher/url_launcher.dart';

class ContactPage extends StatelessWidget {
  const ContactPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Dialog(
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(20),
      ),
      backgroundColor: Colors.transparent,
      child: SizedBox(
        width: 500,
        height: 600,
        child: Card(
          color: Colors.transparent,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(20),
          ),
          child: Column(
            children: [
              Expanded(
                child: Container(
                  height: 50,
                  decoration: const BoxDecoration(
                    color: Color(0xFF003C52),
                    borderRadius: BorderRadius.only(
                      topLeft: Radius.circular(20),
                      topRight: Radius.circular(20),
                    ),
                  ),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: [
                      const SizedBox(
                        width: 10,
                      ),
                      const Icon(
                        FontAwesomeIcons.user,
                        color: Colors.white,
                      ),
                      const Text(
                        'Naiara Rafaela Bedin',
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 15,
                        ),
                      ),
                      const SizedBox(
                        width: 50,
                      ),
                      IconButton(
                        onPressed: () {
                          Navigator.of(context).pop();
                        },
                        icon: const Icon(
                          Icons.close,
                          color: Colors.white,
                          size: 25,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
              const SizedBox(
                height: 10,
              ),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 25),
                child: SizedBox(
                  height: 500,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      const ChatMessage(
                        message: "Olá! Como posso ajudar?",
                        isUser: false,
                      ),
                      const SizedBox(height: 10),
                      const ChatMessage(
                        message: "Você me encontra aqui:",
                        isUser: false,
                      ),
                      const SizedBox(height: 20),
                      ContactInfo(
                        icon: FontAwesomeIcons.github,
                        text: "/nrbedin",
                        onPressed: () {
                          launch('https://github.com/nrbedin');
                        },
                      ),
                      const SizedBox(
                        height: 5,
                      ),
                      ContactInfo(
                        icon: FontAwesomeIcons.envelope,
                        text: "nrbedin@gmail.com",
                        onPressed: () {
                          launch('mailto:nrbedin@gmail.com');
                        },
                      ),
                      const SizedBox(
                        height: 5,
                      ),
                      ContactInfo(
                        icon: FontAwesomeIcons.linkedin,
                        text: '/naiara-bedin',
                        onPressed: () {
                          launch('https://www.linkedin.com/in/naiara-bedin/');
                        },
                      ),
                      const SizedBox(height: 20),
                      FutureBuilder(
                        future: Future.delayed(const Duration(seconds: 3)),
                        builder: (context, snapshot) {
                          if (snapshot.connectionState ==
                              ConnectionState.done) {
                            return const ChatMessage(
                              message:
                                  "Obrigada pelo contato! Fico à disposição.",
                              isUser: false,
                            );
                          } else {
                            return Container();
                          }
                        },
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class ChatMessage extends StatelessWidget {
  final String message;
  final bool isUser;

  const ChatMessage({
    super.key,
    required this.message,
    required this.isUser,
  });

  @override
  Widget build(BuildContext context) {
    return FadeIn(
      child: Row(
        mainAxisAlignment:
            isUser ? MainAxisAlignment.end : MainAxisAlignment.start,
        children: [
          if (!isUser)
            const CircleAvatar(
              backgroundColor: Color(0xFF003C52),
              radius: 20,
              child: Icon(
                FontAwesomeIcons.user,
                color: Colors.white,
              ),
            ),
          const SizedBox(width: 10),
          Flexible(
            child: Container(
              padding: const EdgeInsets.all(15),
              margin: const EdgeInsets.symmetric(vertical: 5),
              decoration: BoxDecoration(
                color: isUser ? const Color(0xFF003C52) : Colors.white,
                borderRadius: BorderRadius.only(
                  topLeft: Radius.circular(isUser ? 20 : 0),
                  topRight: Radius.circular(isUser ? 0 : 20),
                  bottomLeft: const Radius.circular(20),
                  bottomRight: const Radius.circular(20),
                ),
              ),
              child: Text(
                message,
                style: TextStyle(
                  fontFamily: 'Montserrat',
                  fontWeight: FontWeight.w500,
                  fontSize: 15,
                  color: isUser ? Colors.black : Colors.black,
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class ContactInfo extends StatelessWidget {
  final IconData icon;
  final String text;
  final VoidCallback onPressed;

  const ContactInfo({
    super.key,
    required this.icon,
    required this.text,
    required this.onPressed,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onPressed,
      child: Container(
        height: 50,
        width: 310,
        padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 20),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(20),
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(
              icon,
              size: 20,
              color: Colors.black,
            ),
            const SizedBox(width: 10),
            Text(
              text,
              style: const TextStyle(
                fontSize: 15,
                fontFamily: 'Montserrat',
                color: Colors.black,
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class FadeIn extends StatefulWidget {
  final Widget child;

  const FadeIn({super.key, required this.child});

  @override
  _FadeInState createState() => _FadeInState();
}

class _FadeInState extends State<FadeIn> with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _opacity;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: const Duration(milliseconds: 250),
      vsync: this,
    );
    _opacity = Tween<double>(begin: 0, end: 1).animate(_controller);
    _controller.forward();
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: _opacity,
      builder: (context, child) {
        return Opacity(
          opacity: _opacity.value,
          child: widget.child,
        );
      },
    );
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }
}
