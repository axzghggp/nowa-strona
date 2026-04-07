import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Jak schudnąć przy insulinooporności? 5 kluczowych zasad.',
      excerpt: 'Insulinooporność to nie wyrok. Dowiedz się, jak komponować posiłki, aby ustabilizować poziom cukru we krwi i zacząć tracić na wadze bez restrykcyjnych diet.',
      category: 'Zdrowie',
      readTime: '5 min',
      image: 'https://picsum.photos/seed/blog1/600/400'
    },
    {
      id: 2,
      title: 'Szybkie i zdrowe śniadania do pracy (gotowe w 5 minut).',
      excerpt: 'Brak czasu rano to najczęstsza wymówka przed zjedzeniem śniadania. Poznaj 3 przepisy na zbilansowane posiłki, które przygotujesz w mgnieniu oka.',
      category: 'Przepisy',
      readTime: '3 min',
      image: 'https://picsum.photos/seed/blog2/600/400'
    },
    {
      id: 3,
      title: 'Dlaczego waga stoi w miejscu? Najczęstsze błędy.',
      excerpt: 'Trzymasz dietę, trenujesz, a waga ani drgnie? Sprawdź, co może blokować Twoje efekty. Często problem leży w miejscach, o których nawet nie myślisz.',
      category: 'Odchudzanie',
      readTime: '7 min',
      image: 'https://picsum.photos/seed/blog3/600/400'
    },
    {
      id: 4,
      title: 'Jedzenie emocjonalne - jak przestać zajadać stres?',
      excerpt: 'Stres w pracy, kłótnia w domu, a potem... paczka ciastek. Zobacz, jak rozpoznać głód emocjonalny i jak sobie z nim radzić bez poczucia winy.',
      category: 'Psychodietetyka',
      readTime: '6 min',
      image: 'https://picsum.photos/seed/blog4/600/400'
    }
  ];

  return (
    <div className="py-16 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Baza wiedzy</h1>
          <p className="text-lg text-gray-600">
            Artykuły oparte na dowodach naukowych, przepisy i porady, które pomogą Ci w codziennym dbaniu o zdrowie.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#84A59D]">
                  {post.category}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime} czytania</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#84A59D] transition-colors">
                  <Link to={`/blog`}>{post.title}</Link>
                </h2>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link to={`/blog`} className="inline-flex items-center text-[#E29578] font-medium hover:text-[#d18467] transition-colors">
                  Czytaj dalej <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 bg-[#3D405B] rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">Pobierz darmowy 3-dniowy jadłospis</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Zapisz się do newslettera i odbierz darmowy jadłospis dla zapracowanych. Szybkie przepisy, które przygotujesz w mniej niż 15 minut.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Twój adres e-mail" 
              className="flex-grow px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#E29578]"
              required
            />
            <button 
              type="submit" 
              className="bg-[#E29578] hover:bg-[#d18467] text-white px-6 py-3 rounded-xl font-medium transition-colors whitespace-nowrap"
            >
              Pobieram
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
