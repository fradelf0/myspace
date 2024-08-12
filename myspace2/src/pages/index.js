
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen px-4">
        <section className="w-full max-w-screen-lg mx-auto my-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {/* Large Showcase Block */}
            <div className="card col-span-2 row-span-2">
              <div className="card-content relative bg-gradient-to-r from-blue-500 to-teal-500 text-white p-8 rounded-lg shadow-lg flex flex-col justify-end">
                <h2 className="text-3xl font-bold mb-4">My Latest Project</h2>
                <p className="text-lg">A brief description of your latest or most significant work.</p>
                <a href="#case-study" className="mt-4 px-4 py-2 bg-white text-blue-500 font-semibold rounded-full shadow-lg self-start hover:bg-gray-200">
                  View Case Study
                </a>
              </div>
            </div>

            {/* Smaller Blocks */}
            <div className="card">
              <div className="card-content relative bg-gray-800 text-white p-8 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">About Me</h2>
                <p>A brief intro about who you are and what you do.</p>
                <a href="/about" className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
                  Learn More
                </a>
              </div>
            </div>

            <div className="card">
              <div className="card-content relative bg-gray-800 text-white p-8 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">My Skills</h2>
                <p>Highlight your key skills and expertise.</p>
                <a href="#skills" className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
                  See More
                </a>
              </div>
            </div>

            <div className="card">
              <div className="card-content relative bg-gray-800 text-white p-8 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Contact Me</h2>
                <p>Get in touch for collaborations or inquiries.</p>
                <a href="/contact" className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
                  Contact
                </a>
              </div>
            </div>

            <div className="card">
              <div className="card-content relative bg-gray-800 text-white p-8 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">My Blog</h2>
                <p>Read my latest articles and thoughts on design.</p>
                <a href="/blog" className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
                  Visit Blog
                </a>
              </div>
            </div>

            {/* New Sections */}
            
            {/* Featured Projects */}
            <div className="card col-span-2">
              <div className="card-content relative bg-gray-700 text-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
                <ul className="space-y-4">
                  <li>
                    <h3 className="text-xl font-semibold">Project 1</h3>
                    <p>A short description of this project.</p>
                    <a href="#project1" className="text-blue-400 hover:underline">View Case Study</a>
                  </li>
                  <li>
                    <h3 className="text-xl font-semibold">Project 2</h3>
                    <p>A short description of this project.</p>
                    <a href="#project2" className="text-blue-400 hover:underline">View Case Study</a>
                  </li>
                  <li>
                    <h3 className="text-xl font-semibold">Project 3</h3>
                    <p>A short description of this project.</p>
                    <a href="#project3" className="text-blue-400 hover:underline">View Case Study</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Testimonials */}
            <div className="card">
              <div className="card-content relative bg-gray-800 text-white p-8 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Testimonials</h2>
                <blockquote className="italic">"This designer is fantastic! Highly recommended for their creativity and professionalism."</blockquote>
                <p className="mt-2">- Happy Client</p>
              </div>
            </div>

            {/* Services */}
            <div className="card">
              <div className="card-content relative bg-gray-800 text-white p-8 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Services</h2>
                <ul className="space-y-2">
                  <li>- Web Design</li>
                  <li>- UI/UX Design</li>
                  <li>- Branding</li>
                  <li>- Frontend Development</li>
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="card">
              <div className="card-content relative bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-lg shadow-lg flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-4 text-center">Let's Work Together!</h2>
                <p className="text-center mb-6">Ready to start your next project? Let's make something great together.</p>
                <a href="/contact" className="px-8 py-3 bg-white text-purple-500 font-semibold rounded-full shadow-lg self-center hover:bg-gray-200">
                  Get in Touch
                </a>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
