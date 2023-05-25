import Layout from "../../components/Layout/Layout";
import { useContext } from "react";
import { CartContext } from "../../Context/ShoppingCartContextProvider";
import Cards from "../../components/Cards/Cards";
import { FiSearch } from "react-icons/fi";
import CardDetails from "../../components/CardDetails/CardDetails";
function Home() {
  const context = useContext(CartContext);

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
      <div className="flex items-center justify-center gap-2  rounded-md border-2 border-black">
        <FiSearch />
        <input
          className=" outline-none"
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
          <div className="grid gap-4 grid-cols-2 w-full h-full   ml-[55rem]  ">
            <Cards data={filteredData} key={context.data.id} />
          </div>
        </>
      )}

      <CardDetails />
    </Layout>
  );
}

export default Home;
