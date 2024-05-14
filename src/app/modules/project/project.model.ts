import { Schema, model } from "mongoose";
import { TProject, TTechnology } from "./project.interface";

const TechnologySchema = new Schema<TTechnology>({
    value: { type: String, required: true },
    label: { type: String, required: true }
});

const ProjectSchema = new Schema<TProject>({
    name: { type: String, required: true },
    image: { type: String, required: [true, 'Image is required'] },
    category: { type: String, required: true },
    description: { type: String, required: true },
    technologies: { type: [TechnologySchema], required: true },
    liveUrl: { type: String, required: true },
    clientCode: { type: String },
    serverCode: { type: String }
});

const ProjectModel = model<TProject>('Project', ProjectSchema);

export default ProjectModel;