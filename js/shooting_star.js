// // 流れ星

// (function () {
//     ShootingStar = function (id) {
//         this.n = 0;
//         this.m = 0;
//         this.defaultOptions = {
//             velocity: 8,
//             starSize: 15,
//             life: 300,
//             beamSize: 400,
//             dir: -1,
//         };
//         this.options = {};
//         id = typeof id != "undefined" ? id : "";
//         this.capa = $(id).length > 0 ? "body" : id; // typo fixed: `lenght` -> `length`
//         this.wW = $(this.capa).innerWidth();
//         this.hW = $(this.capa).innerHeight();

//         // セクション内の位置情報を取得
//         this.section = $(id);
//         this.sectionPosition = this.section.offset(); // セクションの位置情報
//     };

//     ShootingStar.prototype.addBeamPart = function (x, y) {
//         this.n++;
//         var name = this.getRandom(100, 1);
//         $("#star" + name).remove();
//         $(this.capa).append("<div id='star" + name + "'></div>");
//         $("#star" + name).append(
//             "<div id='haz" +
//                 this.n +
//                 "' class='haz' style='position:absolute; color:#FF0; width:10px; height:10px; font-weight:bold; font-size:" +
//                 this.options.starSize +
//                 "px'>·</div>"
//         );
//         if (this.n > 1)
//             $("#haz" + (this.n - 1)).css({
//                 color: "rgba(255,255,255,0.5)",
//             });

//         // セクション内に表示
//         var sectionTop = this.sectionPosition.top;
//         $("#haz" + this.n).css({
//             top: y + this.n - sectionTop, // セクション内の座標に修正
//             left: x + this.n * this.options.dir,
//         });
//     };

//     ShootingStar.prototype.delTrozoHaz = function () {
//         this.m++;
//         $("#haz" + this.m).animate(
//             {
//                 opacity: 0,
//             },
//             75
//         );
//         if (this.m >= this.options.beamSize) {
//             $("#ShootingStarParams").fadeOut("slow");
//         }
//     };

//     ShootingStar.prototype.getRandom = function (max, min) {
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//     };

//     ShootingStar.prototype.toType = function (obj) {
//         if (typeof obj === "undefined") {
//             return "undefined"; /* consider: typeof null === object */
//         }
//         if (obj === null) {
//             return "null";
//         }
//         var type =
//             Object.prototype.toString
//                 .call(obj)
//                 .match(/^\[object\s(.*)\]$/)[1] || "";
//         switch (type) {
//             case "Number":
//                 if (isNaN(obj)) {
//                     return "nan";
//                 } else {
//                     return "number";
//                 }
//             case "String":
//             case "Boolean":
//             case "Array":
//             case "Date":
//             case "RegExp":
//             case "Function":
//                 return type.toLowerCase();
//         }
//         if (typeof obj === "object") {
//             return "object";
//         }
//         return undefined;
//     };

//     ShootingStar.prototype.launchStar = function (options) {
//         if (this.toType(options) != "object") {
//             options = {};
//         }
//         this.options = $.extend({}, this.defaultOptions, options);
//         this.n = 0;
//         this.m = 0;
//         var i = 0,
//             l = this.options.beamSize,
//             self = this;

//         for (; i < l; i++) {
//             var x = self.getRandom(self.wW - this.options.starSize, 0);
//             var y = self.getRandom(self.hW - this.options.starSize, 0);
//             setTimeout(function () {
//                 self.addBeamPart(x, y);
//             }, self.options.life + i * self.options.velocity);
//         }

//         for (i = 0; i < l; i++) {
//             setTimeout(function () {
//                 self.delTrozoHaz();
//             }, self.options.beamSize + i * self.options.velocity);
//         }

//         $("#ShootingStarParams").html(
//             "Launching shooting star. PARAMS: wW: " +
//                 this.wW +
//                 " - hW: " +
//                 this.hW +
//                 " - life: " +
//                 this.options.life +
//                 " - beamSize: " +
//                 this.options.beamSize +
//                 " - velocity: " +
//                 this.options.velocity
//         );
//         $("#ShootingStarParams").fadeIn("slow");
//     };

//     ShootingStar.prototype.launch = function (everyTime) {
//         if (this.toType(everyTime) != "number") {
//             everyTime = 5;
//         }
//         everyTime = everyTime * 1000;
//         this.launchStar();
//         var self = this;
//         setInterval(function () {
//             var options = {
//                 dir: self.getRandom(1, 0) ? 1 : -1,
//                 life: self.getRandom(400, 100),
//                 beamSize: self.getRandom(700, 400),
//                 velocity: self.getRandom(10, 4),
//             };
//             self.launchStar(options);
//         }, everyTime);
//     };
// })();

// $(document).ready(function () {
//     var shootingStarObj = new ShootingStar("#mv"); // #mvセクション内の要素を対象にする
//     shootingStarObj.launch(3); // フローを開始する間隔（秒）を指定

//     var shootingStarObj = new ShootingStar("#mv");
//     shootingStarObj.launch(3);

//     var shootingStarObj = new ShootingStar("#mv");
//     shootingStarObj.launch(3);

//     var shootingStarObj = new ShootingStar("#mv");
//     shootingStarObj.launch(3);
// });

// // 流れ星ここまで

(function () {
    /**
       author: @manufosela
       2013/08/27    copyleft 2013
  
       ShootingStar class Main Methods:
       launch: launch shooting stars every N seconds received by              param. 10 seconds by default.
        launchStar: launch a shooting star. Received options                  object by param with:
                 - dir (direction between 0 and 1)
                 - life (between 100 and 400)
                 - beamSize (between 400 and 700)
                 - velocity (between 2 and 10)
                 
      It is necessary to use jQuery (this code is before ES6)
      This code use https://codeorigin.jquery.com/jquery-1.10.2.min.js
    **/

    ShootingStar = function (id) {
        this.n = 0;
        this.m = 0;
        this.defaultOptions = {
            velocity: 8,
            starSize: 12,
            life: 300,
            beamSize: 400,
            dir: -1,
        };
        this.options = {};
        id = typeof id != "undefined" ? id : "";
        this.capa = $(id).lenght > 0 ? "body" : id;
        this.wW = $(this.capa).innerWidth();
        this.hW = $(this.capa).innerHeight();
    };

    ShootingStar.prototype.addBeamPart = function (x, y) {
        this.n++;
        var name = this.getRandom(100, 1);
        $("#star" + name).remove();
        $(this.capa).append("<div id='star" + name + "'></div>");
        $("#star" + name).append(
            "<div id='haz" +
                this.n +
                "' class='haz' style='position:absolute; color:#FF0; width:10px; height:10px; font-weight:bold; font-size:" +
                this.options.starSize +
                "px'>·</div>"
        );
        if (this.n > 1)
            $("#haz" + (this.n - 1)).css({
                color: "rgba(255,255,255,0.5)",
            });
        $("#haz" + this.n).css({
            top: y + this.n,
            left: x + this.n * this.options.dir,
        });
    };

    ShootingStar.prototype.delTrozoHaz = function () {
        this.m++;
        $("#haz" + this.m).animate(
            {
                opacity: 0,
            },
            75
        );
        if (this.m >= this.options.beamSize) {
            $("#ShootingStarParams").fadeOut("slow");
        }
    };

    ShootingStar.prototype.getRandom = function (max, min) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    ShootingStar.prototype.toType = function (obj) {
        if (typeof obj === "undefined") {
            return "undefined"; /* consider: typeof null === object */
        }
        if (obj === null) {
            return "null";
        }
        var type =
            Object.prototype.toString
                .call(obj)
                .match(/^\[object\s(.*)\]$/)[1] || "";
        switch (type) {
            case "Number":
                if (isNaN(obj)) {
                    return "nan";
                } else {
                    return "number";
                }
            case "String":
            case "Boolean":
            case "Array":
            case "Date":
            case "RegExp":
            case "Function":
                return type.toLowerCase();
        }
        if (typeof obj === "object") {
            return "object";
        }
        return undefined;
    };

    ShootingStar.prototype.launchStar = function (options) {
        if (this.toType(options) != "object") {
            options = {};
        }
        this.options = $.extend({}, this.defaultOptions, options);
        this.n = 0;
        this.m = 0;
        var i = 0,
            l = this.options.beamSize,
            x = this.getRandom(this.wW - this.options.beamSize - 100, 100),
            y = this.getRandom(this.hW - this.options.beamSize - 100, 100),
            self = this;
        for (; i < l; i++) {
            setTimeout(function () {
                self.addBeamPart(x, y);
            }, self.options.life + i * self.options.velocity);
        }
        for (i = 0; i < l; i++) {
            setTimeout(function () {
                self.delTrozoHaz();
            }, self.options.beamSize + i * self.options.velocity);
        }
        $("#ShootingStarParams").html(
            "Launching shooting star. PARAMS: wW: " +
                this.wW +
                " - hW: " +
                this.hW +
                " - life: " +
                this.options.life +
                " - beamSize: " +
                this.options.beamSize +
                " - velocity: " +
                this.options.velocity
        );
        $("#ShootingStarParams").fadeIn("slow");
    };

    ShootingStar.prototype.launch = function (everyTime) {
        if (this.toType(everyTime) != "number") {
            everyTime = 5;
        }
        everyTime = everyTime * 1000;
        this.launchStar();
        var self = this;
        setInterval(function () {
            var options = {
                dir: self.getRandom(1, 0) ? 1 : -1,
                life: self.getRandom(400, 100),
                beamSize: self.getRandom(700, 400),
                velocity: self.getRandom(10, 4),
            };
            self.launchStar(options);
        }, everyTime);
    };
})();

$(document).ready(function () {
    var shootingStarObj = new ShootingStar("#mv");
    shootingStarObj.launch();
});
