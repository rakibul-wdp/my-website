import {
  Adventure,
  BestSelling,
  Hero,
  Holiday,
  Testimonials,
  TourOffer,
} from "@/components/pages/home";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main>
      <Hero />
      <TourOffer />
      <Adventure />
      <Holiday />
      <BestSelling />
      <Testimonials />
    </main>
  );
};

export default Home;
