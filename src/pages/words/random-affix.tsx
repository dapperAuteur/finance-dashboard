import useSWR from 'swr';

const fetcher = (query: string) =>
  fetch('/api/graphql', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((json) => json.data)

type Data = {
  affixes: {
    morpheme: string
  }[]
}

const queryFindAffix = `
  findAffixes(
    limit: 2
  ){
    affixes{
      _id
      morpheme
      example
      meaning
    }
  }
`

export default function RandomAffix() {
  const { data, error, isLoading } = useSWR<Data>('{ affixes { morpheme } }', fetcher)

  if (error) {
    console.log('error :>> ', error);
    return <div>Failed to load</div>
  }
  if (isLoading) {
    console.log('isLoading :>> ', isLoading);
    return <div>Loading...</div>
  }
  console.log('data :>> ', data);
  if (!data) {
    console.log("!data");
    
    return null;
  }
  console.log('data :>> ', data);

  const { affixes } = data
  console.log('affixes :>> ', affixes);

  return (
    <div>
      {affixes.map((affix, index) => (
        <div key={index}>{affix.morpheme}</div>
      ))}
    </div>
  )
}