
export default function FooterComponent() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-4 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}
  