// フォント
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

// ローディング
$(function () {
    var webStorage = function () {
        if (!sessionStorage.getItem("access")) {
            // 初回アクセス時の処理
            sessionStorage.setItem("access", "true");
            $(".loader").addClass("is-active");
            $(window).on("load", function () {
                // ローディング画面を非表示にする
                $(".loader_sun").addClass("is-hidden");
                $(".loading").delay(3000).fadeOut(800);
                // $("#top").css("opacity", "1");

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

                // ローディング画面が非表示になった1秒後にmvFadeを実行
                setTimeout(function () {
                    setTimeout(function () {
                        mvFade();
                    }, 1000);
                }, 3900); // 4秒後にmvFadeをスケジュール
            });
        } else {
            // 2回目以降のアクセス時の処理
            $(".loader").addClass("is-hidden");
            $(".loader_sun").addClass("is-hidden");
            $(".loading").css("display", "none");
            $(".overlay").css("visibility", "visible");
            $(".overlay").css("opacity", "1");
            $(".content").css("visibility", "visible");
            $(".content").css("opacity", "1");
            // $("#top").css("opacity", "1");
            // 2回目以降のアクセス時には最初から.mv_footが表示される
            $(".mv_foot").css("opacity", "1");
            $(".mv_foot").css("visibility", "visible");
        }
    };
    webStorage();
});

// FVのアニメーション
function mvFade() {
    var elements = $(".mv_foot, .mv_text"); // アニメーションを適用する要素

    function fadeInElement(index) {
        if (index < elements.length) {
            // 要素がまだ残っている場合
            var element = elements.eq(index);
            element.addClass("fadeUp_fv");
            element.css({
                opacity: "1",
                visibility: "visible",
            });

            // 次の要素へ
            setTimeout(function () {
                fadeInElement(index + 1);
            }, 700); // 次の要素を0.5秒後にフェードイン
        }
    }

    // 最初の要素から開始
    fadeInElement(0);
}

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
