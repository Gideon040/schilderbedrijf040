import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default async function handler(req, res) {
  const projectsDirectory = path.join(process.cwd(), 'content/projects');
  const fileNames = await fs.readdir(projectsDirectory);

  const projects = await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = path.join(projectsDirectory, fileName);
      const fileContents = await fs.readFile(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        ...data,
        content,
        slug: fileName.replace(/\.md$/, ''),
      };
    })
  );

  res.status(200).json(projects);
} 