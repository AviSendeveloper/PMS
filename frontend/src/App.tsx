import "./App.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const IssueDetailsPage = lazy(
  () => import("./features/issue/pages/IssueDetailsPage"),
);
const SprintPage = lazy(() => import("./features/sprint/pages/SprintPage"));
const SprintDetailsPage = lazy(
  () => import("./features/sprint/pages/SprintDetailsPage"),
);
const ProjectSettingPage = lazy(
  () => import("./features/project/pages/ProjectSettingPage"),
);
const ProjectPage = lazy(() => import("./features/project/pages/ProjectPage"));
const ProjectBacklogPage = lazy(
  () => import("./features/project/pages/ProjectBacklogPage"),
);
const ProjectMemberPage = lazy(
  () => import("./features/project/pages/ProjectMemberPage"),
);
const ProjectLabelPage = lazy(
  () => import("./features/project/pages/ProjectLabelPage"),
);
const AuditLog = lazy(() => import("./features/admin/pages/AuditLog"));
const BullBoard = lazy(() => import("./features/admin/pages/BullBoard"));
const ProfilePage = lazy(() => import("./features/profile/pages/ProfilePage"));
const Layout = lazy(() => import("./components/layout/Layout"));
const RegisterPage = lazy(() => import("./features/auth/pages/RegisterPage"));
const LoginPage = lazy(() => import("./features/auth/pages/LoginPage"));
const CreateWorkspacePage = lazy(
  () => import("./features/auth/pages/CreateWorkspacePage"),
);
const AcceptInvitePage = lazy(
  () => import("./features/auth/pages/AcceptInvitePage"),
);
const MemberPage = lazy(() => import("./features/workspace/pages/MemberPage"));
const LabelPage = lazy(() => import("./features/workspace/pages/LabelPage"));
const SettingPage = lazy(
  () => import("./features/workspace/pages/SettingPage"),
);
const WebhookPage = lazy(
  () => import("./features/workspace/pages/WebhookPage"),
);
const Dashboard = lazy(() => import("./features/workspace/pages/Dashboard"));
const NotificationPage = lazy(
  () => import("./features/notification/pages/NotificationPage"),
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/create-workspace" element={<CreateWorkspacePage />} />
        <Route path="/accept-invite" element={<AcceptInvitePage />} />

        <Route element={<Layout />}>
          {/* workspace */}
          <Route path="/workspace">
            <Route index path="dashboard" element={<Dashboard />} />
            <Route path="members" element={<MemberPage />} />
            <Route path="lebels" element={<LabelPage />} />
            <Route path="settings" element={<SettingPage />} />
            <Route path="webhooks" element={<WebhookPage />} />
          </Route>

          {/* profile */}
          <Route path="/profile" element={<ProfilePage />} />

          {/* admin */}
          <Route path="/admin">
            <Route index path="bull-board" element={<BullBoard />} />
            <Route path="audit-log" element={<AuditLog />} />
          </Route>

          {/* notification */}
          <Route path="/notification" element={<NotificationPage />} />

          {/* project */}
          <Route path="/project">
            <Route index element={<ProjectPage />} />
            <Route path="settings" element={<ProjectSettingPage />} />
            <Route path="labels" element={<ProjectLabelPage />} />
            <Route path="members" element={<ProjectMemberPage />} />

            {/* sprint */}
            <Route path="sprint">
              <Route index element={<SprintPage />} />
              <Route path="details" element={<SprintDetailsPage />} />
            </Route>

            {/* issue */}
            <Route path="issue">
              <Route path="details" element={<IssueDetailsPage />} />
            </Route>

            {/* backlog */}
            <Route path="backlog" element={<ProjectBacklogPage />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
