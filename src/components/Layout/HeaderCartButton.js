import { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext);
    
    const itemsAmount = cartCtx.items.reduce((curAmount, item) =>  curAmount + item.amount, 0);
      
    return(
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>
                Your orders
            </span>
            <span className={classes.badge}>
                {itemsAmount}
            </span>
        </button>
    )
}

export default HeaderCartButton;
