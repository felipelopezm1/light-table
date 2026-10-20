/**
 * The build map of light-table: how it was built, stage by stage. Hephaestus draws it in the armory.
 * Append a stage for every change that adds or reshapes a part (never reorder: nodes and edges
 * point at stages by index), add its parts to `nodes` and its threads to `edges`.
 */
export const sheets = { land: { w: 1600, h: 760 }, port: { w: 520, h: 1810 } };

export const stages = [
  { name: "genesis", short: "genesis", date: "2026-10-20", time: "14:35",
    text: "light-table is forged by felipelopezm1: a repository with a brain, the forge's arms and skills, and this map.",
    commits: [] },
];

export const regions = [
  { id: "project", name: "light-table",
    land: { x: 30, y: 14, w: 1540, h: 730, label: "light-table" },
    port: { x: 10, y: 14, w: 500, h: 1780, label: "light-table" } },
];

export const nodes = [
  { id: "repo", label: "felipelopezm1/light-table", sub: "repository", kind: "service", region: "project", stage: 0, w: 0.3,
    what: "The masking brush and light table lifted out of Hephaestus: a framework-free Canvas 2D mask (brush, eraser, box, lasso, undo, grow, invert, hard and soft masks) with its painted overlay, and the crop, pad and paste-back helpers an inpaint or outpaint engine needs." },
  { id: "brain", label: "brain", sub: "memory", kind: "store", region: "project", stage: 0, w: 0.3,
    what: "Skills, docs and the hash-chained trail of every quest." },
];

export const edges = [
  ["repo", "brain", "brain/", 0],
];
