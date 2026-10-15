import Button from "@mui/material/Button";
import { getServerSession } from "next-auth";
import DateReserve from "@/components/DateReserve";
import getUserProfile from "@/libs/getUserProfile";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export default async function BookingPage() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;

  const profile = await getUserProfile(session.user.token);
  const createdAt = new Date(profile.data.createdAt);

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900">Venue Booking</h1>

      <table className="mt-6 text-left text-gray-800">
        <tbody>
          <tr>
            <td className="pr-6 font-semibold">Name</td>
            <td>{profile.data.name}</td>
          </tr>
          <tr>
            <td className="pr-6 font-semibold">Email</td>
            <td>{profile.data.email}</td>
          </tr>
          <tr>
            <td className="pr-6 font-semibold">Tel.</td>
            <td>{profile.data.tel}</td>
          </tr>
          <tr>
            <td className="pr-6 font-semibold">Member Since</td>
            <td>{createdAt.toString()}</td>
          </tr>
        </tbody>
      </table>

      <form className="mt-8 flex max-w-sm flex-col gap-6">
        <DateReserve />
        <Button type="submit" name="Book Venue" variant="contained">
          Book Venue
        </Button>
      </form>
    </main>
  );
}
