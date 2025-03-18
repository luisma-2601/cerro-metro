import React from "react";
import { useNavigate } from "react-router";

export default function Boton_secundario({text, link}) {
    const navigation = useNavigate();
    return (
        <button onClick={()=> navigation(link)} className="px-4 py-2 border-3 border-blue-950 text-blue-950 rounded-xl hover:bg-blue-700 hover:text-white active:bg-blue-400 active:text-white whitespace-nowrap transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
        {text}
        </button>
    );
}