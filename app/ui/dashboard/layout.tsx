import NavLinks from "./nav-links";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <div className="flex flex-col md:flex-row h-screen">
        <NavLinks />
        {children}
    </div>
  );
}