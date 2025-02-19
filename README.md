User Management Dashboard

User Management Dashboard adalah aplikasi CRUD berbasis React.js untuk mengelola data pengguna. Proyek ini menggunakan Redux Toolkit, React Router, Axios, dan Tailwind CSS.

Fitur

Melihat daftar pengguna

Menambah pengguna baru

Mengedit data pengguna

Menghapus pengguna

Teknologi yang Digunakan

React.js

Redux Toolkit

React Router

Axios

Tailwind CSS

Docker

Instalasi & Menjalankan Proyek

1. Menjalankan Secara Lokal

a. Clone Repository

git clone <repository-url>
cd user-management-dashboard

b. Install Dependencies

npm install

c. Jalankan Proyek

npm start

Aplikasi akan berjalan di http://localhost:3000.

2. Menjalankan dengan Docker

a. Build Docker Image

docker build -t user-management-dashboard .

b. Jalankan Container

docker run -p 3000:3000 user-management-dashboard

Akses aplikasi melalui http://localhost:3000.