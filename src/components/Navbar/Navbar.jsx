import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const getClassName = ({ isActive }) => {
    let className = classes.item;
    if (isActive) {
      className += ` ${classes.active}`;
    }
    return className;
  };
  //Мы проверяем, активен ли текущий маршрут с помощью isActive, и если да, добавляем класс активного элемента (classes.active).
  //этим самым мы меняем нажатой сссылке цвет 

const Navbar = () => {
    return <nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink to='/profile' className={getClassName}>Profile</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/dialogs' className={getClassName}>Messages</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/news' className={getClassName}>News</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/music' className={getClassName}>Music</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/settings1' className={getClassName}>Settings</NavLink>
        </div>

        <div className={classes.item}>
            <NavLink to='/Friends' className={getClassName}>FRIENDS</NavLink>
            <div>aa, as, ss</div>
        </div>
    </nav>
}

export default Navbar;

