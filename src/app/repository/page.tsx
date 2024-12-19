"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { signOut } from "next-auth/react";

export default function page() {
  return (
    <div>
      <Button
        onClick={() => {
          void signOut();
        }}
      >
        Sign Out
      </Button>
    </div>
  );
}
