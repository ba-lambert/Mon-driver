 import React from "react";
 import { useForm, SubmitHandler } from "react-hook-form";
 import { Link, useNavigate } from "react-router-dom";
 import backgroundImage from "../../assets/images/BACKGROUND IMAGE 2-01.png";
 import { IoPersonSharp } from "react-icons/io5";
 import { TfiEmail } from "react-icons/tfi";
 import { TbPasswordUser } from "react-icons/tb";
 import log from "../../assets/images/log.png";
 import { useDispatch } from "react-redux";
 interface SignUpFormInputs {
   firstName: string;
   lastname: string;
   email: string;
   password: string;
   confirmPassword: string;
 }

 const RegisterForm: React.FC = () => {
   const {
     register,
     handleSubmit,
     formState: { errors },
     watch,
   } = useForm<SignUpFormInputs>();
   const password = watch("password");
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const onSubmit: SubmitHandler<SignUpFormInputs> = async (data) => {
     try {
      //  const result = await signup(data).unwrap();
      //  if (result.data.success) {
      //    const user = {
      //      id: result.data._id,
      //      fullname: result.data.fullname,
      //      gender: result.data.gender,
      //      DOB: result.data.DOB,
      //      username: result.data.username,
      //      email: result.data.email,
      //      role: result.data.role,
      //    };
      //    dispatch(setToken({ token: result.data.token, user }));
      //    navigate("/login");
      //  }
     } catch (error) {
       console.error("Registration failed", error);
     }
   };

   return (
     <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
       <div
         className="absolute inset-0 bg-cover bg-center"
         style={{
           backgroundImage: `url(${backgroundImage})`,
           backgroundSize: "cover",
           backgroundPosition: "center",
         }}
       ></div>
       <div className="relative flex bg-customBlue bg-opacity-50 mb-20 mt-6 p-8 border border-blue-600 rounded-lg shadow-lg w-full max-w-4xl z-10">
         <div className="w-1/2 flex justify-center items-center">
           <img src={log} alt="Login" className="w-3/4" />
         </div>
         <div className="w-1/2">
           <h1 className="text-2xl font-bold text-white mb-6">Sign Up</h1>
           <form onSubmit={handleSubmit(onSubmit)}>
             {" "}
             {/* Corrected line */}
             <div className="flex mb-4">
               <div className="flex">
                 <div className="bg-white w-9 h-10 mt-1 bg-opacity-90 text-customBlue">
                   <IoPersonSharp className="mt-3 ml-2" />
                 </div>
                 <input
                   type="text"
                   placeholder="Fullname"
                   id="fullName"
                   className="mt-1 block w-full px-3 py-2 bg-white bg-opacity-70 rounded-r-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                   {...register("firstName", {
                     required: "First name is required",
                   })}
                 />
                 {errors.firstName && (
                   <p className="text-red-500 text-xs mt-1">
                     {errors.firstName.message}
                   </p>
                 )}
               </div>
               <div className="flex ml-4">
                 <div className="bg-white w-9 h-10 mt-1 bg-opacity-90 text-customBlue">
                   <IoPersonSharp className="mt-3 ml-2" />
                 </div>
                 <input
                   type="text"
                   placeholder="Lastname"
                   id="lastname"
                   className="mt-1 block w-full px-3 py-2 bg-white bg-opacity-60 rounded-r-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                   {...register("lastname", {
                     required: "Last name is required",
                   })}
                 />
                 {errors.lastname && (
                   <p className="text-red-500 text-xs mt-1">
                     {errors.lastname.message}
                   </p>
                 )}
               </div>
             </div>
             <div className="flex mb-4">
               <div className="text-white w-12 h-9 mt-2 bg-white bg-opacity-90 text-sm">
                 <TfiEmail className="mt-3 ml-4 text-customBlue" />
               </div>
               <div className="w-full">
                 <input
                   type="email"
                   id="email"
                   placeholder="Email"
                   className="block w-full px-2 py-2 mt-2 bg-white bg-opacity-60 text-white rounded-r-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                   {...register("email", { required: "Email is required" })}
                 />
                 {errors.email && (
                   <p className="text-red-500 text-xs mt-1">
                     {errors.email.message}
                   </p>
                 )}
               </div>
             </div>
             <div className="flex mb-4">
               <div className="flex w-1/2">
                 <div className="bg-white w-9 h-10 mt-1 bg-opacity-90 text-customBlue">
                   <TbPasswordUser className="mt-3 ml-2" />
                 </div>
                 <input
                   type="password"
                   id="password"
                   placeholder="Password"
                   className="mt-1 block w-full px-2 py-2 bg-white bg-opacity-60 text-white rounded-r-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                   {...register("password", {
                     required: "Password is required",
                   })}
                 />
                 {errors.password && (
                   <p className="text-red-500 text-xs mt-1">
                     {errors.password.message}
                   </p>
                 )}
               </div>
               <div className="flex w-1/2 ml-4">
                 <div className="bg-white w-9 h-10 mt-1 bg-opacity-90 text-customBlue">
                   <TbPasswordUser className="mt-3 ml-2" />
                 </div>
                 <input
                   type="password"
                   placeholder="Confirm Password"
                   id="confirmPassword"
                   className="mt-1 block w-full px-3 py-2 bg-white bg-opacity-60 rounded-r-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                   {...register("confirmPassword", {
                     required: "Please confirm your password",
                     validate: (value) =>
                       value === password || "Passwords do not match",
                   })}
                 />
                 {errors.confirmPassword && (
                   <p className="text-red-500 text-xs mt-1">
                     {errors.confirmPassword.message}
                   </p>
                 )}
               </div>
             </div>
             <button
               type="submit"
               className="w-full py-2 px-4 bg-sky-800 text-white font-bold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
               disabled={isLoading}
             >
               {isLoading ? "Signing Up..." : "Sign Up"}
             </button>
           </form>
           <div className="mt-6 text-center">
             <p className="text-sm text-white">
               Already have an account?{" "}
               <Link to="/login" className="text-customGreen font-medium">
                 Login
               </Link>
               .
             </p>
           </div>
         </div>
       </div>
     </div>
   );
 };

 export default RegisterForm;
