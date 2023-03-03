// Componet
import { useEffect, useState } from "react";
import { Tiltle, SearchInput, Toggle } from "../../UI";

function SimplifyingFractions(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(window.innerWidth > 530);
    const handleResize = () => {
      setIsVisible(window.innerWidth > 530);
    };
    
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <article className="ArticleContainer">
      <Tiltle />
      <SearchInput />

      <section className="col-span-full">
        {/* Head */}
        <div className="flex justify-between h-10 items-center">
          {isVisible ? <span className="text-xl font-bold">Simplifying Fractions</span> : <span></span>}

          <div className="flex justify-between items-center bg-slate-600 h-full px-5 rounded-t-md gap-3">
            <span className="text-lg font-medium">See Process</span>
            <Toggle />
          </div>
        </div>
        {/* Body */}
        <div className="flex justify-center items-center bg-slate-600 col-span-full rounded-tl-md p-3 gap-4">
          {/* {Input Fraction} */}
          <div className="flex flex-col justify-center items-center gap-1">
            <span className="text-sm">NUMERADOR</span>
            <div className="flex flex-col gap-2">
              <input type="number" pattern="[\d]" className="InputNumberFractions" />
              <div className="w-24 h-1 bg-gray-800"></div>
              <input type="number" pattern="[\d]" className="InputNumberFractions" />
            </div>
            <span className="text-sm">DENOMINADOR</span>
          </div>
          {/* {Output Fraction} */}
          <span className="text-4xl text font-bold text-gray-800">=</span>
          <div className="flex flex-col justify-center items-center gap-1">
            <div className="flex flex-col gap-2">
              <output className="bg-slate-100 text-gray-600 h-10 w-24 px-2 rounded-md text-3xl font-bold text-center">2</output>
              <div className="w-24 h-1 bg-gray-800"></div>
              <output className="bg-slate-100 text-gray-600 h-10 w-24 px-2 rounded-md text-3xl font-bold text-center">3</output>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

export default SimplifyingFractions;
