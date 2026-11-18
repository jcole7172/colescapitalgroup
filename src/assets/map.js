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
  ];

  const map = L.map(mapEl, { scrollWheelZoom: false }).setView([42.95, -73.78], 9);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions" target="_blank" rel="noopener">CARTO</a>',
    subdomains: 'abcd',
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
}
