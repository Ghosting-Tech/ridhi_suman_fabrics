import AdminNavbar from "@/components/layout/admin/AdminNavbar";

import ShiprocketProvider from "@/provider/ShiprocketProvider";

const layout = ({ children }) => {
  return (
    <ShiprocketProvider>
      <AdminNavbar />

      {children}
    </ShiprocketProvider>
  );
};

export default layout;
