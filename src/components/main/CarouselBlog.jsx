import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useFetch from '../../utils/useFetch';
import truncateText from '../../utils/truncateText';



const CarouselBlog = ({data}) => {
  const latestBlogs = data ? data.slice(-4).reverse() : [];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',

  };

  return (
    <Slider {...settings} className=" overflow-hidden relative w-full h-full container lg:px-16">
      {latestBlogs?.map((blog) => (
        <div key={blog.id} className="max-w-full box-border font-openSans">
          <div className="flex flex-col lg:flex-row items-center justify-center h-full">
          <a href={`http://localhost:8080/blog/${blog.id}`}>
              <img src={`data:image;base64,${blog.imagen}`} alt={blog.title} className="lg:w-[28rem] w-full h-auto lg:h-[23rem] rounded-lg" />
            </a>
            <div className="text-black text-left flex w-full flex-col gap-3 lg:pl-[3rem]">
              <div className='font-semibold text-[14px] mb-4'>
                <span className='font-semibold'>{blog.categoria}</span>
                <span className='text-[#999] font-normal'>— {new Date(blog.timeData).toLocaleDateString()}</span>
              </div>
              <h3 className='font-bold text-[30px] lg:text-[40px] leading-10'>{blog.titulo}</h3>
              <p className='font-normal text-[14px] opacity-60'dangerouslySetInnerHTML={{ __html: truncateText(blog.contenido,200) }}></p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default CarouselBlog;