import React from 'react';

const Sidebar = () => {
    return (
        <div
            id="layout-sidenav"
            className="layout-sidenav sidenav sidenav-vertical bg-white logo-dark"
        >
            {/* Brand demo (see assets/css/demo/demo.css) */}
            <div className="app-brand demo">
                <span className="app-brand-logo demo">
                    <img
                        src="assets/img/logo.png"
                        alt="Brand Logo"
                        className="img-fluid"
                    />
                </span>
                <a
                    href="index.html"
                    className="app-brand-text demo sidenav-text font-weight-normal ml-2"
                >
                    Empire
                </a>
                <a
                    href="javascript:"
                    className="layout-sidenav-toggle sidenav-link text-large ml-auto"
                >
                    <i className="ion ion-md-menu align-middle" />
                </a>
            </div>
            <div className="sidenav-divider mt-0" />
            {/* Links */}
            <ul className="sidenav-inner py-1 ps ps--active-y">
                {/* Dashboards */}
                <li className="sidenav-item">
                    <a
                        href="javascript:"
                        className="sidenav-link sidenav-toggle"
                    >
                        <i className="sidenav-icon feather icon-home" />
                        <div>Dashboards</div>
                        <div className="pl-1 ml-auto">
                            <div className="badge badge-danger">Hot</div>
                        </div>
                    </a>
                    <ul className="sidenav-menu">
                        <li className="sidenav-item">
                            <a href="index.html" className="sidenav-link">
                                <div>Default</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="dashboards_ecommerce.html"
                                className="sidenav-link"
                            >
                                <div>Ecommerce</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="dashboards_analytics.html"
                                className="sidenav-link"
                            >
                                <div>Analytics</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="dashboards_crypto.html"
                                className="sidenav-link"
                            >
                                <div>Crypto</div>
                                <div className="pl-1 ml-auto">
                                    <div className="badge badge-danger">
                                        New
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="dashboards_project.html"
                                className="sidenav-link"
                            >
                                <div>Project</div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="sidenav-item">
                    <a
                        href="javascript:"
                        className="sidenav-link sidenav-toggle"
                    >
                        <i className="sidenav-icon feather icon-layers" />
                        <div>Widgets</div>
                        <div className="pl-1 ml-auto">
                            <div className="badge badge-primary">100+</div>
                        </div>
                    </a>
                    <ul className="sidenav-menu">
                        <li className="sidenav-item">
                            <a href="w-simple.html" className="sidenav-link">
                                <div>Simple</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a href="w-data.html" className="sidenav-link">
                                <div>Data</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a href="w-social.html" className="sidenav-link">
                                <div>Social</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a href="w-chart.html" className="sidenav-link">
                                <div>Chart</div>
                            </a>
                        </li>
                    </ul>
                </li>
                {/* Layouts */}
                <li className="sidenav-divider mb-1" />
                <li className="sidenav-header small font-weight-semibold">
                    Admin Panels
                </li>
                <li className="sidenav-item">
                    <a
                        href="javascript:"
                        className="sidenav-link sidenav-toggle"
                    >
                        <i className="sidenav-icon feather icon-activity" />
                        <div>Hospital</div>
                    </a>
                    <ul className="sidenav-menu">
                        <li className="sidenav-item">
                            <a
                                href="hospital-dashboard.html"
                                className="sidenav-link"
                            >
                                <div>Dashboard</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="hospital-department.html"
                                className="sidenav-link"
                            >
                                <div>Department</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="hospital-doctor.html"
                                className="sidenav-link"
                            >
                                <div>Doctor</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="hospital-patient.html"
                                className="sidenav-link"
                            >
                                <div>Patient</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="hospital-nurse.html"
                                className="sidenav-link"
                            >
                                <div>Nurse</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="hospital-pharmacist.html"
                                className="sidenav-link"
                            >
                                <div>Pharmacist</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="hospital-laboratorie.html"
                                className="sidenav-link"
                            >
                                <div>Laboratory</div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="sidenav-item">
                    <a
                        href="javascript:"
                        className="sidenav-link sidenav-toggle"
                    >
                        <i className="sidenav-icon feather icon-user-check" />
                        <div>Membership</div>
                    </a>
                    <ul className="sidenav-menu">
                        <li className="sidenav-item">
                            <a
                                href="member-dashboard.html"
                                className="sidenav-link"
                            >
                                <div>Dashboard</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="member-mail-template.html"
                                className="sidenav-link"
                            >
                                <div>Email templates</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="member-countries.html"
                                className="sidenav-link"
                            >
                                <div>Country</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="member-coupons.html"
                                className="sidenav-link"
                            >
                                <div>Coupons</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="member-newsletter.html"
                                className="sidenav-link"
                            >
                                <div>Newsletter</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a href="member-user.html" className="sidenav-link">
                                <div>User</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="member-membership.html"
                                className="sidenav-link"
                            >
                                <div>Membership</div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="sidenav-item">
                    <a
                        href="javascript:"
                        className="sidenav-link sidenav-toggle"
                    >
                        <i className="sidenav-icon feather icon-life-buoy" />
                        <div>Helpdesk</div>
                    </a>
                    <ul className="sidenav-menu">
                        <li className="sidenav-item">
                            <a
                                href="help-dashboard.html"
                                className="sidenav-link"
                            >
                                <div>Helpdesk dashboard</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="help-create-ticket.html"
                                className="sidenav-link"
                            >
                                <div>Create ticket</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a href="help-ticket.html" className="sidenav-link">
                                <div>ticket list</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="help-ticket-details.html"
                                className="sidenav-link"
                            >
                                <div>ticket Details</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="help-customer.html"
                                className="sidenav-link"
                            >
                                <div>Customer</div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="sidenav-item">
                    <a
                        href="javascript:"
                        className="sidenav-link sidenav-toggle"
                    >
                        <i className="sidenav-icon feather icon-book" />
                        <div>School</div>
                    </a>
                    <ul className="sidenav-menu">
                        <li className="sidenav-item">
                            <a
                                href="school-dashboard.html"
                                className="sidenav-link"
                            >
                                <div>Dashboard</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="school-student.html"
                                className="sidenav-link"
                            >
                                <div>Student</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="school-parents.html"
                                className="sidenav-link"
                            >
                                <div>Parents</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="school-teacher.html"
                                className="sidenav-link"
                            >
                                <div>Teacher</div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="sidenav-item">
                    <a
                        href="javascript:"
                        className="sidenav-link sidenav-toggle"
                        data-toggle="tooltip"
                        title="Student Information System"
                    >
                        <i className="sidenav-icon feather icon-book" />
                        <div>SIS</div>
                    </a>
                    <ul className="sidenav-menu">
                        <li className="sidenav-item">
                            <a
                                href="sis-dashboard.html"
                                className="sidenav-link"
                            >
                                <div>Dashboard</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a href="sis-leave.html" className="sidenav-link">
                                <div>Leave</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="sis-evaluation.html"
                                className="sidenav-link"
                            >
                                <div>Evaluation</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a href="sis-event.html" className="sidenav-link">
                                <div>Event</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="sis-circular.html"
                                className="sidenav-link"
                            >
                                <div>Circular</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a href="sis-course.html" className="sidenav-link">
                                <div>Course</div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="sidenav-item">
                    <a
                        href="javascript:"
                        className="sidenav-link sidenav-toggle"
                    >
                        <i className="sidenav-icon feather icon-target" />
                        <div>Crypto</div>
                    </a>
                    <ul className="sidenav-menu">
                        <li className="sidenav-item">
                            <a
                                href="crypto-dashboard.html"
                                className="sidenav-link"
                            >
                                <div>Dashboard</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="crypto-exchange.html"
                                className="sidenav-link"
                            >
                                <div>Exchange</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="crypto-wallet.html"
                                className="sidenav-link"
                            >
                                <div>Wallet</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="crypto-transactions.html"
                                className="sidenav-link"
                            >
                                <div>Transactions</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="crypto-history.html"
                                className="sidenav-link"
                            >
                                <div>History</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="crypto-trading.html"
                                className="sidenav-link"
                            >
                                <div>Trading</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="crypto-initial-coin.html"
                                className="sidenav-link"
                            >
                                <div>Initial coin</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="crypto-ico-listing.html"
                                className="sidenav-link"
                            >
                                <div>Ico listing</div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="sidenav-item">
                    <a
                        href="javascript:"
                        className="sidenav-link sidenav-toggle"
                    >
                        <i className="sidenav-icon feather icon-shopping-cart" />
                        <div>E-Commerce</div>
                    </a>
                    <ul className="sidenav-menu">
                        <li className="sidenav-item">
                            <a
                                href="ecom-product.html"
                                className="sidenav-link"
                            >
                                <div>Product</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="ecom-product-details.html"
                                className="sidenav-link"
                            >
                                <div>Product details</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a href="ecom-order.html" className="sidenav-link">
                                <div>Order</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="ecom-checkout.html"
                                className="sidenav-link"
                            >
                                <div>Checkout</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a href="ecom-cart.html" className="sidenav-link">
                                <div>Shopping Cart</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="ecom-customers.html"
                                className="sidenav-link"
                            >
                                <div>Customers</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="ecom-sellers.html"
                                className="sidenav-link"
                            >
                                <div>Sellers</div>
                            </a>
                        </li>
                    </ul>
                </li>
                {/* Layouts */}
                <li className="sidenav-divider mb-1" />
                <li className="sidenav-header small font-weight-semibold">
                    UI Components
                </li>
                <li className="sidenav-item">
                    <a href="typography.html" className="sidenav-link">
                        <i className="sidenav-icon feather icon-type" />
                        <div>Typography</div>
                    </a>
                </li>
                {/* UI elements */}
                <li className="sidenav-item">
                    <a
                        href="javascript:"
                        className="sidenav-link sidenav-toggle"
                    >
                        <i className="sidenav-icon feather icon-box" />
                        <div>Basic UI</div>
                    </a>
                    <ul className="sidenav-menu">
                        <li className="sidenav-item">
                            <a href="bui_alert.html" className="sidenav-link">
                                <div>Alerts</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="bui_accordion.html"
                                className="sidenav-link"
                            >
                                <div>Accordion</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a href="bui_badges.html" className="sidenav-link">
                                <div>Badges</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a href="bui_button.html" className="sidenav-link">
                                <div>Buttons</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="bui_button-groups.html"
                                className="sidenav-link"
                            >
                                <div>Button groups</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a href="bui_cards.html" className="sidenav-link">
                                <div>Cards</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="bui_dropdowns.html"
                                className="sidenav-link"
                            >
                                <div>Dropdowns</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a href="bui_modals.html" className="sidenav-link">
                                <div>Modals</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a href="bui_navs.html" className="sidenav-link">
                                <div>Navs [ Tabs ]</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="bui_pagination.html"
                                className="sidenav-link"
                            >
                                <div>Pagination and breadcrumbs</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="bui_progress.html"
                                className="sidenav-link"
                            >
                                <div>Progress bars</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="bui_tooltips.html"
                                className="sidenav-link"
                            >
                                <div>Tooltips and popovers</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="bui_thumbnails.html"
                                className="sidenav-link"
                            >
                                <div>Thumbnails</div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="sidenav-item active open">
                    <a
                        href="javascript:"
                        className="sidenav-link sidenav-toggle"
                    >
                        <i className="sidenav-icon feather icon-award" />
                        <div>Advanced UI</div>
                    </a>
                    <ul className="sidenav-menu">
                        <li className="sidenav-item">
                            <a
                                href="aui_carousel.html"
                                className="sidenav-link"
                            >
                                <div>Carousel</div>
                            </a>
                        </li>
                        <li className="sidenav-item ">
                            <a href="aui_cropper.html" className="sidenav-link">
                                <div>Cropper.js</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="aui_drag-and-drop.html"
                                className="sidenav-link"
                            >
                                <div>Drag&amp;Drop</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="aui_fullcalendar.html"
                                className="sidenav-link"
                            >
                                <div>Fullcalendar</div>
                            </a>
                        </li>
                        <li className="sidenav-item active">
                            <a
                                href="aui_kanban-board.html"
                                className="sidenav-link"
                            >
                                <div>Kanban board</div>
                                <div className="pl-1 ml-auto">
                                    <div className="badge badge-success">
                                        New
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a href="aui_ladda.html" className="sidenav-link">
                                <div>Ladda</div>
                                <div className="pl-1 ml-auto">
                                    <div className="badge badge-danger">
                                        Hot
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="aui_lightbox.html"
                                className="sidenav-link"
                            >
                                <div>Lightbox</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="aui_media-player.html"
                                className="sidenav-link"
                            >
                                <div>Media player</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="aui_notifications.html"
                                className="sidenav-link"
                            >
                                <div>Notifications</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="aui_todo-list.html"
                                className="sidenav-link"
                            >
                                <div>Todo list</div>
                            </a>
                        </li>
                    </ul>
                </li>
                {/* Forms & Tables */}
                <li className="sidenav-divider mb-1" />
                <li className="sidenav-header small font-weight-semibold">
                    Forms &amp; Tables
                </li>
                <li className="sidenav-item">
                    <a
                        href="javascript:"
                        className="sidenav-link sidenav-toggle"
                    >
                        <i className="sidenav-icon feather icon-clipboard" />
                        <div>Forms</div>
                    </a>
                    <ul className="sidenav-menu">
                        <li className="sidenav-item">
                            <a
                                href="forms_layouts.html"
                                className="sidenav-link"
                            >
                                <div>Layouts and elements</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="forms_controls.html"
                                className="sidenav-link"
                            >
                                <div>Controls</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="forms_custom-controls.html"
                                className="sidenav-link"
                            >
                                <div>Custom controls</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="forms_input-groups.html"
                                className="sidenav-link"
                            >
                                <div>Input groups</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="forms_switchers.html"
                                className="sidenav-link"
                            >
                                <div>Switchers</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="forms_sliders.html"
                                className="sidenav-link"
                            >
                                <div>Sliders</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="forms_selects.html"
                                className="sidenav-link"
                            >
                                <div>Selects and tags</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="forms_pickers.html"
                                className="sidenav-link"
                            >
                                <div>Pickers</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="forms_editors.html"
                                className="sidenav-link"
                            >
                                <div>Editors</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="forms_file-upload.html"
                                className="sidenav-link"
                            >
                                <div>File upload</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="forms_validation.html"
                                className="sidenav-link"
                            >
                                <div>jQuery Validation</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="forms_wizard.html"
                                className="sidenav-link"
                            >
                                <div>SmartWizard</div>
                                <div className="pl-1 ml-auto">
                                    <div className="badge badge-danger">
                                        Hot
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="forms_typeahead.html"
                                className="sidenav-link"
                            >
                                <div>Typeahead</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="forms_dual-listbox.html"
                                className="sidenav-link"
                            >
                                <div>Bootstrap Dual Listbox</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="forms_extras.html"
                                className="sidenav-link"
                            >
                                <div>Extras</div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="sidenav-item">
                    <a
                        href="javascript:"
                        className="sidenav-link sidenav-toggle"
                    >
                        <i className="sidenav-icon feather icon-grid" />
                        <div>Tables</div>
                    </a>
                    <ul className="sidenav-menu">
                        <li className="sidenav-item">
                            <a
                                href="tables_bootstrap.html"
                                className="sidenav-link"
                            >
                                <div>Bootstrap</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="tables_datatables.html"
                                className="sidenav-link"
                            >
                                <div>DataTables</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="tables_footables.html"
                                className="sidenav-link"
                            >
                                <div>fooTables</div>
                                <div className="pl-1 ml-auto">
                                    <div className="badge badge-danger">
                                        NEW
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="tables_bootstrap-table.html"
                                className="sidenav-link"
                            >
                                <div>Bootstrap table</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="tables_bootstrap-sortable.html"
                                className="sidenav-link"
                            >
                                <div>Bootstrap Sortable</div>
                            </a>
                        </li>
                    </ul>
                </li>
                {/* Charts & Maps */}
                <li className="sidenav-divider mb-1" />
                <li className="sidenav-header small font-weight-semibold">
                    Chrt &amp; Maps
                </li>
                <li className="sidenav-item">
                    <a href="charts_gmaps.html" className="sidenav-link">
                        <i className="sidenav-icon feather icon-map-pin" />
                        <div>GMaps</div>
                    </a>
                </li>
                <li className="sidenav-item">
                    <a
                        href="javascript:"
                        className="sidenav-link sidenav-toggle"
                    >
                        <i className="sidenav-icon feather icon-pie-chart" />
                        <div>Charts</div>
                    </a>
                    <ul className="sidenav-menu">
                        <li className="sidenav-item">
                            <a href="charts_am.html" className="sidenav-link">
                                <div>AM</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a href="charts_flot.html" className="sidenav-link">
                                <div>Flot.js</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="charts_chartist.html"
                                className="sidenav-link"
                            >
                                <div>Chartist</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="charts_chartjs.html"
                                className="sidenav-link"
                            >
                                <div>Chart.js</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="charts_morrisjs.html"
                                className="sidenav-link"
                            >
                                <div>Morris.js</div>
                            </a>
                        </li>
                    </ul>
                </li>
                {/*  Icons */}
                <li className="sidenav-divider mb-1" />
                <li className="sidenav-header small font-weight-semibold">
                    Icons
                </li>
                <li className="sidenav-item">
                    <a
                        href="javascript:"
                        className="sidenav-link sidenav-toggle"
                    >
                        <i className="sidenav-icon feather icon-feather" />
                        <div>Icons</div>
                    </a>
                    <ul className="sidenav-menu">
                        <li className="sidenav-item">
                            <a
                                href="icons_feather.html"
                                className="sidenav-link"
                            >
                                <div>Feather</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="icons_font-awesome.html"
                                className="sidenav-link"
                            >
                                <div>Font Awesome 5</div>
                                <div className="pl-1 ml-auto">
                                    <div className="badge badge-info">New</div>
                                </div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="icons_ionicons.html"
                                className="sidenav-link"
                            >
                                <div>Ionicons</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="icons_linearicons.html"
                                className="sidenav-link"
                            >
                                <div>Linearicons</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="icons_openiconic.html"
                                className="sidenav-link"
                            >
                                <div>Open Iconic</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="icons_stroke7.html"
                                className="sidenav-link"
                            >
                                <div>Stroke Icons 7</div>
                            </a>
                        </li>
                    </ul>
                </li>
                {/* Pages */}
                <li className="sidenav-divider mb-1" />
                <li className="sidenav-header small font-weight-semibold">
                    Pages
                </li>
                <li className="sidenav-item">
                    <a
                        href="javascript:"
                        className="sidenav-link sidenav-toggle"
                    >
                        <i className="sidenav-icon feather icon-lock" />
                        <div>Authentication</div>
                    </a>
                    <ul className="sidenav-menu">
                        <li className="sidenav-item">
                            <a
                                href="javascript:"
                                className="sidenav-link sidenav-toggle"
                            >
                                <div>Login</div>
                            </a>
                            <ul className="sidenav-menu">
                                <li className="sidenav-item">
                                    <a
                                        href="pages_authentication_login-v1.html"
                                        className="sidenav-link"
                                    >
                                        <div>Login v1</div>
                                    </a>
                                </li>
                                <li className="sidenav-item">
                                    <a
                                        href="pages_authentication_login-v2.html"
                                        className="sidenav-link"
                                    >
                                        <div>Login v2</div>
                                    </a>
                                </li>
                                <li className="sidenav-item">
                                    <a
                                        href="pages_authentication_login-v3.html"
                                        className="sidenav-link"
                                    >
                                        <div>Login v3</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="javascript:"
                                className="sidenav-link sidenav-toggle"
                            >
                                <div>Signup</div>
                            </a>
                            <ul className="sidenav-menu">
                                <li className="sidenav-item">
                                    <a
                                        href="pages_authentication_register-v1.html"
                                        className="sidenav-link"
                                    >
                                        <div>Register v1</div>
                                    </a>
                                </li>
                                <li className="sidenav-item">
                                    <a
                                        href="pages_authentication_register-v2.html"
                                        className="sidenav-link"
                                    >
                                        <div>Register v2</div>
                                    </a>
                                </li>
                                <li className="sidenav-item">
                                    <a
                                        href="pages_authentication_register-v3.html"
                                        className="sidenav-link"
                                    >
                                        <div>Register v3</div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="pages_authentication_login-and-register.html"
                                className="sidenav-link"
                            >
                                <div>Login + Register</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="pages_authentication_lock-screen-v1.html"
                                className="sidenav-link"
                            >
                                <div>Lock screen v1</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="pages_authentication_lock-screen-v2.html"
                                className="sidenav-link"
                            >
                                <div>Lock screen v2</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="pages_authentication_password-reset.html"
                                className="sidenav-link"
                            >
                                <div>Password reset</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="pages_authentication_email-confirm.html"
                                className="sidenav-link"
                            >
                                <div>Email confirm</div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="sidenav-item">
                    <a
                        href="javascript:"
                        className="sidenav-link sidenav-toggle"
                    >
                        <i className="sidenav-icon feather icon-book" />
                        <div>Education</div>
                    </a>
                    <ul className="sidenav-menu">
                        <li className="sidenav-item">
                            <a
                                href="pages_education_courses-v1.html"
                                className="sidenav-link"
                            >
                                <div>Courses v1</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="pages_education_courses-v2.html"
                                className="sidenav-link"
                            >
                                <div>Courses v2</div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="sidenav-item">
                    <a
                        href="javascript:"
                        className="sidenav-link sidenav-toggle"
                    >
                        <i className="sidenav-icon feather icon-shopping-cart" />
                        <div>E-commerce</div>
                    </a>
                    <ul className="sidenav-menu">
                        <li className="sidenav-item">
                            <a
                                href="pages_e-commerce_product-list.html"
                                className="sidenav-link"
                            >
                                <div>Product list</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="pages_e-commerce_product-item.html"
                                className="sidenav-link"
                            >
                                <div>Product item</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="pages_e-commerce_product-edit.html"
                                className="sidenav-link"
                            >
                                <div>Product edit</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="pages_e-commerce_order-list.html"
                                className="sidenav-link"
                            >
                                <div>Order list</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="pages_e-commerce_order-detail.html"
                                className="sidenav-link"
                            >
                                <div>Order detail</div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="sidenav-item">
                    <a
                        href="javascript:"
                        className="sidenav-link sidenav-toggle"
                    >
                        <i className="sidenav-icon feather icon-mail" />
                        <div>Email</div>
                    </a>
                    <ul className="sidenav-menu">
                        <li className="sidenav-item">
                            <a
                                href="pages_messages_v3_list.html"
                                className="sidenav-link"
                            >
                                <div>List</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="pages_messages_v3_item.html"
                                className="sidenav-link"
                            >
                                <div>Item</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="pages_messages_v3_compose.html"
                                className="sidenav-link"
                            >
                                <div>Compose</div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="sidenav-item">
                    <a
                        href="javascript:"
                        className="sidenav-link sidenav-toggle"
                    >
                        <i className="sidenav-icon feather icon-codepen" />
                        <div>Projects</div>
                    </a>
                    <ul className="sidenav-menu">
                        <li className="sidenav-item">
                            <a
                                href="pages_projects_list.html"
                                className="sidenav-link"
                            >
                                <div>List</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="pages_projects_item.html"
                                className="sidenav-link"
                            >
                                <div>Item</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a href="pages_teams.html" className="sidenav-link">
                                <div>Teams</div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="sidenav-item">
                    <a
                        href="javascript:"
                        className="sidenav-link sidenav-toggle"
                    >
                        <i className="sidenav-icon feather icon-shield" />
                        <div>Tickets</div>
                    </a>
                    <ul className="sidenav-menu">
                        <li className="sidenav-item">
                            <a
                                href="pages_tickets_list.html"
                                className="sidenav-link"
                            >
                                <div>List</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="pages_tickets_edit.html"
                                className="sidenav-link"
                            >
                                <div>Edit</div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="sidenav-item">
                    <a
                        href="javascript:"
                        className="sidenav-link sidenav-toggle"
                    >
                        <i className="sidenav-icon feather icon-users" />
                        <div>Users</div>
                    </a>
                    <ul className="sidenav-menu">
                        <li className="sidenav-item">
                            <a
                                href="pages_users_list.html"
                                className="sidenav-link"
                            >
                                <div>List</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="pages_users_view.html"
                                className="sidenav-link"
                            >
                                <div>View</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="pages_profile-v1.html"
                                className="sidenav-link"
                            >
                                <div>Profile v1</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="pages_profile-v2.html"
                                className="sidenav-link"
                            >
                                <div>Profile v2</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="pages_users_edit.html"
                                className="sidenav-link"
                            >
                                <div>Edit</div>
                            </a>
                        </li>
                        <li className="sidenav-item">
                            <a
                                href="pages_account-settings.html"
                                className="sidenav-link"
                            >
                                <div>Account settings</div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="sidenav-item">
                    <a href="pages_chat.html" className="sidenav-link">
                        <i className="sidenav-icon feather icon-message-square" />
                        <div>Chat</div>
                    </a>
                </li>
                <li className="sidenav-item">
                    <a href="pages_faq.html" className="sidenav-link">
                        <i className="sidenav-icon feather icon-anchor" />
                        <div>FAQ</div>
                    </a>
                </li>
                <li className="sidenav-item">
                    <a href="pages_gallery.html" className="sidenav-link">
                        <i className="sidenav-icon feather icon-image" />
                        <div>Gallery</div>
                    </a>
                </li>
                <li className="sidenav-item">
                    <a href="pages_help-center.html" className="sidenav-link">
                        <i className="sidenav-icon feather icon-help-circle" />
                        <div>Help center</div>
                    </a>
                </li>
                <li className="sidenav-item">
                    <a href="pages_invoice.html" className="sidenav-link">
                        <i className="sidenav-icon feather icon-printer" />
                        <div>Invoice</div>
                    </a>
                </li>
                <li className="sidenav-item">
                    <a
                        href="pages_search-results.html"
                        className="sidenav-link"
                    >
                        <i className="sidenav-icon feather feather icon-filter" />
                        <div>Search results</div>
                    </a>
                </li>
                <li className="sidenav-item">
                    <a href="pages_vacancies.html" className="sidenav-link">
                        <i className="sidenav-icon feather icon-award" />
                        <div>Vacancies</div>
                    </a>
                </li>
                <li className="sidenav-item">
                    <a href="pages_voting.html" className="sidenav-link">
                        <i className="sidenav-icon feather icon-thumbs-up" />
                        <div>Voting</div>
                        <div className="pl-1 ml-auto">
                            <div className="badge badge-success">new</div>
                        </div>
                    </a>
                </li>
                <li className="sidenav-item">
                    <a href="pages_pricing.html" className="sidenav-link">
                        <i className="sidenav-icon feather icon-tag" />
                        <div>Pricing</div>
                        <div className="pl-1 ml-auto">
                            <div className="badge badge-success">new</div>
                        </div>
                    </a>
                </li>
                <li className="sidenav-item">
                    <a href="pages_file-manger.html" className="sidenav-link">
                        <i className="sidenav-icon feather icon-folder" />
                        <div>file manager</div>
                        <div className="pl-1 ml-auto">
                            <div className="badge badge-success">new</div>
                        </div>
                    </a>
                </li>
                <li className="sidenav-item">
                    <a href="pages_clients.html" className="sidenav-link">
                        <i className="sidenav-icon feather icon-users" />
                        <div>Clients</div>
                        <div className="pl-1 ml-auto">
                            <div className="badge badge-success">new</div>
                        </div>
                    </a>
                </li>
                <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
                    <div
                        className="ps__thumb-x"
                        tabIndex={0}
                        style={{ left: 0, width: 0 }}
                    />
                </div>
                <div
                    className="ps__rail-y"
                    style={{ top: 0, height: 280, right: 4 }}
                >
                    <div
                        className="ps__thumb-y"
                        tabIndex={0}
                        style={{ top: 0, height: 31 }}
                    />
                </div>
            </ul>
        </div>
    );
};

export default Sidebar;
