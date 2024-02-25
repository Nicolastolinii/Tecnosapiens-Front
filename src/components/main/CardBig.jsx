
import Card from "./Card";


export const CardBig = ({ data }) => {
  const latestBlogs = data ? data.slice(-6).reverse() : [];
  return (
    <div>
      <div className="flex items-center justify-center container pt-[10rem] pb-6  lg:px-16">
        <hr className=" border-t-2 border-[#f79a185b]  w-[18rem]" />
        <h2 className="font-openSans font-semibold px-2  text-4xl">Destacados</h2>
        <hr className=" border-t-2 border-[#f79a185b]  w-[18rem]" />
      </div>
      <div className="container gap-14 flex-col lg:flex-row  flex flex-wrap lg:px-16 pt-10">
        {latestBlogs.map((blog) => (
          <Card key={blog.id} href={`blog/${blog.id}`} blog={blog} w={"md:w-[48%] lg:w-[30%]"} mb={"mb-14"} flex={false} imgh={"h-[250px] min-w-[280px]"} imgmargin={"mb-[30px]"} />
        ))}
      </div>
    </div>
  );
};

