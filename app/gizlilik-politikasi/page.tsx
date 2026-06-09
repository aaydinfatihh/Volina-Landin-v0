import type { Metadata } from "next";
import PrivacyContent from "./PrivacyContent";

export const metadata: Metadata = {
  title: "Gizlilik Politikası — Volina",
};

export default function GizlilikPolitikasi() {
  return <PrivacyContent />;
}
