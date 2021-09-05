import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <div className={'flex justify-center items-center mt-6'}>
    <button
        className={`bg-red py-2 px-4 text-sm text-white rounded border border-red focus:outline-none focus:border-red-dark`}
        onClick={() => logout({ returnTo: window.location.origin })}
    >
        Logout
    </button>
</div>
  );
};

export default LogoutButton;