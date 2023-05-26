import Layout from "../../components/Layout/Layout";
import { useContext } from "react";
import { CartContext } from "../../Context/ShoppingCartContextProvider";
import Cards from "../../components/Cards/Cards";
import { FiSearch } from "react-icons/fi";
import CardDetails from "../../components/CardDetails/CardDetails";
import Navbar from "../../components/NavBar/Navbar";
function Home() {
  const context = useContext(CartContext);

  if (!Object.keys(context.acc).length) {
    return <p className="text-center text-2xl font-bold text-red-500 mt-10">Inicia sesión para ver más detalles</p>;
  }
  
  if (context.loading) return <p>Loading...</p>;
  if (context.error) return <p>Error: {context.error}</p>;

  const filteredByCategory =
    context.category === "all"
      ? context.data
      : context.data.filter((product) => product.category === context.category);

  const filteredData = filteredByCategory.filter((product) =>
    product.title.toLowerCase().includes(context.search.toLowerCase())
  );

  return (
    <Layout>
      <Navbar />
      <div className="flex items-center justify-center gap-2  rounded-md border-2 border-black">
        <FiSearch />
        <input
          className=" bg-transparent text-black  outline-none"
          type="text"
          placeholder="Search..."
          onChange={(e) => context.setSearch(e.target.value)}
        />
      </div>
      {filteredData.length === 0 ? (
        <p className="text-center text-2xl font-bold text-red-500 mt-10">
          No Data Found
        </p>
      ) : (
        <>
          <div className="flex justify-center flex-wrap items-center gap-5  w-full h-full max-w-5xl  ">
            <Cards data={filteredData} key={context.data.id} />
          </div>
        </>
      )}

      <CardDetails />
    </Layout>
  );
}

export default Home;
