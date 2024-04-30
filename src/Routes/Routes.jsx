import {
 
    createBrowserRouter,

} from "react-router-dom";
import Dashboard from "../LayOut/Dashboard/Dashboard";
import FileManager from "../page/File Manager/FileManager";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import Page from "../page/Page/Page";
import UIelements from "../page/UI Elements/UIelements";
import Widgets from "../page/Widgets/Widgets";
import Icons from "../page/Icons/Icons";
import Forms from "../page/Forms/Forms";
import BasicElements from "../page/Basic Elements/BasicElements";
import Charts from "../page/Charts/Charts";
import Tables from "../page/Tables/Tables";
import Maps from "../page/Maps/Maps";
import MenuLevels from "../page/Menus Levels/MenuLevels";
import AdvancedTables from "../page/Advanced Tables/AdvancedTables";
import Validation from "../page/Validation/Validation";
 
 
 


export const router = createBrowserRouter([
    {
        path: "",
        element: <Dashboard></Dashboard>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'fileManager',
                element:<FileManager></FileManager>
            },
            {
                path:'page',
                element:<Page></Page>
            },
            {
                path:'uiElements',
                element:<UIelements></UIelements>
            },
            {
                path:'widgets',
                element:<Widgets></Widgets>
            },
            {
                path:'icons',
                element:<Icons></Icons>
            },
            {
                path:'forms',
                element:<Forms></Forms>
            },
            {
                path:'basicElements',
                element:<BasicElements></BasicElements>
            },
            {
                path:'charts',
                element:<Charts></Charts>
            },
            {
                path:'tables',
                element:<Tables></Tables>
            },
            {
                path:'maps',
                element:<Maps></Maps>
            },
            {
                path:'menuLevels',
                element:<MenuLevels></MenuLevels>
            },
            {
                path:'advancedTable',
                element:<AdvancedTables></AdvancedTables>
            },
            {
                path:'validation',
                element: <Validation></Validation>
            },
        ]
    },
]);