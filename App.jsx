import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Foodoption from "./components/Foodoption";
import Groceryoption from "./components/Groceryoption";
import Dineoption from "./components/Dineoption";
import Restaurant from "./components/Restaurant";
import { BrowserRouter,Routes,Route } from "react-router";
import Home from "./components/Home";
import RestrauMenu from "./components/RestrauMenu";
import SearchFood from "./components/SearchFood";
import SecondHome from "./components/SecondHome";
import { store } from "./Stored/stores";
import { Provider } from "react-redux";
import Checkout from "./components/Checkout";

const root=ReactDOM.createRoot(document.getElementById("root"));
function App(){
    return(
        <>
        <Provider store={store}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route element={<SecondHome></SecondHome>}>
                <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
                <Route path="/city/noida/:id" element={<RestrauMenu></RestrauMenu>}></Route>
                <Route path="/city/noida/:id/search" element={<SearchFood></SearchFood>}></Route>
            </Route>
            <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
        </Routes>
        
        </BrowserRouter>
        </Provider>
        </>
    )
}
root.render(<App/>);