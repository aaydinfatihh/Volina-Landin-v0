import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "İletişim — Volina",
};

export default function Page() {
  return <ContactContent />;
}
