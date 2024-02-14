import github from './assets/github.png'
import linkedin from './assets/linkedin.png'

export const Footer = () => {
    return (
        <div className='mt-20 bg-gray-50'>
            <div className='container h-[18rem] bg-gray-50'>
                <div className='h-full flex flex-col gap-10 justify-center items-center text-center'>
                    <div className=''>
                        <ul className=" flex gap-6">
                            <li className='w-10 h-10 bg-gray-300 flex items-center justify-center rounded-xl'>
                                <a href="">
                                    <img className='w-5 ' src={github} alt="" />
                                </a>
                            </li>
                            <li className='w-10 h-10 bg-gray-300 flex items-center justify-center rounded-xl'>
                                <a href="">
                                    <img className='w-5' src={linkedin} alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='text-[#888] font-openSans text-sm'>
                        <p>Copyright ©2024 All rights reserved </p>
                        <div className='pt-4'>
                            <span><a href="#">Terms & Conditions</a></span>
                            <span className='px-4'>/</span>
                            <span><a href="#">Privacy Policy</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
