import Link from "next/link";


export default function Home() {

  let linkStyles = "underline text-cyan-600 hover:text-black";
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <li><Link href="./week-2/" className={linkStyles}>Week-2</Link></li>
      <li><Link href="./week-3/" className={linkStyles}>Week-3</Link></li>
      <li><Link href="./week-4/" className={linkStyles}>Week-4</Link></li>
      <li><Link href="./week-5/" className={linkStyles}>Week-5</Link></li>
      <li><Link href="./week-6/" className={linkStyles}>Week-6</Link></li>
      <li><Link href="./week-7/" className={linkStyles}>Week-7</Link></li>
      <li><Link href="./week-8/" className={linkStyles}>Week-8</Link></li>
      
    </main>
  );
}
