import {useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PatternImg from './../../assets/images/Patern.png';
import { useSignupMutation } from "../../redux/api.ts";
import CustomInput from "../../Component/reusables/forms/inputs/MyInputBox.tsx";
import {useNavigate} from "react-router-dom";
import ErrorAlert from "../../Component/Shared/ErrorAlert.tsx";
import {toast} from "react-toastify";

const schema = yup.object().shape({
    fullname: yup.string().required('Fullname is required'),
    username: yup.string().required('Username is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    gender: yup.string().required('Gender is required'),
    DOB: yup.date().required('DOB is required'),
    phone: yup
        .string()
        .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
        .required('Phone number is required'),

    password: yup.string().min(6, 'Password must be at least 6 characters long').required('Password is required'),
});

interface IFormInput {
    fullname: string;
    username: string;
    email: string;
    gender: string;
    phone:number;
    DOB: string; // Consider using a Date type or a string in a specific date format
    password: string;
}

const SignUp = () => {
    const [signup, { data, isLoading, isError ,isSuccess, error }] = useSignupMutation();
    const Navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        resolver: yupResolver(schema),
    });


    const navigate = useNavigate()
    const handleSignUpClick = () => {
        navigate('/auth/signin');
    };

    useEffect(() => {
        if(isSuccess){
            toast.success('Your Account has been created successfully')
            Navigate('/auth/signin')
        }
    }, [isSuccess]);

    return (
        <div className="App">
            <div className="lg:min-h-screen font-poppins bg-primary-red-500 bg-intro-mobile lg:bg-intro-desktop overflow-hidden bg-desktop-intro lg:flex py-24">
                <div className="container flex flex-grow">
                    <div className="-mx-3 flex flex-wrap h-full">
                        <div className="px-3 py-20 lg:py-0 w-full lg:w-1/2 h-full flex flex-col justify-center items-center">
                            <div className="text-white space-y-8 my-auto xl:w-10/12">
                                <h1 className="text-4xl lg:text-5xl text-center lg:text-left font-bold">
                                    Learn to code by watching others
                                </h1>
                                <p>
                                    See how experienced developers solve
                                    problems in real-time. Watching scripted
                                    tutorials is great, but understanding how
                                    developers think is invaluable.
                                </p>
                            </div>
                        </div>
                        <div className="px-3 w-full lg:w-1/2 flex items-center">
                            <div className="space-y-8 w-full">
                                <h2 className="bg-accent-blue-500 text-center text-white py-4 rounded-lg relative z-30 shadow-hard-gray">
                                    <span className="relative z-30 font-semibold">
                                        Try it free 7 days
                                    </span>
                                    <span className="font-thin ml-1 relative z-30">
                                        then $20/mo. thereafter
                                    </span>
                                </h2>
                                <form
                                    className="bg-white rounded-lg shadow-hard-gray"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="p-8 text-sm space-y-6">
                                        {form.map((_form, _index) => {
                                            return (
                                                <Input
                                                    key={`form-${_index}`}
                                                    id={_form.id}
                                                    name={_form.name}
                                                    placeholder={
                                                        _form.placeholder
                                                    }
                                                    isValidated={
                                                        _form.isValidated
                                                    }
                                                    error={_form.error}
                                                />
                                            );
                                        })}
                                        <input
                                            type="submit"
                                            value="Claim your free trial"
                                            className="bg-primary-green-500 hover:bg-primary-green-600 active:bg-primary-green-700 cursor-pointer font-semibold text-white py-4 rounded-lg text-center w-full uppercase border-b-[6px] border-primary-green-600"
                                        />
                                        <p className="text-center text-neutral-grayish-blue-500 text-[12px]">
                                            By clicking the button, you are
                                            agreeing to our
                                            <a
                                                className="text-primary-red-500 font-semibold ml-1"
                                                href="/"
                                                onClick={e =>
                                                    e.preventDefault()
                                                }
                                            >
                                                Terms and Services
                                            </a>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;