
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';


export default function HomePage() {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-r from-blue-500 to-teal-500">
        <section className="text-center my-16">
          <h1 className="text-5xl font-extrabold mb-4 text-white">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl mb-6 text-white">
            I am a designer passionate about creating beautiful and functional
            digital experiences.
          </p>
          <a
            href="#work"
            className="px-8 py-3 bg-white text-blue-500 font-semibold rounded-full shadow-lg hover:bg-gray-200"
          >
            View My Work
          </a>
        </section>
        <Footer />
      </main>
    </div>
  );
}
