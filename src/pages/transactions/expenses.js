import Link from "next/link";
export default function Expenses() {
  return (
    <>
      <h1>Expenses</h1>
      <Link href="/">Back to home</Link>
    <h2>
      <Link href="/transactions/income">Income</Link>
    </h2>
    </>
  );
}