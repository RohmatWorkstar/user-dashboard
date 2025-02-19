# User Management Dashboard

**User Management Dashboard** adalah aplikasi CRUD berbasis React.js untuk mengelola data pengguna. Proyek ini menggunakan teknologi seperti Redux Toolkit, React Router, Axios, dan Tailwind CSS.

## Fitur

- Melihat daftar pengguna
- Menambah pengguna baru
- Mengedit data pengguna
- Menghapus pengguna

## Teknologi yang Digunakan

- **React.js**
- **Redux Toolkit**
- **React Router**
- **Axios**
- **Tailwind CSS**
- **Docker**

## Instalasi & Menjalankan Proyek

### Menjalankan Secara Lokal
1. Clone Repository  
   `git clone <repository-url>`  
   `cd user-management-dashboard`

2. Install Dependencies  
   `npm install`

3. Jalankan Proyek  
   `npm run dev`  
   Aplikasi akan berjalan di [http://localhost:3000](http://localhost:3000).

### Menjalankan dengan Docker
1. Build Docker Image  
   `docker build -t user-management-dashboard .`

2. Jalankan Container  
   `docker run -p 3000:3000 user-management-dashboard`  
   Akses aplikasi melalui [http://localhost:3000](http://localhost:3000).
