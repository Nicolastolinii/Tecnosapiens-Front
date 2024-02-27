import React from 'react'
import { NavBar } from '../components/main/navbar/NavBar'
import CarouselBlog from '../components/main/CarouselBlog'
import { CardBig } from '../components/main/CardBig'
import { CardSmall } from '../components/main/CardSmall'
import { Footer } from '../Footer'
import useFetch from '../utils/useFetch'
import { NotFound } from '../components/404/NotFound'
import { HashLoader } from 'react-spinners'

export const Home = () => {

    const { data, loading } = useFetch('https://blog-api-production-2065.up.railway.app/blog/all')
    if (loading) {
        // Muestra el componente Loader mientras los datos se están cargando
        return (
            <>
                <NavBar />
                <div className='h-screen  bg-[#F9F9FE] flex justify-center items-center'>
                    <HashLoader
                        color="#333333"
                        size={250}
                        speedMultiplier={1}
                    />
                </div>
            </>
        );
    }
    if (!data) {
        return (
            <>
                <NavBar />
                <NotFound />
                <Footer />
            </>
        );
    }

    // Una vez que los datos están cargados, renderiza el contenido de Home
    return (
        <>
            <div className='bg-[#F9F9FE]'>
                <NavBar />
                <CarouselBlog data={data} />
                <CardBig data={data} />
                <CardSmall data={data} />
                <Footer />
            </div>
        </>
    )
}
