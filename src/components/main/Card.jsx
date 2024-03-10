import { Link } from "react-router-dom";
import truncateText from "../../utils/truncateText";
import "./style.css"
import LazyLoad from 'react-lazy-load';


const Card = ({ blog, showContent = true, w,h, flex, mb, imgh, imgmargin, padd, centerText, href, className }) => {

  return (
    <div className={`w-full ${w} ${h} ${mb} ${flex} ${className} bg-white rounded-xl shadow-custom p-4 transition transform lg:hover:-translate-y-2 lg:hover:-translate-x-2 lg:hover:scale-105`}>
      <LazyLoad className="md:pb-0 pb-4"  offset={100}>
        <Link  aria-label="Leer el artículo completo." to={href}>
          <img
            src={blog.imagen}
            alt="imagenes de portada de las tarjetas que representan cada post del blog"
            className={`bg-cover object-cover w-full rounded-lg ${imgh} ${imgmargin}`}
          />
        </Link>
      </LazyLoad>
      <div className={`font-poppins ${padd} ${centerText}  min-w-[280px] `}>
        <div>
          <div className="flex items-center">
            <div className="  rounded-xl text-center bg-[#f79a185b]  items-center px-2">
              <span className="text-[#222]  font-bold uppercase  text-xs">{blog.categoria} </span>
            </div>
            <div>
              <span className="text-[#888] font-normal pl-1 text-sm">— {new Date(blog.timeData).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
        <Link to={href}>
          <h2 className="text-lg  font-bold pt-2 leading-6 ">{truncateText(blog.titulo, 50)}</h2>
        </Link>
        {showContent && (
          <p className="font-normal text-sm text-[#888] pt-2" dangerouslySetInnerHTML={{ __html: truncateText(blog.contenido, 150) }}></p>
        )}
      </div>
    </div>
  );
};

export default Card;