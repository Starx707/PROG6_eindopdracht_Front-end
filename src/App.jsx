import {createBrowserRouter, RouterProvider} from "react-router";
import Home from "./Home.jsx";
import Layout from "./Layout.jsx";
import CreateDragon from "./CreateDragon.jsx";
import DetailsDragon from "./DetailsDragon.jsx";
import DeleteDragon from "./DeleteDragon.jsx";


const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/create",
                element: <CreateDragon/>,
            },
            {
                path: "/dragons/:id",
                element: <DetailsDragon/>,
            },
            {
                path: "/delete/:id",
                element: <DeleteDragon/>,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router}/>;
}

export default App;