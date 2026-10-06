import { useEffect, useState } from "react";
import api from "../services/api";

import { Link } from "react-router-dom";
function Home() {
  const [books, setBooks] = useState([]);


  // console.log(api_url);
  const fetchBooks = async () => {
    try {
      const res = await api.get("/books");
      setBooks(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);


  const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this book?"
  );

  if (!confirmDelete) return;

  try {
    await api.delete(`/books/${id}`);

    // Update UI without reloading
    setBooks((prevBooks) =>
      prevBooks.filter((book) => book._id !== id)
    );

    alert("Book deleted successfully ✅");
  } catch (error) {
    console.log(error);
    alert("Failed to delete book ❌");
  }
};

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Page Heading */}
        <div className="flex items-center justify-between mb-10">

          <div>
            <h1 className="text-4xl font-bold text-slate-800">
              All Books
            </h1>

            <p className="text-slate-500 mt-2">
              Total Books : {books.length}
            </p>
          </div>

        </div>

        {/* Empty State */}
        {books.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-md p-16 text-center">
            <h2 className="text-2xl font-semibold text-slate-700">
              No Books Found 📚
            </h2>

            <p className="text-slate-500 mt-3">
              Click <strong>Add Book</strong> to create your first book.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {books.map((book) => (
              <div
                key={book._id}
                className="bg-white rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                {/* Top Strip */}
                <div className="h-2 bg-gradient-to-r from-blue-600 to-indigo-600"></div>

                <div className="p-6">

                  <h2 className="text-2xl font-bold text-slate-800">
                    {book.title}
                  </h2>

                  <div className="mt-5 space-y-3">

                    <p className="text-slate-600">
                      <span className="font-semibold text-slate-800">
                        Author :
                      </span>{" "}
                      {book.author}
                    </p>

                    <p className="text-slate-600">
                      <span className="font-semibold text-slate-800">
                        Published :
                      </span>{" "}
                      {book.year}
                    </p>

                  </div>

                  <div className="flex gap-3 mt-8">

                    <Link
  to={`/edit/${book._id}`}
  className="flex-1"
>
  <button className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition">
    Edit
  </button>
</Link>

                    <button
  onClick={() => handleDelete(book._id)}
  className="flex-1 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold transition duration-300 cursor-pointer"
>
  Delete
</button>

                  </div>

                </div>
              </div>
            ))}

          </div>
        )}
      </div>
    </main>
  );
}

export default Home;