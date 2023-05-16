import { setCookieClient } from "@/lib/functions/storage.lib";
import { checkWindow } from "@/lib/functions/_helpers.lib";
import { setGlobalThemeMode } from "@/reduxtoolkit/slices/global.slice";
import React, { useEffect } from "react";
import { useAppDispatch } from "./useAppDispatch";
import { useAppSelector } from "./useAppSelector";

const useTheme = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.globalSlice);
  const toogleDarkMode = () => {
    if (checkWindow()) {
      const isLightMode = document.body.classList.contains("light-mode");

      if (isLightMode) {
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
        setCookieClient("theme", "dark-mode");
        dispatch(setGlobalThemeMode("dark-mode"));
      } else {
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
        setCookieClient("theme", "light-mode");
        dispatch(setGlobalThemeMode("light-mode"));
      }
    }
  };

  useEffect(() => {
    if (checkWindow()) {
      const isLightMode = document.body.classList.contains("light-mode");

      if (isLightMode) {
        dispatch(setGlobalThemeMode("light-mode"));
      } else {
        dispatch(setGlobalThemeMode("dark-mode"));
      }
    }
  }, []);

  return { toogleDarkMode, theme };
};

export default useTheme;
