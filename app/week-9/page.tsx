"use client";

import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

export default function Week9Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      console.log("Starting GitHub login...");
      await gitHubSignIn();
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Check console.");
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout error:", error);
      alert("Logout failed. Check console.");
    }
  };

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Week 9 Shopping List</h1>

      {!user ? (
        <div>
          <p className="mb-4">Please sign in with GitHub to continue.</p>
          <button
            onClick={handleLogin}
            className="bg-black text-white px-4 py-2 rounded"
          >
            Login with GitHub
          </button>
        </div>
      ) : (
        <div>
          <p className="mb-4">
            Welcome, {user.displayName || "User"} ({user.email || "No email"})
          </p>

          <div className="flex gap-4">
            <Link
              href="/week-9/shopping-list"
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Go to Shopping List
            </Link>

            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </main>
  );
}