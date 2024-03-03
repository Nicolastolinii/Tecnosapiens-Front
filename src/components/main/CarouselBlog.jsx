import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import truncateText from '../../utils/truncateText';
import { Link } from 'react-router-dom';



const CarouselBlog = ({ data }) => {
  const latestBlogs = data ? data.slice(-4).reverse() : [];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: 'linear',

  };

  return (
    <Slider {...settings} className=" overflow-hidden relative w-full h-full container pt-32 lg:px-16 ">
      {latestBlogs?.map((blog) => (
        <div key={blog.id} className="max-w-full box-border font-poppins p-6  ">
          <div className="flex flex-col lg:flex-row items-center justify-center h-full ">
            <Link to={`/blog/${blog.id}`}>
              <img  src={blog.imagen} alt="imagenes de portada de las tarjetas que representan cada post del blog" className="object-cover w-full h-auto lg:h-[23rem] rounded-lg" />
            </Link>
            <div className="text-black text-left flex w-full flex-col gap-3 lg:pl-[3rem]">
              <div className='font-semibold text-[14px] mb-4'>
                <div className="flex items-center">
                  <div className="  rounded-xl text-center bg-[#f79a185b]  items-center px-2">
                    <span className="text-[#222]  font-bold uppercase  text-xs">{blog.categoria.split()} </span>
                  </div>
                  <div>
                    <span className="text-[#888] font-normal pl-1 text-sm">— {new Date(blog.timeData).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              <h3 className='font-bold text-[30px] lg:text-[40px] leading-10'>{blog.titulo}</h3>
              <p className='font-normal text-[14px] opacity-60' dangerouslySetInnerHTML={{ __html: truncateText(blog.contenido, 500) }}></p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default CarouselBlog;