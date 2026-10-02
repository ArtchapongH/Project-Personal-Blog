import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const defaultAuthContext = {
  state: {
    loading: false,
    error: null,
    user: null,
  },
  login: async () => {},
  logout: () => {},
  register: async () => {},
  isAuthenticated: false,
};

const AuthContext = React.createContext(defaultAuthContext);

const API_BASE_URL = import.meta.env.DEV
  ? "/api"
  : import.meta.env.VITE_API_BASE_URL || "";

function decodeJwtPayload(token) {
  try {
    const payload = token.split(".")[1];
    if (!payload) return null;

    const normalized = payload.replace(/-/g, "+").replace(/_/g, "/");
    const decoded = atob(normalized);
    return JSON.parse(decoded);
  } catch {
    return null;
  }
}

function AuthProvider(props) {
  const navigate = useNavigate();

  const [state, setState] = useState({
    loading: false,
    error: null,
    user: null,
  });

  const [notifications, setNotifications] = useState([]);

  const fetchNotifications = useCallback(async () => {
    if (!localStorage.getItem("token")) {
      setNotifications([]);
      return;
    }
    try {
      const result = await axios.get(`${API_BASE_URL}/comments/commenters`, {
        headers: { "X-Skip-Auth-Redirect": "true" },
      });
      setNotifications(result?.data?.commenters ?? []);
    } catch {
      setNotifications([]);
    }
  }, []);

  // load on app start (token already stored) and after login/logout
  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications, state.user]);

  const login = async (data) => {
    try {
      setState((prev) => ({ ...prev, loading: true, error: null }));

      const payload = {
        email: data?.email ?? data?.Email,
        password: data?.password ?? data?.Password,
      };

      const result = await axios.post(`${API_BASE_URL}/login`, payload);
      const token = result?.data?.token;

      if (!token) {
        throw new Error("Token not found in login response");
      }

      localStorage.setItem("token", token);

      const userDataFromToken = decodeJwtPayload(token);
      const isAdminLogin = userDataFromToken?.role === "admin";
      setState((prev) => ({ ...prev, user: userDataFromToken, loading: false }));
      navigate(isAdminLogin ? "/admin/article/mgt" : "/");
    } catch (error) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: error?.response?.data?.message || "Login failed",
      }));
      throw error;
    }
  };

  const register = async (data) => {
    try {
      setState((prev) => ({ ...prev, loading: true, error: null }));

      const email = (data?.email ?? data?.Email ?? "").trim();
      const normalizedEmail = email.toLowerCase();
      const role = normalizedEmail === "adminnick@gmail.com" ? "admin" : "user";

      const payload = {
        name: data?.name ?? data?.Name,
        username: data?.username ?? data?.Username,
        email,
        password: data?.password ?? data?.Password,
        role,
      };
      await axios.post(`${API_BASE_URL}/register`, payload);
      setState((prev) => ({ ...prev, loading: false }));
      navigate("/");
    } catch (error) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: error?.response?.data?.message || "Register failed",
      }));
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setState((prev) => ({ ...prev, user: null, error: null }));
    navigate("/", { replace: true });
  };

  const isAuthenticated = Boolean(localStorage.getItem("token"));

  return (
    <AuthContext.Provider
      value={{ state, login, logout, register, isAuthenticated, notifications, fetchNotifications }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

// this is a hook that consume AuthContext
const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
