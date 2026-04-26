export type ServiceArea = {
  name: string;
  coords: [number, number];
};

export const SERVICE_AREAS: ServiceArea[] = [
  { name: "Cleveland",     coords: [41.4993, -81.6937] },
  { name: "Parma",         coords: [41.3845, -81.7229] },
  { name: "Strongsville",  coords: [41.3145, -81.8357] },
  { name: "Westlake",      coords: [41.4553, -81.9179] },
  { name: "Brunswick",     coords: [41.2384, -81.8418] },
  { name: "Medina",        coords: [41.1384, -81.8640] },
  { name: "Seven Hills",   coords: [41.3970, -81.6751] },
  { name: "North Olmsted", coords: [41.4151, -81.9235] },
];

export const MAP_CENTER: [number, number] = [41.36, -81.80];
export const MAP_ZOOM = 10;
