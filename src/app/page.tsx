import { Information } from "../components/Information";
import Image from "next/image";
import nightRoad from "../../public/night-road.jpg";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Image src={nightRoad} quality={100} alt="" fill />
      <Information />
    </main>
  );
}
