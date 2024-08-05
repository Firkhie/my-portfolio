"use client";

import { Toaster } from "react-hot-toast";

export default function ToasterProvider() {
  return (
    <Toaster
      toastOptions={{
        className: "sm:text-sm text-xs",
      }}
    />
  );
}
