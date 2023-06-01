"use client";

import { useContext, useEffect } from "react";
import Layout from "../../components/Layout";
import { AppContext } from "../../contexts/AppContext";
import { useRouter } from "next/navigation";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { token } = useContext(AppContext);

  useEffect(() => {
    if (!token) {
      router.replace("/sign-in");
    }
  }, [router, token]);

  if (!token) {
    return <>Loading...</>;
  }

  return <Layout>{children}</Layout>;
}
