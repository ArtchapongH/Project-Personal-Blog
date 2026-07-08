import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import IsValidEmail from "../utils/IsValidEmail";

function SignUpPageFill({ onSubmit }){

    const [form, setForm] = useState({
        Name: "",
        Username: "",
        Email: "",
        Password: ""
    });

    const [formErr, setFormErr] = useState({
        Name: "",
        Username: "",
        Email: "",
        Password: ""
    });

        function ValidateForm(){
            let isValid = true;
            let errors = {
                Name: "",
                Username: "",
                Email: "",
                Password: "",
            };
            
            if(!form.Name){
                errors.Name = "Please enter your name";
                isValid=false;
            }

            if(!form.Username){
                errors.Username = "Please enter your username";
                isValid=false;
            }

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
        onSubmit(form);
    };


    return(
        <>
        
        <div className="bg-white min-h-screen flex items-center justify-center px-4 py-8">

            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
                <div className="bg-stone-100 rounded-2xl shadow-sm px-6 py-8 sm:px-8 sm:py-10">

                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-8">
                        Sign up
                    </h1>

                    {/* Form */}
                    <form className="space-y-4" onSubmit={handleSubmit}>

                        {/* Name */}
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                name="Name"
                                value={form.Name}
                                onChange={handleChange}
                                className="w-full rounded-md border border-gray-300 px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-black"
                                style={{
                                    borderColor: formErr.Name ? 'red' : '#ddd'
                                }}
                            />
                            <ErrorMessage errorMessage={formErr.Name} />
                        </div>

                        {/* Username */}
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">
                                Username
                            </label>
                            <input
                                type="text"
                                name="Username"
                                value={form.Username}
                                onChange={handleChange}
                                className="w-full rounded-md border border-gray-300 px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-black"
                                style={{
                                    borderColor: formErr.Username ? 'red' : '#ddd'
                                }}
                            />
                            <ErrorMessage errorMessage={formErr.Username} />
                        </div>

                        {/* Email -> it was shown in error state (not normal state)*/}
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">
                                Email
                            </label>

                            <input
                                type="text"
                                name="Email"
                                value={form.Email}
                                onChange={handleChange}
                                className="w-full rounded-md border px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-black"
                                style={{
                                    borderColor: formErr.Email ? 'red' : '#ddd'
                                }}
                            />
                            <ErrorMessage errorMessage={formErr.Email} />
                            
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">
                                Password
                            </label>

                            <input
                                type="password"
                                name="Password"
                                value={form.Password}
                                onChange={handleChange}
                                className="w-full rounded-md border border-gray-300 px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-black"
                                style={{
                                    borderColor: formErr.Password ? 'red' : '#ddd'
                                }}
                            />
                            <ErrorMessage errorMessage={formErr.Password} />
                        </div>

                        {/* Button */}
                        <div className="pt-4 flex justify-center">
                            <button
                                type="submit"
                                className="bg-stone-900 text-white rounded-full px-10 py-2.5 hover:bg-black transition font-medium"
                            >
                                Sign up
                            </button>
                        </div>

                    </form>

                    {/* Login */}
                    <div className="text-center mt-8 text-gray-600 text-sm">
                        Already have an account?
                        <a href="#" className="font-semibold text-black underline ml-1">
                            Log in
                        </a>
                    </div>

                </div>
        
            </div>

        </div>

        
        </>
    )
};

export default SignUpPageFill;