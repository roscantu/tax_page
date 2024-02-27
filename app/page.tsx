import Image from "next/image";

export default function Home() {
  return (
    <Button/>
  );
}

function Button() {
  return (
    <h1 className="bg-blue-500 hover:bg-red-400">beep</h1>
  )
}