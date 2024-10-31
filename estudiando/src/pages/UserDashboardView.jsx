import React from 'react';
import { useAuth } from "../context/AuthContext";
import UserDashboard from "../components/UserDashboard";
import Navbar from "../components/Navbar";
import FloatingButton from "../components/FloatingButton";
import AdminCheck from "../components/AdminCheck"; 

function UserDashboardView() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <AdminCheck>
        {(isAdmin) => (
          <>
            <UserDashboard />
            <FloatingButton isAdmin={isAdmin} />
          </>
        )}
      </AdminCheck>
    </div>
  );
}

export default UserDashboardView;