export const furnitureItems = [
  {
    id: 1,
    name: "Chair",
    type: "chair",
    price: 299,
    materials: [
      { material: "Fabric", color: "#d5b896", name: "Warm Beige", texture: null },
      { material: "Leather", color: "#8b9a7d", name: "Sage Green", texture: null },
      { material: "Wood", color: "#6b8fa3", name: "Ocean Blue", texture: null }, 
      { material: "Wood", color: "#3d3d3d", name: "Charcoal", texture: null }
    ]
  },
  {
    id: 2,
    name: "Table",
    type: "table", 
    price: 199,
    materials: [
      { material: "Fabric", color: "#d5b896", name: "Warm Beige", texture: null },
      { material: "Leather", color: "#8b9a7d", name: "Sage Green", texture: null },
      { material: "Wood", color: "#6b8fa3", name: "Ocean Blue", texture: null }, 
      { material: "Wood", color: "#3d3d3d", name: "Charcoal", texture: null }
    ]
  },
  {
    id: 3,
    name: "Sofa",
    type: "sofa",
    price: 899,
    materials: [
      { material: "Fabric", color: "#d5b896", name: "Warm Beige", texture: null },
      { material: "Leather", color: "#8b9a7d", name: "Sage Green", texture: null },
      { material: "Wood", color: "#6b8fa3", name: "Ocean Blue", texture: null }, 
      { material: "Wood", color: "#3d3d3d", name: "Charcoal", texture: null }
    ]
  }
];

export const environmentPresets = [
  { name: "Indoor", preset: "apartment", color: "#ffeb3b" },
  { name: "Studio", preset: "studio", color: "#29b6f6" },
  { name: "Outdoor", preset: "park", color: "#66bb6a" },
  { name: "Night", preset: "night", color: "#5c6bc0" }
];