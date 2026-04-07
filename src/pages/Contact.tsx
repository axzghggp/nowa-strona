import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Skontaktuj się ze mną</h1>
          <p className="text-lg text-gray-600">
            Masz pytania? Chcesz umówić się na wizytę? Wypełnij formularz lub skontaktuj się bezpośrednio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Dane kontaktowe</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-[#F4F1DE] p-4 rounded-full text-[#E29578] mr-6">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Gabinet</h3>
                  <p className="text-gray-600">ul. Zdrowa 12/4<br />00-001 Warszawa</p>
                  <p className="text-sm text-[#84A59D] mt-2 font-medium">Przyjmuję również online!</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#F4F1DE] p-4 rounded-full text-[#E29578] mr-6">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Telefon</h3>
                  <p className="text-gray-600">+48 123 456 789</p>
                  <p className="text-sm text-gray-500 mt-1">Pon - Pt, 9:00 - 17:00</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#F4F1DE] p-4 rounded-full text-[#E29578] mr-6">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">E-mail</h3>
                  <p className="text-gray-600">kontakt@dietetykpro.pl</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#FAFAFA] p-8 rounded-2xl border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Napisz wiadomość</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Imię i nazwisko</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#84A59D] focus:border-transparent transition-shadow"
                  placeholder="Jan Kowalski"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Adres e-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#84A59D] focus:border-transparent transition-shadow"
                  placeholder="jan@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Temat</label>
                <select 
                  id="subject" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#84A59D] focus:border-transparent transition-shadow bg-white"
                >
                  <option>Umówienie konsultacji</option>
                  <option>Pytanie o ofertę</option>
                  <option>Współpraca</option>
                  <option>Inne</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Wiadomość</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#84A59D] focus:border-transparent transition-shadow resize-none"
                  placeholder="Jak mogę Ci pomóc?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-[#84A59D] hover:bg-[#6b8c84] text-white font-medium py-4 rounded-xl transition-colors flex items-center justify-center"
              >
                Wyślij wiadomość
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
