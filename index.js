function slugify(text) {
  return text
  .toLowerCase()
  .replace(/[^\w\s-]/g, '') // replace special characters except hyphen and whitespace
  .replace(/\.$/, '')      // remove last dot
  .replace(/^-+|-+$/g, '') // remove leading/trailing hyphens
  .replace(/\s+/g, '-')    // replace whitespace with hyphens
  .replace(/-{2,}/g, '-'); // replace multiple consecutive hyphens with single hyphen
}

module.exports.slugify = slugify;
