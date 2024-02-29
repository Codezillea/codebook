import { useTitle } from "../../Hooks/useTitle";
import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CartList";
import { useCart } from "../../context";
export  const CartPage = () => {
 


  const { cartList } = useCart();
  useTitle(`Cart (${cartList.length})`)
  
    return (
      <main>      
        { cartList.length ? <CartList /> : <CartEmpty/>}    
      </main>
    )
  }