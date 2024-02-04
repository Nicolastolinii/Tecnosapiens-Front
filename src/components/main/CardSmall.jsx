import Card from "./Card";


const blogs = [
    { id: 1, title: 'Your most unhappy customers are your greatest source of learning.', image: 'https://preview.colorlib.com/theme/magdesign/images/img_2.jpg', content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' },
    { id: 2, title: 'Your most unhappy customers are your greatest source of learning.', image: 'https://preview.colorlib.com/theme/magdesign/images/img_3.jpg', content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' },
    { id: 3, title: 'Your most unhappy customers are your greatest source of learning.', image: 'https://preview.colorlib.com/theme/magdesign/images/img_4.jpg', content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' },
    { id: 4, title: 'Your most unhappy customers are your greatest source of learning.', image: 'https://preview.colorlib.com/theme/magdesign/images/img_2.jpg', content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' },
    { id: 5, title: 'Your most unhappy customers are your greatest source of learning.', image: 'https://preview.colorlib.com/theme/magdesign/images/img_3.jpg', content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' },
    { id: 6, title: 'Your most unhappy customers are your greatest source of learning.', image: 'https://preview.colorlib.com/theme/magdesign/images/img_4.jpg', content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' },

];
export const CardSmall = () => {
  return (
    <div className="container gap-14 flex-col lg:flex-row items-center flex flex-wrap lg:px-16 pt-28">
    {blogs.map((blog) => (
      <Card key={blog.id} blog={blog} w={"w-[48%]"} flex={"flex"} showContent={false} imgh={"h-[100px] w-[200px] "}  padd={"pl-[15px]"} centerText={"flex flex-col justify-center"}/>
    ))}
  </div>
  )
}
