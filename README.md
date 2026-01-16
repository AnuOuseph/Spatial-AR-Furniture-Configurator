# Spatial — Interactive 3D Furniture Configurator (Prototype)

**Spatial** is a web-based 3D furniture configurator that explores spatial UI patterns, real-time interaction, and AR-ready scene architecture.

The project focuses on building a **production-style 3D product viewer** rather than a visual demo, with an emphasis on scalability, usability, and future AR integration.

> ⚠️ This project is an early-stage prototype. AR functionality is not fully implemented yet and is planned as a future extension.

---

## Key Features

- **Interactive 3D Product Viewer**
  - Rotate, zoom, and pan furniture models in real time
  - Camera constraints designed for product-style interaction

- **Furniture Configuration**
  - Switch between different furniture types (chair, table, sofa)
  - Dynamic material and color selection

- **Environment Presets**
  - Multiple HDR environments to preview products under different lighting conditions

- **Real-World Scale (AR-Ready)**
  - Furniture models designed with approximate real-world dimensions
  - Scene architecture prepared for future WebXR / AR integration

- **Product-Focused UI**
  - Clean split layout between 3D viewer and configuration controls
  - Inspired by real e-commerce and spatial product tools

---

## Project Motivation

The goal of this project was to explore how **3D and spatial interfaces** can be integrated into a product-oriented web application.

Rather than focusing on visual complexity, the emphasis was placed on:

- scene structure and scalability  
- interaction design for 3D products  
- preparing a foundation suitable for **AR experiences**

This project reflects an early exploration of workflows commonly used in **3D commerce, digital showrooms, and AR-enabled product platforms**.

---

## Architecture Overview

The application is structured around three core layers:

### 1. 3D Scene Layer
- Built using **react-three-fiber**
- Modular furniture models rendered based on selected product type
- Lighting, environment, and camera controls separated from UI logic

### 2. Configuration & State Layer
- React state manages:
  - selected furniture
  - material / color
  - environment preset
- Designed to scale toward persisted configurations (save/load)

### 3. UI Layer
- Product-style layout with:
  - main viewer area
  - configuration panel
- Tailored for clarity and usability rather than experimentation

---

## Furniture Models

Furniture models are currently composed of primitive geometries (boxes, cylinders) to:

- keep focus on interaction and architecture
- allow rapid iteration
- avoid premature optimization

> In a production scenario, these would be replaced with optimized GLTF assets.

---

## Real-World Scaling

All furniture elements are modeled with **approximate real-world dimensions (meters)**, enabling:

- consistent spatial perception
- easier transition to AR rendering
- compatibility with WebXR camera setups

This design choice ensures the project is **AR-ready by design**, even before AR is fully integrated.

---

## AR Status (Work in Progress)

AR functionality is **not yet implemented**.

Current focus:
- scene correctness
- scale accuracy
- interaction design

Planned next steps:
- WebXR camera integration
- floor detection and object placement
- mobile AR testing

---

## 🛠️ Tech Stack

- **React**
- **Three.js**
- **@react-three/fiber**
- **@react-three/drei**
- **Tailwind CSS**
- **Lucide Icons**

---

