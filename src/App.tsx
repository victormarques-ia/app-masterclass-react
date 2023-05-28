import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
  Navigate,
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import { AppContext, AppProvider } from "./contexts/AppContext";
import { useContext } from "react";
import Layout from "./components/Layout";
import MyPosts from "./pages/MyPosts";
import Post from "./pages/Post";

function RequireAuth({ children }: { children: JSX.Element }) {
  const { token } = useContext(AppContext);
  const location = useLocation();

  if (!token) {
    return <Navigate to="/sign-in" state={{ from: location }} />;
  }

  return children;
}

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
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "my-posts",
        Component: MyPosts,
      },
      {
        path: "/posts/:id",
        Component: Post,
      },
    ],
  },
]);

export default function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </AppProvider>
  );
}
