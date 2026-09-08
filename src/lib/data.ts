export type Station = {
  id: string;
  city: string;
  name: string;
  aqi: number;
  pm25: number;
  pm10: number;
  no2: number;
  updated: string;
};

const stations: Station[] = [
  { id: "ALA-01", city: "Almaty", name: "Abai Avenue", aqi: 118, pm25: 42, pm10: 67, no2: 38, updated: "12:40" },
  { id: "ALA-02", city: "Almaty", name: "Orbita", aqi: 84, pm25: 27, pm10: 44, no2: 31, updated: "12:41" },
  { id: "AST-01", city: "Astana", name: "Left Bank", aqi: 62, pm25: 19, pm10: 33, no2: 22, updated: "12:38" },
  { id: "KRG-01", city: "Karaganda", name: "City Center", aqi: 95, pm25: 31, pm10: 51, no2: 28, updated: "12:36" },
  { id: "SHY-01", city: "Shymkent", name: "Tauke Khan", aqi: 55, pm25: 15, pm10: 29, no2: 19, updated: "12:42" },
  { id: "AKT-01", city: "Aktobe", name: "Batys", aqi: 72, pm25: 23, pm10: 38, no2: 21, updated: "12:34" },
];

export async function loadStations(): Promise<Station[]> {
  return new Promise((resolve) => setTimeout(() => resolve(stations), 180));
}

export function band(aqi: number): string {
  if (aqi <= 50) return "Good";
  if (aqi <= 100) return "Moderate";
  if (aqi <= 150) return "Sensitive";
  if (aqi <= 200) return "Unhealthy";
  return "Very unhealthy";
}
