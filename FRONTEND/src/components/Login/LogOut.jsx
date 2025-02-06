import React from "react";
import { useClerk, SignedIn } from "@clerk/clerk-react";

const LogoutButton = () => {
    const { signOut } = useClerk();

    const handleLogout = async () => {
        // Call Clerk's signOut function; you can optionally pass a redirect URL.
        await signOut({ redirectUrl: "/" });
    };

    return (
        <SignedIn>
            <button
                onClick={handleLogout}
                className="bg-red-500 text-white py-2 px-4 rounded-lg"
            >
                Logout
            </button>
        </SignedIn>
    );
};

export default LogoutButton;
