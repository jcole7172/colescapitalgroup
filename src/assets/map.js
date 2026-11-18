// Cole's Capital Group — footprint map. Loaded after leaflet.js (classic script, window.L).
const mapEl = document.getElementById('footprint-map');
if (mapEl && window.L) {
  const locations = [
    { name: 'Queensbury, NY', lat: 43.33670750308701, lng: -73.67973879258093, cat: 'pipeline', note: "New Cole's Collision location — 919 Route 9. In the pipeline." },
    { name: 'Saratoga Springs, NY', lat: 43.0745, lng: -73.7765, cat: 'pipeline', note: 'Chalet development — 25 Hudson Avenue. In the pipeline.' },
    { name: 'Malta, NY', lat: 42.95870483989021, lng: -73.78986036636094, cat: 'pipeline', note: '40,000 sq. ft. flex warehouse — 2377 Route 9. In the pipeline.' },
    { name: 'Ballston Spa, NY', lat: 43.01720901853004, lng: -73.8434839748752, cat: 'pipeline', note: "New Cole's Collision location — 2110 Doubleday Avenue. In the pipeline." },
    { name: 'Halfmoon, NY', lat: 42.90292120039764, lng: -73.77335014573424, cat: 'multi', note: "1917 Route 9 — Honest Johnny's Mechanical, completed earlier this year." },
    { name: 'Halfmoon, NY', lat: 42.90257943632355, lng: -73.77317565777984, cat: 'multi', note: '1917 Route 9 — Precision Automotive Calibrations, completed earlier this year.' },
    { name: 'Waterford, NY', lat: 42.7850, lng: -73.6900, cat: 'land', note: 'Land opportunities — available for lease, sale, or build-to-suit.' },
    { name: 'Colonie, NY', lat: 42.71373047474535, lng: -73.82781149621879, cat: 'pipeline', note: "10,000 sq. ft. new build for Honest Johnny's and Precision Automotive Calibrations — 1529 Central Avenue, next to the existing Cole's Collision. In the pipeline." },
    { name: 'East Glenville, NY', lat: 42.8780, lng: -73.9700, cat: 'completed', note: 'Duplex residential renovation — completed 2024.' },
    { name: 'Kinderhook, NY', lat: 42.377428515874085, lng: -73.69118436998142, cat: 'pipeline', note: 'New building replacing the current Cole\'s Collision location — 2532 Route 9H. In the pipeline.' },
    { name: 'Halfmoon, NY', lat: 42.85518420176062, lng: -73.75713111006306, cat: 'pipeline', note: "16,000 sq. ft. flex warehouse for lease — 1615 Route 9, across from the existing Cole's Collision. In the pipeline." },
    { name: 'Halfmoon, NY', lat: 42.893713494069054, lng: -73.7712579247414, cat: 'pipeline', note: '72-acre industrial park — 1867 Route 9. Large-scale development, in the pipeline.' },
    { name: 'Wilton, NY', lat: 43.1163484225072, lng: -73.77081451237201, cat: 'collision', note: "Cole's Collision — 601 Maple Avenue, Saratoga Springs, NY 12866. Current location, under management." },
    { name: 'Ballston Spa, NY', lat: 43.013346472195245, lng: -73.84645038252505, cat: 'collision', note: "Cole's Collision — 2026 Doubleday Avenue, Ballston Spa, NY 12020. Current location; will become a Honest Johnny's once the new Collision building at 2110 Doubleday Avenue is complete." },
    { name: 'Clifton Park, NY', lat: 42.854966324889084, lng: -73.75938806437404, cat: 'collision', note: "Cole's Collision — 1624 Halfmoon Parkway, Clifton Park, NY 12065. Current location, under management." },
    { name: 'Colonie, NY', lat: 42.713439065049265, lng: -73.82717464405481, cat: 'collision', note: "Cole's Collision — 1517 Central Avenue, Colonie, NY 12205. Current location, under management." },
    { name: 'North Greenbush, NY', lat: 42.69075914101523, lng: -73.68671213084126, cat: 'collision', note: "Cole's Collision — 97 North Greenbush Road, Troy, NY 12180. Current location, under management." },
    { name: 'Nassau, NY', lat: 42.5230, lng: -73.6050, cat: 'collision', note: "Cole's Collision — 3592 US Highway 20, Nassau, NY 12123. Current location, under management." },
    { name: 'Kinderhook, NY', lat: 42.377378515874085, lng: -73.69123436998142, cat: 'collision', note: "Cole's Collision — 2532 Route 9H, Kinderhook, NY 12106. Current location; being replaced on-site by a new building." },
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
