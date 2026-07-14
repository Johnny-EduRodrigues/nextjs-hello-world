import Link from "next/link";

export default function Home() {
  return (
    <div>
      Johnny sou eu.{" "}
      <Link href="/about">
        About
      </Link>
    </div>
  );
}
