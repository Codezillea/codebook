import { Route, Routes } from "react-router-dom"
import {CartPage,OrderPage, HomePage,ProductsList,ProductDetail, Login, Register, DashbaordPage, PageNotFound} from "../pages";

import { ProtectedRoutes } from "./ProtectedRoutes";

export const AllRoutes = () => {
  
  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/products" element={<ProductsList />}/>
        <Route path="/products/:id" element={<ProductDetail />}/>

        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>

        <Route path="/cart" element={<ProtectedRoutes><CartPage /></ProtectedRoutes> }/>
        <Route path="/order-summary" element={<ProtectedRoutes><OrderPage /></ProtectedRoutes> }/>
        <Route path="/dashboard" element={<ProtectedRoutes><DashbaordPage /></ProtectedRoutes> }/>

        <Route path="*" element={<ProtectedRoutes><PageNotFound /></ProtectedRoutes> }/>
    </Routes>
    </>
  )
}
