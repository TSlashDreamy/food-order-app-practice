import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";

import classes from "./Header.module.css"; // gaining access with (classes.className) or (classes["className"])
import background from "../../assets/meals.jpg";

const Header = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes["main-image"]}>
                <img src={background} alt="Background"/>
            </div>
        </Fragment>
    )   
}

export default Header;