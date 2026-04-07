import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'jadlospis',
      title: 'Indywidualny Jadłospis (7 lub 14 dni)',
      desc: 'Smaczny, prosty w przygotowaniu plan żywieniowy oparty na Twoich preferencjach. Idealny dla osób, które potrzebują gotowych rozwiązań i chcą zaoszczędzić czas na wymyślaniu posiłków.',
      benefits: [
        'Oszczędność czasu dzięki gotowej liście zakupów',
        'Brak marnowania jedzenia (wykorzystujemy produkty do końca)',
        'Posiłki dopasowane do Twojego trybu życia i umiejętności kulinarnych',
        'Uwzględnienie Twoich ulubionych smaków (i wykluczenie nielubianych)'
      ],
      price: 'od 199 zł',
      cta: 'Zamów jadłospis'
    },
    {
      id: 'wspolpraca',
      title: 'Współpraca Dietetyczna (1, 3 lub 6 miesięcy)',
      desc: 'Kompleksowa opieka, stały kontakt, modyfikacje planu i edukacja żywieniowa. To najlepszy wybór, jeśli zależy Ci na trwałej zmianie nawyków i potrzebujesz wsparcia w procesie.',
      benefits: [
        'Stały kontakt przez komunikator (odpowiedzi w ciągu 24h)',
        'Cotygodniowe raporty postępów i modyfikacje planu w razie potrzeby',
        'Edukacja żywieniowa - uczę Cię, jak radzić sobie na wyjazdach i imprezach',
        'Wsparcie motywacyjne w momentach kryzysu'
      ],
      price: 'od 349 zł / miesiąc',
      cta: 'Rozpocznij współpracę',
      highlight: true
    },
    {
      id: 'konsultacja',
      title: 'Konsultacja Jednorazowa',
      desc: '60-minutowa rozmowa online z analizą badań i zaleceniami. Dobra opcja, jeśli chcesz skonsultować swoje wyniki, upewnić się, że idziesz w dobrym kierunku lub masz konkretne pytania.',
      benefits: [
        'Szczegółowa analiza Twoich wyników badań krwi',
        'Wytyczenie jasnego kierunku działania',
        'Indywidualne zalecenia suplementacyjne',
        'Odpowiedzi na wszystkie Twoje pytania dotyczące żywienia'
      ],
      price: '150 zł',
      cta: 'Umów konsultację'
    }
  ];

  return (
    <div className="py-16 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Jak mogę Ci pomóc?</h1>
          <p className="text-lg text-gray-600">
            Wybierz formę współpracy, która najlepiej odpowiada Twoim potrzebom. Niezależnie od wyboru, gwarantuję profesjonalne podejście i wsparcie.
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`bg-white rounded-2xl p-8 md:p-12 shadow-sm border ${service.highlight ? 'border-[#84A59D] ring-1 ring-[#84A59D]' : 'border-gray-100'} relative overflow-hidden`}
            >
              {service.highlight && (
                <div className="absolute top-0 right-0 bg-[#84A59D] text-white px-6 py-2 rounded-bl-2xl font-medium text-sm">
                  Najczęściej wybierane
                </div>
              )}
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {service.desc}
                  </p>
                  <h3 className="font-semibold text-gray-900 mb-4">Co zyskujesz?</h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="h-6 w-6 text-[#84A59D] mr-3 shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#F4F1DE]/50 rounded-2xl p-8 text-center flex flex-col justify-center h-full">
                  <p className="text-gray-500 mb-2">Inwestycja w zdrowie</p>
                  <p className="text-4xl font-bold text-[#E29578] mb-8">{service.price}</p>
                  <Link 
                    to="/kontakt" 
                    className={`inline-flex justify-center items-center px-6 py-4 text-base font-medium rounded-xl transition-colors ${
                      service.highlight 
                        ? 'bg-[#84A59D] text-white hover:bg-[#6b8c84]' 
                        : 'bg-white text-gray-900 border-2 border-gray-200 hover:border-[#84A59D] hover:text-[#84A59D]'
                    }`}
                  >
                    {service.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
