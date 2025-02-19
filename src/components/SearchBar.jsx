import { Link } from "react-router-dom";

const SearchBar = ({ searchTerm, onSearch }) => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
            <input
                type="text"
                placeholder="Cari Nama Atau Email"
                value={searchTerm}
                onChange={(e) => onSearch(e.target.value)}
                className="p-3 border border-gray-300 rounded w-full md:w-1/2 focus:ring focus:ring-blue-200 outline-none bg-white"
            />
            <Link to="/add" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                + Tambah Pengguna
            </Link>
        </div>
    );
};

export default SearchBar;
