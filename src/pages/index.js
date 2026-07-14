import Link from "next/link";

export default function Home() {
  return (
    <div>
      Eu sou o Johnny.{" "}
      <Link href="/about">
        About
      </Link>
    </div>
  );
}
