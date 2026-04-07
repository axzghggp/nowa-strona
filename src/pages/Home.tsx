import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Star, Clock, Calendar, Heart, ShieldCheck } from 'lucide-react';

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-[#F4F1DE] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="max-w-2xl"
            >
              <span className="inline-block py-1 px-3 rounded-full bg-white/60 text-[#84A59D] font-medium text-sm mb-6 border border-[#84A59D]/20">
                Dietetyk Kliniczny Online
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight mb-6">
                Jedz smacznie, chudnij zdrowo i <span className="text-[#84A59D] italic">odzyskaj energię.</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Indywidualna opieka dietetyczna bez restrykcyjnych zakazów. Pomagam zapracowanym osobom osiągnąć wymarzoną sylwetkę i poprawić wyniki badań.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/kontakt" 
                  className="inline-flex justify-center items-center px-8 py-4 text-base font-medium rounded-full text-white bg-[#E29578] hover:bg-[#d18467] transition-colors shadow-lg hover:shadow-xl"
                >
                  Umów darmową konsultację
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  to="/oferta" 
                  className="inline-flex justify-center items-center px-8 py-4 text-base font-medium rounded-full text-gray-800 bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  Poznaj ofertę
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-4 text-sm text-gray-600">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} className="w-8 h-8 rounded-full border-2 border-[#F4F1DE]" src={`https://picsum.photos/seed/user${i}/100/100`} alt="Klient" referrerPolicy="no-referrer" />
                  ))}
                </div>
                <p>Dołącz do <span className="font-bold text-gray-900">500+</span> zadowolonych podopiecznych</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-[#84A59D]/20 rounded-full blur-3xl transform translate-x-10 translate-y-10"></div>
              <img 
                src="https://picsum.photos/seed/dietitian/800/1000" 
                alt="Dietetyk w pracy" 
                className="relative z-10 rounded-2xl shadow-2xl object-cover h-[600px] w-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Certyfikowany</p>
                  <p className="font-bold text-gray-900">Dietetyk Kliniczny</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Identification */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Masz dość diet, które nie działają?</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            Ciągłe uczucie głodu, brak energii, efekt jojo, czy problemy z insulinoopornością? Rozumiem to. Restrykcyjne diety to nie jest rozwiązanie na całe życie. Czas na zmianę podejścia.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Jak zmieni się Twoje życie dzięki współpracy?</h2>
            <p className="text-gray-600">Skupiamy się na trwałych nawykach, a nie chwilowych zrywach.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="h-8 w-8 text-[#E29578]" />,
                title: 'Brak uczucia głodu',
                desc: 'Jesz to, co lubisz, w odpowiednich proporcjach. Koniec z burczeniem w brzuchu i odmawianiem sobie ulubionych smaków.'
              },
              {
                icon: <CheckCircle2 className="h-8 w-8 text-[#84A59D]" />,
                title: 'Trwałe efekty',
                desc: 'Koniec z efektem jojo. Uczymy się zdrowych nawyków, które zostaną z Tobą na lata, a nie tylko do końca diety.'
              },
              {
                icon: <Star className="h-8 w-8 text-[#F4A261]" />,
                title: 'Lepsze samopoczucie',
                desc: 'Więcej energii na co dzień, lepsza koncentracja i poprawa wyników badań laboratoryjnych.'
              }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-gray-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Wybierz plan dopasowany do Ciebie</h2>
              <p className="text-gray-600">Niezależnie od tego, czy potrzebujesz tylko wskazówek, czy pełnego prowadzenia – mam coś dla Ciebie.</p>
            </div>
            <Link to="/oferta" className="hidden md:inline-flex items-center text-[#84A59D] font-medium hover:text-[#6b8c84] transition-colors">
              Zobacz pełną ofertę <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Konsultacja Online',
                price: 'od 150 zł',
                desc: '60-minutowa rozmowa z analizą badań i wytyczeniem kierunku działania.',
                features: ['Analiza wyników badań', 'Zalecenia suplementacyjne', 'Plan działania']
              },
              {
                title: 'Indywidualny Jadłospis',
                price: 'od 199 zł',
                desc: 'Smaczny, prosty w przygotowaniu plan żywieniowy na 7 lub 14 dni.',
                features: ['Dopasowany do preferencji', 'Lista zakupów', 'Szybkie przepisy'],
                popular: true
              },
              {
                title: 'Współpraca Miesięczna',
                price: 'od 349 zł / msc',
                desc: 'Kompleksowa opieka, stały kontakt i modyfikacje planu.',
                features: ['Stały kontakt WhatsApp', 'Cotygodniowe raporty', 'Edukacja żywieniowa']
              }
            ].map((service, idx) => (
              <div key={idx} className={`relative bg-white rounded-2xl border ${service.popular ? 'border-[#84A59D] shadow-lg' : 'border-gray-200 shadow-sm'} p-8 flex flex-col`}>
                {service.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#84A59D] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Najczęściej wybierane
                  </span>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-[#E29578] font-semibold text-lg mb-4">{service.price}</p>
                <p className="text-gray-600 mb-6 flex-grow">{service.desc}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle2 className="h-5 w-5 text-[#84A59D] mr-3 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/cennik" 
                  className={`w-full py-3 px-4 rounded-xl text-center font-medium transition-colors ${
                    service.popular 
                      ? 'bg-[#84A59D] text-white hover:bg-[#6b8c84]' 
                      : 'bg-gray-50 text-gray-900 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  Wybierz pakiet
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/oferta" className="inline-flex items-center text-[#84A59D] font-medium hover:text-[#6b8c84] transition-colors">
              Zobacz pełną ofertę <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#3D405B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Jak wygląda współpraca krok po kroku?</h2>
            <p className="text-gray-300">Prosty proces, który doprowadzi Cię do celu bez stresu.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-600 -translate-y-1/2 z-0"></div>
            {[
              { step: '01', title: 'Wypełniasz ankietę', desc: 'Zbieram informacje o Twoim zdrowiu, stylu życia i preferencjach kulinarnych.' },
              { step: '02', title: 'Omawiamy cel', desc: 'Podczas krótkiej rozmowy ustalamy realne cele i plan działania.' },
              { step: '03', title: 'Otrzymujesz plan', desc: 'Dostajesz spersonalizowany jadłospis i zalecenia dopasowane do Ciebie.' },
              { step: '04', title: 'Osiągamy sukces', desc: 'Monitorujemy postępy, modyfikujemy plan i cieszymy się efektami.' }
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#E29578] flex items-center justify-center text-2xl font-bold mb-6 shadow-lg border-4 border-[#3D405B]">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet / CTA Section */}
      <section className="py-20 bg-[#F4F1DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
            Gotowy na zmianę? Zróbmy to razem!
          </h2>
          <p className="text-lg text-gray-700 mb-10">
            Zarezerwuj termin konsultacji i zrób pierwszy krok do lepszego zdrowia. Przyjmuję tylko 5 nowych podopiecznych w tym miesiącu.
          </p>
          <Link 
            to="/kontakt" 
            className="inline-flex justify-center items-center px-8 py-4 text-lg font-medium rounded-full text-white bg-[#E29578] hover:bg-[#d18467] transition-colors shadow-lg hover:shadow-xl"
          >
            Zarezerwuj termin teraz
            <Calendar className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
