import React from 'react';
import { Github, Linkedin, Globe } from 'lucide-react';

const Footer: React.FC = () => {
    const socialLinks = [
        {
            icon: <Github size={24} />,
            href: "https://github.com/Mohamed-Samahi",
            ariaLabel: "GitHub Profile"
        },
        {
            icon: <Linkedin size={24} />,
            href: "https://www.linkedin.com/in/mohamed-samahi/",
            ariaLabel: "LinkedIn Profile"
        },
        {
            icon: <Globe size={24} />,
            href: "https://mohamed-samahi.vercel.app/",
            ariaLabel: "Personal Portfolio"
        }
    ];

    return (
        <footer className="py-6 bg-white border-t border-gray-200">
            <div className="container flex flex-col items-center justify-center px-4 mx-auto space-y-4">
                <p className="text-sm text-gray-600">
                    Designed and Developed by <span className="font-semibold text-gray-800">Mohamed Samahi</span>
                </p>

                <div className="flex space-x-4">
                    {socialLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.ariaLabel}
                            className="text-gray-600 transition-colors duration-300 ease-in-out hover:text-gray-900"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>

                <p className="text-xs text-gray-500">
                    © {new Date().getFullYear()} All Rights Reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;