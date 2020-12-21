import { Link } from "react-router-dom";

export function Header() {
    return (
        <div className="main-header">
            {/* Logo Header */}
            <div className="logo-header" data-background-color="dark2">
                <Link to="/" className="logo">
                    <img src="https://via.placeholder.com/100x35" alt="navbar brand" className="navbar-brand" />
                </Link>
                <button className="navbar-toggler sidenav-toggler ml-auto" type="button" data-toggle="collapse" data-target="collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        <i className="icon-menu" />
                    </span>
                </button>
                <button className="topbar-toggler more">
                    <i className="icon-options-vertical" />
                </button>
                <div className="nav-toggle">
                    <button className="btn btn-toggle toggle-sidebar">
                        <i className="icon-menu" />
                    </button>
                </div>
            </div>
            {/* End Logo Header */}
            {/* Navbar Header */}
            <nav className="navbar navbar-header navbar-expand-lg" data-background-color="dark">
                <div className="container-fluid">
                    <div className="collapse" id="search-nav">
                        <form className="navbar-left navbar-form nav-search mr-md-3">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <button type="submit" className="btn btn-search pr-1">
                                        <i className="fa fa-search search-icon" />
                                    </button>
                                </div>
                                <input type="text" placeholder="Search ..." className="form-control" />
                            </div>
                        </form>
                    </div>
                    <ul className="navbar-nav topbar-nav ml-md-auto align-items-center">
                        <li className="nav-item toggle-nav-search hidden-caret">
                            <a className="nav-link" data-toggle="collapse" href="#search-nav" role="button" aria-expanded="false" aria-controls="search-nav">
                                <i className="fa fa-search" />
                            </a>
                        </li>
                        <li className="nav-item dropdown hidden-caret">
                            <a className="nav-link dropdown-toggle" href="#" id="messageDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-envelope" />
                            </a>
                            <ul className="dropdown-menu messages-notif-box animated fadeIn" aria-labelledby="messageDropdown">
                                <li>
                                    <div className="dropdown-title d-flex justify-content-between align-items-center">
                                        Messages
                                        <a href="#" className="small">
                                            Mark all as read
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="message-notif-scroll scrollbar-outer">
                                        <div className="notif-center">
                                            <a href="#">
                                                <div className="notif-img">
                                                    <img src="https://via.placeholder.com/50" alt="Img Profile" />
                                                </div>
                                                <div className="notif-content">
                                                    <span className="subject">Jimmy Denis</span>
                                                    <span className="block">How are you ?</span>
                                                    <span className="time">5 minutes ago</span>
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div className="notif-img">
                                                    <img src="https://via.placeholder.com/50" alt="Img Profile" />
                                                </div>
                                                <div className="notif-content">
                                                    <span className="subject">Chad</span>
                                                    <span className="block">Ok, Thanks !</span>
                                                    <span className="time">12 minutes ago</span>
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div className="notif-img">
                                                    <img src="https://via.placeholder.com/50" alt="Img Profile" />
                                                </div>
                                                <div className="notif-content">
                                                    <span className="subject">Jhon Doe</span>
                                                    <span className="block">Ready for the meeting today...</span>
                                                    <span className="time">12 minutes ago</span>
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div className="notif-img">
                                                    <img src="https://via.placeholder.com/50" alt="Img Profile" />
                                                </div>
                                                <div className="notif-content">
                                                    <span className="subject">Talha</span>
                                                    <span className="block">Hi, Apa Kabar ?</span>
                                                    <span className="time">17 minutes ago</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a className="see-all" href="javascript:void(0);">
                                        See all messages
                                        <i className="fa fa-angle-right" />{" "}
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown hidden-caret">
                            <a className="nav-link dropdown-toggle" href="#" id="notifDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-bell" />
                                <span className="notification">4</span>
                            </a>
                            <ul className="dropdown-menu notif-box animated fadeIn" aria-labelledby="notifDropdown">
                                <li>
                                    <div className="dropdown-title">You have 4 new notification</div>
                                </li>
                                <li>
                                    <div className="notif-scroll scrollbar-outer">
                                        <div className="notif-center">
                                            <a href="#">
                                                <div className="notif-icon notif-primary">
                                                    {" "}
                                                    <i className="fa fa-user-plus" />{" "}
                                                </div>
                                                <div className="notif-content">
                                                    <span className="block">New user registered</span>
                                                    <span className="time">5 minutes ago</span>
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div className="notif-icon notif-success">
                                                    {" "}
                                                    <i className="fa fa-comment" />{" "}
                                                </div>
                                                <div className="notif-content">
                                                    <span className="block">Rahmad commented on Admin</span>
                                                    <span className="time">12 minutes ago</span>
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div className="notif-img">
                                                    <img src="https://via.placeholder.com/50" alt="Img Profile" />
                                                </div>
                                                <div className="notif-content">
                                                    <span className="block">Reza send messages to you</span>
                                                    <span className="time">12 minutes ago</span>
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div className="notif-icon notif-danger">
                                                    {" "}
                                                    <i className="fa fa-heart" />{" "}
                                                </div>
                                                <div className="notif-content">
                                                    <span className="block">Farrah liked Admin</span>
                                                    <span className="time">17 minutes ago</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a className="see-all" href="javascript:void(0);">
                                        See all notifications
                                        <i className="fa fa-angle-right" />{" "}
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown hidden-caret">
                            <a className="nav-link" data-toggle="dropdown" href="#" aria-expanded="false">
                                <i className="fas fa-layer-group" />
                            </a>
                            <div className="dropdown-menu quick-actions quick-actions-info animated fadeIn">
                                <div className="quick-actions-header">
                                    <span className="title mb-1">Quick Actions</span>
                                    <span className="subtitle op-8">Shortcuts</span>
                                </div>
                                <div className="quick-actions-scroll scrollbar-outer">
                                    <div className="quick-actions-items">
                                        <div className="row m-0">
                                            <a className="col-6 col-md-4 p-0" href="#">
                                                <div className="quick-actions-item">
                                                    <div className="avatar-item bg-danger rounded-circle">
                                                        <i className="far fa-calendar-alt" />
                                                    </div>
                                                    <span className="text">Calendar</span>
                                                </div>
                                            </a>
                                            <a className="col-6 col-md-4 p-0" href="#">
                                                <div className="quick-actions-item">
                                                    <div className="avatar-item bg-warning rounded-circle">
                                                        <i className="fas fa-map" />
                                                    </div>
                                                    <span className="text">Maps</span>
                                                </div>
                                            </a>
                                            <a className="col-6 col-md-4 p-0" href="#">
                                                <div className="quick-actions-item">
                                                    <div className="avatar-item bg-info rounded-circle">
                                                        <i className="fas fa-file-excel" />
                                                    </div>
                                                    <span className="text">Reports</span>
                                                </div>
                                            </a>
                                            <a className="col-6 col-md-4 p-0" href="#">
                                                <div className="quick-actions-item">
                                                    <div className="avatar-item bg-success rounded-circle">
                                                        <i className="fas fa-envelope" />
                                                    </div>
                                                    <span className="text">Emails</span>
                                                </div>
                                            </a>
                                            <a className="col-6 col-md-4 p-0" href="#">
                                                <div className="quick-actions-item">
                                                    <div className="avatar-item bg-primary rounded-circle">
                                                        <i className="fas fa-file-invoice-dollar" />
                                                    </div>
                                                    <span className="text">Invoice</span>
                                                </div>
                                            </a>
                                            <a className="col-6 col-md-4 p-0" href="#">
                                                <div className="quick-actions-item">
                                                    <div className="avatar-item bg-secondary rounded-circle">
                                                        <i className="fas fa-credit-card" />
                                                    </div>
                                                    <span className="text">Payments</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link quick-sidebar-toggler">
                                <i className="fa fa-th" />
                            </a>
                        </li>
                        <li className="nav-item dropdown hidden-caret">
                            <a className="dropdown-toggle profile-pic" data-toggle="dropdown" href="#" aria-expanded="false">
                                <div className="avatar-sm">
                                    <img src="https://via.placeholder.com/50" alt="..." className="avatar-img rounded-circle" />
                                </div>
                            </a>
                            <ul className="dropdown-menu dropdown-user animated fadeIn">
                                <div className="dropdown-user-scroll scrollbar-outer">
                                    <li>
                                        <div className="user-box">
                                            <div className="avatar-lg">
                                                <img src="https://via.placeholder.com/50" alt="image profile" className="avatar-img rounded" />
                                            </div>
                                            <div className="u-text">
                                                <h4>Hizrian</h4>
                                                <p className="text-muted">hello@example.com</p>
                                                <a href="profile.html" className="btn btn-xs btn-secondary btn-sm">
                                                    View Profile
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">
                                            My Profile
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            My Balance
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Inbox
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">
                                            Account Setting
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">
                                            Logout
                                        </a>
                                    </li>
                                </div>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* End Navbar */}
        </div>
    );
}
