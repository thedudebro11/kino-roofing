"use client";

declare global {
  interface Window {
    plausible?: (...args: any[]) => void;
  }
}

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function TrackedCTA() {
  return (
    <Button
      asChild
      onClick={() => {
        if (typeof window !== "undefined" && window.plausible) {
          window.plausible("CTA-Section-FreeInspection");
        }
      }}
      className="bg-orange-600 hover:bg-orange-700"
    >
      <Link href="/contact" className="flex items-center gap-2">
        <Phone className="h-4 w-4" />
        Request Free Inspection
      </Link>
    </Button>
  );
}
