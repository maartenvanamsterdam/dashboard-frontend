import React, { useEffect, useState } from 'react';
import api from '../api/api';

const EntryList = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    api.get('/entries/all')
      .then(response => setEntries(response.data))
      .catch(error => console.error('Error fetching entries:', error));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Ingevoerde entries</h2>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Datum</th>
            <th className="border px-4 py-2">Energie</th>
            <th className="border px-4 py-2">Slaap</th>
            <th className="border px-4 py-2">Gesport</th>
            <th className="border px-4 py-2">Opmerking</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{entry.date}</td>
              <td className="border px-4 py-2">{entry.energyLevel}</td>
              <td className="border px-4 py-2">{entry.sleepHours}</td>
              <td className="border px-4 py-2">{entry.workedOut ? '✅' : '❌'}</td>
              <td className="border px-4 py-2">{entry.mood}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EntryList;

