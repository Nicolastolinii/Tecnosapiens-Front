
import Card from "./Card";


export const CardBig = ({ data }) => {
  const latestBlogs = data ? data.slice(-6).reverse() : [];
  return (
    <div>
      <div className="flex items-center justify-center container pt-[10rem] pb-6  lg:px-16">
        <hr className=" border-t-2 border-[#f79a185b]  w-[18rem]" />
        <h2 className=" font-poppins font-semibold px-2  text-4xl">Destacados</h2>
        <hr className=" border-t-2 border-[#f79a185b]  w-[18rem]" />
      </div>
      <div className="container gap-14 flex-col lg:flex-row justify-center items-center  flex flex-wrap lg:px-16 pt-10">
        {latestBlogs.map((blog) => (
          <Card key={blog.id} href={`blog/${blog.id}`} blog={blog} h={"h-[420px]"} w={"md:w-[48%] lg:w-[30%]"} mb={"mb-14"} flex={false} imgh={"h-[200px] lg:h-[230px] min-w-[200px] "} imgmargin={"lg:mb-[30px]"} />
        ))}
      </div>
    </div>
  );
};

