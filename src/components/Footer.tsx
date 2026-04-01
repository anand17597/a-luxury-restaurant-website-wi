const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 lg:px-8 py-8 bg-black text-gray-500">
      <div className="max-w-7xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Luxury Dine. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;