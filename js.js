function addTask() {

    let inputData = document.getElementById("enterData");
    let inputDataValue = inputData.value.trim()
    if(inputDataValue===""){
        alert("Enter task")
        return;
    }

    let allTasksContainer = document.querySelector("#tasks")

    let liTag = document.createElement("li");
    
    liTag.innerHTML = ` ${inputDataValue}
     <button class="edit">Edit</button>
     <button class="delete">Delete</button> `

    liTag.style.listStyleType = "none"

    allTasksContainer.appendChild(liTag)
     inputData.value = ""
    
    let editBtn = liTag.querySelector(".edit")
    editBtn.style.backgroundColor = "blue"

    let dlteBtn =liTag.querySelector(".delete")
    dlteBtn.style.backgroundColor = "red"

    editBtn.addEventListener("click",()=>{
        editBtn1(liTag)
    })

    dlteBtn.addEventListener("click",()=>{
        deletebtn(liTag)
    })
   
    function deletebtn(x){
        let conform =confirm("Are you sure ?")
        if(conform){
            x.remove()
        }
    }
    function editBtn1(liTag){
        let text=liTag.firstChild.textContent
        console.log(text)
        let value= prompt("Enter New text",text)
        if(value !==null && value !==""){
            liTag.firstChild.textContent=value; 
        }

    }

}