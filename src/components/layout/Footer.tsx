import { ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = [
    { title: 'Company', links: ['About Us', 'Careers', 'Press'] },
    { title: 'Resources', links: ['Blog', 'Help Center', 'Contact Us'] },
    { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Cancellation Policy'] },
  ];

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <ChefHat className="h-8 w-8 text-white" />
              <span className="font-bold text-xl text-white">Staffing Connect</span>
            </Link>
            <p className="text-white/60">The future of hospitality staffing.</p>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/60 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/40">
          <p>&copy; {new Date().getFullYear()} Hospitality Staffing Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
