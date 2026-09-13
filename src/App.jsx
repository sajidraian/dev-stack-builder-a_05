import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyGrid from "./components/TechnologyGrid";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";

export default function App() {
  const [stack, setStack] = useState([]);

  const handleAdd = (technology) => {
    const isExist = stack.some((item) => item.id === technology.id);

    if (isExist) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setStack([...stack, technology]);
    toast.success(`Added ${technology.name} to your stack!`);
  };

  const handleRemove = (id) => {
    const itemToRemove = stack.find((item) => item.id === id);
    setStack(stack.filter((item) => item.id !== id));
    if (itemToRemove) {
      toast.info(`Removed ${itemToRemove.name} from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.error("Cleared all technologies from your stack.");
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50">
      <ToastContainer position="top-right" autoClose={2500} />
      <Navbar />
      <Hero />

      <main id="technologies" className="max-w-7xl mx-auto px-6 py-10 w-full flex-1">
        <div className="mb-8">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Explore the <span className="text-pink-500">Technologies</span>
          </h2>
          <p className="text-xs font-medium text-gray-500 mt-1">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          <div className="lg:col-span-3">
            <TechnologyGrid onAdd={handleAdd} stack={stack} />
          </div>

          <div className="lg:col-span-1">
            <YourStack
              stack={stack}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}