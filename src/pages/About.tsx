import { Award, BookOpen, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://picsum.photos/seed/dietitian2/600/800" 
              alt="Dietetyk" 
              className="rounded-2xl shadow-xl w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Cześć, jestem Anna.
            </h1>
            <h2 className="text-xl text-[#84A59D] font-medium mb-8">Twój Dietetyk Kliniczny</h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Wierzę, że dieta ma być dodatkiem do życia, a nie całym życiem. Moja przygoda z dietetyką zaczęła się od własnych problemów zdrowotnych, które pokazały mi, jak ogromny wpływ na nasze samopoczucie ma to, co kładziemy na talerzu.
              </p>
              <p>
                Od 5 lat pomagam zapracowanym osobom odzyskać energię, poprawić wyniki badań i schudnąć bez uczucia ciągłego głodu i restrykcji. Moje podejście opiera się na EBM (Evidence-Based Medicine), ale zawsze na pierwszym miejscu stawiam człowieka i jego indywidualne potrzeby.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#F4F1DE] p-3 rounded-xl text-[#E29578]">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Wykształcenie</h3>
                  <p className="text-sm text-gray-600">Magister Dietetyki Klinicznej, Warszawski Uniwersytet Medyczny</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#F4F1DE] p-3 rounded-xl text-[#E29578]">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Ciągły rozwój</h3>
                  <p className="text-sm text-gray-600">Ponad 50 ukończonych szkoleń z zakresu insulinooporności i chorób tarczycy</p>
                </div>
              </div>
              <div className="flex items-start gap-4 sm:col-span-2">
                <div className="bg-[#F4F1DE] p-3 rounded-xl text-[#E29578]">
                  <Heart className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Moja filozofia</h3>
                  <p className="text-sm text-gray-600">80% zdrowe odżywianie, 20% jedzenie dla duszy (pizza i czekolada też są dla ludzi!).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
