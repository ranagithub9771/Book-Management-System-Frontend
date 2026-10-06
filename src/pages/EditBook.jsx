import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    year: "",
  });

  // Fetch Book by ID
  const fetchBook = async () => {
    try {
      const res = await api.get(`/books/${id}`);
      setBook(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/books/${id}`, book);

      alert("Book Updated Successfully ✅");

      navigate("/");
    } catch (error) {
      console.log(error);

      alert("Failed to Update Book ❌");
    }
  };

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="max-w-3xl mx-auto px-6 py-12">

        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-800">
            Edit Book
          </h1>

          <p className="text-slate-500 mt-2">
            Update the details of your book.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

          <div className="h-2 bg-gradient-to-r from-blue-600 to-indigo-600"></div>

          <form
            onSubmit={handleUpdate}
            className="p-8 space-y-6"
          >
            <div>
              <label className="block font-semibold text-slate-700 mb-2">
                Book Title
              </label>

              <input
                type="text"
                name="title"
                value={book.title}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-2">
                Author
              </label>

              <input
                type="text"
                name="author"
                value={book.author}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-2">
                Publication Year
              </label>

              <input
                type="number"
                name="year"
                value={book.year}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex gap-4 pt-4">

              <button
                type="submit"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
              >
                Update Book
              </button>

              <button
                type="button"
                onClick={() => navigate("/")}
                className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-700 py-3 rounded-xl font-semibold transition"
              >
                Cancel
              </button>
              

            </div>
          </form>

        </div>
      </div>
    </main>
  );
};

export default EditBook;