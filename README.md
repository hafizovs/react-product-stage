# 09 Product stage

**Live:** https://hafizovs.github.io/react-product-stage/

Interactive 3D product viewer built with React Three Fiber and drei.

## Stack

- Vite, TypeScript, Tailwind CSS
- `@react-three/fiber`, `@react-three/drei`, Zustand
- FSD layout under `src/`

## Features

- Orbit controls around a box or sphere mesh
- Color picker with hex validation and swatches
- Toggle between studio and warehouse environment presets
- Capped device pixel ratio for weaker GPUs


## How to run

```bash
# from portfolio_react/
pnpm install
pnpm dev
```

Open **http://localhost:5009**

See also [docs/RUNBOOK.md](../docs/RUNBOOK.md).

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Dev server on **port 5009** (strict) |
| `pnpm check` | Typecheck, Vitest, oxlint |
| `pnpm build` | Production build |

## Manual check

1. Run `pnpm dev` and open the app.
2. Drag to orbit the product.
3. Change color via picker or swatch; switch shape and environment.
