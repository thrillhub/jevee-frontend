  import { createBrowserRouter, RouterProvider } from "react-router-dom";
  import RootComponent from "./Common/RootComponent";
  import FeedBack from "./Pages/feed/FeedBack";
  import Home from "./Pages/Home";
  import SellOnJevee from "./Pages/SellOnJevee";
  import AllCategories from "./Admin/pages/categories/AllCategories";
  import CreateCategory from "./Admin/pages/categories/CreateCategory";
  import Dashboard from "./Admin/pages/Dashboard";
  import AdminLayout from "./Admin/AdminCommon/AdminLayout";
  import Login from "./Admin/login/login";
  import Profile from "./Admin/pages/profile/profile";
  import ProductPageMain from "./components/ProductBox/ProductPageMain";
import Prescription from "./Common/Prescription";
  export default function App() {
  const router = createBrowserRouter([
      {
        path: "/",
        element: <RootComponent />,
        children: [
          {
            path: "/",
            element: <Home />,
          },

          {
            path: "/vendor-enrollment",
            element: <SellOnJevee />,
          },
          {
            path: "/feedback",
            element: <FeedBack />,
          },
          {
            path: "/category/:category",
            element : <ProductPageMain />
          },
          {
            path: "/category/:category/:subCategory",
            element : <ProductPageMain />
          },{
            path:"prescription",
            element:<Prescription />
          }
        ],

      },
      {
        path: "/admin",
        element: <AdminLayout />,
        children: [
          {
            path: "",
            index: true,
            element: <Dashboard />
          },
          {
            path: "product-category",
            children: [{
              path: "",
              index: true,
              element: <AllCategories />
            },
            {
              path: "create",
              element: <CreateCategory />
            },
          ]
        },
        {
          path: "profile", 
          element: <Profile />, 
        },

        ]
      },{

        path: "/login",
        element: <Login />
      }
    ]);
    return <>{<RouterProvider router={router} />}</>;
  }
