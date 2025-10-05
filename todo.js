document.addEventListener("DOMContentLoaded",function(){
   let addToDo = document.getElementById("addingToDo")
   let inputToDo = document.getElementById("newToDo")
   let myList =document.getElementById("myList")
   let allbtn = document.getElementById("all")
   let activebtn = document.getElementById("active")
   let completedbtn = document.getElementById("completed")
   let clearbtn = document.getElementById("clearButton")
   let counter = document.getElementById("counter")
   addToDo.addEventListener("change",function(){
     let inputValue = inputToDo.value.trim()
      if(this.checked){
          if(inputValue === ""){
            inputToDo.classList.add("nothing")
            console.log("wwww")
          }
          else{
            inputToDo.classList.remove("nothing")
            let checkboxItem = document.createElement("input")
                checkboxItem.setAttribute("type","checkbox")
            myList.appendChild(checkboxItem)
            let listItem = document.createElement("li")
            listItem.textContent = inputValue;
            myList.appendChild(listItem)
            console.log("mmmmm")
            this.checked = false ;
            allbtn.addEventListener("click" , function(){
              if (checkboxItem.checked){
                checkboxItem.style.display =  "inline";
              listItem.style.display = "block";
                   listItem.style.width = "80%" ;
               }
            else{
                 checkboxItem.style.display =  "inline";
                listItem.style.display = "block";
               listItem.style.width = "80%" ;
                    }
                 })
              activebtn.addEventListener("click"  , function(){
               if (checkboxItem.checked){
                 checkboxItem.style.display = "none";
                  listItem.style.display = "none";
                }
           else{
            checkboxItem.style.display =  "inline";
          listItem.style.display = "block";
              listItem.style.width = "80%";
              }
              })
            completedbtn.addEventListener("click" , function(){
           if (checkboxItem.checked){
           checkboxItem.style.display =  "inline";
           listItem.style.display = "block";
               listItem.style.width = "80%";
            }
           else{
             checkboxItem.style.display = "none";
            listItem.style.display = "none";
             }
                  })
          clearbtn.addEventListener("click" , function(){
               if(checkboxItem.checked){
              checkboxItem.remove();
               listItem.remove();
             }
           })
           }
         }
   
     })
 
      })
