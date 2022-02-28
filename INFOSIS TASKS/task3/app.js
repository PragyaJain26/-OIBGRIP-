console.log("it is working")
update();
let add = document.getElementById("add");
add.addEventListener("click",getAndUpdate);

function getAndUpdate() {
    let tit = document.getElementById("title").value;
    let desc = document.getElementById("description").value;
    if(tit==" " || desc ==" "){
        window.alert("The title or description is invalid") 
        
    }
    else if(localStorage.getItem('itemsJson')==null){
        console.log("adding");
        itemJsonArray = [];
        itemJsonArray.push([tit,desc]);
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
    }
    
    else{
        itemJsonArrayStr=localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse( itemJsonArrayStr);
        itemJsonArray.push([tit,desc]);
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
    }
    title.value = " ";
    description.value = " "
    update()
}
function update(){
    if(localStorage.getItem('itemsJson')==null){
        console.log("adding");
        itemJsonArray = [];
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
    }
    else{
        itemJsonArrayStr=localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse( itemJsonArrayStr);
    }
    //populate table
    let tableBody = document.getElementById("tableBody");
    let str = "";
    itemJsonArray.forEach((element ,index) => {
        str+=`  <tr>
                    <th scope="row">${index+1}</th>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td>
                    <td><button class="btn btn-outline-dark" onclick="deleted(${index})">Delete</button></td>
                </tr>`
            });
        tableBody.innerHTML=str;
}

//delete section 
function deleted(itemIndex) {
    console.log("Delete",itemIndex) ;
    itemJsonArrayStr=localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse( itemJsonArrayStr);
    //deleting the no. of row u have to
    itemJsonArray.splice(itemIndex,1);
    localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
    update();
}

//clear function
function clearStorage() {
    if(localStorage.getItem('itemsJson')=="[]"){
        window.alert("The list is already empty!")
    }
    else if(confirm("Do you want to clear?")){
        localStorage.clear();
        update();
    }
}

//hide function
function hideStorage() {
    // console.log("hide")
    document.getElementById("tableId").style.display="none";
}
function displayStorage() {
    document.getElementById("tableId").style.display="block";//display property is used on div
}
