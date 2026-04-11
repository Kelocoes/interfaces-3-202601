"use client";

import { useParams } from "next/navigation";

export default function Profile() {
    const id = useParams().id;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-semibold">Profile</h1>
            <p className="mt-2">This is the profile page.</p>
            <p className="mt-2">The user is {id}</p>
        </div>
    );
}