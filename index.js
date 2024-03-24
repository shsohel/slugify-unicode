function slugify(text) {
 // Convert text to lowercase and remove leading/trailing whitespaces
 let slug = text.toLowerCase().trim();

 // Replace Bengali spaces with hyphens
 slug = slug.replace(/[\u200B-\u200D\uFEFF]/g, "-");

 // Remove special characters except Bengali characters, hyphens, and whitespace
 slug = slug.replace(/[^\u0980-\u09FF\w\s-]/g, "");

 // Replace consecutive hyphens and whitespaces with a single hyphen
 slug = slug.replace(/[-\s]+/g, "-");

 // Trim hyphens from the beginning and end of the slug
 slug = slug.replace(/^-+|-+$/g, "");

 return slug;
}
module.exports.slugify = slugify;
