import { useParams } from "react-router-dom"
import useFetch from "../../utils/useFetch"
import "./style.css"


const PostPageData = () => {
    const { id } = useParams()
    const { data, loading } = useFetch(`http://localhost:8080/blog/${id}`)
    return (
        <div className="container flex flex-col justify-center items-center text-center ">
            <span className="mb-16">{new Date(data?.timeData).toLocaleDateString()}</span>
            <h2 className="font-bold font-openSans text-4xl upp mb-10">{data?.titulo}</h2>
            <div className="flex justify-center">
                <img src={`data:image;base64,${data?.imagen}`} alt={data?.titulo} className="w-[80%] rounded-xl" />
            </div>
            <div className="w-3/4 mt-14">
                <p className="leading-8 text-lg font-openSans font-normal text-[#9a9a9a]" dangerouslySetInnerHTML={{ __html: data?.contenido }}></p>
            </div>
        </div>
    )
}
export default PostPageData;
