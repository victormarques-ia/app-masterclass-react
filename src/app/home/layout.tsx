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
  const { token, loading } = useContext(AppContext);

  useEffect(() => {
    if (!loading && !token) {
      router.replace("/sign-in");
    }
  }, [router, token, loading]);

  if (loading || !token) {
    return <>Loading...</>;
  }

  return <Layout>{children}</Layout>;
}
