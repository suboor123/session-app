import React from 'react';

const Sidebar = () => {
    return (
        <div
            id="layout-sidenav"
            className="layout-sidenav sidenav sidenav-vertical bg-white logo-dark"
        >
            <div className="app-brand demo">
                <span className="app-brand-logo demo">
                    <img src="assets/img/logo.png" className="img-fluid" />
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
