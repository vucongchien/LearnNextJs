import NavLinks from "./dashboard/nav-links";
import SideNav from "./dashboard/sidenav";

export const experimental_ppr = true

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <div className="flex h-screen">
        <SideNav />
        <div className="flex-col md:flex-row">
          {children}
        </div>
        
    </div>
  );
}