import classNames from 'classnames/bind'

import Link from 'next/link'

import styles from './nav.module.scss'

let cx = classNames.bind(styles)

const navLinks = [
    {
        label: "Login",
        slug: "login"
    },
    {
        label: "Download",
        slug: "download"
    }
];

const Nav = ({ mobile, flexDirection }) => {
    let navClasses = cx({
        nav : true,
        mobile : mobile
    });
    let listClasses = cx({
        list : true,
        [`flex-direction-${flexDirection}`] : flexDirection
    });
    return <nav className={navClasses}>
                <ul className={listClasses}>
                    {navLinks.map((navLink, index) => {
                        return <li key={index} className={styles.listItem}>
                            <Link 
                            href={`/${navLink.slug}`}
                            className={styles.link}
                            >
                           
                            {navLink.label}
                            
                            </Link>
                        </li>
                    })}
                </ul>
            </nav>
}
export default Nav;