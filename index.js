const emoji = require('node-emoji');
function add(a, b){
  if(typeof a != "number" || typeof b != "number")
  {
    console.error(emoji.get("coffee") + "  Something went wrong");
  }
}
// For google code in task
add("1", "2")
