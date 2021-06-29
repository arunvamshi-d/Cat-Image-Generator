let generate_btn = document.querySelector(".generate_btn");

generate_btn.addEventListener("click", fetchPics);

function fetchPics(){
    let catsImage = document.querySelector(".catsImage")
    catsImage.innerHTML=''
    
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then((data) => {
        let catsImgUrl = data[0].url

        let catsImgEl = document.createElement("img")
        catsImgEl.setAttribute('src',`${catsImgUrl}`)
        
        let catsImage = document.querySelector(".catsImage")
        catsImage.appendChild(catsImgEl)

    })
    .catch(err => console.log(err))
}