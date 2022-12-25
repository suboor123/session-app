import React from 'react';

const AuthLayout = ({ children }) => {
    return (
        <div className="authentication-wrapper authentication-3">
            <div className="authentication-inner">
                {/* [ Side container ] Start */}
                {/* Do not display the container on extra small, small and medium screens */}
                <div
                    className="d-none d-lg-flex col-lg-8 align-items-center ui-bg-cover ui-bg-overlay-container p-5"
                    style={{ backgroundImage: 'url("assets/img/bg/21.jpg")' }}
                >
                    <div className="ui-bg-overlay bg-dark opacity-50" />
                    {/* [ Text ] Start */}
                    <div className="w-100 text-white px-5">
                        <h1 className="display-2 font-weight-bolder mb-4">
                            JOIN OUR
                            <br />
                            COMMUNITY
                        </h1>
                        <div className="text-large font-weight-light">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vestibulum vehicula ex eu gravida faucibus.
                            Suspendisse viverra pharetra purus. Proin fringilla
                            ac lorem at sagittis. Proin tincidunt dui et nunc
                            ultricies dignissim.
                        </div>
                    </div>
                    {/* [ Text ] End */}
                </div>
                {/* [ Side container ] End */}
                {/* [ Form container ] Start */}
                <div className="d-flex col-lg-4 align-items-center bg-white p-5">
                    {/* Inner container */}
                    {/* Have to add `.d-flex` to control width via `.col-*` classes */}
                    <div className="d-flex col-sm-7 col-md-5 col-lg-12 px-0 px-xl-4 mx-auto">
                        <div className="w-100">
                            {/* [ Logo ] Start */}
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="ui-w-60">
                                    <div className="w-100 position-relative">
                                        <img
                                            src="assets/img/logo-dark.png"
                                            alt="Brand Logo"
                                            className="img-fluid"
                                        />
                                        <div className="clearfix" />
                                    </div>
                                </div>
                            </div>

                            {children}
                        </div>
                    </div>
                </div>
                {/* [ Form container ] End */}
            </div>
        </div>
    );
};

export default AuthLayout;
