import Footer from "@/components/footer/Footer";
import Nav from "@/components/header/Nav";
import CircleChart from "./CircleChart";
import LinearChart from "./linearChart";
import InfoCard from "./InfoCard";
import { data } from "@/utils/adminPageData";
import CardTitle from "@/components/cardTitle/CardTitle.";
import cardTitle from "@/components/utils/data/cardTitle";

const page = () => {
  return (
    <div>
    <Nav />
    <div className="container pt-4 px-5">
      <CardTitle data={cardTitle.dashboard} />
    </div>

    <div className="container flex flex-col md:flex-row justify-around">
      <div className="w-full md:w-1/3 mb-4 md:mb-0">
        <div className="flex flex-col items-center">
          {data.map((item, index) => (
            <InfoCard
              key={index}
              icon={item.icon}
              label={item.label}
              value={item.value}
              borderColor={item.borderColor}
              textColor={item.textColor}
            />
          ))}
        </div>
      </div>
      <div className="w-full md:w-2/3">
        <LinearChart />
      </div>
    </div>

    <div className="container mx-auto my-8">
      <CircleChart />
    </div>
    <Footer />
  </div>

  );
};

export default page;
