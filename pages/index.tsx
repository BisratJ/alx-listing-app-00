import React from "react";
import { HERO_BG, PROPERTYLISTINGSAMPLE } from "@/constants";
import Pill from "@/components/common/Pill";
import Card from "@/components/common/Card";

const FILTERS = [
  "Top Villa",
  "Self Checkin",
  "Luxury Villa",
  "Pool",
  "Free Parking",
  "Mountain View",
  "Fireplace",
  "Pet Friendly",
  "Desert View",
];

const FilterSection: React.FC = () => {
  const [selected, setSelected] = React.useState<string | null>(null);
  return (
    <section className="w-full flex flex-wrap items-center justify-center py-6 bg-white">
      {FILTERS.map((filter) => (
        <Pill
          key={filter}
          label={filter}
          selected={selected === filter}
          onClick={() => setSelected(filter)}
        />
      ))}
    </section>
  );
};

const HeroSection: React.FC = () => (
  <section
    className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center"
    style={{ backgroundImage: `url(${HERO_BG})` }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-40" />
    <div className="relative z-10 text-center text-white px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
        Find your favorite place here!
      </h1>
      <p className="text-lg md:text-2xl font-medium drop-shadow-md">
        The best prices for over 2 million properties worldwide.
      </p>
    </div>
  </section>
);

const ListingSection: React.FC = () => (
  <section className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {PROPERTYLISTINGSAMPLE.map((property, idx) => (
      <Card
        key={property.name + idx}
        image={property.image}
        name={property.name}
        price={property.price}
        rating={property.rating}
      />
    ))}
  </section>
);

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FilterSection />
      <ListingSection />
      {/* ...other homepage content... */}
    </main>
  );
}
