import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ErrorMessage from '../components/ErrorMessage';
import IsValidEmail from '../utils/IsValidEmail';
import '../App.css';

function LogInPage() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
            Email: "",
            Password: ""
        });
    
        const [formErr, setFormErr] = useState({
            Email: "",
            Password: ""
        });
    
            function ValidateForm(){
                let isValid = true;
                let errors = {
                    Email: "",
                    Password: "",
                };
                
    
                if(!form.Email){
                    errors.Email = "Please enter your email";
                    isValid=false;
                }
    
                if(form.Email && !IsValidEmail(form.Email)){
                    errors.Email = "Invalid email format";
                    isValid=false;
                }

                if(!form.Password){
                    errors.Password = "Please enter your password";
                    isValid=false;
                }
                
                setFormErr(errors);
                return isValid;
    
        };
    
    
        const handleChange = (event) => {
            const { name, value } = event.target;
    
            setForm({
            ...form,
            [name]: value,
            });
        };
    
        {/*
        const handleReset = () => {
            setForm({
            name: "",
            email: "",
            movie: "",
            comment: "",
            });
            setFormErr({
            name: "",
            email: "",
            movie: "",
            comment: "",
            });
        };
        */}
    
        const handleSubmit = (event) => {
            event.preventDefault();
            if(!ValidateForm()){
                return;
            }
            navigate('/');
        };
    

    return(
        <>
        <div className="bg-white min-h-screen flex items-center justify-center p-6">

            {/* Login Card */}
            <div
                className="w-full
                    max-w-sm
                    md:max-w-md
                    lg:max-w-lg
                    bg-[#F5F3F1]
                    rounded-2xl
                    shadow-sm
                    px-6
                    md:px-10
                    py-8
                    md:py-10">

                {/* Title */}
                <h1 className="text-center text-4xl md:text-5xl font-bold text-[#2B2521] mb-8">
                    Log in
                </h1>

                {/* Form */}
                <form className="space-y-5" onSubmit={handleSubmit}>

                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm md:text-base text-gray-600 mb-2">
                            Email
                        </label>

                        <input
                            id="email"
                            type="text"
                            name="Email"
                            value={form.Email}
                            onChange={handleChange}
                            className={`w-full h-12 md:h-14 rounded-lg bg-white px-4 text-sm md:text-base outline-none focus:ring-2 transition ${
                                formErr.Email
                                    ? 'border-2 border-red-500 focus:ring-red-500'
                                    : 'border border-gray-300 focus:ring-gray-400'
                            }`}
                        />
                        <ErrorMessage errorMessage={formErr.Email} />
                    </div>

                    {/* Password */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm md:text-base text-gray-600 mb-2">
                            Password
                        </label>

                        <input
                            id="password"
                            type="password"
                            name="Password"
                            value={form.Password}
                            onChange={handleChange}
                            className={`w-full h-12 md:h-14 rounded-lg bg-white px-4 text-sm md:text-base outline-none focus:ring-2 transition ${
                                formErr.Password
                                    ? 'border-2 border-red-500 focus:ring-red-500'
                                    : 'border border-gray-300 focus:ring-gray-400'
                            }`}
                        />
                        <ErrorMessage errorMessage={formErr.Password} />
                    </div>

                    {/* Button */}
                    <div className="flex justify-center pt-3">
                        <button
                            type="submit"
                            className="bg-[#2D2723]
                                text-white
                                rounded-full
                                w-40
                                md:w-48
                                h-12
                                md:h-14
                                font-medium
                                text-sm
                                md:text-base
                                hover:bg-black
                                active:scale-95
                                transition-all duration-200">

                            Log in
                        </button>
                    </div>

                </form>

                {/* Footer */}
                <div className="mt-8 text-center text-sm md:text-base text-gray-600">
                    Don't have any account?
                    <Link
                        to="/signup"
                        className="font-medium text-[#2B2521] underline hover:text-black transition">
                        Sign up
                    </Link>
                </div>

            </div>

        </div>
        </>
    );
}

export default LogInPage;