import React from 'react'
import Modal from '../../UI/Modal/Modal'

interface PropsType {
    openCart: boolean
    setOpenCart: React.Dispatch<React.SetStateAction<boolean>>
}

const Cart: React.FC<PropsType> = ({ setOpenCart, openCart }) => {
    return (
        <Modal isOpen={openCart} onClose={() => setOpenCart(false)}><p>hello Cart</p></Modal>
    )
}

export default Cart