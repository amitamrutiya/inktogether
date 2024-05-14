import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <div>Only autenticated user can see</div>
      <UserButton />
    </div>
  );
}
