import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar, IconButton, Card } from "@material-tailwind/react";
import { IoIosSearch } from "react-icons/io";
import { navList } from "@/utils/navList";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { CgProfile } from "react-icons/cg";
import { LiaSignOutAltSolid } from "react-icons/lia";
import Image from "next/image";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="max-h-[768px]">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-1 lg:px-8 lg:py-1">
        <div className="flex items-center justify-between">
        <Link href="/">
            <Card className="shadow-none cursor-pointer">
              <div className="block sm:max-w-[180px] max-w-[115px]">
                <Image
                  src="/ridhi-logo.png"
                  alt="logo"
                  width={180}
                  height={65} 
                />
              </div>
            </Card>
          </Link>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center">
              {isLoggedIn ? (
                <div className="mr-4">
                  <div
                    className="flex items-center gap-4 cursor-pointer"
                    onClick={() => setOpenProfile((prev) => !prev)}
                  >
                    <Menu>
                      <MenuHandler>
                        <Avatar
                          variant="circular"
                          alt="tania andrew"
                          className="cursor-pointer object-fill w-12 h-12"
                          src="/profile-image.png"
                        />
                      </MenuHandler>
                      <MenuList className="z-40 min-w-[180px] ">
                        <MenuItem className="flex items-center gap-2  ">
                          <CgProfile />

                          <Typography variant="small" className="font-medium">
                            My Profile
                          </Typography>
                        </MenuItem>
                        <hr className="my-2 border-blue-gray-50" />
                        <MenuItem className="flex items-center gap-2 ">
                          <svg
                            width="16"
                            height="14"
                            viewBox="0 0 16 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V13C0 13.2652 0.105357 13.5196 0.292893 13.7071C0.48043 13.8946 0.734784 14 1 14C1.26522 14 1.51957 13.8946 1.70711 13.7071C1.89464 13.5196 2 13.2652 2 13V1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0ZM11.293 9.293C11.1108 9.4816 11.01 9.7342 11.0123 9.9964C11.0146 10.2586 11.1198 10.5094 11.3052 10.6948C11.4906 10.8802 11.7414 10.9854 12.0036 10.9877C12.2658 10.99 12.5184 10.8892 12.707 10.707L15.707 7.707C15.8945 7.51947 15.9998 7.26516 15.9998 7C15.9998 6.73484 15.8945 6.48053 15.707 6.293L12.707 3.293C12.6148 3.19749 12.5044 3.12131 12.3824 3.0689C12.2604 3.01649 12.1292 2.9889 11.9964 2.98775C11.8636 2.9866 11.7319 3.0119 11.609 3.06218C11.4861 3.11246 11.3745 3.18671 11.2806 3.2806C11.1867 3.3745 11.1125 3.48615 11.0622 3.60905C11.0119 3.73194 10.9866 3.86362 10.9877 3.9964C10.9889 4.12918 11.0165 4.2604 11.0689 4.3824C11.1213 4.50441 11.1975 4.61475 11.293 4.707L12.586 6H5C4.73478 6 4.48043 6.10536 4.29289 6.29289C4.10536 6.48043 4 6.73478 4 7C4 7.26522 4.10536 7.51957 4.29289 7.70711C4.48043 7.89464 4.73478 8 5 8H12.586L11.293 9.293Z"
                              fill="#90A4AE"
                            />
                          </svg>
                          <Typography variant="small" className="font-medium">
                            Sign Out
                          </Typography>
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </div>
                </div>
              ) : (
                <Link
                  href={"/login"}
                  className="mr-4 px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Login
                </Link>
              )}
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 flex text-inherit text-black hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <LiaSignOutAltSolid />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
        </div>
        {openNav && (
          <div className="lg:hidden">
            <div className="bg-white w-full border-t border-gray-200 mt-2">
              {navList}
            </div>
          </div>
        )}
      </Navbar>
    </div>
  );
};

export default Header;