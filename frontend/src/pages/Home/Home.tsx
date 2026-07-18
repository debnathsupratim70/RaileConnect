import Hero from "../../components/home/Hero";
import SearchForm from "../../components/search/SearchForm";
import PopularRoutes from "../../components/home/PopularRoutes";
import Features from "../../components/home/Features";

function Home() {
  return (
    <>
      <Hero />
      <SearchForm />
      <PopularRoutes />
      <Features />
    </>
  );
}

export default Home;