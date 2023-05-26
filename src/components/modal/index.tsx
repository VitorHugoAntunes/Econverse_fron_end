import Image from 'next/image';
import styles from './styles.module.scss';

import { useContext } from 'react';
import { ModalContext } from '@/contexts/ModalContext';
import Link from 'next/link';

type ProductDataProps = {
    id: number;
    title: string;
    price: number;
    description: string;
    productImageUrl: string;
}

export default function Modal() {
    const { openModal, changeModalStatus, productData } = useContext(ModalContext)
    const productInfo = productData as ProductDataProps;
    return (
        <div className={`${styles.modalBackground} ${openModal ? styles.open : ''}`}>
            <div className={styles.modalContent}>
                {openModal === true && (
                    <>
                        <Image src={productInfo.productImageUrl} width={247} height={192.2} alt="" />
                        <div>
                            <h4>{productInfo.title}</h4>
                            <strong>{productInfo.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</strong>
                            <p>{productInfo.description}</p>

                            <Link href={""}>Veja mais detalhes do produto {">"}</Link>

                        </div>
                    </>
                )}
                <button onClick={changeModalStatus}>x</button>
            </div>
        </div>
    )
}