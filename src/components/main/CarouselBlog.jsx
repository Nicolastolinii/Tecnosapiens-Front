import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const blogs = [
  { id: 1, title: 'Your most unhappy customers are your greatest source of learning.', image: 'https://preview.colorlib.com/theme/magdesign/images/post_lg_4.jpg', content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.' },
  { id: 2, title: 'Your most unhappy customers are your greatest source of learning.', image: 'https://preview.colorlib.com/theme/magdesign/images/post_lg_4.jpg', content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.' },
  { id: 3, title: 'Your most unhappy customers are your greatest source of learning.', image: 'https://preview.colorlib.com/theme/magdesign/images/post_lg_4.jpg', content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.' },
  { id: 4, title: 'Your most unhappy customers are your greatest source of learning.', image: 'https://preview.colorlib.com/theme/magdesign/images/post_lg_4.jpg', content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.' },
];

const CarouselBlog = () => {
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
      {blogs.map((blog) => (
        <div key={blog.id} className=" max-w-full box-border font-openSans">
          <div className="flex flex-col lg:flex-row items-center justify-center h-full">
            <a href="#">
            <img src={blog.image} alt={blog.title} className="lg:w-[25rem] w-full h-auto lg:h-[23rem] rounded-lg" />
            </a>
            <div className=" text-black text-left  flex w-full flex-col gap-3 lg:pl-[3rem]">
              <div className='font-semibold  text-[14px] mb-4'>
                <span className='font-semibold'>Categoria</span>
                <span className='text-[#999] font-normal'>— Julio 2,2024</span>
              </div>
              <h3 className='font-bold text-[30px] lg:text-[40px] leading-10'>{blog.title}</h3>
              <p className='font-normal text-[14px] opacity-60'>{blog.content}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default CarouselBlog;