// pages/blog/[slug].js
import { getAllPostIds, getPostData } from '../../../lib/posts';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <div>

      <main className="flex flex-col items-center justify-center min-h-screen px-4">
        <section className="w-full max-w-screen-lg mx-auto my-16">
          <article className="prose lg:prose-xl">
            <h1>{postData.title}</h1>
            <time dateTime={postData.date}>{new Date(postData.date).toLocaleDateString()}</time>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </article>
        </section>
      </main>

    </div>
  );
}
