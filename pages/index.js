import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedList, getSortedCatList } from '../lib/data';

export async function getStaticProps() {
  const allPersonData = getSortedList();
   const allCatData = getSortedCatList();

  if (!Array.isArray(allPersonData) || !Array.isArray(allCatData)) {
    return {
      props: {
        allData: [],
      },
    };
  }

  const combinedData = [...allPersonData, ...allCatData].map((data) => ({
    id: data.id || "Unknown ID",
    name: data.name || data.catName || "Unknown Name",
     }));

  return {
    props: {
      allData: combinedData,
    },
  };
}

export default function Home({ allData }) {
  return (
    <Layout home>
      <h1>List of Names</h1>
      <div className="list-group">
        {allData.map(({ id, name }) => (
          <Link key={id} href={`/${id}`} className="list-group-item list-group-item-action">
            {name}
          </Link>
        ))}
      </div>
    </Layout>
  );
}