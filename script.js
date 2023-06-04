button = document.getElementById("button")
button.onclick = function(){
    var search = document.getElementById("search")
    var image = document.getElementById("image")
    image.src = "https://cataas.com/cat/says/"+search.value
    console.log(search.value)
}