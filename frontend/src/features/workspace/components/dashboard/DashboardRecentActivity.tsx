import type { Activities, Activity } from '../../workspace.type'

const DashboardRecentActivity = ({ data }: { data: Activities }) => {

  const renderActivities = (data: Activities) => {
    return data.map((activity: Activity) => {
      const initials = activity.name.split(' ').map((n: string) => n[0]).join('').toUpperCase();
      return (
        <div className="activity-row">
          <div className="avatar avatar-sm" style={{ flexShrink: 0 }}>{initials}</div>
          <div className="activity-text">
            <span className="activity-name">{activity.name}</span> {activity.action} <a href={activity.link}>{activity.entity}</a>{activity.action2 ? ' ' + activity.action2 + ' <strong>' + activity.detail + '</strong>' : ''}
          </div>
          <div className="activity-time">{activity.time}</div>
        </div>

      )
    })
  }

  return (
    <div className="col-lg-8">
      <div className="card-pms">
        <div className="card-section-head">
          <span>Recent Activity</span>
          <a href="#">View all</a>
        </div>
        <div id="activityFeed" >{renderActivities(data)}</div>
      </div>
    </div>
  )
}

export default DashboardRecentActivity