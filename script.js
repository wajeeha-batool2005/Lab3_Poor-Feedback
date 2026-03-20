let count = 0;
const btn = document.getElementById("actionBtn");
const status = document.getElementById("status");

function hoverIn(){
    btn.style.backgroundColor = "#e0e0e0";
}

function hoverOut(){
    btn.style.backgroundColor = "";
}

function performAction() {

    count++;

    btn.style.transform = "scale(0.95)";
    setTimeout(() => btn.style.transform = "", 100);

    if (count > 2) {

        btn.disabled = true;
        btn.style.opacity = "0.5";

        status.innerHTML = '<span style="color: red;">⚠️ Limit reached!</span>';

    }
    else{

        status.innerHTML = `✅ Processed ${count} time${count > 1 ? 's' : ''}`;

    }
}