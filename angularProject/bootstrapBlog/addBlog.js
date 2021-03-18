var i=0;
function addData(){
    debugger
    var blogname = document.getElementById("blogname").value;
    var articlename = document.getElementById("articleName").value;
    // var budget = document.getElementById("budget").value;
    sessionStorage.setItem('item'+i, JSON.stringify({ blogname : blogname , articlename  :articlename }));
  i++;
  items.push(JSON.stringify({ blogname : blogname , articlename  :articlename }));
  sessionStorage.setItem('cart', JSON.stringify(items));
  console.log(items)
}
const items = (() => {
    const fieldValue = sessionStorage.getItem('cart');
    return fieldValue === null
      ? []
      : JSON.parse(fieldValue);
  })();

function displayData() {
    var obj = sessionStorage.getItem("cart");
    var ite = JSON.parse(obj);
        for (var i = 0; i < ite.length; i++) {
            console.log("item",ite[i]);
            document.getElementById("titleName").innerHTML=JSON.parse(ite[i]).client;
            document.getElementById("articless").innerHTML=JSON.parse(ite[i]).project;
        }
}