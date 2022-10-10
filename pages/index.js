import Head from "next/head";
import Message from "../components/message";
import { useEffect, useState } from "react";
import { db } from "../utils/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Link from "next/link";

export default function Home() {
  const [allPosts, setAllPosts] = useState([]);

  const getPosts = async () => {
    const collectionRef = collection(db, "posts");
    const q = query(collectionRef, orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setAllPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return unsubscribe;
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <Head>
        <title>Bloggy</title>
        <meta name="description" content="Next js application" />
        <link rel="icon" href="/static/favicon.ico" />
      </Head>
      <main>
        <h2 className="font-medium text-center text-2xl mb-10">
          📚 POST YOUR BLOGS, SHARE YOUR THOUGHTS 📚
        </h2>
        <div className="text-md bg-white">
          {allPosts.map((post) => (
            <Message {...post} key={post.id}>
              <Link href={{ pathname: `/${post.id}`, query: { ...post } }}>
                <button className="bg-pink-400 rounded px-2 py-1 hover:bg-pink-600">
                  {post.comments?.length > 0 ? post.comments?.length : 0}{" "}
                  COMMENTS
                </button>
              </Link>
            </Message>
          ))}
        </div>
      </main>
    </div>
  );
}
