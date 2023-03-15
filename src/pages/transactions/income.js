import Link from "next/link";
export default function Income() {
  return(
    <>
    <h1>Income</h1>
    <h2>
      <Link href="/">Back to home</Link>
    </h2>
    <h2>
      <Link href="/transactions/expenses">Expenses</Link>
    </h2>
    </>
  );
}