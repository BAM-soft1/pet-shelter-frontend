import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import type { Animal } from "../../types/types";

type AnimalDetailModalProps = {
  animal: Animal | null;
  isOpen: boolean;
  onClose: () => void;
};

export default function AnimalDetailModal({ animal, isOpen, onClose }: AnimalDetailModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="mx-auto max-w-3xl w-full bg-white rounded-lg shadow-xl max-h-[90vh] overflow-y-auto">
          {animal && (
            <>
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                <DialogTitle className="text-2xl font-bold text-gray-800">{animal.name}</DialogTitle>
                <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6">
                <div className="h-64 bg-linear-to-br from-indigo-100 to-purple-100 flex items-center justify-center rounded-lg mb-6">
                  <span className="text-6xl font-bold text-indigo-600">{animal.species}</span>
                </div>

                <div className="mb-6">
                  <p className="text-xl text-gray-600 mb-4">
                    {animal.breed || animal.species} • {animal.age_years} years old
                  </p>
                  <span className="text-3xl font-bold text-indigo-600">${animal.price}</span>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold text-gray-700">Sex:</span>
                      <span className="ml-2 text-gray-600 capitalize">{animal.sex}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Status:</span>
                      <span className="ml-2 text-gray-600 capitalize">{animal.status}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Intake Date:</span>
                      <span className="ml-2 text-gray-600">{new Date(animal.intake_date).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold text-gray-700">Birth Date:</span>
                      <span className="ml-2 text-gray-600">{new Date(animal.birth_date).toLocaleDateString()}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Vaccinations:</span>
                      {animal.has_required_vaccines ? (
                        <span className="ml-2 text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Vaccinated</span>
                      ) : (
                        <span className="ml-2 text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Needs vaccines</span>
                      )}
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Adoption Status:</span>
                      <span className="ml-2 text-gray-600">{animal.adoption_status}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex-1">
                    Apply for Adoption
                  </button>
                  <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
                    Contact Us
                  </button>
                </div>
              </div>
            </>
          )}
        </DialogPanel>
      </div>
    </Dialog>
  );
}
