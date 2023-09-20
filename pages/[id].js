import Layout from '../components/layout';
import {getAllIds} from '../lib/data';

export async function getStaticProps({params}) {
  const itemData = await getData(params.id);
  return {
    props: {
      itemData
    }
  };
}
export async function getStaticPaths() {
  const paths = getAllIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Entry({ itemData }) {
  return (
    <Layout>
      <div className="container">
        <article className="card col-6">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">Phone Number</h6>
            <p className="card-text">
test
            </p>
            <a href="#" className="card-link">
              Card link
            </a>
            <a href="#" className="card-link">
              Another link
            </a>
          </div>
        </article>
      </div>
    </Layout>
  );
}