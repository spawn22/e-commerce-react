import Layout from "../../components/Layout/Layout";
import Cards from "../../components/Cards/Cards";
import useFetchFakeStore from "../../hooks/useFetchFakeStore";
import CardDetails from "../../components/CardDetails/CardDetails";
function Home() {
  const { data, loading, error } = useFetchFakeStore();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Layout>
      <div className="grid gap-4 grid-cols-2 w-full h-full  ml-[55rem]  ">
      <Cards data={data} key={data.id} />

      </div>
      <CardDetails />
    </Layout>
  );
}

export default Home;
