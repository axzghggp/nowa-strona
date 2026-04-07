import { Link } from 'react-router-dom';
import { Leaf, Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Leaf className="h-8 w-8 text-[#84A59D]" />
              <span className="font-serif text-2xl font-semibold text-white">
                Dietetyk<span className="text-[#84A59D]">Pro</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 mb-6">
              Odzyskaj zdrowie i wymarzoną sylwetkę bez głodówek. Indywidualne plany żywieniowe dopasowane do Twojego stylu życia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Na skróty</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/o-mnie" className="hover:text-[#84A59D] transition-colors">O mnie</Link></li>
              <li><Link to="/oferta" className="hover:text-[#84A59D] transition-colors">Oferta</Link></li>
              <li><Link to="/cennik" className="hover:text-[#84A59D] transition-colors">Cennik</Link></li>
              <li><Link to="/blog" className="hover:text-[#84A59D] transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Usługi</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/oferta" className="hover:text-[#84A59D] transition-colors">Konsultacja wstępna</Link></li>
              <li><Link to="/oferta" className="hover:text-[#84A59D] transition-colors">Indywidualny jadłospis</Link></li>
              <li><Link to="/oferta" className="hover:text-[#84A59D] transition-colors">Współpraca miesięczna</Link></li>
              <li><Link to="/oferta" className="hover:text-[#84A59D] transition-colors">Analiza badań</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#84A59D] shrink-0" />
                <span>ul. Zdrowa 12/4<br />00-001 Warszawa<br />(Możliwe konsultacje online)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#84A59D] shrink-0" />
                <span>+48 123 456 789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#84A59D] shrink-0" />
                <span>kontakt@dietetykpro.pl</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} DietetykPro. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}
