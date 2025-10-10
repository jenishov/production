import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './NavBar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface NavBarProps {
    className?: string;
}

const NavBar = ({className}: NavBarProps) => {
    return (
        <div className={classNames(cls.Navbar,{},[className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>Главная </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}> О сайте</AppLink>
            </div>

        </div>
    );
};

export default NavBar;



