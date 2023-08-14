import React, { useState } from 'react';
import { Salsas } from '@/app/interfaces/products.interface';
import { Product } from '@/app/interfaces/products.interface';

interface SalsaSelectionProps {
  productId: string;
  onSalsaSelection: (productId: string, selectedSalsas: Salsas) => void;
}

export const SalsaSelection: React.FC<SalsaSelectionProps> = ({ productId, onSalsaSelection }) => {
  const [selectedSalsas, setSelectedSalsas] = useState<Salsas>({ bm: 0, sweetB: 0, jasons: 0 });

  const handleSalsaChange = (salsaType: keyof Salsas, value: number) => {
    setSelectedSalsas((prevSalsas) => ({
      ...prevSalsas,
      [salsaType]: Math.max(prevSalsas[salsaType] + value, 0),
    }));
  };

  const handleApplySalsas = () => {
    onSalsaSelection(productId, selectedSalsas);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center p-5 w-1/4 bg-white text-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="justify-between">
          <div>
            Salsas:
            {Object.keys(selectedSalsas).map((salsaType) => (
              <div key={salsaType}>
                <button
                  className="px-4 py-2 border border-gray-300 text-gray-500 rounded-l hover:bg-gray-200 hover:text-gray-600 transition-colors duration-300"
                  onClick={() => handleSalsaChange(salsaType as keyof Salsas, -1)}
                >
                  -
                </button>
                <span className="px-4 py-2 border border-t-0 border-b-0 border-gray-300 text-gray-800">
                  {selectedSalsas[salsaType as keyof Salsas]}
                </span>
                <button
                  className="px-4 py-2 border bg-custom-yellow border-gray-300 text-gray-500 rounded-r hover:bg-custom-yellow-hover transition-colors duration-300"
                  onClick={() => handleSalsaChange(salsaType as keyof Salsas, 1)}
                >
                  +
                </button>
              </div>
            ))}
            <button onClick={handleApplySalsas}>Aplicar</button>
          </div>
        </div>
      </div>
    </div>
  );
};
