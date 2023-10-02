import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import AXIOS_INSTANCE from '../../services/axios';
import PageLoader from '../../UI/PageLoader/PageLoader';


const AccountActivate: React.FC = () => {
    const [searchParams] = useSearchParams();
    const [isTokenValid, setIsTokenValid] = useState<boolean>(false);
    const[screenLoaderOn, setScreenLoaderOn] = useState<boolean>(true);
    const token = searchParams.get("token")
    useEffect(() => {
        const validateToken = async () => {
            try {
                const response = await AXIOS_INSTANCE.get(`/api/auth/activate-account/?token=${token}`)
                console.log(response.data);
                setIsTokenValid(true);
                setScreenLoaderOn(false)
            } catch (error) {
                setScreenLoaderOn(false)
            }

        }
        void validateToken()
    }, [token])
    return (
        <div className='w-full grid place-items-center h-screen'>
                {
                    screenLoaderOn ? <PageLoader loadingText='Verifying Token...' /> 
                    : !screenLoaderOn && isTokenValid
                    ?
                    <div className=''>
                     <p className='text-xl font-semibold text-secondary-light'>Account Activated.</p>
                    </div>
                    : 
                    <div className=''> 
                        <p className='text-xl font-semibold text-secondary-light'>Error 498, Invalid Token</p>
                    </div>
                    
                }
        </div>
    )
}

export default AccountActivate