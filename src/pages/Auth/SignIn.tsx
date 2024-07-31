import React, {useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import CustomInput from "../../Component/reusables/forms/inputs/MyInputBox.tsx";
import {useLoginMutation} from "../../redux/api.ts";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import ErrorAlert from "../../Component/Shared/ErrorAlert.tsx";

// Validation schema using Yup
const schema = yup.object().shape({
    username: yup.string().required('username is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters long').required('Password is required'),
});

interface IFormInput {
    username: string;
    password: string;
}

const SignIn: React.FC = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        resolver: yupResolver(schema),
    });

    const [login, {isSuccess, isError, isLoading, error}] = useLoginMutation();

    useEffect(() => {
        if(isSuccess){
            toast.success('Login successfull');
            navigate('/dashboard')
        }
    }, [isSuccess]);

    const handleSignUpClick = () => {
        navigate('/auth/signup');
    };
    // if(error){
    //     console.log(error)
    // }
    return (
        <div className="h-screen items-center flex justify-center px-5 lg:px-0">
            {isError && <ErrorAlert error={error ? error?.data?.message :'something went wrong'} />}
            <div className="max-w-screen-xl bg-white border shadow sm:rounded-lg flex justify-center flex-1">
                <div className="flex-1 bg-blue-900 text-center hidden md:flex">
                    <div
                        className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url(https://www.tailwindtap.com/assets/common/marketing.svg)`,
                        }}
                    ></div>
                </div>
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div className="flex flex-col items-center">
                        <div className="text-center">
                            <h1 className="text-2xl xl:text-4xl font-extrabold text-blue-900">Student Sign In</h1>
                            <p className="text-[12px] text-gray-500">Enter your details to sign in</p>
                        </div>
                        <div className="w-full flex-1 mt-8">
                            <form className="mx-auto max-w-xs flex flex-col gap-4" onSubmit={handleSubmit(login)}>
                                <CustomInput
                                    label="username"
                                    type="username"
                                    placeholder="Enter your username"
                                    register={register('username')}
                                    error={errors.username}
                                />
                                <CustomInput
                                    label="Password"
                                    type="password"
                                    placeholder="Password"
                                    register={register('password')}
                                    error={errors.password}
                                />
                                <button
                                    type="submit"
                                    className="mt-5 tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                >
                                    <svg
                                        className="w-6 h-6 -ml-2"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                        <circle cx="8.5" cy="7" r="4" />
                                        <path d="M20 8v6M23 11h-6" />
                                    </svg>
                                    <span className="ml-3">{isLoading ? '.....' : 'Sign In'}</span>
                                </button>
                                <p className="mt-6 text-xs text-gray-600 text-center">
                                    Don't have an account?{' '}
                                    <span className="text-blue-900 font-semibold" onClick={handleSignUpClick}
                                          style={{cursor: 'pointer'}}>
                Sign up
            </span>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
