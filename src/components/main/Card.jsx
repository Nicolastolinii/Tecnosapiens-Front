
const Card = ({ blog, showContent= true, w,flex,mb,imgh,imgmargin, padd ,centerText}) => {
    return (
      <div className={`w-full ${w} ${mb} ${flex}`}>
        <a href="#">
          <img className={`w-full rounded-lg ${imgh}  ${imgmargin}`} src={blog.image} alt={blog.title} />
        </a>
        <div className={`font-openSans ${padd} ${centerText}  min-w-[280px]`}>
          <div>
          <span className="text-[#222] font-semibold text-sm">Etiqueta </span>
          <span className="text-[#888] font-normal text-sm">— July 2, 2020</span>
          </div>
          <a href="">
            <h2 className="text-lg font-bold leading-6 ">{blog.title}</h2>
          </a>
          {showContent && (
          <p className="font-normal text-sm text-[#888] pt-4">{blog.content}</p>
        )}
        </div>
      </div>
    );
  };
  
  export default Card;