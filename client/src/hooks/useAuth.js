// hooks/useAuth.js
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function UseAuth() {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated (you may use cookies, localStorage, or any other method)
    const user = localStorage.getItem('user');
    if (user) {
      setAuthenticated(true);

    } else {
      navigate('/signin'); // Redirect to the sign-in page if user is not authenticated
    }
  }, [navigate]);

  return authenticated;
}
