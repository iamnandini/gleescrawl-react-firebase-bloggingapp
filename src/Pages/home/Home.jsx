import React, { useEffect, useState } from "react";
import "./home.css";
import { getDocs, collection, doc, deleteDoc } from "firebase/firestore";
import { auth, db, provider } from "../../firebase-config";

function Home({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [deletePost]);

  return (
    <div className="homePage">
      <div className='home-header'>
        <p className='font'>GleeScrawl</p>
        <h2>Share Your Views...</h2>
      </div>
      {postLists.map((post) => {
        const currentUser = auth.currentUser; // Store auth.currentUser in a variable
        return (
          <div className="post" key={post.id}>
            <div className="postHeader">
              <div className="title">
                <h1>{post.title}</h1>
              </div>
              <div className="deletePost">
                {currentUser && post.author.id === currentUser.uid && (
                  <button
                    onClick={() => {
                      console.log("Delete button clicked for post:", post.id);
                      deletePost(post.id);
                    }}
                  >
                    {" "}
                    &#128465;
                  </button>
                )}
              </div>
            </div>
            <div className="postTextContainer"> {post.postText} </div>
            <h3>@{post.author && post.author.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Home;

