import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";

export default function TechnologyGrid({ onAdd, stack }) {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load technologies:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center">
        <p className="text-sm font-medium text-gray-500 animate-pulse">Loading technologies...</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {technologies.map((technology) => {
        const isAdded = stack.some((item) => item.id === technology.id);
        return (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            onAdd={onAdd}
            isAdded={isAdded}
          />
        );
      })}
    </div>
  );
}