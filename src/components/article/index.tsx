import Image from "next/image";
import styles from "./styles.module.scss"

import sectionImage from '../../assets/sectionImages/partners.png';
import sectionImageAlt from '../../assets/sectionImages/partners-alt.png';

interface ArticleProps {
    imageBackground: "primary" | "alt";
    title: string;
    description: string;
}

export default function Article({ imageBackground, title, description }: ArticleProps) {
    return (
        <div className={styles.articlesContainer}>
            <article>
                <Image src={imageBackground === "primary" ? sectionImage : sectionImageAlt} alt="" />
                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>

                    <button>Confira</button>
                </div>
            </article>

            <article>
                <Image src={imageBackground === "primary" ? sectionImage : sectionImageAlt} alt="" />
                <div>
                    <h2>{title}</h2>
                    <p>{description}</p>

                    <button>Confira</button>
                </div>
            </article>
        </div>
    )
}