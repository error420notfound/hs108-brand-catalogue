# HS108 Brand Catalogue

Versioned content and approved sample assets for the HS108 Brand Presentation System. This repository currently contains **one fictional example project**, Vesper Tea. It is a design study, not an HS108 client engagement or a claim of delivered commercial results.

The [feature paper](brandbook-web-system-feature-paper.md) defines the editorial page sequences, responsive layout grammar and public/client boundary. This repository supplies source data for a future renderer. It does not publish a site or secure confidential handovers by itself.

## Structure

```text
src/contract.ts                         TypeScript and Zod data contract
src/chroma/pin.json                      Offline Chroma reference index and commit
src/projects/vesper-tea/project.ts       Project metadata and assembly
src/projects/vesper-tea/content.ts       Shared story and client/public copy
src/projects/vesper-tea/editions/        Curated 15, 20 and 30 page manifests
src/projects/vesper-tea/assets.ts        Media metadata, audience and rights
src/projects/vesper-tea/assets/public/   Assets eligible for a public build
src/projects/vesper-tea/assets/client/   Handover assets for protected delivery
scripts/validate-catalogue.ts           Structural and access validation
```

## Add a project

1. Create `src/projects/<slug>/` with metadata, content, editions, colors, fonts, assets and an asset directory following the Vesper example.
2. Use a stable, unique project ID and register the object in `src/index.ts`. The `Project` contract is independent of project count.
3. Write a concise fictional notice for sample work, or record the real project's approval and attribution outside this public sample. Keep claims traceable.
4. Curate each edition independently. Pages need stable IDs, a valid template and one of the seven responsive layout variants. Keep content in meaningful mobile reading order: intro, media, caption and controls. The renderer should recompose desktop landscape into phone portrait using each asset's crop guidance.
5. The 15-page public sequence ends in a sales CTA. Page 15 of each client edition bridges into rules. The 20- and 30-page editions end in an asset hub. Use optional modules only when the work supports them; do not fabricate delivered media to fill a slot.

## Add an asset

Place files under the project's `assets/public/` or `assets/client/` directory and add an entry to `assets.ts`. Record a unique ID, path, media type, role, concise caption, useful alt text, desktop and mobile crop guidance, intended audience, and source, license and rights notes. Give raster imagery an aspect ratio and focal point. For motion, name a real static poster, how playback starts, and the reduced-motion state. Mark actual client handover files with `download: true`.

The three concept photographs were created for this sample using OpenAI's built-in image generation tool. Their prompts are retained in `assets.ts`; they depict fictional packaging, a fictional tea space, and a still life. SVG artwork and Lottie JSON were authored for this sample. No client work or unlicensed web imagery is included. The SVG typography specimens use fallbacks; a renderer must load the configured fonts for live text.

Client assets require a protected delivery route if used for confidential work. A public build must exclude the entire `assets/client/` directory, not just hide its links. The validator checks references within this catalogue; a consuming build must also check its final output.

## Color and fonts

`src/chroma/pin.json` records commit `22b9004f8042737a484c909ba7fe678b0a7e8f27` of [`error420notfound/chroma-catalogue`](https://github.com/error420notfound/chroma-catalogue). The repository was inspected before creating the reference index: scale files have stable scale IDs, numeric steps and optional reference color IDs. Project colors store those references, not duplicate values. The pin file includes only the IDs and steps needed for offline validation. No floating branch is fetched at runtime.

To update Chroma, inspect the new repository commit and schema, verify each selected ID and step in its actual files, then update the project refs and `pin.json` together. Run validation and review the rendered colors. Display-P3 values in the inspected catalogue are sRGB-derived; CMYK is not supplied or approved. A print specification requires an approved profile, conversion conditions and a physical proof.

Project fonts are configured in `fonts.ts` with family, weights, Google Fonts source page, fallback stack, specimen and license note. The sample uses Fraunces and DM Sans under SIL Open Font License 1.1. A consuming renderer should request only the configured weights and relevant subsets. Client downloads should link to the legitimate source, not redistribute an unverified font package.

## Validate

```sh
npm install
npm run validate
npm run typecheck
```

Validation checks edition counts, stable unique IDs, references, allowed template/layout names, audience boundaries, required asset metadata, resolved file paths, the page 15 and handover endings, and Chroma IDs against the pinned offline index. It does not verify visual layout or protected hosting; those belong to the consuming presentation build.
