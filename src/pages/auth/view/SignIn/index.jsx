import { useState } from 'react';
import { authHelper } from '../../helpers';
import AuthLayout from '../AuthLayout';
import { Link, useNavigate } from 'react-router-dom';
import { toastr } from '@/lib/Toastr';
import { userHelper } from '@/pages/user/helpers';

export const SignIn = () => {
    const navigateTo = useNavigate();

    const [formVal, setFormVal] = useState({
        email: 'suboork100@gmail.com',
        password: '123456789',
    });

    const handleInputChange = (e) => {
        setFormVal({
            ...formVal,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = async () => {
        if (formVal.email === '' || formVal.password === '') {
            toastr.error('Invalid fields', 'Email and password are required.');
            return;
        }
        authHelper.signIn(formVal.email, formVal.password).then(
            async (res) => {
                const user = await userHelper.syncUserById(res.user.uid);
                authHelper.setCurrentUser({ id: res.user.uid, ...user });
                toastr.success('Welcome', 'Successfully logged in');
                navigateTo('/dashboard');
            },
            (err) => {
                toastr.error('Something went wrong!', err.code);
            }
        );
    };

    return (
        <AuthLayout>
            <h4 className="text-center text-lighter font-weight-normal mt-5 mb-0">
                Login to your account
            </h4>
            {/* Form */}
            <form className="my-5">
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
                    Sign In
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
                Need an account?
                <Link to="/">Sign Up</Link>
            </div>
        </AuthLayout>
    );
};
