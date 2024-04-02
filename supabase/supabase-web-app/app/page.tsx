import Image from "next/image";
import { TodoApp } from "../components/TodoApp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="flex justify-center items-center h-screen">
        <TodoApp />
      </section>

    </main>
  );
}
