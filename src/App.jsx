import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserFormPage from "./pages/UserFormPage";

const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/add", element: <UserFormPage /> },  
    { path: "/edit/:id", element: <UserFormPage /> }, 
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
