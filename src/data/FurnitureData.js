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
    ],
    parts: []
  },
  {
    id: 2,
    name: "Furniture Set",
    type: "furniture-set", 
    price: 1999,
    materials: [
      { material: "Fabric", color: "#d5b896", name: "Warm Beige", texture: null },
      { material: "Leather", color: "#8b9a7d", name: "Sage Green", texture: null },
      { material: "Wood", color: "#6b8fa3", name: "Ocean Blue", texture: null }, 
      { material: "Wood", color: "#3d3d3d", name: "Charcoal", texture: null }
    ],
    parts: [
  {
    id: "boisvert_chair",
    name: "Boisvert Chair",
    material: "boisvert_chair",
    colors: [
          { name: "Ebony", color: "#d4d5d7" },
          { name: "Walnut", color: "#5c3d2e" },
          { name: "White", color: "#a47b58" },
        ]
  },
  {
    id: "chair_JIMI",
    name: "JIMI Chair",
    material: "chair_JIMI",
    colors: [
          { name: "Ebony", color: "#b2aca5" },
          { name: "Walnut", color: "#5c3d2e" },
          { name: "White", color: "#a47b58" },
        ]
  },
  {
    id: "mykonos_chair",
    name: "Mykonos Chair",
    material: "mykonos_chair",
    colors: [
          { name: "Ebony", color: "#e1c776" },
          { name: "Walnut", color: "#5c3d2e" },
          { name: "White", color: "#a47b58" },
        ]
  },
  {
    id: "Myrick_Chair",
    name: "Myrick Chair",
    material: "Myrick_Chair",
    colors: [
          { name: "Ebony", color: "#f5f5f0" },
          { name: "Walnut", color: "#5c3d2e" },
          { name: "White", color: "#a47b58" },
        ]
  },
  {
    id: "table_AGAMA",
    name: "AGAMA Table",
    material: "table_AGAMA",
    colors: [
          { name: "Ebony", color: "#f5f5f0" },
          { name: "Walnut", color: "#5c3d2e" },
          { name: "White", color: "#a47b58" },
        ]
  },
  {
    id: "table_Crueso",
    name: "Crueso Table",
    material: "table_Crueso",
    colors: [
          { name: "Ebony", color: "#a07a5a" },
          { name: "Walnut", color: "#5c3d2e" },
          { name: "White", color: "#a47b58" },
        ]
  }
],
    // parts: [
    //   {
    //     id: "table_a",
    //     name: "Table A",
    //     material: "mykonos_chair",
    //     meshNames: ["Desk_Mesh", "Desk_Top"], // match exact mesh names from your GLB
    //     colors: [
    //       { name: "Ebony", color: "#a47b58" },
    //       { name: "Walnut", color: "#5c3d2e" },
    //       { name: "White", color: "#f5f5f0" },
    //     ]
    //   },
    //   {
    //     id: "chair_a",
    //     name: "Chair A",
    //     material: "Myrick_Chair",
    //     meshNames: ["Chair_Seat", "Chair_Back"],
    //     colors: [
    //       { name: "Mustard", color: "#dadbdf" },
    //       { name: "Charcoal", color: "#3d3d3d" },
    //       { name: "Sage", color: "#8b9a7d" },
    //     ]
    //   }
    // ]
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
    ],
    parts: []
  },
];

export const environmentPresets = [
  { name: "Indoor", preset: "apartment", color: "#ffeb3b" },
  { name: "Studio", preset: "studio", color: "#29b6f6" },
  { name: "Outdoor", preset: "park", color: "#66bb6a" },
];