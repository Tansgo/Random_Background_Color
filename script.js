function set_random_background_color(){
    let red = Math.random() * 255;
    let green = Math.random() * 255;
    let blue = Math.random() * 255;
    let opacity = Math.random();

    document.body.style.backgroundColor = `rgba(${red},${green},${blue},${opacity})`;
}

document.getElementById("change_button").onclick = set_random_background_color;

