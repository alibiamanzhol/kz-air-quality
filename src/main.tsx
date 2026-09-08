import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { Activity, Clock, MapPin, Wind } from "lucide-react";
import { band, loadStations, type Station } from "./lib/data";
import "./styles.css";

function App() {
  const [data, setData] = useState<Station[]>([]);
  const [city, setCity] = useState("All");

  useEffect(() => {
    loadStations().then(setData);
  }, []);

  const cities = ["All", ...Array.from(new Set(data.map((station) => station.city)))];
  const shown = city === "All" ? data : data.filter((station) => station.city === city);
  const averageAqi = useMemo(
    () => shown.length ? Math.round(shown.reduce((sum, station) => sum + station.aqi, 0) / shown.length) : 0,
    [shown],
  );

  return (
    <main>
      <header>
        <div className="mark"><Wind size={22} /></div>
        <div>
          <p className="kicker">AIR OBSERVATORY / KAZAKHSTAN</p>
          <h1>See the air<br />before you step outside.</h1>
        </div>
        <div className="summary">
          <span>Average AQI</span>
          <strong>{averageAqi}</strong>
          <small>{band(averageAqi)}</small>
        </div>
      </header>

      <section className="toolbar">
        <div>
          {cities.map((name) => (
            <button
              className={name === city ? "active" : ""}
              onClick={() => setCity(name)}
              key={name}
            >
              {name}
            </button>
          ))}
        </div>
        <span><Clock size={14} /> demo data</span>
      </section>

      <section className="grid">
        {shown.map((station) => (
          <article key={station.id}>
            <div className="row">
              <span className="place"><MapPin size={15} />{station.city}</span>
              <span className="id">{station.id}</span>
            </div>
            <h2>{station.name}</h2>
            <div className="aqi">
              <strong>{station.aqi}</strong>
              <div><span>AQI</span><b>{band(station.aqi)}</b></div>
            </div>
            <div className="pollutants">
              <div><span>PM2.5</span><b>{station.pm25}</b><small>µg/m³</small></div>
              <div><span>PM10</span><b>{station.pm10}</b><small>µg/m³</small></div>
              <div><span>NO₂</span><b>{station.no2}</b><small>µg/m³</small></div>
            </div>
            <footer><Activity size={14} /> updated {station.updated}</footer>
          </article>
        ))}
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
