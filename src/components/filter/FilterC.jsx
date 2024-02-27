import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchIcon from "../../assets/lupa.png"
import useFetch from "../../utils/useFetch";
import Card from "../main/Card";
export const FilterC = () => {
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const categoria = params.get("categoria");
    const [loading, setLoading] = useState(true);
    const [filterr, setFilterr] = useState("")
    const [filteredData, setFilteredData] = useState([])
    const { data } = useFetch("https://blog-api-production-2065.up.railway.app/blog/all")
    const handleFilter = (event) => {
        if (event.key === "Enter") {
            setFilteredData(data?.filter((post) => post.categoria === filterr.toLowerCase()));
        }
    };
    useEffect(() => {

        const fetchData = async () => {
            setLoading(true);
            const response = await fetch(`https://blog-api-production-2065.up.railway.app/blog/all`);
            const data = await response.json();
            setLoading(false);
            if (categoria) {
                setFilteredData(data?.filter((post) => post.categoria === categoria.toLowerCase()));
            } else {
                console.log("error")
            }
        };

        fetchData();
    }, [categoria]);

    return (
        <div className="container">
            <div className="   w-full h-12 flex items-center justify-center">
                <input
                    className="border w-[30rem]  rounded-3xl py-1.5 pl-8 pr-8 focus-visible:outline-none bg-no-repeat"
                    type="text"
                    placeholder="Buscar..."
                    value={filterr}
                    onChange={e => setFilterr(e.target.value)}
                    onKeyDown={handleFilter}
                    style={{
                        backgroundImage: `url(${SearchIcon})`,
                        backgroundSize: '18px 18px',
                        backgroundPosition: 'left 8px center',
                    }}
                />
            </div>
            <div>
                <div className="py-10 font-semibold font-openSans text-xl">
                    {!loading && filteredData?.length > 0 && (
                        <p>Resultados para: "{filteredData[0].categoria.toUpperCase()}"</p>
                    )}
                    {!loading && filteredData?.length === 0 && (
                        <p className="text-red-500">No se encontraron resultados</p>
                    )}
                </div>
                <div className="mt-8 flex gap-4 flex-wrap">
                    {filteredData?.map((blog) => (
                        <Card key={blog.id} href={`http://localhost:5173/blog/${blog.id}`} blog={blog} w={"md:w-[48%] lg:w-[30%]"} mb={"mb-14"} flex={false} imgh={"h-[250px] min-w-[280px]"} imgmargin={"mb-[30px]"} />

                    ))}
                </div>
            </div>
        </div>

    );
};
