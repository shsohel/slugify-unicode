function slugify(text) {
  return text
    .toLowerCase()
    .replace(text, text)
    .replace(/^-+|-+$/g, '')
    .replace(/\s/g, '-')
    .replace(/\-\-+/g, '-');
}

module.exports.slugify = slugify;
