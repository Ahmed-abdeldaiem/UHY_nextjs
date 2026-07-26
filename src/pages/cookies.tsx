import { useEffect } from "react";
import { useRouter } from "next/router";

/** Legacy route — cookies content lives on the Privacy page. */
export default function CookiesRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    void router.replace("/privacy#cookies");
  }, [router]);

  return null;
}
