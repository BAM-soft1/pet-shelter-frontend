import { Link } from "react-router-dom";
import MainLayout from "../../components/layout/MainLayout";

export default function Landing() {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">Find Your Perfect Companion</h1>
        <p className="text-xl text-gray-600 mb-8">
          Give a loving home to a pet in need. Browse our available animals and start your adoption journey today.
        </p>

        <div className="flex gap-4 justify-center mb-12">
          <Link to="/animals" className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
            Browse Animals
          </Link>
          <Link to="/about" className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
            Learn More
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Dogs</h3>
            <p className="text-gray-600">Loyal companions ready to join your family</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Cats</h3>
            <p className="text-gray-600">Independent friends looking for a cozy home</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Small Pets</h3>
            <p className="text-gray-600">Rabbits and more seeking loving care</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
