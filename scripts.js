fetch("data.json")
.then(function (response){
  return response.json();
})
.then(function(results){
  let place = document.getElementById("resau")
  let out = "";
  for(let resault of results){
    out += `
    <div>
      <small>
        <img src="${resault.icon}">
        ${resault.category}
      </small>
      <span>
      <span>${resault.score}</span>
      /100
      </span>
    </div>
    `
  }
  place.innerHTML = out;
})
