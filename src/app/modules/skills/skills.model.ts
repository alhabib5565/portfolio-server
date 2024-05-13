import { Schema, model } from "mongoose";
import { TSkills } from "./skills.interface";


const skillsSchema = new Schema<TSkills>({
    name: {
        type: String,
        required: true,
        unique: true
    },
    expertiseLavel: {
        type: String,
        required: true,
    }
})

export const SkillsModel = model('Skill', skillsSchema)