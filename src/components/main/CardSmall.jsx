import Card from "./Card";
import useFetch from "../../utils/useFetch";


export const CardSmall = ({data}) => {
  const latestBlogs = data ? data.slice(-6).reverse() : [];
  return (
    <div className="container gap-14 flex-col lg:flex-row items-center flex flex-wrap lg:px-16 pt-28">
    {latestBlogs.map((blog) => (
      <Card key={blog.id} blog={blog} w={"w-[45%]"} flex={"flex"} showContent={false} imgh={"h-[100px] min-w-[170px] "}  padd={"pl-[15px]"} centerText={"flex flex-col justify-center"}/>
    ))}
  </div>
  )
}
