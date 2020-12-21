import { Link } from "react-router-dom";

export function Sidebar() {
    return (
        <div className="sidebar sidebar-style-2" data-background-color="dark2">
            <div className="sidebar-wrapper scrollbar scrollbar-inner">
                <div className="sidebar-content">
                    <div className="user">
                        <div className="avatar-sm float-left mr-2">
                            <img src="https://via.placeholder.com/50" alt="..." className="avatar-img rounded-circle" />
                        </div>
                        <div className="info">
                            <a data-toggle="collapse" href="#collapseExample" aria-expanded="true">
                                <span>
                                    Hizrian
                                    <span className="user-level">Administrator</span>
                                    <span className="caret" />
                                </span>
                            </a>
                            <div className="clearfix" />
                            <div className="collapse in" id="collapseExample">
                                <ul className="nav">
                                    <li>
                                        <a href="#profile">
                                            <span className="link-collapse">My Profile</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#edit">
                                            <span className="link-collapse">Edit Profile</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#settings">
                                            <span className="link-collapse">Settings</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <ul className="nav nav-primary">
                        <li className="nav-section">
                            <span className="sidebar-mini-icon">
                                <i className="fa fa-ellipsis-h" />
                            </span>
                            <h4 className="text-section">Components</h4>
                        </li>
                        <li className="nav-item active">
                            <a data-toggle="collapse" href="#base">
                                <i className="fas fa-layer-group" />
                                <p>Base</p>
                                <span className="caret" />
                            </a>
                            <div className="collapse" id="base">
                                <ul className="nav nav-collapse">
                                    <li>
                                        <a href="components/avatars.html">
                                            <span className="sub-item">Avatars</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="components/buttons.html">
                                            <span className="sub-item">Buttons</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="components/gridsystem.html">
                                            <span className="sub-item">Grid System</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="components/panels.html">
                                            <span className="sub-item">Panels</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="components/notifications.html">
                                            <span className="sub-item">Notifications</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="components/sweetalert.html">
                                            <span className="sub-item">Sweet Alert</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="components/lists.html">
                                            <span className="sub-item">Lists</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="components/owl-carousel.html">
                                            <span className="sub-item">Owl Carousel</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="components/magnific-popup.html">
                                            <span className="sub-item">Magnific Popup</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="components/font-awesome-icons.html">
                                            <span className="sub-item">Font Awesome Icons</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="components/simple-line-icons.html">
                                            <span className="sub-item">Simple Line Icons</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="components/flaticons.html">
                                            <span className="sub-item">Flaticons</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="components/typography.html">
                                            <span className="sub-item">Typography</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a data-toggle="collapse" href="#sidebarLayouts">
                                <i className="fas fa-th-list" />
                                <p>Management</p>
                                <span className="caret" />
                            </a>
                            <div className="collapse" id="sidebarLayouts">
                                <ul className="nav nav-collapse">
                                    <li>
                                        <Link to="/user-list">
                                            <span className="sub-item">Users</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <a href="department-list.html">
                                            <span className="sub-item">Departments</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a data-toggle="collapse" href="#forms">
                                <i className="fas fa-pen-square" />
                                <p>Forms</p>
                                <span className="caret" />
                            </a>
                            <div className="collapse" id="forms">
                                <ul className="nav nav-collapse">
                                    <li>
                                        <a href="forms/forms.html">
                                            <span className="sub-item">Basic Form</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="forms/formvalidation.html">
                                            <span className="sub-item">Form Validation</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="forms/formwidget.html">
                                            <span className="sub-item">Form Widget</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="forms/formwizard.html">
                                            <span className="sub-item">Form Wizard</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="forms/formupload.html">
                                            <span className="sub-item">Multiple Upload</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="forms/formwysiwyg.html">
                                            <span className="sub-item">WYSIWYG Editor</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a data-toggle="collapse" href="#tables">
                                <i className="fas fa-table" />
                                <p>Tables</p>
                                <span className="caret" />
                            </a>
                            <div className="collapse" id="tables">
                                <ul className="nav nav-collapse">
                                    <li>
                                        <a href="tables/tables.html">
                                            <span className="sub-item">Basic Table</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="tables/datatables.html">
                                            <span className="sub-item">Datatables</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a data-toggle="collapse" href="#maps">
                                <i className="fas fa-map-marker-alt" />
                                <p>Maps</p>
                                <span className="caret" />
                            </a>
                            <div className="collapse" id="maps">
                                <ul className="nav nav-collapse">
                                    <li>
                                        <a href="maps/googlemaps.html">
                                            <span className="sub-item">Google Maps</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="maps/fullscreenmaps.html">
                                            <span className="sub-item">Full Screen Maps</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="maps/jqvmap.html">
                                            <span className="sub-item">JQVMap</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a data-toggle="collapse" href="#charts">
                                <i className="far fa-chart-bar" />
                                <p>Charts</p>
                                <span className="caret" />
                            </a>
                            <div className="collapse" id="charts">
                                <ul className="nav nav-collapse">
                                    <li>
                                        <a href="charts/charts.html">
                                            <span className="sub-item">Chart Js</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="charts/sparkline.html">
                                            <span className="sub-item">Sparkline</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
