
export default function Header() {
    return (
      <header className="w-full py-4 bg-gray-800 text-white">
        <nav className="container mx-auto flex justify-between items-center px-4">
          <div className="text-2xl font-bold">My Portfolio</div>
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  