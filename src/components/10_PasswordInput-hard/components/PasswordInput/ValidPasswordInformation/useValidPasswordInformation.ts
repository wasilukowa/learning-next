import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useValidPasswordInformation = () => {
  const nav = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      nav("/");
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
};
