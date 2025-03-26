let container=document.createElement("container")
container.className=("container")
const url = 'http://localhost:4000/products';

async function getData(){
	try {
		const response = await fetch(url);
		const result = await response.json();
		console.log(result)
		displayData(result)
	} catch (error) {
		console.error(error);
	}	
}
function displayData(store){
	store.forEach(element=>{
        let item=document.createElement("div")
		item.className=("item")
		item.innerHTML=`
		   <img src="${element.image}" class="image">
		   <h1 class="heading">${element.title}</h1>
           <p class="para">${element.description}</p>
		   <p class="para">${element.category}</p>
		   <h1 class="para">$ ${element.price}</h1>
		   <button class="btn">view it</button>
		`;
       container.appendChild(item);
	});
      document.body.appendChild(container)
}

window.addEventListener("DOMContentLoaded",function(){
	getData()
})

