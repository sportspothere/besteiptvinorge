import { Suspense } from "react";
import type { Metadata } from "next";
import ThankYou from "@/components/ThankYou";

export const metadata: Metadata = {
  title: "Takk for din interesse | Beste IPTV i Norge",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return <Suspense fallback={<p className="p-8">Laster ?</p>}><ThankYou /></Suspense>;
}
