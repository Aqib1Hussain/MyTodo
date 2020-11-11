let text=document.querySelector(".text")
let submit=document.querySelector(".submit")
let list=document.querySelector("ul")



text.addEventListener("keyup",addItem)

submit.addEventListener("click",addItem)

function addItem(e){
    if  (text.value!==""){

            if  (e.key==="Enter" || e.target===submit){
            
                let li=document.createElement("li")
                
                let img=document.createElement("img")
                img.src="trash.png"
            let textNode=document.createTextNode(`${text.value}`)
            
            
            img.classList="red"  
            
            li.appendChild(textNode)
            
            li.appendChild(img)

            li.classList="color flex"
            
            list.appendChild(li)

            text.value=""
        }
    }
    

}
list.addEventListener("click",function(e){
    let listItem=document.querySelector(".red")
    if (e.target.classList=="red"){
        e.target.parentElement.remove()
    }
})