var i=0;
function increment() {
    sessionStorage.setItem("obj1",i);
    i++;
    displayData();
}

function displayData() {
    var obj = sessionStorage.getItem("cart");
    var ite = JSON.parse(obj);
        for (var i = 0; i < ite.length; i++) {
            console.log("item",ite[i]);
            document.getElementById("cl").innerHTML=JSON.parse(ite[i]).client;
            document.getElementById("pro").innerHTML=JSON.parse(ite[i]).project;
            document.getElementById("bud").innerHTML=JSON.parse(ite[i]).budget;
        }
}

function clearData(){
    document.getElementById("projectName").value = "";
    document.getElementById("budget").value= "";
    document.getElementById("clientName").value = "";
}

function addData(){
    var client = document.getElementById("clientName").value;
    var project = document.getElementById("projectName").value;
    var budget = document.getElementById("budget").value;
    sessionStorage.setItem('item'+i, JSON.stringify({ client : client , project  :project , budget : budget}));
  i++;
  items.push(JSON.stringify({ client : client , project  :project , budget : budget}));
  sessionStorage.setItem('cart', JSON.stringify(items));
  console.log(items)
}
const items = (() => {
    const fieldValue = sessionStorage.getItem('cart');
    return fieldValue === null
      ? []
      : JSON.parse(fieldValue);
  })();