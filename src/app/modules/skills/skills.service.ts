import { TSkills } from "./skills.interface"
import { SkillsModel } from "./skills.model"


const addSkillIntoDB = (payload: TSkills) => {
    const result = SkillsModel.create(payload)
    return result
}

const getAllSkillsFromDB = async () => {
    const result = SkillsModel.find()
    return result
}


const getSingleSkillFromDB = async (id: string) => {
    console.log(id)
    const result = SkillsModel.findById(id)
    return result
}

export const SkillService = {
    addSkillIntoDB,
    getAllSkillsFromDB,
    getSingleSkillFromDB
}