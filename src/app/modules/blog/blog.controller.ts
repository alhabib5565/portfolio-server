import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import httpStatus from 'http-status-codes';
import { BlogService } from "./blog.service";

const addBlog = catchAsync(async (req, res) => {
    const blogInfo = req.body
    const result = await BlogService.addBlogIntoDB(blogInfo)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'blog create succesfull',
        data: result
    })
})
const getAllBlogs = catchAsync(async (req, res) => {
    const result = await BlogService.getAllBlogsFromDB()

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'blogs retrived succesfull',
        data: result
    })
})
const getSingleBlogs = catchAsync(async (req, res) => {
    const id = req.params.id
    const result = await BlogService.getSingleBlogFromDB(id)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'blogs retrived succesfull',
        data: result
    })
})

export const BlogController = {
    addBlog,
    getAllBlogs,
    getSingleBlogs
}