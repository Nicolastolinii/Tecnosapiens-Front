import { Link } from "react-router-dom";
import truncateText from "../../utils/truncateText";
import "./style.css"
import LazyLoad from 'react-lazy-load';
import { Avatar } from "../avatar/Avatar";
import view from "../../assets/ver.png"
import { useState } from "react";


const Card = ({ blog, showContent = true, w, h, flex, mb, imgh, imgmargin, padd, centerText, href, className, bigCard }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div className={`w-full ${w} ${h} ${mb} ${flex} ${className} bg-white rounded-xl shadow-custom p-4 transition transform lg:hover:-translate-y-2 lg:hover:-translate-x-2 lg:hover:scale-105`}>
      <LazyLoad className="md:pb-0 pb-4" offset={100}>
        <Link aria-label="Leer el artículo completo." to={href}>
          <img
            src={blog.imagen}
            alt="imagenes de portada de las tarjetas que representan cada post del blog"
            className={`bg-cover object-cover w-full rounded-lg ${imgh} ${imgmargin}`}
          />
        </Link>
      </LazyLoad>
      <div className={`font-poppins ${bigCard ? "flex flex-col justify-between min-h-[180px]" : ""} ${padd} ${centerText} min-w-[280px] `}>
        <div className="w-full">
          <div className="flex items-center w-full">

            <div className="flex items-center  gap-2">
              <span className="text-[#888] tracking-wider font-semibold  text-xs">{new Date(blog.timeData).toLocaleDateString()}</span>
              <span className="text-[#888] font-semibold text-xs">—</span>
              <div className="relative"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              >
                <img className="h-[18px]" src={view} alt="Vistas" />
                {showTooltip && (
                <div className="bg-black text-[#888] text-xs rounded py-1 px-2 text-center mt-1 opacity-100 absolute w-16  left-6 transform -translate-x-1/2 pointer-events-none transition-opacity duration-300">
                  {blog?.view} vistas
                </div>
                )}
              </div>
              <span className="text-[#888] font-semibold text-xs">{blog?.view}</span>
            </div>

          </div>
        </div>
        <Link to={href}>
          <h2 className="text-lg tracking-wide font-bold capitalize pt-2 leading-6 ">{truncateText(blog.titulo, 50)}</h2>
        </Link>
        {showContent && (
          <p className="font-normal  text-sm text-[#888] pt-2" dangerouslySetInnerHTML={{ __html: truncateText(blog.contenido, 150) }}></p>
        )}
        <div className=" py-4 flex  items-center justify-between">
          <div className="  rounded-xl text-center bg-[#f79a185b] drop-shadow-lg  items-center px-2">
            <span className="text-[#222]  font-semibold uppercase  text-xs">{blog.categoria} </span>
          </div>
          <div className="flex items-center  gap-1">
            <Avatar wh={"h-7 w-7"} src={blog.autorImg} />
            <p className=" px-2 font-poppins tracking-wider capitalize font-normal drop-shadow-lg hover:text-[#fec171] hover:-translate-y-0.5 transition-all duration-300">{blog.autor}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;