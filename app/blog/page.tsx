import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "64 Milyon Kişiye Yeni Bir Gülüş — Volina",
};

export default function Page() {
  return <BlogContent />;
}
