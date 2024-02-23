
import Card from "./Card";


export const CardBig = ({data}) => {
  const latestBlogs = data ? data.slice(-6).reverse() : [];
    return (
        <div className="container gap-14 flex-col lg:flex-row  flex flex-wrap lg:px-16 pt-28">
          {latestBlogs.map((blog) => (
            <Card key={blog.id} href={`blog/${blog.id}`} blog={blog} w={"md:w-[48%] lg:w-[30%]"} mb={"mb-14"} flex={false} imgh={"h-[250px] min-w-[280px]"} imgmargin={"mb-[30px]"} />
          ))}
        </div>
      );
};

