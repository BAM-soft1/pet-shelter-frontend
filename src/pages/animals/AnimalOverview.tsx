import { useState, useEffect } from "react";
import MainLayout from "../../components/layout/MainLayout";
import AnimalDetailModal from "./AnimalDetailModal";
import type { Animal } from "../../types/types";
import { mockAnimals } from "../../data/mockData";

export default function AnimalOverview() {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Mock api call for now, since we don't have the backend set up
    setTimeout(() => {
      setAnimals(mockAnimals);
      setLoading(false);
    }, 100);
  }, []);

  const openModal = (animal: Animal) => {
    setSelectedAnimal(animal);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => setSelectedAnimal(null), 200);
  };

  if (loading) {
    return (
      <MainLayout>
        <div className="text-center py-12">
          <p className="text-gray-600">Loading animals...</p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {animals.map((animal) => (
            <button key={animal.animal_id} onClick={() => openModal(animal)} className="text-left">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full">
                <div className="h-48 bg-linear-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                  <span className="text-3xl font-bold text-indigo-600">{animal.species}</span>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-gray-800">{animal.name}</h3>
                    <span className="text-sm bg-gray-100 px-2 py-1 rounded capitalize">{animal.sex}</span>
                  </div>

                  <p className="text-gray-600 mb-2">
                    {animal.breed || animal.species} • {animal.age_years} years old
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    {animal.has_required_vaccines ? (
                      <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Vaccinated</span>
                    ) : (
                      <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Needs vaccines</span>
                    )}
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-2xl font-bold text-indigo-600">${animal.price}</span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {animals.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No animals available at the moment.</p>
          </div>
        )}

        <AnimalDetailModal animal={selectedAnimal} isOpen={isOpen} onClose={closeModal} />
      </div>
    </MainLayout>
  );
}
