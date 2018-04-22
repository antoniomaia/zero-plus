import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import "./DataInfo.css";

const DataInfo = props => {
  const entries = JSON.parse(props.entries);

  const fasting = entries.map(entry => {
    let rEntry = {};
    rEntry["date"] = entry.Date;
    rEntry["hours"] = Number.parseInt(entry.Hours, 10);
    return rEntry;
  });

  return (
    <div className="DataInfo">
      <div className="DataInfoWrapper">
        <ResponsiveContainer width="100%" height="80%">
          <AreaChart
            data={fasting}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF6F00" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#FF6F00" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="hours"
              stroke="#FF6F00"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DataInfo;
