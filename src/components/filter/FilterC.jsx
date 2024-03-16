import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchIcon from "../../assets/lupa.webp"
import useFetch from "../../utils/useFetch";
import Card from "../main/Card";
import { useAuth } from "../../utils/AuthProvider";
export const FilterC = () => {
    const { search } = useLocation();
    const { API } = useAuth();
    const params = new URLSearchParams(search);
    const param = params.get("categoria");
    const [loading, setLoading] = useState(true);
    const [filterr, setFilterr] = useState("");
    const [filteredData, setFilteredData] = useState([])
    const { data } = useFetch(`${API}/blog/all`)
    useEffect(() => {
        // Filtrar los datos cuando el componente se monte por primera vez
        if (param) {
            const result = data?.filter((data) => {
                return data?.categoria?.toLowerCase().startsWith(param.toLowerCase());
            })
            setFilteredData(result);
            setLoading(false);
            setFilterr(param)
        }
    }, [data]);
    const fetchData = (value) => {
        const result = data?.filter((data) => {
            return data?.categoria?.toLowerCase().startsWith(value.toLowerCase());
        })
        setFilteredData(result)
        setLoading(false)
    }
    const handleChange = (value) => {
        fetchData(value.trim())
        setFilterr(value.trim());
    }
    
    return (
        <div className="container">
            <div className="   w-full  h-12 flex items-center justify-center">
                <input
                    className="border w-[30rem]  rounded-3xl py-1.5 pl-8 pr-8 focus-visible:outline-none bg-no-repeat"
                    type="text"
                    placeholder="Buscar..."
                    value={filterr}
                    onChange={(e) => handleChange(e.target.value)}
                    style={{
                        backgroundImage: `url(${SearchIcon})`,
                        backgroundSize: '18px 18px',
                        backgroundPosition: 'left 8px center',
                    }}
                />
            </div>
            <div>
                <div className="py-10 text-center font-semibold font-openSans text-xl">
                    {!loading && filterr && filteredData?.length > 0 && (
                        <p>Resultados para: "{filterr}"</p>
                    )}
                    {!loading && filteredData?.length === 0 && (
                        <p className="text-red-500">No se encontraron resultados</p>
                    )}
                </div>
                <div className="mt-8 flex gap-6 flex-wrap justify-center ">
                    {filterr && filteredData?.map((blog) => (
                        <Card key={blog.id} href={`/blog/${blog.id}`} blog={blog} w={"md:w-[48%] mx-10 lg:mx-0 lg:w-[30%]"} mb={"mb-14"} flex={false} imgh={"h-[250px] min-w-[280px]"} imgmargin={"mb-[30px]"} />

                    ))}
                </div>
            </div>
        </div>

    );
};
