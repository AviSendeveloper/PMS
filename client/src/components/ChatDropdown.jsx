import React, { useRef, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";

const ChatDropdown = () => {
  const [isChatDropdownOpen, setIsChatDropdownOpen] = useState(false);
  const chatRef = useRef(null);

  useClickOutside(chatRef, () => setIsChatDropdownOpen(false));

  return (
    <li className="nav-item dropdown">
      <div
        className="nav-link"
        data-toggle="dropdown"
        onClick={() => setIsChatDropdownOpen((prev) => !prev)}
        ref={chatRef}
      >
        <i className="far fa-comments"></i>
        <span className="badge badge-danger navbar-badge">3</span>
      </div>
      {isChatDropdownOpen && (
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right show">
          <a href="#" className="dropdown-item">
            {/* Message Start */}
            <div className="media">
              <img
                src="/dist/img/user1-128x128.jpg"
                alt="User Avatar"
                className="img-size-50 mr-3 img-circle"
              />
              <div className="media-body">
                <h3 className="dropdown-item-title">
                  Brad Diesel
                  <span className="float-right text-sm text-danger">
                    <i className="fas fa-star"></i>
                  </span>
                </h3>
                <p className="text-sm">Call me whenever you can...</p>
                <p className="text-sm text-muted">
                  <i className="far fa-clock mr-1"></i> 4 Hours Ago
                </p>
              </div>
            </div>
            {/* Message End */}
          </a>
          <div className="dropdown-divider"></div>
          <a href="#" className="dropdown-item">
            {/* Message Start */}
            <div className="media">
              <img
                src="/dist/img/user8-128x128.jpg"
                alt="User Avatar"
                className="img-size-50 img-circle mr-3"
              />
              <div className="media-body">
                <h3 className="dropdown-item-title">
                  John Pierce
                  <span className="float-right text-sm text-muted">
                    <i className="fas fa-star"></i>
                  </span>
                </h3>
                <p className="text-sm">I got your message bro</p>
                <p className="text-sm text-muted">
                  <i className="far fa-clock mr-1"></i> 4 Hours Ago
                </p>
              </div>
            </div>
            {/* Message End */}
          </a>
          <div className="dropdown-divider"></div>
          <a href="#" className="dropdown-item">
            {/* Message Start */}
            <div className="media">
              <img
                src="/dist/img/user3-128x128.jpg"
                alt="User Avatar"
                className="img-size-50 img-circle mr-3"
              />
              <div className="media-body">
                <h3 className="dropdown-item-title">
                  Nora Silvester
                  <span className="float-right text-sm text-warning">
                    <i className="fas fa-star"></i>
                  </span>
                </h3>
                <p className="text-sm">The subject goes here</p>
                <p className="text-sm text-muted">
                  <i className="far fa-clock mr-1"></i> 4 Hours Ago
                </p>
              </div>
            </div>
            {/* Message End */}
          </a>
          <div className="dropdown-divider"></div>
          <a href="#" className="dropdown-item dropdown-footer">
            See All Messages
          </a>
        </div>
      )}
    </li>
  );
};

export default ChatDropdown;
