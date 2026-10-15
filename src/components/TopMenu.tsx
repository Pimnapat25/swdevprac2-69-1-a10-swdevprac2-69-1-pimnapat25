import Image from "next/image";
import { getServerSession } from "next-auth";
import TopMenuItem from "./TopMenuItem";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export default async function TopMenu() {
  const session = await getServerSession(authOptions);

  return (
    <header className="fixed top-0 left-0 z-30 flex h-16 w-full flex-row border-b border-gray-200 bg-white shadow-sm">
      {/* Sign-In / Sign-Out menu item */}
      {session ? (
        <TopMenuItem title="Sign-Out" pageRef="/api/auth/signout" />
      ) : (
        <TopMenuItem title="Sign-In" pageRef="/api/auth/signin" />
      )}

      {/* empty space */}
      <div className="flex-1" />

      {/* Booking menu item */}
      <TopMenuItem title="Booking" pageRef="/booking" />

      {/* logo box */}
      <div className="flex h-full w-28 items-center justify-center border-l border-gray-200 bg-white">
        <Image
          src="/img/logo.jpg"
          alt="Venue Explorer logo"
          width={64}
          height={64}
          className="object-contain"
        />
      </div>
    </header>
  );
}
