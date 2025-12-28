export const dynamic = "force-dynamic";

import { getSchoolsFromDB } from "../api/school";

export default async function ShowSchools() {
  const schools = await getSchoolsFromDB();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Schools</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {schools.map((s) => (
          <div key={s.id} className="border rounded-lg p-4 shadow">
            <img src={s.image} className="w-full h-40 object-cover rounded" />

            <h2 className="text-xl font-semibold mt-2">{s.name}</h2>
            <p className="text-gray-700">{s.address}</p>
            <p className="text-gray-500">{s.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
