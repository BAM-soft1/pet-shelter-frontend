import { useState, useEffect } from "react";
import MainLayout from "../../components/layout/MainLayout";
import AnimalDetailModal from "./AnimalDetailModal";
import type { Animal } from "../../types/types";
import { mockAnimals } from "../../data/mockData";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
          <p className="text-muted-foreground">Loading animals...</p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {animals.map((animal) => (
            <Card key={animal.animal_id} className="overflow-hidden cursor-pointer transition-all hover:shadow-lg" onClick={() => openModal(animal)}>
              <div className="relative aspect-4/3 overflow-hidden bg-muted">
                {animal.image_url ? (
                  <img src={animal.image_url} alt={animal.name} className="w-full h-full object-cover object-center" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-primary/10 to-primary/5">
                    <span className="text-4xl font-bold text-primary/60">{animal.species}</span>
                  </div>
                )}
              </div>

              <CardHeader className="pb-3">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="text-xl font-bold">{animal.name}</h3>
                  <Badge variant="secondary" className="capitalize">
                    {animal.sex}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {animal.breed || animal.species} • {animal.age_years} {animal.age_years === 1 ? "year" : "years"} old
                </p>
              </CardHeader>

              <CardContent className="pb-3">
                <div className="flex items-center gap-2">
                  {animal.has_required_vaccines ? (
                    <Badge variant="default" className="bg-green-500 hover:bg-green-600">
                      Vaccinated
                    </Badge>
                  ) : (
                    <Badge variant="default" className="bg-yellow-500 hover:bg-yellow-600">
                      Needs vaccines
                    </Badge>
                  )}
                  <Badge variant="outline" className="capitalize">
                    {animal.status}
                  </Badge>
                </div>
              </CardContent>

              <CardFooter className="pt-3">
                <div className="w-full flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">${animal.price}</span>
                  <span className="text-xs text-muted-foreground">Click for details</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {animals.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No animals available at the moment.</p>
          </div>
        )}

        <AnimalDetailModal animal={selectedAnimal} isOpen={isOpen} onClose={closeModal} />
      </div>
    </MainLayout>
  );
}
