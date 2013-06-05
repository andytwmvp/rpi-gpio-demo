var gpio = require("pi-gpio");
var i=0, ten=10;
function sleep(milliSeconds) {
    var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + milliSeconds);
}

gpio.open(12, "output", function(err) {
    console.log("open");

    sleep(500);

    gpio.write(12, 1, function() { console.log("write 1"); });

    sleep(500);

    gpio.write(12, 0, function() {

        sleep(500);

        console.log("write 0"); 

        sleep(500);

        gpio.close(12,function(){

            console.log("close");

        });
    });
});
