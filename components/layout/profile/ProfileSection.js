"use client";

import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { MdEmail } from "react-icons/md";
import { PhoneIcon, UserIcon } from "@heroicons/react/24/solid";

import { useSession } from "next-auth/react";

import Image from "next/image";

const ProfileCard = () => {
  const { data: session, status } = useSession();

  if (status === "loading") return null;

  return (
    <Card className="w-fit flex flex-row gap-6 p-6">
      <CardHeader floated={false} className="relative h-48 w-48">
        <Image
          src={session?.user?.image.url}
          alt="Profile Picture"
          fill
          style={{
            objectFit: "contain",
            objectPosition: "top",
          }}
        />
      </CardHeader>

      <CardBody className="text-left flex justify-center items-start flex-col">
        <div className="flex items-center gap-4 capitalize mb-8">
          <UserIcon className="inline-block h-10 w-10" size={20} />

          <Typography variant="h3" color="blue-gray" className="text-5xl">
            {session?.user?.name}
          </Typography>
        </div>

        <div className="flex items-center gap-4 mb-2 ml-3">
          <MdEmail className="inline-block" size={20} />

          <Typography
            variant="h4"
            color="blue-gray"
            className="font-normal text-xl"
          >
            {session?.user?.email}
          </Typography>
        </div>

        <div className="flex items-center gap-4 ml-3">
          <PhoneIcon className="inline-block h-5 w-5" />

          <Typography
            variant="h4"
            color="blue-gray"
            className="font-normal text-xl"
          >
            {session?.user?.phoneNumber}
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProfileCard;
