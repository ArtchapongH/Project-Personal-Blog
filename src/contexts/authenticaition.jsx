import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

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
      setState((prev) => ({ ...prev, user: userDataFromToken, loading: false }));
      navigate("/");
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

      const payload = {
        name: data?.name ?? data?.Name,
        username: data?.username ?? data?.Username,
        email: data?.email ?? data?.Email,
        password: data?.password ?? data?.Password,
        role: "user",
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
      value={{ state, login, logout, register, isAuthenticated }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

// this is a hook that consume AuthContext
const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
