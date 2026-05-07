import type { QueueStatuses, QueueStatus } from '../../workspace.type'

const DashboardQueue = ({ data: queueStatus }: { data: QueueStatuses }) => {
    const renderQueues = (queueStatus: QueueStatuses) => {
        return queueStatus.map((queue: QueueStatus) => {
            return <div className="queue-row">
                <div className="queue-name">{queue.name}</div>
                <div className="queue-status" style={{ color: `${queue.active > 0 ? "var(--warning)" : "var(--success)"}` }}>{queue.status} {queue.active > 0 ? '· ' + queue.active + ' active' : ''}</div>
            </div>

        })
    }
    return (
        <div className="card-pms admin-only" id="queueCard">
            <div className="card-section-head">
                <span>Job Queue Status</span>
                <a href="admin-bull-board.html">View All</a>
            </div>
            <div id="queueStatus">
                {renderQueues(queueStatus)}
            </div>
        </div>
    )
}

export default DashboardQueue