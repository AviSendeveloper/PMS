import type {
  Activities,
  Invities,
  KPIs,
  QueueStatuses,
  Sprints,
} from "./workspace.type";

export const kips: KPIs = [
  {
    type: "total_project",
    label: "Total Projects",
    value: 12,
    sub: "2 archived",
  },
  {
    type: "active_member",
    label: "Active Members",
    value: 24,
    sub: "3 invited",
  },
  {
    type: "open_issues",
    label: "Open Issues",
    value: 147,
    sub: "across all projects",
  },
  {
    type: "overdue_issues",
    label: "Overdue Issues",
    value: 8,
    sub: "require attention",
    danger: true,
  },
];

export const activities: Activities = [
  {
    name: "Sarah Chen",
    action: "changed status of",
    entity: "ENG-42 Fix auth bug",
    link: "issue-detail.html",
    action2: "to",
    detail: "In Review",
    time: "2m ago",
  },
  {
    name: "Alex Admin",
    action: "created project",
    entity: "Mobile App v2",
    link: "project-board.html",
    action2: "",
    detail: "",
    time: "15m ago",
  },
  {
    name: "Maria Lopez",
    action: "commented on",
    entity: "ENG-38 User onboarding flow",
    link: "issue-detail.html",
    action2: "",
    detail: "",
    time: "1h ago",
  },
  {
    name: "Tom Singh",
    action: "closed sprint",
    entity: "Sprint 4",
    link: "project-sprint-detail.html",
    action2: "",
    detail: "",
    time: "2h ago",
  },
  {
    name: "Sarah Chen",
    action: "assigned",
    entity: "ENG-45 API rate limiting",
    link: "issue-detail.html",
    action2: "to",
    detail: "Tom Singh",
    time: "3h ago",
  },
  {
    name: "Alex Admin",
    action: "invited",
    entity: "jane@example.com",
    link: "members-workspace.html",
    action2: "as",
    detail: "Manager",
    time: "5h ago",
  },
  {
    name: "Maria Lopez",
    action: "moved",
    entity: "ENG-31 Dashboard redesign",
    link: "issue-detail.html",
    action2: "to",
    detail: "Done",
    time: "6h ago",
  },
  {
    name: "Tom Singh",
    action: "created issue",
    entity: "ENG-46 Performance audit",
    link: "issue-detail.html",
    action2: "",
    detail: "",
    time: "8h ago",
  },
  {
    name: "Sarah Chen",
    action: "started sprint",
    entity: "Sprint 5",
    link: "project-sprint-detail.html",
    action2: "",
    detail: "",
    time: "1d ago",
  },
  {
    name: "Alex Admin",
    action: "archived project",
    entity: "Legacy API",
    link: "project-list.html",
    action2: "",
    detail: "",
    time: "2d ago",
  },
];

export const sprint: Sprints = [
  {
    project: "ENG",
    name: "Sprint 5",
    done: 8,
    total: 14,
    link: "project-sprint-detail.html",
  },
  {
    project: "MKT",
    name: "Q2 Sprint 2",
    done: 3,
    total: 7,
    link: "project-sprint-detail.html",
  },
  {
    project: "DEV",
    name: "Alpha Sprint",
    done: 12,
    total: 12,
    link: "project-sprint-detail.html",
  },
];

export const invities: Invities = [
  { email: "jane@example.com", role: "Manager" },
  { email: "bob@startup.io", role: "Member" },
];

export const queues: QueueStatuses = [
  { name: "EmailQueue", active: 3, status: "✅ Healthy" },
  { name: "ReportQueue", active: 1, status: "⏳ Waiting" },
  { name: "ReminderQueue", active: 0, status: "✅ Idle" },
];

// member page
export const activeMembers = [
  {
    id: 1,
    name: "Alex Admin",
    email: "alex@example.com",
    role: "admin",
    joined: "Jan 10, 2026",
  },
  {
    id: 2,
    name: "Morgan Manager",
    email: "morgan@example.com",
    role: "manager",
    joined: "Jan 15, 2026",
  },
  {
    id: 3,
    name: "Max Member",
    email: "max@example.com",
    role: "member",
    joined: "Feb 2, 2026",
  },
];

export const pendingMembers = [
  {
    id: 1,
    name: "Jane Doe",
    email: "[EMAIL_ADDRESS]",
    role: "manager",
    joined: "Jan 10, 2026",
    invitedBy: "Alex Admin",
    sent: "2 days ago",
  },
];

export const suspendedMembers = [
  {
    id: 1,
    name: "Dan Kelly",
    email: "dan@example.com",
    role: "member",
    joined: "Jan 10, 2026",
  },
];
