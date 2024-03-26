'use client'

import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold">Hello World!</h1>
      <Button text="click me!!" clickHandler={() => {console.log('hi')}}/>
    </main>
  );
}
