import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faPercentage, faCalendarAlt, faDollarSign } from "@fortawesome/free-solid-svg-icons";

export default function CouponPage() {
    const [couponType, setCouponType] = useState("percentage");

    return (
        <div className="flex justify-center items-start m-10">
            {/* Existing Coupons */}
            <div className="w-1/2 pr-4">
                <h2 className="text-lg font-bold mb-4">Active Coupons</h2>
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                    {/* hardcoded coupons */}
                    <div className="mb-4 flex p-4 bg-white rounded-lg items-center">
                        <div className="mr-3 text-blue-500">
                            <FontAwesomeIcon icon={faTag} />
                        </div>
                        <div>
                            <p className="text-gray-800 font-medium">Coupon 1: 10% off</p>
                            <p className="text-gray-600">Expires on 31-Dec-2024</p>
                        </div>
                    </div>
                    <div className="mb-4 flex p-4 bg-white rounded-lg items-center">
                        <div className="mr-3 text-blue-500">
                            <FontAwesomeIcon icon={faTag} />
                        </div>
                        <div>
                            <p className="text-gray-800 font-medium">Coupon 2: $20 off</p>
                            <p className="text-gray-600">Expires on 15-Jan-2025</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* This form is to Create Coupons */}
            <div className="w-1/2 pl-4">
                <h2 className="text-lg font-bold mb-4">Create New Coupon</h2>
                <form className="bg-white p-4 rounded-lg shadow-md">
                    <div className="mb-4 flex items-center">
                        <div className="mr-3 text-blue-500">
                            <FontAwesomeIcon icon={faTag} />
                        </div>
                        <input type="text" placeholder="Coupon Code" className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4 flex items-center">
                        <div className="mr-3 text-blue-500">
                            <FontAwesomeIcon icon={faDollarSign} />
                        </div>
                        <select
                            value={couponType}
                            onChange={(e) => setCouponType(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        >
                            <option value="percentage">Percentage</option>
                            <option value="fixed">Fixed Amount</option>
                        </select>
                    </div>
                    <div className="mb-4 flex items-center">
                        <div className="mr-3 text-blue-500">
                            <FontAwesomeIcon icon={couponType === "percentage" ? faPercentage : faDollarSign} />
                        </div>
                        <input
                            type="number"
                            placeholder={couponType === "percentage" ? "Discount (%)" : "Discount Amount"}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4 flex items-center">
                        <div className="mr-3 text-blue-500">
                            <FontAwesomeIcon icon={faCalendarAlt} />
                        </div>
                        <input type="date" placeholder="Expiration Date" className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Create Coupon</button>
                </form>
            </div>
        </div>
    );
}
