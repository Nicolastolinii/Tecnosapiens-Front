import React from 'react'
import { NavBar } from '../components/main/navbar/NavBar'
import CarouselBlog from '../components/main/CarouselBlog'
import { CardBig } from '../components/main/CardBig'
import { CardSmall } from '../components/main/CardSmall'
import { Footer } from '../Footer'
import useFetch from '../utils/useFetch'
import Loader from '../components/loader/loader'

export const Home = () => {
    const { data, loading} = useFetch('http://localhost:8080/blog/all')
    if (loading) {
        // Muestra el componente Loader mientras los datos se están cargando
        return (
            <>
                <NavBar />
                <Loader />
            </>
        );
    }

    // Una vez que los datos están cargados, renderiza el contenido de Home
    return (
        <>
            <NavBar />
            <CarouselBlog data={data} />
            <CardBig data={data} />
            <CardSmall data={data} />
            <Footer />
        </>
    )
}
