"use client";
import { store } from "@/redux/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

export default function ClientProvider({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <div className="flex gap-[20px]">{children}</div>
    </Provider>
  );
}
