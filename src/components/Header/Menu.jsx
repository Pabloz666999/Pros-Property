import Link from "next/link";

export default function Menu({ scrolled }) {
  return (
    <ul
      className={`space-y-6 md:space-y-0 md:flex md:gap-8 ${
        scrolled ? "md:text-black" : "md:text-white"
      }`}
    >
      <li>
        <Link href="/">Homepage</Link>
      </li>
      <li>
        <Link href="/listings">Listings</Link>
      </li>
      <li>
        <Link href="/agents">Agents</Link>
      </li>
      <li>
        <Link href="/my-favorite">My Favorites</Link>
      </li>
    </ul>
  );
}
