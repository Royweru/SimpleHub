import handler from "./api/resources"

export default function Home() {
  const images = handler;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <div>
      {images}
     </div>
    </main>
  )
}
