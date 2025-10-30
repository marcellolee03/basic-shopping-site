import { BrowseProductsPage } from "../pages/BrowseProductsPage";
import { LandingPage } from "../pages/LandingPage";
import { PATHS } from "./paths";

export const routes = [
    {
        path: PATHS.LANDINGPAGE,
        element: <LandingPage />,
        title: "Home"
    },

    {
        path: PATHS.BROWSEPRODUCTS,
        element: <BrowseProductsPage />,
        title: "Products"
    }
]