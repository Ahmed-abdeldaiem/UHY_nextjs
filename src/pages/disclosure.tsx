import { useEffect } from "react";
import { useRouter } from "next/router";

/** Legacy route — disclosure content lives on the Privacy page. */
export default function DisclosureRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    void router.replace("/privacy#disclosure");
  }, [router]);

  return null;
}
