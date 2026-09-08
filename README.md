# KZ Air Quality

A front-end dashboard for exploring air-quality observations across Kazakhstan. The interface is designed around station-level measurements, city comparison and a clean separation between data adapters and presentation logic.

## Highlights

- React + TypeScript;
- responsive city/station dashboard;
- AQI category calculation and pollutant cards;
- adapter layer for connecting a public air-quality endpoint;
- deterministic demo dataset for local development;
- zero state-management framework: the data flow stays easy to follow.

## Run locally

```bash
npm install
npm run dev
```

## Data adapter

`src/lib/data.ts` currently exposes a local demo provider. Replace `loadStations()` with a fetch call to a public or internal air-quality API while preserving the `Station` interface.

That keeps the UI independent from provider-specific response formats.

## AQI bands

The dashboard uses a simplified presentation scale for demonstration:

- 0–50: Good
- 51–100: Moderate
- 101–150: Unhealthy for sensitive groups
- 151–200: Unhealthy
- 201+: Very unhealthy

For production use, calculate the index using the methodology required by the chosen official data source.

## Stack

React 19, TypeScript, Vite, CSS.

## License

MIT
