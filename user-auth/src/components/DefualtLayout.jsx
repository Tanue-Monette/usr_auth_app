import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";

import { useStateContext } from "../contexts/ContextProvider";
import NavBar from "./NavBar";

export default function DefualtLayout() {
    const { user, token } = useStateContext();

    if (!token) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="">
            <div className="d-flex">
                <aside
                    className="d-flex flex-column p-3 mb-2 text-white col-3"
                    color="#212121"
                    style={{ backgroundColor:"#5b08a7"}}
                >
                    <div className="p-3">
                        <Link to="/dashboard" className="text-white">
                            Dashboard
                        </Link>
                    </div>
                    <div className="p-3 ">
                        <Link to="/users" className="text-white">
                            Users
                        </Link>
                    </div>
                </aside>
                <div className="content ">
                    <header
                        className="d-flex flex-column"
                        style={{ width: "989px" }}
                    >
                        <div className="d-flex justify-content-around bg-white w-auto p-3 ">
                            <div className="text-dark fs-lg">
                                <Link
                                    to="/dashboard"
                                    className="text-dark fs-lg"
                                >
                                    Home
                                </Link>
                            </div>
                            <div>
                                <Link
                                    to="/dashboard"
                                    className="text-dark fs-lg"
                                >
                                    User Info
                                </Link>
                            </div>
                        </div>
                    </header>
                    <main className="container p-3">
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    );
}
