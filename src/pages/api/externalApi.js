export async function getAllTranxIds(){
  // Instead of the file system,
  // fetch tranx data from an external API endpoint
  const res = await fetch('..');
  const posts = await res.json();
  return posts.map((post) => {
    return {
      params: {
        id: post.id,
      },
    };
  });
}

export async function getUsers(){
  const url = 'https://us-west-2.aws.data.mongodb-api.com/app/data-vzrnb/endpoint/data/v1';
  const res = await fetch(url);
  const users = await res.json();
  console.log('users :>> ', users);
  return users.map((user) => {
    return {
      params: {
        id: user.id,
      },
    };
  });
}