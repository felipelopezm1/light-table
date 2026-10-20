# light-table

The masking brush and light table lifted out of Hephaestus: a framework-free Canvas 2D mask (brush, eraser, box, lasso, undo, grow, invert, hard and soft masks) with its painted overlay, and the crop, pad and paste-back helpers an inpaint or outpaint engine needs.

## The build map is the record of the project

`docs/build-map.mjs` records how light-table was built, stage by stage. When a change that adds or reshapes a part lands on the default branch, append its stage, add its parts to `nodes` and its threads to `edges`.

## The brain

`brain/` is shared memory: skills in `brain/skills`, knowledge in `brain/docs`, the trail of quests in `brain/docs-trail`.
