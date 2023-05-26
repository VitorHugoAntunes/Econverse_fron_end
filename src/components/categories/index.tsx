import styles from "./styles.module.scss"

import technologyImage from '../../assets/categoriesIcons/technology.png';
import supermarketImage from '../../assets/categoriesIcons/marketplace.png';
import drinksImage from '../../assets/categoriesIcons/drinks.png';
import toolsImage from '../../assets/categoriesIcons/tools.png';
import healthImage from '../../assets/categoriesIcons/health.png';
import racingImage from '../../assets/categoriesIcons/racing.png';
import fashionImage from '../../assets/categoriesIcons/fashion.png';
import marketplaceImage from '../../assets/categoriesIcons/shopping-cart.png';
import bakeryImage from '../../assets/categoriesIcons/bread.png';
import sushiImage from '../../assets/categoriesIcons/sushi.png';
import Image from 'next/image';

export default function Categories() {
    const categoriesList = [
        {
            id: 1,
            title: "Tecnologia",
            image: technologyImage,
        },
        {
            id: 2,
            title: "Supermercado",
            image: supermarketImage,
        },
        {
            id: 3,
            title: "Bebidas",
            image: drinksImage,
        },
        {
            id: 4,
            title: "Ferramentas",
            image: toolsImage,
        },
        {
            id: 5,
            title: "Saúde",
            image: healthImage,
        },
        {
            id: 6,
            title: "Esportes e Fitness",
            image: racingImage,
        },
        {
            id: 7,
            title: "Moda",
            image: fashionImage,
        },
    ];

    return (
        <section className={styles.categoriesContainer}>
            {categoriesList.map(category => (
                <div key={category.id} className={styles.categoryDiv}>
                    <div>
                        <Image src={category.image} alt={category.title} />
                    </div>

                    <span>{category.title}</span>
                </div>
            ))}
        </section>
    )
}