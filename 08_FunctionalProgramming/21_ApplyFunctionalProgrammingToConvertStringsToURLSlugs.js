// Only change code below this line
function urlSlug(title) {
 const result = title.toLowerCase().trim().split(/\W+/);
 return result.join('-');
}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"))