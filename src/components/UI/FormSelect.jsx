// src/components/UI/FormSelect.jsx
import React from "react";

export default function FormSelect({ options = [], label, onChange, value }) {
    return (
        <fieldset className="fieldset">
            {label && (
                <div className="label md:hidden">
                    <span className="label-text font-semibold">{label}</span>
                </div>
            )}
            <select 
                value={value}
                onChange={onChange}
                className="select select-bordered w-full md:w-[200px] bg-white text-black border-gray-300 focus:border-blue-500"
            >
                <option value="" className="bg-white text-black">{label}</option>
                {
                    options.map((option) => {
                        return (
                            <option 
                                key={option.value} 
                                value={option.value}
                                className="bg-white text-black" // Pastikan isi dropdown juga putih-hitam
                            >
                                {option.label}
                            </option>
                        )
                    })
                }
            </select>
        </fieldset>
    );
}