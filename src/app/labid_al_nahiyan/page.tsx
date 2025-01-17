'use client';

import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Labid(){

    
    useEffect(() => {
        redirect('/')
    }, []);

    return null
}