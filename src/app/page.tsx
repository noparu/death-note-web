import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const HomePage = () => {
    return (
        <div className="relative">
            {/* <Navbar /> */}
            <div className='flex w-full h-dvh relative justify-center overflow-x-clip'>
                <div className="h-full relative flex items-center justify-center">
                    <img src="https://drive.google.com/thumbnail?id=11cBszIbOGsFWTwC_ms7PqrIOWk8_J3CE&sz=w1000" alt="image" className='w-full h-full object-cover' />

                    <div className="absolute left-0 top-0 h-full -ml-[75%]">
                        <img src="https://drive.google.com/thumbnail?id=11pJCRrxn8Z9QwtveDvRD-Lvs-1dhbsD6&sz=w1000" alt="image" className='w-full h-full object-cover' />
                    </div>
                    <div className="absolute right-0 top-0 h-full -mr-[75%]">
                        <img src="https://drive.google.com/thumbnail?id=11tEuZyoUm2Jwaxn1QdwZc0t7lN6D6-Iz&sz=w1000" alt="image" className='w-full h-full object-cover' />
                    </div>

                    <div className="absolute top-0 w-[187vh] h-full bg-white mx-auto -z-20"></div>
                </div>

            </div>
            <div className="max-w-[187vh] h-dvh mx-auto bg-white"></div>
        </div>
    )
}

export default HomePage
