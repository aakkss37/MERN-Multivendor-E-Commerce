import React from 'react'
import Modal from '../../UI/Modal/Modal'

interface PropsType {
    openWishlist: boolean
    setOpenWishlist: React.Dispatch<React.SetStateAction<boolean>>
}

const Wishlist: React.FC<PropsType> = ({ setOpenWishlist, openWishlist }) => {
    return (
        <Modal isOpen={openWishlist} onClose={() => setOpenWishlist(false)}><p>hello Wishlist</p></Modal>
    )
}

export default Wishlist