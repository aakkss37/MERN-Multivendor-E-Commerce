import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ShopIN from '../../assets/ShopIN'
import { AiOutlineSearch } from 'react-icons/ai'
import { ProductDetailType, productData } from '../../static/Data'
import styles from '../../styles/styles'



const Header: React.FC = () => {
    const [searchInput, setSearchInput] = useState<string>("");
    const [searchResult, setSearchResult] = useState<ProductDetailType[]>([])

    useEffect(() => {
        const handleSearch = () => {
            const searchedData = productData.filter((product) =>
                product.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
            );
            setSearchResult(searchedData);
        };
        if (searchInput.length > 0) void handleSearch();
    }, [searchInput]);
    return (
        <div className='w-full'>
            <div className="hidden 800px:h-[50px] 800px:px-[40px] 800px:my-[20px] 800px:flex items-center justify-between">
                <div>
                    <Link to="/home">
                        <ShopIN width="120" />
                    </Link>
                </div>
                {/* search box */}
                <div className="w-[50%] relative">
                    <input
                        type="text"
                        placeholder="Search Product..."
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        className={styles.inputStyle}
                    />
                    <AiOutlineSearch
                        size={25}
                        className="absolute right-2 top-1.5 cursor-pointer"
                    />
                    {searchInput.length > 0 && searchResult.length !== 0 ? (
                        <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                            {searchResult &&
                                searchResult.map((item, index) => {
                                    return (
                                        <Link to={`/product/?name=${item.name}&id=${item.id}`} key={index}>
                                            <div className="w-full flex items-start-py-3">
                                                <img
                                                    src={`${item.image_Url[0]?.url}`}
                                                    alt=""
                                                    className="w-[40px] h-[40px] mr-[10px]"
                                                />
                                                <h1>{item.name}</h1>
                                            </div>
                                        </Link>
                                    );
                                })}
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default Header