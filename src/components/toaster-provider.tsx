"use client";

import { Toaster } from "react-hot-toast";

export default function ToasterProvider() {
  return (
    <Toaster
      toastOptions={{
        className: "sm:text-sm text-xs",
        style: {
          background: "#1f1f1f",
          color: "#fff",
        },
      }}
    />
  );
}
