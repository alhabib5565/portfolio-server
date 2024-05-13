import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { ProjectService } from "./project.service"
import httpStatus from 'http-status-codes';

const addProject = catchAsync(async (req, res) => {
    const projectInfo = req.body
    const result = await ProjectService.addProjectIntoDB(projectInfo)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'project create succesfull',
        data: result
    })
})
const getAllProjects = catchAsync(async (req, res) => {
    const result = await ProjectService.getAllProjectsFromDB()

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'projects retrived succesfull',
        data: result
    })
})
const getSingleProjects = catchAsync(async (req, res) => {
    const id = req.params.id
    const result = await ProjectService.getSingleProjectFromDB(id)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'projects retrived succesfull',
        data: result
    })
})

export const ProjectController = {
    addProject,
    getAllProjects,
    getSingleProjects
}