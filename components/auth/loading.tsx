import Image from "next/image";

export default function Loading() {
  return (
    <div className="h-full w-full flex flex-col gap-y-4 justify-center items-center">
      <Image
        src="/loading.png"
        width={120}
        height={120}
        alt="Loading"
        className="animate-pulse duration-700"
      />
    </div>
  );
}
