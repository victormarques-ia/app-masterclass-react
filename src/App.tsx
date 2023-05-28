import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import { AppProvider } from "./contexts/AppContext";

const router = createBrowserRouter([
  {
    path: "*",
    Component: SignIn,
  },
  {
    path: "/sign-in",
    Component: SignIn,
  },
  {
    path: "/sign-up",
    Component: SignUp,
  },
  {
    path: "/",
    Component: Home,
  },
]);

export default function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </AppProvider>
  );
}
