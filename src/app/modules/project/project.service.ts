import { TProject } from "./project.interface";
import ProjectModel from "./project.model";

const addProjectIntoDB = (payload: TProject) => {
    const result = ProjectModel.create(payload)
    return result
}

const getAllProjectsFromDB = async () => {
    const result = ProjectModel.find()
    return result
}


const getSingleProjectFromDB = async (id: string) => {
    const result = ProjectModel.findById(id)
    return result
}

export const ProjectService = {
    addProjectIntoDB,
    getAllProjectsFromDB,
    getSingleProjectFromDB
}