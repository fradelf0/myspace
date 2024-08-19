import Link from 'next/link';
import { getSortedPostsData } from '../../lib/posts';
import Header from '../components/Header';
import Footer from '../components/Footer';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <div>
      <Header />
      <h1>Blog</h1>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`blog/${id}`}>
              {title}
            </Link>
            <br />
            <small>{date}</small>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
}
