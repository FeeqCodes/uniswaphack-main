import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const footerLinks = {
    protocol: {
      title: "Protocol",
      links: [
        { name: "About", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Blog", href: "/blog" },
        { name: "Terms", href: "/terms" },
      ],
    },
    developers: {
      title: "Developers",
      links: [
        { name: "Documentation", href: "/docs" },
        { name: "GitHub", href: "https://github.com" },
        { name: "Audit Reports", href: "/audits" },
        { name: "Bug Bounty", href: "/bounty" },
      ],
    },
    community: {
      title: "Community",
      links: [
        {
          name: "Discord",
          href: "https://discord.gg",
          src: "/assets/discord.png",
        },
        {
          name: "Twitter",
          href: "https://twitter.com",
          src: "/assets/twitter.png",
        },
        {
          name: "Telegram",
          href: "https://telegram.org",
          src: "/assets/telegram.png",
        },
      ],
    },
  };

  return (
    <footer className="bg-[#1F211C] border-t border-gray-800 relative inset-0  shadow-[0_0_30px_rgba(100,72,129,0.2)] group">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 text-[#644881]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm1 14h-2v-1h2v1zm0-3.7l-.5.3V13h-1v-.4l-.5-.3C9.75 11.5 9 10.33 9 9c0-1.66 1.34-3 3-3s3 1.34 3 3c0 1.33-.75 2.5-2 3.3z" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-white">HourVault</span>
              </div>
            </Link>

            <p className="text-gray-400 pr-8">
              Secure and efficient token launches powered by Uniswap V4
            </p>
            <div className="flex space-x-4">
              {Object.values(footerLinks.community.links).map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="w-7 h-7 rounded-lg  flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#644881] transition-all"
                >
                  <Image src={link.src} width={100} height={100} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.values(footerLinks).map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex justify-between items-center">
          <p className="text-gray-400">
            © 2024 AquaVault. All rights reserved.
          </p>
          <div className="flex space-x-6 text-gray-400">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
