import { useState } from 'react';
import { authHelper } from '../../helpers';
import AuthLayout from '../AuthLayout';
import { toastr } from '@/lib/Toastr';
import { Link } from 'react-router-dom';
import { userHelper } from '../../../user/helpers';
import LoadingSpinner from '@/lib/LoadingSpinner';

export const SignUp = () => {
    const [formVal, setFormVal] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        setFormVal({
            ...formVal,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = async () => {
        if (
            formVal.email === '' ||
            formVal.password === '' ||
            formVal.username === ''
        ) {
            toastr.error('Invalid form', 'All fields are required');
            return;
        }
        LoadingSpinner.show();
        authHelper.signUp(formVal.email, formVal.password).then(
            (res) => {
                const id = res.user.uid;
                userHelper.createUser(id, {
                    username: formVal.username,
                    email: formVal.email,
                });
                LoadingSpinner.hide();
                toastr.success('Congratulations!', 'Successfully Sign up.');
            },
            (err) => {
                LoadingSpinner.hide();
                toastr.error('Something went wrong!', err.code);
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
                    <input
                        type="text"
                        className="form-control"
                        value={formVal.username}
                        onChange={handleInputChange}
                        name="username"
                    />
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
                <Link to="/login">Sign In</Link>
            </div>
        </AuthLayout>
    );
};
