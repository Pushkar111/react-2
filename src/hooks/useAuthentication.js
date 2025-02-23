// useAuthentication.js hook is used to check if the user is authenticated or not.
// if the user is authenticated, it will return the children [Dashboard], otherwise it will redirect to the login page.

import { useAuth } from "../components/16thFeb2025/AuthContext";

export const useAuthentication = () => {
    return useAuth();
}