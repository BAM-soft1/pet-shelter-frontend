import { useState } from "react";
import { mockAnimals } from "@/data/mockData";
import type { Animal } from "@/types/types";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { PlusIcon, PencilIcon, TrashIcon, CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function AdminAnimals() {
  const [animals, setAnimals] = useState<Animal[]>(mockAnimals);

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this animal?")) {
      setAnimals(animals.filter((a) => a.animal_id !== id));
    }
  };

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
          <h3 className="text-xl font-bold text-gray-800">All Animals</h3>
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
                <TableHead>Vaccines</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {animals.map((animal) => (
                <TableRow key={animal.animal_id}>
                  <TableCell className="font-medium">{animal.animal_id}</TableCell>
                  <TableCell className="font-medium">{animal.name}</TableCell>
                  <TableCell>{animal.species}</TableCell>
                  <TableCell>{animal.breed || "—"}</TableCell>
                  <TableCell>
                    {animal.age_years} {animal.age_years === 1 ? "yr" : "yrs"}
                  </TableCell>
                  <TableCell className="capitalize">{animal.sex}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="capitalize">
                      {animal.status}
                    </Badge>
                  </TableCell>
                  <TableCell>${animal.price}</TableCell>
                  <TableCell>
                    {animal.has_required_vaccines ? (
                      <Badge className="bg-green-500 hover:bg-green-600">
                        <CheckIcon className="size-4" />
                      </Badge>
                    ) : (
                      <Badge className="bg-yellow-500 hover:bg-yellow-600">
                        <XMarkIcon className="size-4" />
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-100 rounded transition-colors">
                        <PencilIcon className="size-5" />
                      </button>
                      <button
                        className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
                        onClick={() => handleDelete(animal.animal_id)}
                      >
                        <TrashIcon className="size-5" />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
