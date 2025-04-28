import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agent Conversation | GameByte",
  description: "Interactive agent conversation powered by GameByte",
  openGraph: {
    title: "Agent Conversation | GameByte",
    description: "Interactive agent conversation powered by GameByte",
    type: "website",
  },
};

export default function AgentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 