// KPI
export interface KPI {
  type: string;
  label: string;
  value: number;
  sub: string;
  danger?: boolean;
}
export type KPIs = KPI[];

// Activities
export interface Activity {
  name: string;
  action: string;
  entity: string;
  link: string;
  action2: string;
  detail: string;
  time: string;
}
export type Activities = Activity[];

// Invitation
export interface Invitie {
  email: string;
  role: string;
}
export type Invities = Invitie[];

// Sprints
export interface Sprint {
  project: string;
  name: string;
  done: number;
  total: number;
  link: string;
}
export type Sprints = Sprint[];

// Queue Status
export interface QueueStatus {
  name: string;
  active: number;
  status: string;
}
export type QueueStatuses = QueueStatus[];
