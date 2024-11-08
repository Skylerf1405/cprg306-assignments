"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";


export default function SignInPage() {

    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();


    async function handleSignIn() {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    async function handleSignOut() {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    }



    return(
        <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <header className="mb-8">
                <h1 className="text-center text-4xl font-bold text-gray-800">Shopping List Log In</h1>
            </header>
            {user ? (
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <p className="text-xl mb-4">Welcome</p>
                    <button 
                        type="button" 
                        className="text-lg bg-blue-600 text-white rounded px-4 py-2 mt-4 hover:bg-blue-700"
                        onClick={handleSignOut}
                    >
                        Sign Out
                    </button>
                    <Link href="/week-10/shopping-list/">
                        <p className="block mt-4 text-blue-600 hover:underline">Shopping List</p>
                    </Link>
                </div>
            ) : (
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <button 
                        type="button" 
                        className="text-lg bg-blue-600 text-white rounded px-4 py-2 mt-4 hover:bg-blue-700"
                        onClick={handleSignIn}
                    >
                        Sign In with GitHub
                    </button>
                </div>
            )}
        </main>
    );
}