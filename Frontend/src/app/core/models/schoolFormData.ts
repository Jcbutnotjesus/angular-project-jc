import { School } from './school';

export interface SchoolFormData {
  isUpdateMode: boolean;
  schoolToUpdate?: School;
  idToCreate?: number;
}
