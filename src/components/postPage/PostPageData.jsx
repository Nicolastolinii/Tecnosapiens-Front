import { Link, useParams } from "react-router-dom"
import useFetch from "../../utils/useFetch"
import dataFormat from './dataFormat';
import "./style.css"
import { useAuth } from "../../utils/AuthProvider";


const PostPageData = () => {
    const { API } = useAuth();
    const { id } = useParams()
    const { data } = useFetch(`${API}/blog/${id}`)
    const formattedDate = data ? dataFormat(data) : null;

    return (
        <div className="container component-styles  flex flex-col justify-center pt-24 px-8 items-center text-center ">
            <div className=" pb-3 text-[14px]  font-openSans opacity-75 w-3/4 text-left">
                <Link className="hover:text-blue-700 transition duration-200" to="/">Home</Link>
                <span className=""> &gt; </span>
                <span>Post</span>
            </div>
            <h1 className="font-bold font-openSans text-3xl lg:text-4xl  leading-10 w-3/4 text-balance upp mt-10 mb-3 ">{data?.titulo}</h1>
            <div className="w-[15rem] opacity-70 font-openSans text-sm flex justify-between">
                <span>{formattedDate}</span>
                <div>
                    <span>Categoria:</span>
                    <span className="pl-1">IT</span>
                </div>
            </div>
            
            <div className="flex mt-12 justify-center lg:w-3/4  lg:h-[35rem]">

                {data?.imagen && (
                    <img src={data?.imagen} alt={data.titulo} className="w-[100%] bg-cover object-cover rounded-lg" />
                )}
            </div>
            <div className="w-3/4 mt-14">
                <p className="leading-8 text-base  font-openSans font-normal text-left text-[#454545]" dangerouslySetInnerHTML={{ __html: data?.contenido }}></p>
            </div>
        </div>
    )
}
export default PostPageData;
