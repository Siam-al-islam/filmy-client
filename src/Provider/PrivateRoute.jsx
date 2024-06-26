import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebase.config";
import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const PrivateRoute = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(auth);
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => {
            unSubscribe();
        }
    }, [])

    if (loading) {
        return <span className="loading loading-spinner loading-lg">
        </span>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login" />
};

export default PrivateRoute;