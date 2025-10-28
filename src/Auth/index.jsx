import { Outlet } from "react-router";

export const AuthLayout = () => {
  return (
    <div className="">
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};
