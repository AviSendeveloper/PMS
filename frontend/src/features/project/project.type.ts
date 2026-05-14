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

// project board
export type BoardColumn = {
  id: string;
  label: string;
  status: string;
};

export interface BoardIssue {
  id: number;
  ident: string;
  title: string;
  priority: string;
  status: string;
  labels: string[];
  assignee: string;
  due: string;
  overdue: boolean;
  subtasks?: string;
  typing?: boolean;
};

// members
export type ProjectMember = {
  id: number;
  name: string;
  email: string;
  prole: string;
  initials: string;
  assigned: number;
  added: string;
};

//sprint backlog
export type Backlog = {
  id: string;
  name: string;
  status: string;
  dates: string;
  issues: BacklogIssue[];
}

export type BacklogIssue = Omit<BoardIssue, 'labels' | 'overdue'> & {
  overdue?: boolean;
  labels?: string[];
  points: number;
  type: string;
}
