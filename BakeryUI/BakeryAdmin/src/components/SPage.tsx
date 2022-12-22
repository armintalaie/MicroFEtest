import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";
import SearchBar from "./searchbar";

const data = [
  { name: "Device A", usageTime: 2400, dataUsage: 2400 },
  { name: "Device B", usageTime: 1398, dataUsage: 2210 },
  { name: "Device C", usageTime: 9800, dataUsage: 2290 },
  { name: "Device D", usageTime: 3908, dataUsage: 2000 },
  { name: "Device E", usageTime: 4800, dataUsage: 2181 },
  { name: "Device F", usageTime: 3800, dataUsage: 2500 },
  { name: "Device G", usageTime: 4300, dataUsage: 2100 },
];

const SamsungKnoxAssetIntelligencePage = () => {
  return (
    <div className="bg-white p-4 rounded-lg ">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Samsung Knox Asset Intelligence</h1>
      <SearchBar />
      <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
        <LineChart width={800} height={400} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="usageTime" stroke="#8884d8" />
          <Line type="monotone" dataKey="dataUsage" stroke="#82ca9d" />
        </LineChart>
      </div>
      <table className="table-auto w-full mt-4">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">Device</th>
            <th className="px-4 py-2">Usage Time (hours)</th>
            <th className="px-4 py-2">Data Usage (GB)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((datum) => (
            <tr key={datum.name}>
              <td className="px-4 py-2">{datum.name}</td>
              <td className="px-4 py-2">{datum.usageTime}</td>
              <td className="px-4 py-2">{datum.dataUsage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SamsungKnoxAssetIntelligencePage;
