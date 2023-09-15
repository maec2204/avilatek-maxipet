import React from "react";
import NavBar from "./NavBar";
import CopyrightBar from "./CopyrightBar";
import FooterBar from "./FooterBar";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col h-screen overflow-x-hidden">
      <NavBar />
      <main className="flex-grow">{children}</main>
      <footer className="bg-background-200 pt-32">
        <FooterBar />
        <CopyrightBar />
      </footer>
    </div>
  );
}

export default Layout;
