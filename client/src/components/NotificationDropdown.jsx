import React, { useEffect, useRef, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";

const NotificationDropdown = () => {
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] =
    useState(false);
  const notiRef = useRef(null);

  useClickOutside(notiRef, () => setIsNotificationDropdownOpen(false));

  return (
    <li className="nav-item dropdown">
      <div
        className="nav-link"
        data-toggle="dropdown"
        onClick={() => {
          setIsNotificationDropdownOpen((prev) => !prev);
        }}
        ref={notiRef}
      >
        <i className="far fa-bell"></i>
        <span className="badge badge-warning navbar-badge">15</span>
      </div>
      {isNotificationDropdownOpen && (
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right show">
          <span className="dropdown-item dropdown-header">
            15 Notifications
          </span>
          <div className="dropdown-divider"></div>
          <a href="#" className="dropdown-item">
            <i className="fas fa-envelope mr-2"></i> 4 new messages
            <span className="float-right text-muted text-sm">3 mins</span>
          </a>
          <div className="dropdown-divider"></div>
          <a href="#" className="dropdown-item">
            <i className="fas fa-users mr-2"></i> 8 friend requests
            <span className="float-right text-muted text-sm">12 hours</span>
          </a>
          <div className="dropdown-divider"></div>
          <a href="#" className="dropdown-item">
            <i className="fas fa-file mr-2"></i> 3 new reports
            <span className="float-right text-muted text-sm">2 days</span>
          </a>
          <div className="dropdown-divider"></div>
          <a href="#" className="dropdown-item dropdown-footer">
            See All Notifications
          </a>
        </div>
      )}
    </li>
  );
};

export default NotificationDropdown;
