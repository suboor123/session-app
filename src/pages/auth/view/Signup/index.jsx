import { useState } from 'react';
import ToastContainer from 'rsuite/esm/toaster/ToastContainer';
import { authHelper } from '../../helpers';
import { useToaster } from 'rsuite';
import { Notification } from 'rsuite';
import AuthLayout from '../AuthLayout';

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
        <AuthLayout>
            <h4 className="text-center text-lighter font-weight-normal mt-5 mb-0">
                Create an Account
            </h4>
            {/* Form */}
            <form className="my-5">
                <div className="form-group">
                    <label className="form-label">Your name</label>
                    <input type="text" className="form-control" />
                    <div className="clearfix" />
                </div>
                <div className="form-group">
                    <label className="form-label">Your email</label>
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
                    <label className="form-label">Password</label>
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
                    . We’ll occasionally send you account related emails.
                </div>
            </form>
            {/* [ Form ] End */}
            <div className="text-center text-muted">
                Already have an account?
                <a href="javascript:void(0)">Sign In</a>
            </div>
        </AuthLayout>
    );
};
