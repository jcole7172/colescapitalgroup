// Cole's Capital Group — footprint map. Loaded after leaflet.js (classic script, window.L).
const mapEl = document.getElementById('footprint-map');
if (mapEl && window.L) {
  const locations = [
    { name: 'Queensbury, NY', lat: 43.3523, lng: -73.6865, cat: 'pipeline', note: 'Commercial metal building — in the pipeline.' },
    { name: 'Saratoga Springs, NY', lat: 43.0831, lng: -73.7846, cat: 'pipeline', note: 'Chalet development — in the pipeline.' },
    { name: 'Malta, NY', lat: 43.0092, lng: -73.7904, cat: 'pipeline', note: 'Flex warehouse development — in the pipeline.' },
    { name: 'Ballston Spa, NY', lat: 43.0001, lng: -73.8512, cat: 'pipeline', note: 'Metal building development — in the pipeline.' },
    { name: 'Halfmoon, NY', lat: 42.8700, lng: -73.7010, cat: 'multi', note: 'Multiple completed and in-progress projects.' },
    { name: 'Waterford, NY', lat: 42.7850, lng: -73.6900, cat: 'land', note: 'Land opportunities — available for lease, sale, or build-to-suit.' },
    { name: 'Colonie, NY', lat: 42.7284, lng: -73.8282, cat: 'pipeline', note: 'Metal building development — in the pipeline.' },
    { name: 'East Glenville, NY', lat: 42.8780, lng: -73.9700, cat: 'completed', note: 'Duplex residential renovation — completed 2024.' },
    { name: 'Kinderhook, NY', lat: 42.3987, lng: -73.6996, cat: 'pipeline', note: 'Metal building development — in the pipeline.' },
    { name: 'Wilton, NY', lat: 43.1080, lng: -73.7780, cat: 'collision', note: "Cole's Collision — 601 Maple Avenue, Saratoga Springs, NY 12866. Current location, under management." },
    { name: 'Ballston Spa, NY', lat: 43.0020, lng: -73.8380, cat: 'collision', note: "Cole's Collision — 2026 Doubleday Avenue, Ballston Spa, NY 12020. Current location; relocating down the road, and this site will become a Honest Johnny's." },
    { name: 'Clifton Park, NY', lat: 42.8580, lng: -73.7300, cat: 'collision', note: "Cole's Collision — 1624 Halfmoon Parkway, Clifton Park, NY 12065. Current location, under management." },
    { name: 'Colonie, NY', lat: 42.7265, lng: -73.8080, cat: 'collision', note: "Cole's Collision — 1517 Central Avenue, Colonie, NY 12205. Current location, under management." },
    { name: 'North Greenbush, NY', lat: 42.6950, lng: -73.6550, cat: 'collision', note: "Cole's Collision — 97 North Greenbush Road, Troy, NY 12180. Current location, under management." },
    { name: 'Nassau, NY', lat: 42.5230, lng: -73.6050, cat: 'collision', note: "Cole's Collision — 3592 US Highway 20, Nassau, NY 12123. Current location, under management." },
    { name: 'Kinderhook, NY', lat: 42.4050, lng: -73.6950, cat: 'collision', note: "Cole's Collision — 2532 Route 9H, Kinderhook, NY 12106. Current location; on-site building upgrade planned." },
  ];

  const map = L.map(mapEl, { scrollWheelZoom: false });

  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; <a href="https://www.esri.com" target="_blank" rel="noopener">Esri</a> — Esri, Maxar, Earthstar Geographics, and the GIS User Community',
    maxZoom: 19,
  }).addTo(map);

  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 19,
  }).addTo(map);

  locations.forEach((loc) => {
    const icon = L.divIcon({
      className: 'map-marker map-marker-' + loc.cat,
      html: '<span></span>',
      iconSize: [18, 18],
      iconAnchor: [9, 9],
    });
    L.marker([loc.lat, loc.lng], { icon, alt: loc.name })
      .addTo(map)
      .bindPopup(`<strong>${loc.name}</strong><br>${loc.note}`);
  });

  map.fitBounds(L.latLngBounds(locations.map((loc) => [loc.lat, loc.lng])), { padding: [30, 30] });
}
