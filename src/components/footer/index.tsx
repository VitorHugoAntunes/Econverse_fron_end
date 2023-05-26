import styles from "./styles.module.scss"

import { socialMediaIcons, brandsImages, paymentMethodsIcons } from './imports'

import Image from "next/image";
import Link from "next/link";
import Form from "./form";

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.about}>
                <aside>
                    <div className={styles.contact}>
                        <h4>Sobre nós</h4>

                        <div className={styles.spans}>
                            <Link href="">Conheça</Link>
                            <Link href="">Como comprar</Link>
                            <Link href="">Indicação e desconto</Link>
                        </div>

                        <div className={styles.socialMedia}>
                            <Image src={socialMediaIcons.facebookIcon} alt="" />
                            <Image src={socialMediaIcons.instagramIcon} alt="" />
                            <Image src={socialMediaIcons.youtubeIcon} alt="" />
                        </div>
                    </div>
                    <div className={styles.info}>
                        <h4>Informações úteis</h4>

                        <div className={styles.spans}>
                            <Link href="">Fale conosco</Link>
                            <Link href="">Dúvidas</Link>
                            <Link href="">Prazos de entrega</Link>
                            <Link href="">Formas de pagamento</Link>
                            <Link href="">Políticas de privacidade</Link>
                            <Link href="">Trocas e devoluções</Link>
                        </div>
                    </div>
                    <div className={styles.paymentMethods}>
                        <h4>Formas de pagamento</h4>
                        <div className={styles.paymentMethods}>
                            {paymentMethodsIcons.map((icon, index) => (
                                <Image key={index} src={icon.src} width={icon.width} height={icon.height} alt="" />
                            ))}
                        </div>
                    </div>
                </aside>

                <Form />
            </div>
            <div className={styles.copyright}>
                <section>
                    <p>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.
                        É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</p>
                    <div>
                        <Image src={brandsImages.econverseImage} alt="" />
                        <Image src={brandsImages.vtexImage} alt="" />
                    </div>
                </section>
            </div>
        </footer>
    )
}