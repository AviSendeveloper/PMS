import classNames from "classnames";
import type { Sprints, Sprint } from "../../workspace.type"

const DashboardSprint = ({ data: sprints }: { data: Sprints }) => {
    const renderSprints = (sprints: Sprints) => {
        return sprints.map((sprint: Sprint) => {
            const pct = Math.round((sprint.done / sprint.total) * 100);
            return <div className="sprint-row">
                <div className="sprint-info">
                    <div className="sprint-name"><span className="mono" style={{ color: 'var(--text-muted)' }}>{sprint.project}</span> · {sprint.name}</div>
                    <div style={{ marginTop: 6 }}><div className="progress-pms"><div className={classNames("progress-fill", { success: pct === 100 })} style={{ width: `${pct}%` }} /></div></div>
                    <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 3 }}>{sprint.done}/{sprint.total} issues · {pct}%</div>
                </div>
                <a href={sprint.link} className="btn-ghost" style={{ fontSize: 12, padding: '4px 8px', whiteSpace: 'nowrap' }}>View →</a>
            </div>

        })
    }

    return (
        <div className="card-pms mb-3">
            <div className="card-section-head">
                <span>Active Sprints</span>
                <a href="project-sprints.html">View all</a>
            </div>
            <div id="sprintList">
                {renderSprints(sprints)}
            </div>
        </div>

    )
}

export default DashboardSprint