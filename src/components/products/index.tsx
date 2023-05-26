import styles from "./styles.module.scss"
import Link from "next/link";

import productsList from '../../data/products.json'
import Image from "next/image";

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

import arrowIcon from '../../assets/altImages/arrow-icon.png'
import { useContext } from "react";
import { ModalContext } from "@/contexts/ModalContext";
import Modal from "../modal";

interface CategoryOption {
    title: string;
}

interface ProductsProps {
    categoriesOptions: CategoryOption[]
    seeAll: boolean;
    lastChild?: boolean;
}

export default function Products({ categoriesOptions, seeAll, lastChild }: ProductsProps) {
    const { changeModalStatus, handleProductDataToModal } = useContext(ModalContext);
    const [sliderRef, slider] = useKeenSlider({
        slides: {
            perView: 4.05,
            spacing: 62
        },
        loop: true
    });

    function handleNextProduct() {
        if (slider) {
            slider.current?.next();
        }
    }

    function handlePrevProduct() {
        if (slider) {
            slider.current?.prev();
        }
    }

    function handleProductData(id: number, title: string, price: number, description: string, productImageUrl: string) {
        handleProductDataToModal(id, title, price, description, productImageUrl);
        changeModalStatus();
    }

    return (
        <section id={lastChild === true ? styles.lastChildMargin : ""} className={styles.productsSection}>
            <h3><span>Produtos relacionados</span></h3>
            <nav className={styles.categoriesLinks}>
                {categoriesOptions && seeAll === false ? categoriesOptions.map((categoryLink, index) => (
                    <Link key={index} href={"/"}>{categoryLink.title}</Link>
                )) : (
                    <Link href={""} className={styles.seeAllLink}>Ver todos</Link>
                )}
            </nav>

            <div ref={sliderRef} id={styles.customSlider} className="keen-slider">
                {productsList.products.map((product, index) => (
                    <div
                        key={index}
                        id={styles.productCard}
                        className="keen-slider__slide"
                        onClick={() => handleProductData(index, product.productName, product.price, product.descriptionShort, product.photo)}
                    >
                        <Image src={product.photo} width={247} height={228} alt={product.productName} />
                        <p>{product.productName}</p>
                        <span>{product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span>
                        <strong>{product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</strong>
                        <small>ou 2x de R$ 49,95 sem juros</small>
                        <pre>Frete grátis</pre>

                        <button>Comprar</button>
                    </div>
                ))}

            </div>
            <button onClick={handlePrevProduct} className={styles.arrowLeft}>
                <Image src={arrowIcon} alt="" />
            </button>
            <button onClick={handleNextProduct} className={styles.arrowRight}>
                <Image src={arrowIcon} alt="" />
            </button>
            <Modal />
        </section>
    )
}