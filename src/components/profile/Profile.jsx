import React from 'react'
import useFetch from '../../utils/useFetch'
import { useAuth } from '../../utils/AuthProvider';
import Card from '../main/Card';
import { useState } from 'react';
import { Avatar } from '../avatar/Avatar';

export const Profile = () => {
    const [render, setRender] = useState('posts')
    const [file, setFile] = useState({
        image: null,
    });
    console.log(file)
    const [transitioning, setTransitioning] = useState(false);
    const { API, UserId, UserName, token } = useAuth();
    const id = UserId();
    const userName = UserName();
    const { data } = useFetch(`${API}/v1/user/data/${id}`)
    const userImg = data?.image


    const handleImageChange = (event) => {
        setFile({ ...file, image: event.target.files[0] });
      };

    async function uploadImg(event) {
        event.preventDefault();

        const formData = new FormData();
        formData.append('file', file.image);
        formData.append('autorId', id);
        try {
            const response = await fetch(`${API}/v1/users/upload/image`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: formData,
            });
            if (response.ok) {
                console.log('avatar cambiado correctamente');
            } else {
                console.error('Error al cargar el avatar:', response.statusText);
            }
        } catch (error) {
            console.error('Error cambiar avatar:', error);
        }
    }

    const handleRenderChange = (view) => {
        if (render !== view) {
            setTransitioning(true);
            setTimeout(() => {
                setRender(view);
                setTransitioning(false);
            }, 100);
        }
    };

    return (
        <section>
            <div className='min-h-[60vh] px-16 container pt-16 flex flex-col items-center'>
                <div className='py-20 w-full flex flex-col items-center gap-6 justify-center'>
                    <h1 className='font-poppins font-semibold text-3xl'>Bienvenido {userName}</h1>
                    <Avatar src={userImg} on={true} />
                </div>
                <div className='py-6 px-6 w-full'>
                    <div className='flex'>
                        <button onClick={() => handleRenderChange('posts')} className={`${render === 'posts' ? "border-[#ffbf64]" : "hover:border-gray-400"}  inline-flex items-center h-10 px-2 py-2 -mb-px text-center  bg-transparent border-b-2  sm:px-4 -px-1  text-gray-700 whitespace-nowrap focus:outline-none`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mx-1 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                            </svg>

                            <span className="mx-1 text-sm sm:text-base">
                                Mis Post
                            </span>
                        </button>
                        <button onClick={() => handleRenderChange('settings')} className={`${render === 'settings' ? "border-[#ffbf64]" : "hover:border-gray-400"} inline-flex items-center h-10 px-2 py-2 -mb-px text-center  bg-transparent border-b-2  sm:px-4 -px-1  text-gray-700 whitespace-nowrap focus:outline-none`}>
                            <svg className="w-4 h-4 mx-1 sm:w-6 sm:h-6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
                                <path d="M 9.6660156 2 L 9.1757812 4.5234375 C 8.3516137 4.8342536 7.5947862 5.2699307 6.9316406 5.8144531 L 4.5078125 4.9785156 L 2.171875 9.0214844 L 4.1132812 10.708984 C 4.0386488 11.16721 4 11.591845 4 12 C 4 12.408768 4.0398071 12.832626 4.1132812 13.291016 L 4.1132812 13.292969 L 2.171875 14.980469 L 4.5078125 19.021484 L 6.9296875 18.1875 C 7.5928951 18.732319 8.3514346 19.165567 9.1757812 19.476562 L 9.6660156 22 L 14.333984 22 L 14.824219 19.476562 C 15.648925 19.165543 16.404903 18.73057 17.068359 18.185547 L 19.492188 19.021484 L 21.826172 14.980469 L 19.886719 13.291016 C 19.961351 12.83279 20 12.408155 20 12 C 20 11.592457 19.96113 11.168374 19.886719 10.710938 L 19.886719 10.708984 L 21.828125 9.0195312 L 19.492188 4.9785156 L 17.070312 5.8125 C 16.407106 5.2676813 15.648565 4.8344327 14.824219 4.5234375 L 14.333984 2 L 9.6660156 2 z M 11.314453 4 L 12.685547 4 L 13.074219 6 L 14.117188 6.3945312 C 14.745852 6.63147 15.310672 6.9567546 15.800781 7.359375 L 16.664062 8.0664062 L 18.585938 7.40625 L 19.271484 8.5917969 L 17.736328 9.9277344 L 17.912109 11.027344 L 17.912109 11.029297 C 17.973258 11.404235 18 11.718768 18 12 C 18 12.281232 17.973259 12.595718 17.912109 12.970703 L 17.734375 14.070312 L 19.269531 15.40625 L 18.583984 16.59375 L 16.664062 15.931641 L 15.798828 16.640625 C 15.308719 17.043245 14.745852 17.36853 14.117188 17.605469 L 14.115234 17.605469 L 13.072266 18 L 12.683594 20 L 11.314453 20 L 10.925781 18 L 9.8828125 17.605469 C 9.2541467 17.36853 8.6893282 17.043245 8.1992188 16.640625 L 7.3359375 15.933594 L 5.4140625 16.59375 L 4.7285156 15.408203 L 6.265625 14.070312 L 6.0878906 12.974609 L 6.0878906 12.972656 C 6.0276183 12.596088 6 12.280673 6 12 C 6 11.718768 6.026742 11.404282 6.0878906 11.029297 L 6.265625 9.9296875 L 4.7285156 8.59375 L 5.4140625 7.40625 L 7.3359375 8.0683594 L 8.1992188 7.359375 C 8.6893282 6.9567546 9.2541467 6.6314701 9.8828125 6.3945312 L 10.925781 6 L 11.314453 4 z M 12 8 C 9.8034768 8 8 9.8034768 8 12 C 8 14.196523 9.8034768 16 12 16 C 14.196523 16 16 14.196523 16 12 C 16 9.8034768 14.196523 8 12 8 z M 12 10 C 13.111477 10 14 10.888523 14 12 C 14 13.111477 13.111477 14 12 14 C 10.888523 14 10 13.111477 10 12 C 10 10.888523 10.888523 10 12 10 z"></path>
                            </svg>

                            <span className="mx-1 text-sm sm:text-base">
                                Configuraciones
                            </span>
                        </button>
                    </div>
                    <hr className=" border-t-2 border-gray-200 rounded item max-w-[50%]" />
                </div>
                <div className="mt-8 flex gap-6 flex-wrap justify-center transition-all duration-700">
                    {render === 'posts' && !transitioning && data?.blogs?.map((blog) => (
                        <Card key={blog.id} href={`/blog/${blog.id}`} blog={blog} w={"md:w-[48%] mx-10 lg:mx-0 lg:w-[30%]"} mb={"mb-14"} flex={false} imgh={"h-[250px] min-w-[280px]"} imgmargin={"mb-[30px]"} />
                    ))}
                    {render === 'settings' && !transitioning && (
                        <div>
                            <h2 className='pb-4 px-8 text-center font-poppins font-bold text-xl'>Cambiar Avatar</h2>
                            <form className='flex flex-col justify-center items-center' onSubmit={uploadImg} >
                                <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-full max-w-xl h-full  p-5 mx-auto mt-2 text-center bg-transparent border-2  border-dashed cursor-pointer  border-gray-700 rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-gray-900 ">
                                        <path d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                    </svg>
                                    <h2 className="mt-1 font-medium tracking-wide text-gray-900">Payment File</h2>
                                    <p className="mt-2 text-xs tracking-wide text-gray-900">Upload or darg & drop your file  </p>
                                    <input id="dropzone-file" type="file" onChange={handleImageChange} className="hidden" />
                                </label>
                                <button className='mt-8 px-6 py-2 border rounded  bg-gray-300 font-poppins   '>Cargar</button>
                            </form>

                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
