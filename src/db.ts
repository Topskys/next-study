import { JSONFilePreset } from "lowdb/node";

type Posts = {
  id: string;
  title: string;
  content: string;
};

const defaultData: { posts: Posts[] } = {
  posts: [],
};
const db = await JSONFilePreset("db.json", defaultData);

// await db.update(({ posts }) => posts.push("foo"));
// db.data.posts.push("bar");

// await db.write();

export default db;
