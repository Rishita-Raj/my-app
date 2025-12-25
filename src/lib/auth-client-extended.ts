import { authClient } from "@/lib/auth-client";

export const authClientExtended = {
  ...authClient,

  customer: {
    async portal() {
      const res = await fetch("/api/billing/portal", {
        method: "POST",
      });

      if (!res.ok) {
        throw new Error("Failed to open billing portal");
      }

      const { url } = await res.json();
      window.location.href = url;
    },
  },
};
