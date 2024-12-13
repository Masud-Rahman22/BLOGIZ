"use client"
import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";
import { Blog } from "@/types";


const AllBlogsPage = () => {
   const {data:blogs, isLoading, isError} = useGetBlogsQuery("")
  return (
    <div>
         <h1 className="text-4xl text-center my-4">All Blogs From <span className="text-accent">Blogiz</span></h1>
         <p className="text-xl text-center w-2/4 mx-auto"><i>Dive into the fascinating world of quantum computing, where unlocking unprecedented computational power.</i></p>

         <div className="grid grid-cols-3 gap-6 mx-6 mt-7">
            {blogs?.map((blog : Blog )=> <BlogCard key={blog.id} blog={blog}/>)}
        </div>
    </div>
  )
}

export default AllBlogsPage