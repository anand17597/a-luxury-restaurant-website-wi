const MenuHighlights = () => {
  return (
    <section id="menu" className="px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-28">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-12">Our Menu Highlights</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 rounded-lg p-6 hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold">Gourmet Steak</h3>
          <p className="mt-2 text-gray-400">A deliciously juicy steak cooked to perfection.</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold">Truffle Pasta</h3>
          <p className="mt-2 text-gray-400">Rich and creamy pasta with fresh truffles.</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold">Exquisite Desserts</h3>
          <p className="mt-2 text-gray-400">Indulge in our luxurious sweet creations.</p>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;