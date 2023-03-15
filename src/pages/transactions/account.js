import Link from "next/link";

export default function Account(){
  const accountName = "Greenwood Bank";
  const balance = "$100,000.00";
  return (
    <>
      <h2><Link href="/">Home</Link></h2>
      <h1>{accountName} Account</h1>
      <h1>{balance}</h1>
    </>
  )
}