import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { navItems } from '../../static/Data'


const Navbar: React.FC = () => {
    const [active, setActive] = useState<number>(0);
    return (
        <div className="h-[50px] mx-auto flex items-center justify-between">
            {
                navItems && navItems.map((i, index) => (
                    <div className="flex">
                        <Link to={i.url} onClick={() => setActive(index)}
                            className={`${active === index ? "text-white" : "800px:text-body-bg"}  pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer}`}
                        >
                            {i.title}
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default Navbar