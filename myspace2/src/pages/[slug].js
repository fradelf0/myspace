import { getAllPostSlugs, getPostData } from '../../lib/posts';
import Link from 'next/link';

export async function getStaticPaths() {
  const paths = getAllPostSlugs();  // This function should return an array of objects with params and slug
  return {
    paths,
    fallback: false,  // If fallback is false, any path not returned by getStaticPaths will result in a 404
  };
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.slug);  // Fetches post data based on the slug
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <article className="max-w-2xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
      <p className="text-gray-500 mb-8">{new Date(postData.date).toLocaleDateString()}</p>
      <div className="prose">
        {postData.content}
      </div>
      <Link href="/blog">
        <a className="mt-8 block text-blue-600">Back to Blog</a>
      </Link>
    </article>
  );
}
