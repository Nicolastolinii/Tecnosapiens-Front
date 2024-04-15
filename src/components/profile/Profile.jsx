import React from 'react'
import useFetch from '../../utils/useFetch'
import { useAuth } from '../../utils/AuthProvider';
import Card from '../main/Card';

export const Profile = () => {
    const { API, UserId, UserName } = useAuth();
    const id = UserId();
    const userName = UserName();
    const { data } = useFetch(`${API}/v1/user/data/${id}`)

    return (
        <section>
            <div className='min-h-[60vh] px-16 container pt-28 flex flex-col items-center'>
                <div className='py-20 w-full flex justify-center'>
                    <h1 className='font-poppins font-semibold text-3xl'>Bienvenido {userName}</h1>
                </div>
                <div className='py-6 w-full'>
                    <p className='p-2 font-poppins bg-[#f1e5d5] font-semibold text-sm w-28 border-t border-r border-l rounded-tl border-[#f79a185b] text-center rounded-tr '>Mis Post</p>
                    <hr className=" border-t-2 border-[#f79a185b] rounded item max-w-[50%]" />
                </div>
                <div className="mt-8 flex gap-6 flex-wrap justify-center ">
                    {data?.blogs?.map((blog) => (
                        <Card key={blog.id} href={`/blog/${blog.id}`} blog={blog} w={"md:w-[48%] mx-10 lg:mx-0 lg:w-[30%]"} mb={"mb-14"} flex={false} imgh={"h-[250px] min-w-[280px]"} imgmargin={"mb-[30px]"} />

                    ))}
                </div>
            </div>
        </section>
    )
}
