import Image from "next/image"
import styles from "./styles.module.scss"

import bannerImage from '../../assets/altImages/banner.png'

export default function Banner() {
    return (
        <section className={styles.bannerSection}>
            <div>
                <h1>Venha conhecer nossas promoções</h1>
                <h2>50% Off nos produtos</h2>

                <button>Ver produto</button>
            </div>
        </section>
    )
}