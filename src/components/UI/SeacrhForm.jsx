"use client";
import React from "react";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function SearchForm({ 
  btnClassName, 
  inputClassName, 
  wrapperClassName, 
  placeholder
 }) {
  const searchParams = useSearchParams();
  const[value, setValue] =  useState(searchParams.get("search") || "");

    return (
    <form className={`flex gap-3 md:mx-auto md:max-w-[578px] ${wrapperClassName}`}>
        <input placeholder={placeholder} type="text" value={value} onChange={(e) => setValue(e.target.value)} name="search" className={`input bg-white w-full rounded-sm h-[40px] ${inputClassName} placeholder:text-sm`}/>
        <button className={`btn text-white bg-blue-600 rounded-sm w-[80px] ${btnClassName}`}>Search</button>
      </form>
    );
}