import { Information } from "../components/Information";
import Image from "next/image";
import nightRoad from "../../public/night-road.jpg";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Information />
    </main>
  );
}
