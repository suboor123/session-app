import { useState } from 'react';
import ToastContainer from 'rsuite/esm/toaster/ToastContainer';
import { authHelper } from '../../helpers';
import { useToaster } from 'rsuite';
import { Notification } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

export const SignUp = () => {
    const toaster = useToaster();

    const [formVal, setFormVal] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        setFormVal({
            ...formVal,
            [e.target.name]: e.target.value,
        });
    };

    const pushError = (errorHeader, errorContent) => {
        toaster.push(
            <Notification
                header={errorHeader}
                placement="topStart"
                closable
                type="error"
            >
                {errorContent}
            </Notification>,
            {
                placement: 'bottomEnd',
            }
        );
    };

    const onSubmit = async () => {
        console.log('working');
        if (formVal.email === '' || formVal.password === '') {
            //TODO: Use toastr lib
            // alert('Invalid email or password!');
            // console.log("here");
            pushError(
                'Signup Error',
                'Either username or password is empty !!!!'
            );
            return;
        }
        authHelper.signUp(formVal.email, formVal.password).then(
            (res) => {
                console.log(res);
                alert('successfully sign up');
            },
            (err) => {
                // alert(err);
                pushError(
                    'Signup Error',
                    'Problem with username or password !!!!'
                );
            }
        );
    };

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
                            {/* [ Logo ] End */}
                            <h4 className="text-center text-lighter font-weight-normal mt-5 mb-0">
                                Create an Account
                            </h4>
                            {/* Form */}
                            <form className="my-5">
                                <div className="form-group">
                                    <label className="form-label">
                                        Your name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                    />
                                    <div className="clearfix" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">
                                        Your email
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={formVal.email}
                                        onChange={handleInputChange}
                                        name="email"
                                    />
                                    <div className="clearfix" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={formVal.password}
                                        onChange={handleInputChange}
                                        name="password"
                                    />
                                    <div className="clearfix" />
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-primary btn-block mt-4"
                                    onClick={onSubmit}
                                >
                                    Sign Up
                                </button>
                                <div className="text-light small mt-4">
                                    By clicking "Sign Up", you agree to our
                                    <a href="javascript:void(0)">
                                        terms of service and privacy policy
                                    </a>
                                    . We’ll occasionally send you account
                                    related emails.
                                </div>
                            </form>
                            {/* [ Form ] End */}
                            <div className="text-center text-muted">
                                Already have an account?
                                <a href="javascript:void(0)">Sign In</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* [ Form container ] End */}
            </div>
        </div>
    );
};
