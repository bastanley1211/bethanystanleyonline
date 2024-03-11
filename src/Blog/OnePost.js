// src/components/OnePost.js

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function OnePost() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          publishedAt,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        "authorImage": author->image,
       }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };

  const postDate = new Date(postData.publishedAt).toLocaleDateString('en-us', options)
  
  console.log(postDate)

  return (
    <div>
      <div>
        <h2>{postData.title}</h2>
        <p>{postDate}</p>
      </div>
      <img src={urlFor(postData.mainImage).width(200).url()} alt="" />
      <div>
        <BlockContent
          blocks={postData.body}
          projectId={sanityClient.projectId}
          dataset={sanityClient.dataset}
          imageOptions={{w: 320, h: 240, fit: 'max'}}
        />
      </div>
      <div className="blockquote">
      <img
            src={urlFor(postData.authorImage).width(100).url()}
            alt="Author is Kap"
          />
           <h4>{postData.name}</h4>
      </div>
      <div>
        <Link className="h5" to="/blog">Return to All Posts</Link>
      </div>
    </div>
  );
}