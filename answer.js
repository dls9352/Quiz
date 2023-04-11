var score = 0
function birAnswer(){
    var selected = document.querySelector('input[name="birthday"]:checked').value;
    if (selected === "7월"){
        score = score + 1;
        location.href='food.html'
    }
    else {
        location.href='food.html'
    }
}
function foodAnswer(){
    var selected = document.querySelector('input[name="food"]:checked').value;
    if (selected === "토마토"){
        score = score + 1;
        location.href='home.html'
    }
    else {
        location.href='home.html'
    }
}
function homeAnswer(){
    var selected = document.querySelector('input[name="home"]:checked').value;
    if (selected === "선암동"){
        score = score + 1;
    }
    if (selected === "얼음동동"){
        alert("똑바로 안 골라????????????????????")
    }
    if (selected === "운동"){
        alert("똑바로 고르라고 했다.")
    }
    else {
    }
}