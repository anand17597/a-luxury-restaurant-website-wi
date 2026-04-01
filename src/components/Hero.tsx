const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-28">
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white">Welcome to Luxury Dine</h1>
      <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-300">Experience the finest dining with us.</p>
      <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=90" alt="Delicious Food" className="w-full max-w-lg mt-8 rounded shadow-lg" />
    </section>
  );
};

export default Hero;