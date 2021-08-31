function startTime(){
    var today = new Date(), hours = today.getHours(), minutes = today.getMinutes(),
    segundos = today.getSeconds();
    
    hours = (hours == 0) ? 12 : hours;
    hours = (hours > 12) ? hours - 12 : hours;

    hours = checkTime(hours);
    minutes = checkTime(minutes);

    if(segundos < 10){
        segundos = "0" + segundos;
    }


    var watch = document.querySelector("#time").innerHTML = hours +":"+ minutes +":"+ segundos;

    var time = setTimeout(
        function(){
            startTime();
        },500
    );
}

function checkTime(e){
    if(e < 10){
        e = "0" + e;
    }
    return e;

}