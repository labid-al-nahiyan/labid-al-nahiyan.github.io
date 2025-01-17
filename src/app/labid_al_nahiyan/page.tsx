'use client';

import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Labid(){

    
    useEffect(() => {
        redirect('/')
    }, []);

    return <div><Link href="https://labid-al-nahiyan.github.io/">Updated Link : </Link>if redirect Does not work (sorry :=)</div>
}