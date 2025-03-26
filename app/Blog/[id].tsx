// 'use client'
// import {useRouter} from "next/router";
// import PostData from "../../lib/data/postData.json"

// const BlogDetails = () => {
//     const router = useRouter();
//     const {id} = router.query;

//     const blog = PostData.find((b) => b.id.toString() === (id as string));

//     if (!blog) {
//         return <h1 className="text-red-500 text-center">No blog oo </h1>
//     }
//   return (
//     <div className="p-6">
//         <h1 className="text-3xl font-bold">{blog.title}</h1>
//     </div>
//   )
// }

// export default BlogDetails;