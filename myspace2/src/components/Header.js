import Link from 'next/link';


export default function Header() {
  const navLinks = [
    { path: "/", text: "Home" },
    { path: "/case-studies", text: "Case Studies" },
    { path: "/blog", text: "Blog" },
    { path: "/about", text: "About" },
    { path: "/contact", text: "Contact" },
  ];

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-4">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link href={link.path}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
