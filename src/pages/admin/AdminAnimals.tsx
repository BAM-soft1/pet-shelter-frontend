import { useState, useEffect } from "react";
import type { Animal } from "@/types/types";
import { AnimalService } from "@/api/animals";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { PlusIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { getErrorMessage } from "@/services/fetchUtils";
import calculateAge from "@/utils/calculateAge";

export default function AdminAnimals() {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAnimals();
  }, []);

  const fetchAnimals = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await AnimalService.getAnimals();
      setAnimals(data);
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this animal?")) {
      try {
        await AnimalService.deleteAnimal(id);
        setAnimals(animals.filter((a) => a.id !== id));
      } catch (err) {
        alert("Failed to delete animal: " + getErrorMessage(err));
      }
    }
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Loading animals...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-destructive">Error loading animals: {error}</p>
        <button onClick={fetchAnimals} className="mt-4 text-indigo-600 hover:text-indigo-700 underline">
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Animal Management</h2>
        </div>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2">
          <PlusIcon className="size-5" />
          Add Animal
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800">All Animals ({animals.length})</h3>
        </div>
        <div className="p-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Species</TableHead>
                <TableHead>Breed</TableHead>
                <TableHead>Age</TableHead>
                <TableHead>Sex</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Active</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {animals.map((animal) => {
                const age = calculateAge(animal.birthDate);
                return (
                  <TableRow key={animal.id}>
                    <TableCell className="font-medium">{animal.id}</TableCell>
                    <TableCell className="font-medium">{animal.name}</TableCell>
                    <TableCell>{animal.species.name}</TableCell>
                    <TableCell>{animal.breed?.name || "—"}</TableCell>
                    <TableCell>
                      {age} {age === 1 ? "yr" : "yrs"}
                    </TableCell>
                    <TableCell className="capitalize">{animal.sex}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="capitalize">
                        {animal.status}
                      </Badge>
                    </TableCell>
                    <TableCell>${animal.price}</TableCell>
                    <TableCell>
                      {animal.isActive ? (
                        <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>
                      ) : (
                        <Badge className="bg-gray-500 hover:bg-gray-600">Inactive</Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <button className="p-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-100 rounded transition-colors">
                          <PencilIcon className="size-5" />
                        </button>
                        <button
                          className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                          onClick={() => handleDelete(animal.id)}
                        >
                          <TrashIcon className="size-5" />
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
