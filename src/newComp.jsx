import React from "react";
export default function NewComp() {
  return (
    <nav className="bg-white h-24 p-5 pl-96">
    
    <div className="flex items-center">
    <div className="bg-gray-200	 h-12 w-3/5 flex items-center relative rounded-lg">
    <input className="w-full bg-gray-200 pl-40" placeholder="Search here"/>
     <select className="ml-2 absolute left-0 font-bold bg-gray-200">
<option value="Menus">Menus</option>
<option value="Option 2">Option 2</option>
<option value="Option 3">Option 3</option>
</select>
<svg xmlns="http://www.w3.org/2000/svg" className="mr-6 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="	#C0C0C0" strokeWidth={2}>
<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>
</div>
<div className="flex items-center justify-around">
<svg xmlns="http://www.w3.org/2000/svg" className="ml-14 mr-6 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
<path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
<svg className="ml-5" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="50" height="50" rx="5" fill="#D9D9D9"/>
</svg>
<div className="ml-3 items-start">
  <div className="flex items-center">
<h1 className="text-lg font-bold">Dhruv</h1>
<svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
</svg>
</div>
<p>dhruvkaneriya@rocketmail.com</p>
</div>
</div>
</div>


</nav>
  )
}
