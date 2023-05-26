import { createContext, useState, useContext, ReactNode } from 'react';

interface ModalContextType {
    openModal: boolean;
    productData: {};
    changeModalStatus: () => void;
    handleProductDataToModal: (
        id: number,
        title: string,
        price: number,
        description: string,
        productImageUrl: string) => void;
}

interface ModalProviderProps {
    children: ReactNode;
}

export const ModalContext = createContext({} as ModalContextType);

export function ModalProvider({ children }: ModalProviderProps) {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [productData, setProductData] = useState({});

    function changeModalStatus() {
        setOpenModal(!openModal)
    }

    function handleProductDataToModal(
        id: number,
        title: string,
        price: number,
        description: string,
        productImageUrl: string) {
        setProductData({
            id,
            title,
            price,
            description,
            productImageUrl
        });

        console.log(productData)
    }

    return (
        <ModalContext.Provider value={{ openModal, productData, changeModalStatus, handleProductDataToModal }}>
            {children}
        </ModalContext.Provider>
    );
}