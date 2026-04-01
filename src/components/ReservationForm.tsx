const ReservationForm = () => {
  return (
    <section id="reservation" className="px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-28 bg-gray-900">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-12">Make a Reservation</h2>
      <form className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-300">Name</label>
          <input type="text" id="name" className="w-full p-3 mt-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-300">Email</label>
          <input type="email" id="email" className="w-full p-3 mt-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-300">Reservation Date</label>
          <input type="date" id="date" className="w-full p-3 mt-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500" />
        </div>
        <button type="submit" className="w-full bg-yellow-500 text-black p-3 rounded mt-4 hover:bg-yellow-600">Submit</button>
      </form>
    </section>
  );
};

export default ReservationForm;