import MainLayout from "../../components/layout/MainLayout";

export default function About() {
  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>

        <div className="prose prose-lg">
          <p className="text-gray-700 mb-4">Welcome to our Pet Shelter! We are dedicated to finding loving homes for animals in need.</p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            Our mission is to rescue, rehabilitate, and rehome abandoned and neglected animals. We provide medical care, vaccinations, and a safe
            environment for all our animals.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Adoption Process</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-4">
            <li>Browse our available animals</li>
            <li>Submit an adoption application</li>
            <li>Meet your potential new companion</li>
            <li>Complete the adoption and take your new friend home</li>
          </ol>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-700">
            Have questions? Reach out to us at{" "}
            <a href="mailto:info@petshelter.com" className="text-indigo-600 hover:underline">
              info@petshelter.com
            </a>
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
