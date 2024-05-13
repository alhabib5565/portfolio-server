import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import httpStatus from 'http-status-codes';
import { SkillService } from "./skills.service";

const addSkill = catchAsync(async (req, res) => {
    const skillInfo = req.body
    const result = await SkillService.addSkillIntoDB(skillInfo)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'skill create succesfull',
        data: result
    })
})
const getAllSkills = catchAsync(async (req, res) => {
    const result = await SkillService.getAllSkillsFromDB()

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'skills retrived succesfull',
        data: result
    })
})
const getSingleSkills = catchAsync(async (req, res) => {
    const id = req.params.id
    const result = await SkillService.getSingleSkillFromDB(id)

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'skills retrived succesfull',
        data: result
    })
})

export const SkillController = {
    addSkill,
    getAllSkills,
    getSingleSkills
}