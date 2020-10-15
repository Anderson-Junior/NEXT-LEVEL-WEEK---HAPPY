const map = L.map('mapid').setView([-25.5859813,-49.4078444], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popubAnchor: [170, 2]
})

const popup = L.popup({
    closeButton: false,
    className: 'map-pupup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanages.html?id=1" class="choose-orphanages"<img scr="./public/images/arrow-white.svg" </a>')

L.marker([-25.5859813,-49.4078444], {icon})
    .addTo(map)
    .bindPopup(popup)