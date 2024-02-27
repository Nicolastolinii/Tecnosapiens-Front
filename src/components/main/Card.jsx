import { Link } from "react-router-dom";
import truncateText from "../../utils/truncateText";
import "./style.css"

const Card = ({ blog, showContent = true, w, flex, mb, imgh, imgmargin, padd, centerText, href }) => {
  return (
    <div className={`w-full ${w} ${mb} ${flex} bg-white rounded-xl shadow-custom p-4 transition transform hover:-translate-y-2 hover:-translate-x-2 hover:scale-105`}>
      
      <Link to={href}>
        <img loading="lazy" className={`bg-cover object-cover w-full rounded-lg ${imgh}  ${imgmargin}`} src={`data:image;base64,${blog.imagen}`} alt={blog.title} />
      </Link>
      <div className={`font-openSans ${padd} ${centerText}  min-w-[280px] `}>
        <div>
          <div className="flex items-center">
            <div className="  rounded-xl text-center bg-[#f79a185b]  items-center px-2">
              <span className="text-[#222]  font-bold uppercase  text-xs">{blog.categoria} </span>
            </div>
            <div>
              <span className="text-[#888] font-normal pl-1 text-sm">— July 2, 2020</span>
            </div>
          </div>
        </div>
        <Link to={href}>
          <h2 className="text-lg font-bold pt-2 leading-6 ">{blog.titulo}</h2>
        </Link>
        {showContent && (
          <p className="font-normal text-sm text-[#888] pt-4" dangerouslySetInnerHTML={{ __html: truncateText(blog.contenido, 200) }}></p>
        )}
      </div>
    </div>
  );
};

export default Card;