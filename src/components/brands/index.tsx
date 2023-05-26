import styles from "./styles.module.scss"
import Image from "next/image";

import vtexImage from "../../assets/brandsImages/vtex.png";
import mcCainImage from "../../assets/brandsImages/mcCain.png";
import camilImage from "../../assets/brandsImages/camil.png";
import doroImage from "../../assets/brandsImages/doro.png";
import granoImage from "../../assets/brandsImages/grano.png";

import arrowIcon from '../../assets/altImages/small-arrow-icon.svg'

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

export default function Brands() {
    const brandsList = [
        vtexImage,
        vtexImage,
        vtexImage,
        vtexImage,
        vtexImage,
        mcCainImage,
        camilImage,
        doroImage,
        granoImage
    ];

    const [sliderRef, slider] = useKeenSlider({
        slides: {
            perView: 5.1,
            spacing: 40
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

    return (
        <div className={styles.brandsContainer}>
            <h3>Navegue por marcas</h3>
            <div ref={sliderRef} id={styles.customSlider} className="keen-slider">
                {brandsList.map((brand, index) => (
                    <div key={index} id={styles.brandCircle} className="keen-slider__slide">
                        <Image src={brand.src} width={brand.width} height={brand.height} alt="" />
                    </div>
                ))}
            </div>
            <button onClick={handlePrevProduct} className={styles.arrowLeft}>
                <Image src={arrowIcon} alt="" />
            </button>
            <button onClick={handleNextProduct} className={styles.arrowRight}>
                <Image src={arrowIcon} alt="" />
            </button>
        </div>
    )
}