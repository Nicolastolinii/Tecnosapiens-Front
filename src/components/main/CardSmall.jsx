import Card from "./Card";
import "./style.css"


export const CardSmall = ({ data }) => {
  const latestBlogs = data ? data.slice(-6).reverse() : [];
  return (
    <div>
      <div className="flex items-center container pt-28 pb-10 px-16">
        <h2 className="font-openSans font-semibold pr-4 text-4xl">Ultimos Artículos</h2>
        <hr className=" border-t-2 border-[#f79a185b]  w-[18rem]" />
        
      </div>
      <div className="container gap-14 flex-col lg:flex-row items-center flex flex-wrap px-16 ">
        {latestBlogs.map((blog) => (
          <Card key={blog.id} blog={blog} href={`blog/${blog.id}`} w={"max-width-calc"} flex={"flex"} showContent={false} imgh={"h-[100px] min-w-[170px] "} padd={"pl-[15px]"} centerText={"flex flex-col justify-center"} />
        ))}
      </div>
    </div>
  )
}
