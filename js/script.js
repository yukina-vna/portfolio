(function (d) {
    var config = {
            kitId: "vjt1xyl",
            scriptTimeout: 3000,
            async: true,
        },
        h = d.documentElement,
        t = setTimeout(function () {
            h.className =
                h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
        }, config.scriptTimeout),
        tk = d.createElement("script"),
        f = false,
        s = d.getElementsByTagName("script")[0],
        a;
    h.className += " wf-loading";
    tk.src = "https://use.typekit.net/" + config.kitId + ".js";
    tk.async = true;
    tk.onload = tk.onreadystatechange = function () {
        a = this.readyState;
        if (f || (a && a != "complete" && a != "loaded")) return;
        f = true;
        clearTimeout(t);
        try {
            Typekit.load(config);
        } catch (e) {}
    };
    s.parentNode.insertBefore(tk, s);
})(document);

(function (d) {
    var config = {
            kitId: "vjt1xyl",
            scriptTimeout: 3000,
            async: true,
        },
        h = d.documentElement,
        t = setTimeout(function () {
            h.className =
                h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
        }, config.scriptTimeout),
        tk = d.createElement("script"),
        f = false,
        s = d.getElementsByTagName("script")[0],
        a;
    h.className += " wf-loading";
    tk.src = "https://use.typekit.net/" + config.kitId + ".js";
    tk.async = true;
    tk.onload = tk.onreadystatechange = function () {
        a = this.readyState;
        if (f || (a && a != "complete" && a != "loaded")) return;
        f = true;
        clearTimeout(t);
        try {
            Typekit.load(config);
        } catch (e) {}
    };
    s.parentNode.insertBefore(tk, s);
})(document);

// ヘッダー
$(function () {
    var $header = $("#header");
    $(window).on("load scroll", function () {
        var value = $(this).scrollTop();
        if (value > 0) {
            $header.addClass("scroll");
        } else {
            $header.removeClass("scroll");
        }
    });
});

// ページネーション
/* 
this javascript is only to change the "actpage" attribut on the .cdp div
*/

window.onload = function () {
    var paginationPage = parseInt($(".cdp").attr("actpage"), 10);
    $(".cdp_i").on("click", function () {
        var go = $(this).attr("href").replace("#!", "");
        if (go === "+1") {
            paginationPage++;
        } else if (go === "-1") {
            paginationPage--;
        } else {
            paginationPage = parseInt(go, 10);
        }
        $(".cdp").attr("actpage", paginationPage);
    });
};

// ハンバーガーメニュー
$(function () {
    $(".sp_btn, .sp_nav li").on("click", function () {
        $(".sp_btn").toggleClass("open");
        $(".sp_nav").fadeToggle();
    });
});

$(function () {
    var webStorage = function () {
        if (sessionStorage.getItem("access")) {
            // 2回目以降アクセス時の処理
            $(".content").css({
                opacity: "1",
                visibility: "visible",
            });
        } else {
            // 初回アクセス時の処理
            sessionStorage.setItem("access", "true");
            $(".loader").addClass("is-active");
            $(window).on("load", function () {
                // ローディング画面を非表示にする
                $(".loader_sun").addClass("is-hidden");
                $(".loading").delay(3000).fadeOut(800);

                // 2秒後に真っ暗な背景をフェードイン
                setTimeout(function () {
                    $(".overlay").css("visibility", "visible");
                    $(".overlay").css("opacity", "1"); // 不透明にすることでフェードイン
                }, 1800); // 2秒後にフェードイン

                // 3秒後に真っ暗な背景をフェードアウト
                setTimeout(function () {
                    $(".overlay").css("opacity", "0"); // 透明にすることでフェードアウト
                }, 3700); // 3秒後にフェードアウト

                // 4秒後にコンテンツが表示される
                setTimeout(function () {
                    $(".content").css("visibility", "visible");
                    $(".content").css("opacity", "1"); // 不透明にすることでフェードイン
                }, 3900); // 4秒後にコンテンツを表示
            });
        }
    };
    webStorage();
});

// TOPページのアニメーション
// $(function () {
//     var webStorage = function () {
//         if (sessionStorage.getItem("access")) {
//             // 2回目以降のアクセス時の処理
//             $(".mv_foot, .mv_text").css({
//                 opacity: "1",
//                 visibility: "visible",
//             });
//         } else {
//             // 初回アクセス時の処理
//             sessionStorage.setItem("access", "true");

//             // 4秒後に要素の表示を開始
//             setTimeout(function () {
//                 var elements = $(".mv_foot, .mv_text");
//                 var delay = 0;

//                 elements.each(function () {
//                     var element = $(this);
//                     setTimeout(function () {
//                         element.css({
//                             opacity: "1",
//                             visibility: "visible",
//                         });
//                     }, delay);
//                     delay += 500; // 0.5秒ごとに表示
//                 });
//             }, 4000); // 4秒後に要素の表示を開始
//         }
//     };
//     webStorage();
// });

$(document).ready(function () {
    // ページ読み込み時に実行
    setTimeout(function () {
        var elements = $(".mv_foot, .mv_text"); // アニメーションを適用する要素

        function fadeInElement(index) {
            if (index < elements.length) {
                // 要素がまだ残っている場合
                var element = elements.eq(index);
                element.addClass("fadeUp");
                element.css({
                    opacity: "1",
                    visibility: "visible",
                });

                // 次の要素へ
                setTimeout(function () {
                    fadeInElement(index + 1);
                }, 500); // 次の要素を0.5秒後にフェードイン
            }
        }

        // 最初の要素から開始
        fadeInElement(0);
    }, 4000); // 4秒後にアニメーションを開始
});

// 流れ星
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
            starSize: 10,
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
    var shootingStarObj = new ShootingStar("body");
    shootingStarObj.launch();
});
// 流れ星ここまで

// TOPページの丸のアニメーション
// 動きのきっかけの起点となるアニメーションの名前を定義
function fadeAnime() {
    // ふわっ
    $(".fadeUpTrigger").each(function () {
        //fadeUpTriggerというクラス名が
        var elemPos = $(this).offset().top - 30; //要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass("fadeUp"); // 画面内に入ったらfadeUpというクラス名を追記
        }
    });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    fadeAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on("load", function () {
    fadeAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面が読み込まれたらすぐに動かしたい場合の記述
