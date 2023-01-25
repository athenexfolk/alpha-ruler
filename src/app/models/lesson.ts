import { Content } from "./content";

export interface Lesson {
    id: string;
    name_th: string;
    name_en: string;
    content: Content[];
}