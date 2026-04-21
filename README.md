# Spatial — 3D Furniture Configurator

> Browser-based 3D product configurator with real-time customization, environment lighting, and AR-ready architecture.
>
> **[spatial-ar-furniture-configurator.vercel.app](https://spatial-ar-furniture-configurator.vercel.app/)**


⚠️ Early-stage prototype. AR functionality is planned but not yet implemented.

---

## What it does

Select a furniture piece, change its color, switch lighting environments, drag to rotate, scroll to zoom — all in the browser, no plugin needed. Built as an exploration of how 3D and spatial interfaces can work inside a real product context, not just as a visual demo.

**Core interactions:**
- Drag to rotate / scroll to zoom — full orbit controls with product-style camera constraints
- Real-time color and material switching applied directly to the 3D mesh
- Environment presets: Indoor, Studio, Outdoor, Night — each changes scene lighting
- Multiple furniture pieces with dynamic model switching
- "View in Your Room" AR entry point — architecture in place, implementation in progress

---

## Architecture

The app is built around three separated layers, designed to scale toward a production configurator:

**3D Scene Layer** — react-three-fiber handles rendering. Lighting, environment maps, and camera controls are decoupled from UI logic. Furniture models use primitive geometries for now, sized to approximate real-world dimensions in meters — which makes the scene AR-compatible by design.

**Configuration & State Layer** — React state manages selected furniture, material/color, and environment preset. Structured to support persisted configurations (save/load) in a future version.

**UI Layer** — Clean split layout between the 3D viewer and configuration panel, modeled after real e-commerce product tools.

> In a production build, primitive geometries would be replaced with optimized GLTF assets loaded from a CDN.

---

## AR Status

Not yet implemented. The scene is built with WebXR compatibility in mind — real-world scale, correct camera setup — but full AR integration is a planned next step:

- WebXR camera integration
- Floor detection and object placement
- Mobile AR testing

---

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | React |
| 3D Engine | Three.js · react-three-fiber · @react-three/drei |
| Styling | Tailwind CSS |
| Icons | Lucide |

---

## Running locally

```bash
git clone https://github.com/AnuOuseph/Spatial-AR-Furniture-Configurator
cd Spatial-AR-Furniture-Configurator
npm install
npm run dev
```

---

[Portfolio](https://anuouseph.vercel.app) · [LinkedIn](https://linkedin.com/in/anuouseph) · [GitHub](https://github.com/AnuOuseph)
