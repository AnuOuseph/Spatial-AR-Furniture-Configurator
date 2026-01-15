export const furnitureItems = [
  {
    id: 1,
    name: "Modern Chair",
    type: "chair",
    price: 299,
    materials: [
      { name: "Fabric", color: "#ff6b6b", texture: null },
      { name: "Leather", color: "#8d6e63", texture: null },
      { name: "Wood", color: "#795548", texture: null }
    ]
  },
  {
    id: 2,
    name: "Coffee Table",
    type: "table", 
    price: 199,
    materials: [
      { name: "Oak", color: "#d7ccc8", texture: null },
      { name: "Walnut", color: "#5d4037", texture: null },
      { name: "Glass", color: "#e3f2fd", texture: null }
    ]
  },
  {
    id: 3,
    name: "Sofa",
    type: "sofa",
    price: 899,
    materials: [
      { name: "Velvet", color: "#ab47bc", texture: null },
      { name: "Linen", color: "#26a69a", texture: null },
      { name: "Leather", color: "#6d4c41", texture: null }
    ]
  }
];

export const environmentPresets = [
  { name: "Living Room", preset: "apartment", color: "#ffeb3b" },
  { name: "Showroom", preset: "studio", color: "#29b6f6" },
  { name: "Outdoor", preset: "park", color: "#66bb6a" },
  { name: "Night", preset: "night", color: "#5c6bc0" }
];