import React, { useState } from "react";
import api from "../services/api";

const AddBook = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    year: "",
  });

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log(book);

//     // API Call Here
    
//   };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await api.post("/books", book);

    console.log(res.data);

    alert("Book added successfully ✅");

    // Clear the form
    setBook({
      title: "",
      author: "",
      year: "",
    });

    // Redirect to Home page
    navigate("/");
  } catch (error) {
  console.log(error);
  console.log(error.response);

  if (error.response) {
    console.log(error.response.data);
  }
}
};

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="max-w-3xl mx-auto px-6 py-12">

        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-800">
            Add New Book
          </h1>

          <p className="text-slate-500 mt-2">
            Fill in the details below to add a new book.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          {/* Top Gradient */}
          <div className="h-2 bg-gradient-to-r from-blue-600 to-indigo-600"></div>

          <form onSubmit={handleSubmit} className="p-8 space-y-6">

            {/* Title */}
            <div>
              <label className="block text-slate-700 font-semibold mb-2">
                Book Title
              </label>

              <input
                type="text"
                name="title"
                value={book.title}
                onChange={handleChange}
                placeholder="Enter book title"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Author */}
            <div>
              <label className="block text-slate-700 font-semibold mb-2">
                Author
              </label>

              <input
                type="text"
                name="author"
                value={book.author}
                onChange={handleChange}
                placeholder="Enter author name"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Year */}
            <div>
              <label className="block text-slate-700 font-semibold mb-2">
                Publication Year
              </label>

              <input
                type="number"
                name="year"
                value={book.year}
                onChange={handleChange}
                placeholder="Enter publication year"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">

              <button
                type="submit"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold shadow-md transition-all duration-300"
              >
                Add Book
              </button>

              <button
                type="reset"
                className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-700 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Reset
              </button>

            </div>

          </form>
        </div>
      </div>
    </main>
  );
};

export default AddBook;