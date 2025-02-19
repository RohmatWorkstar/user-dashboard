import { Link } from "react-router-dom";

const UserRow = ({ user, onDelete }) => {
    console.log(user);
    return (
        <tr key={user.id} className="border-t hover:bg-gray-50 transition">
            <td className="py-3 px-4">{user.id}</td>
            <td className="py-3 px-4">{user.name}</td>
            <td className="py-3 px-4">{user.email}</td>
            <td className="py-3 px-4">{user.company.name}</td>
            <td className="py-3 px-4 flex justify-center gap-3">
                <Link to={`/edit/${user.id}`} className="text-yellow-500 hover:text-yellow-800 font-bold">
                    Edit
                </Link>
                <button onClick={() => onDelete(user.id)} className="text-red-600 hover:text-red-800 font-bold cursor-pointer">
                    Hapus
                </button>
            </td>
        </tr>
    );
};

export default UserRow;
