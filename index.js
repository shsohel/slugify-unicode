function slugify(text) {
  // Convert text to lowercase and remove leading/trailing whitespaces
  let slug = text.toLowerCase().trim();
    
  // Replace Bengali spaces with hyphens
  slug = slug.replace(/[\u200B-\u200D\uFEFF]/g, '-');
  
  // Remove special characters except Bengali characters and hyphens
  slug = slug.replace(/[^\u0980-\u09FF\w\s-]/g, '');
  
  // Remove consecutive hyphens
  slug = slug.replace(/-{2,}/g, '-');
  
  // Replace spaces with hyphens
  slug = slug.replace(/\s+/g, '-');
  
  // Encode non-ASCII characters
  slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  
  return slug;
}
module.exports.slugify = slugify;
