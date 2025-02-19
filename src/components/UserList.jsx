import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, fetchUsers, setSearchTerm } from '../features/userSlice';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import SearchBar from './SearchBar';
import UserRow from './UserRow';





const UserList = () => {
  const dispatch = useDispatch();
  const { users, searchTerm } = useSelector(state => state.users);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Apa Anda Yakin Menghapus user ini?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'YES!',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteUser(id));
        Swal.fire('Terhapus!', 'User Berhasil Terhapus.', 'success');
      }
    });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">User Management Dashboard</h1>

      {/* Search and Add Button */}
      <SearchBar searchTerm={searchTerm} onSearch={(value) => dispatch(setSearchTerm(value))} />

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr className="text-left">
              <th className="py-3 px-4">ID</th>
              <th className="py-3 px-4">Nama</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Perusahaan</th>
              <th className="py-3 px-4 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <UserRow key={user.id} user={user} onDelete={handleDelete} />
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">No users found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
