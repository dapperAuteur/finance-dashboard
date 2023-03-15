import Link  from "next/link";
export default function Transaction(){
  return (
    <>
      <h2><Link href="/">Home</Link></h2>
      <h1>Transaction</h1>
      <div>
        <h6>March 23, 2023</h6>
        <h2>-$13.34</h2>
        <h5>Everythings.ForSale</h5>
        <h6>Description:</h6>
        <h6>Dope Merch.</h6>
      </div>
    </>

  )
}