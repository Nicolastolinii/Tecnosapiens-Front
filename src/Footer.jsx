import { Link } from 'react-router-dom'
import github from './assets/github.webp'
import linkedin from './assets/linkedin.webp'

export const Footer = () => {
    return (
        <div className='mt-20 bg-gray-50'>
            <div className='container h-[18rem] bg-gray-50'>
                <div className='h-full flex flex-col gap-10 justify-center items-center text-center'>
                    <div className=''>
                        <ul className=" flex gap-6">
                            <li className='w-10 h-10 bg-gray-300 flex items-center justify-center rounded-xl'>
                                <Link to="https://github.com/Nicolastolinii">
                                    <img className='w-5 ' src={github} alt="github icon to profile" />
                                </Link>
                            </li>
                            <li className='w-10 h-10 bg-gray-300 flex items-center justify-center rounded-xl'>
                                <Link to="https://www.linkedin.com/in/nicolastolini/">
                                    <img className='w-5' src={linkedin} alt="linkedin icon to profile" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='text-[#888] font-openSans text-sm'>
                        <p>Copyright ©2024 All rights reserved </p>
                        <div className='pt-4'>
                            <span><Link to="#">Terms & Conditions</Link></span>
                            <span className='px-4'>/</span>
                            <span><Link to="#">Privacy Policy</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
