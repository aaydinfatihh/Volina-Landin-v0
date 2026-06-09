import type { Metadata } from "next";
import PanelContent from "./PanelContent";

export const metadata: Metadata = {
  title: "Panel — Volina",
};

export default function Page() {
  return <PanelContent />;
}
