function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, "") // replace non-letter, non-number, non-space, and non-hyphen characters
    .replace(/\.$/, "") // remove last dot
    .replace(/^-+|-+$/gu, "") // remove leading/trailing hyphens
    .replace(/\s+/gu, "-") // replace whitespace with hyphens
    .replace(/-{2,}/gu, "-"); // replace multiple consecutive hyphens with single hyphen
}
module.exports.slugify = slugify;
