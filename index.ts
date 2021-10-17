let list = document.querySelector(".list") as HTMLDivElement
const objectPattern={
    fetcher: async function fetcher(){
  const req = await fetch("http://localhost:5001",{
        method:"get",
    })
    const ret = await req.json()
    ret.forEach((one)=>{
      list.innerHTML+=
        `
        <div class="single">
          <div class="genre"><h1>${one.genre}</h1></div>
          <div class="name"><h1>${one.name}</h1></div>
          <div class="author"><h1>${one.author}</h1></div>
          <div class="overlay">
            <button>rent now</button>
          </div>
        `
    })
},

clicker: async function clicker(e){
    let child = e.target as HTMLButtonElement
    let h1 = Array.from(child.parentElement.parentElement.children)[1].children[0] as HTMLHeadingElement
    let text = h1.innerText
     const param ={
         text
     }
        const req =await fetch("http://localhost:5001/rent",{
        method:"post",
        body: JSON.stringify(param)
    })

    const ret = await req.json()
}
}
window.addEventListener("DOMContentLoaded",()=>{
    objectPattern.fetcher()
})
list.addEventListener("click",(e)=>{
  objectPattern.clicker(e)
})
