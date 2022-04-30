import { Education } from './education';

export interface EducationFormData {
  isUpdateMode: boolean;
  educationToUpdate?: Education;
  idToCreate?: number;
}
