import Link from "next/link";


export default function Home() {
  return (
    <div className="flex h-screen w-screen text-lg justify-center items-center">
      <div className="m-3 border p-8  flex flex-col items-center">
        TODO APPLICATION
      
        <br/>
        <Link href="/signup" className="font-bold border-2 m-3 p-3">signup</Link>
        <br/>
        <Link href="/signin" className="font-bold border-2 m-3 p-3">signin</Link>
        </div>
    </div>
  );
}
