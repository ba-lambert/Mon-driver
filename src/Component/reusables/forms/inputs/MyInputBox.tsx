import {FieldError, UseFormRegisterReturn} from "react-hook-form";
import React from "react";

interface ICustomInput {
    label?: string;
    type: string;
    placeholder: string;
    register: UseFormRegisterReturn;
    error?: FieldError;
}

const CustomInput: React.FC<ICustomInput> = ({ label, type, placeholder, register, error }) => {
    return (
        <div>
            {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
            <input
                type={type}
                placeholder={placeholder}
                {...register}
                className={`w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border ${
                    error ? 'border-red-500' : 'border-gray-200'
                } placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white`}
            />
            {error && <p className="text-red-500 text-xs">{error.message}</p>}
        </div>
    );
};
export default CustomInput;