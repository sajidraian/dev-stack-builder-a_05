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
      <div className="py-20 flex flex-col items-center justify-center text-center">
        <div className="w-10 h-10 rounded-full border-4 border-orange-100 border-t-orange-500 animate-spin" />

        <p className="text-sm font-semibold text-slate-700 mt-4">
          Loading technologies...
        </p>

        <p className="text-xs text-gray-400 mt-1">
          Preparing your development stack
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {technologies.map((technology) => {
        const isAdded = stack.some(
          (item) => item.id === technology.id
        );

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