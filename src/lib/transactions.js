import fs from  'fs';
import path from 'path';
import matter from 'gray-matter';

const tranxDirectory = path.join(process.cwd(), 'transactions');

export function getSortedTranxData() {
  // Get file names under /transactions
  const fileNames = fs.readdirSync(tranxDirectory);
  const allTranxData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(tranxDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the tranx metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort tranx by date
  return allTranxData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllTranxIds() {
  const fileNames = fs.readdirSync(tranxDirectory);
  // Returns an array that looks like this:
  // 
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export function getTranxData(id) {
  const fullPath = path.join(tranxDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Combine the data with the id
  return {
    id,
    ...matterResult.data,
  };
}