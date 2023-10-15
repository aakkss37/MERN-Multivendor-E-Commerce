import React from 'react'
import { categoriesData } from '../../static/Data'
import styles from '../../styles/styles'
import { useNavigate } from 'react-router-dom';

interface ItemType {
    id: number;
    title: string;
    subTitle: string;
    image_Url: string;
}

interface PropType {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const CategoryMenu: React.FC<PropType> = ({ setIsOpen }) => {
    const navigate = useNavigate();
    const submitHandle = (item: ItemType) => {
        navigate(`/products?category=${item.title}`);
        setIsOpen(false);
    };
    return (
        <div className="w-60 bg-white absolute z-10 rounded-b-md shadow-md">
            {categoriesData &&
                categoriesData.map((item, index) => (
                    <div
                        key={index}
                        className={`${styles.normalFlex} hover:bg-primary-light transition duration-300`}
                        onClick={() => submitHandle(item)}
                    >
                        <img
                            src={item.image_Url}
                            style={{
                                width: "25px",
                                height: "25px",
                                objectFit: "contain",
                                marginLeft: "10px",
                                userSelect: "none",
                            }}
                            alt=""
                        />
                        <h3 className="m-3 select-none">{item.title}</h3>
                    </div>
                ))}
        </div>
    )
}

export default CategoryMenu