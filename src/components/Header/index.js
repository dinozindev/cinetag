import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import logo from "./Logo-cinetag-branco 1.png"
import HeaderLink from "components/HeaderLink"

export default function Header() {
    return (
        <header className={styles.header}>
            <Link to ="./">
                <img src={logo} alt="logo cinetag" />
            </Link>
            <nav>
                <HeaderLink url="./">Home</HeaderLink>
                <HeaderLink url="./favoritos">Favoritos</HeaderLink>
            </nav>
        </header>
    )
}