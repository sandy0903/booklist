var addForm=document.getElementById("addForm").addEventListener("submit",addItem);
var itemList=document.getElementById("items");
var filterOut=document.getElementById("filter");
filterOut.addEventListener("keyup",filterItem);
itemList.addEventListener("click",removeItem);

function addItem(e){
    e.preventDefault();
    var newItem=document.getElementById("item").value;
    
    var li=document.createElement("li");
    li.className= "list-group-item";
    li.appendChild(document.createTextNode(newItem));

    var del=document.createElement("button");
    del.className="btn btn-danger btn-sm float-right delete";
    del.appendChild(document.createTextNode("x"));
    li.appendChild(del);
    itemList.appendChild(li);
};
function removeItem(e){
    if(e.target.classList.contains("delete")){
      if(confirm("are u sure")){
          var li=e.target.parentElement;
            itemList.removeChild(li);
        
        }
    }
}
function filterItem(e){
    var text=e.target.value.toLowerCase();
     
    var items=document.getElementsByTagName("li");
    
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
           item.style.display="block"
        }else{
            item.style.display="none"
        };
        
    })
    
}