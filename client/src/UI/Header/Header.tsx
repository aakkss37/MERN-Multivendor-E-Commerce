import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ShopIN from '../../assets/ShopIN'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiMenuAltLeft } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { ProductDetailType, productData } from '../../static/Data'
import styles from '../../styles/styles'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import CategoryMenu from './CategoryMenu';



const Header: React.FC = () => {
    const userDetail = useSelector((state: RootState) => state.user);
    const [searchInput, setSearchInput] = useState<string>("");
    const [searchResult, setSearchResult] = useState<ProductDetailType[]>([]);
    const [openCategoryMenu, setOpenCategoryMenu] = useState<boolean>(false);
    const [fixHeader2, setFixHeader2] = useState<boolean>(false);

    useEffect(() => {
        const handleSearch = () => {
            const searchedData = productData.filter((product) =>
                product.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
            );
            setSearchResult(searchedData);
        };
        if (searchInput.length > 0) void handleSearch();
    }, [searchInput]);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 70) {
            setFixHeader2(true);
        } else {
            setFixHeader2(false);
        }
    });
    return (
        <>
            {/* HEADER LINE 1 */}
            <div className="w-full px-[60px] hidden 800px:block" >
                <div className="h-[50px] my-[10px] flex items-center justify-between">
                    <div>
                        <Link to="/home">
                            <ShopIN width="120" />
                        </Link>
                    </div>
                    {/* search box */}
                    <div className="w-[50%] relative mx-2">
                        <input
                            type="text"
                            placeholder="Search Product..."
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            className={styles.inputStyle + "text-[16]"}
                        />
                        <AiOutlineSearch
                            size={25}
                            className="absolute right-2 top-1.5 cursor-pointer"
                        />
                        {searchInput.length > 0 && searchResult.length !== 0 ? (
                            <div className="absolute max-h-[50vh] overflow-auto bg-white shadow-md rounded-lg z-20 p-4">
                                {searchResult &&
                                    searchResult.map((item, index) => {
                                        return (
                                            <Link to={`/product/?name=${item.name}&id=${item.id}`} key={index} >
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
                    <Link to={"#"} className='underline mx-2'>Become a Seller</Link>
                    <div className='flex items-center justify-between'>
                        <div className='mx-2'>
                            <img src="https://media.licdn.com/dms/image/D5603AQEG4HKvgqVHzw/profile-displayphoto-shrink_800_800/0/1688109841826?e=1702512000&v=beta&t=rCEymrvkb85hK6je2SkK7HbtgR4B1R9nJ-F8yGdaNNc" alt="" className="w-[32px] rounded-full" />
                        </div>
                        <p>{userDetail.userDetail.name}</p>
                    </div>
                </div>
            </div>
            {/* HEADER LINE 2 */}
            <div className={`${fixHeader2 && "fixed top-0 left-0 z-10"} w-full px-[60px] bg-primary hidden 800px:block z-10`} >
                <div className="h-[50px]  flex justify-between items-end">
                    {/* Category */}
                    <div className='relative h-[45px] rounded-t-md bg-white '>
                        <button className='w-full h-[40px] rounded-t-md flex items-center'
                            onClick={() => { setOpenCategoryMenu(!openCategoryMenu) }}
                        >
                            <BiMenuAltLeft className="mx-2" />
                            <span className="mx21">All Category</span>
                            <IoIosArrowForward className={`mx-2 ${openCategoryMenu ? "rotate-90 transition duration-300" : "rotate-0"}`} />
                        </button>
                        {
                            openCategoryMenu &&
                            <div className='absolute mt-1' onBlur={() => { setOpenCategoryMenu(false) }}>
                                <CategoryMenu setIsOpen={setOpenCategoryMenu} />
                            </div>
                        }
                    </div>
                    <div className="h-[50px]  flex items-center justify-between">
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header