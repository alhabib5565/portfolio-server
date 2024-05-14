import { TBlog } from "./blog.interface"
import { BlogModle } from "./blog.model"


const addBlogIntoDB = (payload: TBlog) => {
    const result = BlogModle.create(payload)
    return result
}

const getAllBlogsFromDB = async () => {
    const result = BlogModle.find()
    return result
}


const getSingleBlogFromDB = async (id: string) => {
    const result = BlogModle.findById(id)
    return result
}

export const BlogService = {
    addBlogIntoDB,
    getAllBlogsFromDB,
    getSingleBlogFromDB
}