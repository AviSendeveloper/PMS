export type Project = {
  id: number;
  ident: string;
  name: string;
  desc: string;
  visibility: string;
  type: string;
  progress: number;
  members: string[];
  issues: number;
  open: number;
  overdue: number;
  updated: string;
  archived: boolean;
};
export type Projects = Project[];
