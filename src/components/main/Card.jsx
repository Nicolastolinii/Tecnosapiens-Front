import { Link } from "react-router-dom";
import truncateText from "../../utils/truncateText";

const Card = ({ blog, showContent= true, w,flex,mb,imgh,imgmargin, padd ,centerText, href}) => {
    return (
      <div className={`w-full ${w} ${mb} ${flex}`}>
        <Link to={href}>
          <img className={`w-full rounded-lg ${imgh}  ${imgmargin}`} src={`data:image;base64,${blog.imagen}`} alt={blog.title} />
        </Link>
        <div className={`font-openSans ${padd} ${centerText}  min-w-[280px]`}>
          <div>
          <span className="text-[#222] font-semibold text-sm">Etiqueta </span>
          <span className="text-[#888] font-normal text-sm">— July 2, 2020</span>
          </div>
          <Link href={href}>
            <h2 className="text-lg font-bold leading-6 ">{blog.titulo}</h2>
          </Link>
          {showContent && (
          <p className="font-normal text-sm text-[#888] pt-4"dangerouslySetInnerHTML={{ __html: truncateText(blog.contenido, 100) }}></p>
        )}
        </div>
      </div>
    );
  };
  
  export default Card;