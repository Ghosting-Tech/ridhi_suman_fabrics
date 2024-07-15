import AdminNavbar from "@/components/layout/admin/AdminNavbar";

const layout = ({ children }) => {
  return (
    <>
      <AdminNavbar />
      {children}
    </>
  );
};

export default layout;
