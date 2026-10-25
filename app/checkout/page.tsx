import { Suspense } from "react";
import type { Metadata } from "next";
import Checkout from "@/components/Checkout";

export const metadata: Metadata = {
  title: "Bestill abonnement | Beste IPTV i Norge",
  robots: { index: false, follow: true },
};

export default function CheckoutPage() {
  return <Suspense fallback={<p className="p-8">Laster bestillingen …</p>}><Checkout /></Suspense>;
}
