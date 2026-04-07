import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

export default function Pricing() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Cennik usług</h1>
          <p className="text-lg text-gray-600">
            Przejrzyste ceny, brak ukrytych kosztów. Inwestycja w zdrowie, która zwraca się każdego dnia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Plan 1 */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Jadłospis 7 dni</h3>
            <p className="text-gray-500 mb-6">Idealny na start</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-gray-900">199</span>
              <span className="text-gray-500"> zł</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-[#84A59D] mr-3 shrink-0" /> <span className="text-gray-700">Wywiad żywieniowy</span></li>
              <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-[#84A59D] mr-3 shrink-0" /> <span className="text-gray-700">Analiza badań</span></li>
              <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-[#84A59D] mr-3 shrink-0" /> <span className="text-gray-700">Jadłospis na 7 dni</span></li>
              <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-[#84A59D] mr-3 shrink-0" /> <span className="text-gray-700">Lista zakupów</span></li>
            </ul>
            <Link to="/kontakt" className="w-full block text-center bg-gray-50 hover:bg-gray-100 text-gray-900 font-medium py-3 rounded-xl border border-gray-200 transition-colors">
              Wybieram
            </Link>
          </div>

          {/* Plan 2 */}
          <div className="bg-[#3D405B] rounded-2xl p-8 shadow-xl transform md:-translate-y-4 flex flex-col relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E29578] text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
              Najlepsza wartość
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Współpraca 1 msc</h3>
            <p className="text-gray-300 mb-6">Pełne wsparcie i edukacja</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-white">349</span>
              <span className="text-gray-300"> zł</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-[#E29578] mr-3 shrink-0" /> <span className="text-gray-200">Wszystko z pakietu Jadłospis</span></li>
              <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-[#E29578] mr-3 shrink-0" /> <span className="text-gray-200">Stały kontakt WhatsApp</span></li>
              <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-[#E29578] mr-3 shrink-0" /> <span className="text-gray-200">Cotygodniowe raporty</span></li>
              <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-[#E29578] mr-3 shrink-0" /> <span className="text-gray-200">Modyfikacje planu</span></li>
              <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-[#E29578] mr-3 shrink-0" /> <span className="text-gray-200">Edukacja żywieniowa</span></li>
            </ul>
            <Link to="/kontakt" className="w-full block text-center bg-[#E29578] hover:bg-[#d18467] text-white font-medium py-3 rounded-xl transition-colors">
              Wybieram
            </Link>
          </div>

          {/* Plan 3 */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Konsultacja</h3>
            <p className="text-gray-500 mb-6">Jednorazowe spotkanie</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-gray-900">150</span>
              <span className="text-gray-500"> zł</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-[#84A59D] mr-3 shrink-0" /> <span className="text-gray-700">60 minut rozmowy online</span></li>
              <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-[#84A59D] mr-3 shrink-0" /> <span className="text-gray-700">Analiza wyników badań</span></li>
              <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-[#84A59D] mr-3 shrink-0" /> <span className="text-gray-700">Zalecenia suplementacyjne</span></li>
              <li className="flex items-start"><CheckCircle2 className="h-5 w-5 text-[#84A59D] mr-3 shrink-0" /> <span className="text-gray-700">Odpowiedzi na pytania</span></li>
            </ul>
            <Link to="/kontakt" className="w-full block text-center bg-gray-50 hover:bg-gray-100 text-gray-900 font-medium py-3 rounded-xl border border-gray-200 transition-colors">
              Wybieram
            </Link>
          </div>
        </div>

        <div className="mt-16 bg-[#F4F1DE] rounded-2xl p-8 text-center max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Potrzebujesz dłuższej współpracy?</h3>
          <p className="text-gray-700 mb-6">Wybierz pakiet na 3 lub 6 miesięcy i oszczędź nawet do 15%.</p>
          <Link to="/kontakt" className="inline-block text-[#E29578] font-semibold hover:underline">
            Zapytaj o pakiety długoterminowe &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
