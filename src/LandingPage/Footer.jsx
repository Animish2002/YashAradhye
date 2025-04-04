import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ChevronRight,
  Heart,
  Download,
  Smartphone,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { Input } from "../components/ui/input";

const Footer = () => {
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        "About Us",
        "Services",
        "Exam Guidance",
        "Resources",
        "Success Stories",
        "Contact Us",
      ],
    },
    {
      title: "Support",
      links: ["Help Center", "FAQs", "Community", "Feedback", "Contact Us"],
    },
  ];

  const socialLinks = [
    { icon: Facebook, url: "#", ariaLabel: "Facebook" },
    { icon: Twitter, url: "#", ariaLabel: "Twitter" },
    { icon: Instagram, url: "#", ariaLabel: "Instagram" },
    { icon: Linkedin, url: "#", ariaLabel: "LinkedIn" },
    { icon: Youtube, url: "#", ariaLabel: "YouTube" },
  ];

  const appStores = [
    { name: "App Store", url: "#" },
    { name: "Google Play", url: "#" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-zinc-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section with logo, links and app download */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12">
          {/* Logo and description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
              YashAradhye
            </span>
            <p className="mt-4 text-zinc-400 text-sm">
              Empowering students across Maharashtra with quality educational
              resources. From rural villages to urban centers, we're here to
              help you achieve your academic goals.
            </p>

            {/* Social media links */}
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  aria-label={social.ariaLabel}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-zinc-800 hover:bg-blue-600 p-2 rounded-full text-zinc-400 hover:text-white transition-colors duration-200"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer links */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {footerLinks.map((category, index) => (
              <motion.div key={index} variants={item}>
                <h4 className="font-semibold text-lg mb-4">{category.title}</h4>
                <ul className="space-y-3">
                  {category.links.map((link, linkIndex) => (
                    <motion.li
                      key={linkIndex}
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <a
                        href="#"
                        className="text-zinc-400 hover:text-blue-400 text-sm flex items-center group"
                      >
                        <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Download App Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <Card className="border-zinc-700 bg-zinc-800 shadow-lg overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Smartphone className="h-5 w-5 text-blue-400" />
                  <h4 className="font-semibold text-lg">Download Our App</h4>
                </div>

                <div className="flex justify-center mb-4">
                  {/* QR Code as placeholder */}
                  <div className="bg-white p-2 rounded-lg">
                    <img
                      src="/api/placeholder/160/160"
                      alt="QR Code"
                      className="w-40 h-40"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  {appStores.map((store, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full border-zinc-600 hover:border-blue-500 hover:bg-blue-600/10 text-sm flex items-center justify-center space-x-2"
                    >
                      <Download className="h-4 w-4" />
                      <span>{store.name}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>



        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="pt-6 flex flex-col md:flex-row md:items-center md:justify-between"
        >
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} YashAradhye. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center text-sm text-white">
            <span>
              Design and Developed by{' '}
              <a
                href="https://thefortune.club"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-yellow-400"
              >
                The Fortune Club
              </a>
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
