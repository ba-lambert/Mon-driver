import { useState } from "react";
import Breadcrumb from "../../Component/dashboard/Breadcrumb.tsx";

const UserProfileSettings = () => {
    const [formData, setFormData] = useState({
        name: "John Doe",
        email: "john.doe@example.com",
        password: "",
        confirmPassword: "",
        address: "123 Main St",
        city: "Anytown",
        country: "USA",
        cardNumber: "",
        cardExpiry: "",
        cardCVV: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle form submission, e.g., send data to the backend
        console.log("Form data submitted:", formData);
    };

    return (
        <>
            <Breadcrumb pageName='Settings' />
            <div className="flex items-center justify-center flex-col mt-10 space-y-10">
                <h2 className="sm:text-xl font-bold">Update Your Settings</h2>
                <div className='flex flex-wrap w-full justify-around gap-4'>
                    {/* Security Settings */}
                    <div className="bg-white p-4 w-[450px] shadow-md rounded-md">
                        <h3 className="sm:text-lg font-semibold mb-2">Security Settings</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Username</label>
                                <input
                                    type="text"
                                    placeholder='Mugisha Benjamin'
                                    disabled={true}
                                    className="mt-1 p-2 block w-full border-b border-gray-300 text-xs focus:outline-none"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="mt-1 p-2 block w-full border-b border-gray-300 text-xs focus:outline-none"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="mt-1 p-2 block w-full border-b border-gray-300 text-xs focus:outline-none"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-1 text-xs rounded-md hover:bg-blue-600"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Profile Settings */}
                    <div className="bg-white p-4 w-[450px] shadow-md rounded-md">
                        <h3 className="sm:text-lg font-semibold mb-2">Profile Settings</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Full names</label>
                                <input
                                    type="text"
                                    name="full names"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="mt-1 p-2 block w-full border-b border-gray-300 text-xs focus:outline-none"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 p-2 block w-full border-b border-gray-300 text-xs focus:outline-none"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Phone number</label>
                                <input
                                    type="phone"
                                    name="phone number"
                                    value='0781234567'
                                    onChange={handleChange}
                                    className="mt-1 p-2 block w-full border-b border-gray-300 text-xs focus:outline-none"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Profile</label>
                                <input
                                    type="file"
                                    name="Profile"
                                    onChange={handleChange}
                                    className="mt-1 p-2 block w-full border-b border-gray-300 text-xs focus:outline-none"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-1 text-xs rounded-md hover:bg-blue-600"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Location Settings */}
                    <div className="bg-white p-4 w-[450px] shadow-md rounded-md">
                        <h3 className="sm:text-lg font-semibold mb-2">Location Settings</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="mt-1 p-2 block w-full border-b border-gray-300 text-xs focus:outline-none"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">City</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="mt-1 p-2 block w-full border-b border-gray-300 text-xs focus:outline-none"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Country</label>
                                <input
                                    type="text"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    className="mt-1 p-2 block w-full border-b border-gray-300 text-xs focus:outline-none"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-1 text-xs rounded-md hover:bg-blue-600"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Payment Settings */}
                    <div className="bg-white sm:p-4 w-[450px] shadow-md rounded-md">
                        <h3 className="sm:text-lg font-semibold mb-2">Payment Settings</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Card Number</label>
                                <input
                                    type="text"
                                    name="cardNumber"
                                    value={formData.cardNumber}
                                    onChange={handleChange}
                                    className="mt-1 p-2 block w-full border-b border-gray-300 text-xs focus:outline-none"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Card Expiry</label>
                                <input
                                    type="text"
                                    name="cardExpiry"
                                    value={formData.cardExpiry}
                                    onChange={handleChange}
                                    className="mt-1 p-2 block w-full border-b border-gray-300 text-xs focus:outline-none"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Card CVV</label>
                                <input
                                    type="text"
                                    name="cardCVV"
                                    value={formData.cardCVV}
                                    onChange={handleChange}
                                    className="mt-1 p-2 block w-full border-b border-gray-300 text-xs focus:outline-none"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-1 text-xs rounded-md hover:bg-blue-600"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserProfileSettings;
