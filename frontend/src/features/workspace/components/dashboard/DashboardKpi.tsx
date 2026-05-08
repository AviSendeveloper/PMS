import type { KPI, KPIs } from "../../workspace.type";

const icons: Record<string, string> = {
  total_project: "bi-folder",
  active_member: "bi-people",
  open_issues: "bi-circle-half",
  overdue_issues: "bi-exclamation-triangle",
};

const KPICard = ({ kpiData }: { kpiData: KPI }) => {
  return (
    <div className="col-sm-6 col-xl-3">
      <div className={`kpi-card${kpiData.danger ? " kpi-danger" : ""}`}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <div className="kpi-label">{kpiData.label}</div>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "var(--radius-sm)",
              background:
                '${kpiData.danger?"rgba(248,81,73,.1)":"var(--accent-subtle)"}',
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <i
              className={`bi ${icons[kpiData.type]}`}
              style={{
                color: kpiData.danger ? "var(--danger)" : "var(--accent)",
                fontSize: 16,
              }}
            />
          </div>
        </div>
        <div className="kpi-value">{kpiData.value}</div>
        <div className="kpi-sub">{kpiData.sub}</div>
      </div>
    </div>
  );
};

const DashboardKpi = ({ data }: { data: KPIs }) => {
  const renderKpis = () => {
    return data.map((kpi) => {
      return <KPICard kpiData={kpi} />;
    });
  };

  return (
    <div className="row g-3 mb-4" id="kpiRow">
      {renderKpis()}
    </div>
  );
};

export default DashboardKpi;
