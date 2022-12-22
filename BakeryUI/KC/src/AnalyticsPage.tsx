import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

const data = [
  { name: "Page A", pv: 2400, amt: 2400 },
  { name: "Page B", pv: 1398, amt: 2210 },
  { name: "Page C", pv: 9800, amt: 2290 },
  { name: "Page D", pv: 3908, amt: 2000 },
  { name: "Page E", pv: 4800, amt: 2181 },
  { name: "Page F", pv: 3800, amt: 2500 },
  { name: "Page G", pv: 4300, amt: 2100 },
];

const AnalyticsPage = () => {
  return (
    <div className="bg-gray-100 p-0">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Analytics</h1>
      <LineChart width={800} height={400} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="amt" stroke="#82ca9d" />
      </LineChart>

      <table className="table-auto w-full mt-4">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">Page</th>
            <th className="px-4 py-2">Pageviews</th>
            <th className="px-4 py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((datum) => (
            <tr key={datum.name}>
              <td className="px-4 py-2">{datum.name}</td>
              <td className="px-4 py-2">{datum.pv}</td>
              <td className="px-4 py-2">{datum.amt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnalyticsPage;
