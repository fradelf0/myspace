// src/app/components/Footer.js

export default function Footer() {
    return (
      <footer className="w-full py-4 bg-gray-800 text-white">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  