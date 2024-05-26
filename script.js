$(document).ready(function(){
    var start = $('#start');
    var stop = $('#stop');
    var reset = $('#reset');

    var wm = $('#w_minutes');
    var ws = $('#w_seconds');

   var setCustomTime =$("#setCustomTime")

    //store a reference to a timer variable
    var startTimer;

    start.on('click', function(){
        if(startTimer === undefined){
            startTimer = setInterval(timer, 1000);
        } else {
            alert("Timer is already running");
        }
    });

    reset.on('click', function(){
        wm.text(25);
        ws.text("00");

        stopInterval();
        startTimer = undefined;
    });

    stop.on('click', function(){
        stopInterval();
        startTimer = undefined;
    });

    setCustomTime.on('click', function(){
        var customMinutes = $('#customMinutes').val();
        wm.text(customMinutes);
        ws.text("00");

        stopInterval();
        startTimer = undefined;
    });
    

   



    //Start Timer Function
    function timer(){
        //Work Timer Countdown
        if(ws.text() != 0){
            ws.text(ws.text() - 1);
        } else if(wm.text() != 0 && ws.text() == 0){
            ws.text(59);
            wm.text(wm.text() - 1);
        }


        //Increment Counter by one if one full cycle is completed
        if(wm.text() == 0 && ws.text() == 0 ){
            wm.text(25);
            ws.text("00");
            reset.click();

        }
    }

    //Stop Timer Function
    function stopInterval(){
        clearInterval(startTimer);
    }
});
