// https://www.youtube.com/watch?v=wK7yv3rFx3M

import Image from "next/image";
import image from "./profile.jpg"

export default function Home() {
  return (
    <main className="p-10">
      <div className="group gap-6 flex transition duration-500 hover:shadow-xl rounded-xl bg-muted shadow-sm border p-6">
        <div className="aspect-square group-hover:scale-125 transition duration-500 group-hover:-rotate-12 border-2 border-primary-foreground w-20 rounded-md overflow-hidden relative
        ">
          <Image src={image} alt="" className="h-20 w-20" />
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-xl mb-1">nino</h2>
          <p className="text-muted-foreground">Webアプリ開発</p>
        </div>
      </div>

      <div className="[perspective:800px">
        <div className="border [transform:rotateY(-15deg)_rotateX(45deg)] rounded-md shadow-ms mt-20">
          <div className="flex gap-2 p-4 border-b *:size-2 *:rounded-full bg-muted/50">
            <div className="bg-red-500"></div>
            <div className="bg-yellow-500"></div>
            <div className="bg-green-500"></div>
          </div>
          <div className="aspect-video"></div>
        </div>
      </div>
    </main>
  );
}
