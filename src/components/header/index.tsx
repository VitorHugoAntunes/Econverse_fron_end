import Image from "next/image"
import styles from "./styles.module.scss"

import checkIcon from '../../assets/topIcons/shield-check.png';
import truckIcon from '../../assets/topIcons/truck-icon.png';
import creditCardIcon from '../../assets/topIcons/credit-card.png';
import brandImage from '../../assets/headerIcons/brand.png';
import searchIcon from '../../assets/headerIcons/search.png';

import logOutIcon from '../../assets/headerIcons/log-out.png';
import heartIcon from '../../assets/headerIcons/heart.png';
import userIcon from '../../assets/headerIcons/user-circle.png';
import shoppingCardIcon from '../../assets/headerIcons/shopping-cart.png';

import crownIcon from '../../assets/altImages/crown-simple.png'

export default function Header() {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.top}>
                <div>
                    <Image src={checkIcon} alt="" />
                    <div>
                        <span>Compra</span> <strong>100% segura</strong>
                    </div>
                </div>
                <div>
                    <Image src={truckIcon} alt="" />
                    <div>
                        <strong>Frete grátis</strong> <span>acima de R$ 200</span>
                    </div>
                </div>
                <div>
                    <Image src={creditCardIcon} alt="" />
                    <div>
                        <strong>Parcele</strong> <span>suas compras</span>
                    </div>
                </div>
            </div>

            <header className={styles.header}>
                <Image src={brandImage} alt="Logo" />
                <div className={styles.searchBar}>
                    <input type="text" placeholder="O que você está buscando?" />
                    <Image src={searchIcon} alt="Pesquisar" />
                </div>

                <menu className={styles.navOptions}>
                    <Image src={logOutIcon} alt="Deslogar" />
                    <Image src={heartIcon} alt="Favoritos" />
                    <Image src={userIcon} alt="Usuario" />
                    <Image src={shoppingCardIcon} alt="Meu carrinho" />
                </menu>
            </header>

            <nav className={styles.navigation}>
                <a href="">Todas as categorias</a>
                <a href="">Supermercado</a>
                <a href="">Livros</a>
                <a href="">Moda</a>
                <a href="">Lançamentos</a>
                <a href="" className={styles.selected}>Ofertas do dia</a>
                <a href=""><Image src={crownIcon} alt="" /> Assinatura</a>
            </nav>
        </div>
    )
}