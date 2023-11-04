
  (function(d) {
    var config = {
      kitId: 'vjt1xyl',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);

  (function(d) {
    var config = {
      kitId: 'vjt1xyl',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
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

window.onload = function(){
  var paginationPage = parseInt($('.cdp').attr('actpage'), 10);
  $('.cdp_i').on('click', function(){
    var go = $(this).attr('href').replace('#!', '');
    if (go === '+1') {
      paginationPage++;
    } else if (go === '-1') {
      paginationPage--;
    }else{
      paginationPage = parseInt(go, 10);
    }
    $('.cdp').attr('actpage', paginationPage);
  });
};

// ハンバーガーメニュー
$(function () {

  $('.sp_btn, .sp_nav li').on('click', function () {
      $('.sp_btn').toggleClass('open');
      $('.sp_nav').fadeToggle();
  });
});

// ヘッダー カレント表示
// const headerNavLink = document.querySelectorAll('.js-header');

// headerNavLink.forEach((targetLink) => {
//   if (targetLink.href === location.href) {
//     targetLink.parentElement.classList.add('is-current');
//   }
// });

// ローディング 2回目以降非表示にする操作ができていない
// $(function () {
//   var webStorage = function () {
//     if (sessionStorage.getItem('access')) {
//       /*
//         2回目以降アクセス時の処理
//       */
//       $(".loading").addClass('is-active');
//     } else {
//       /*
//         初回アクセス時の処理
//       */
//       sessionStorage.setItem('access', 'true'); // sessionStorageにデータを保存
//       setTimeout(function () {
//         // ローディングを数秒後に非表示にする
//         $(".loader").addClass('is-active');
//         $(".loading-animation").removeClass('is-active');
//       }, 3000); // ローディングを表示する時間
//     }
//   }
//   webStorage();
// });

// $(function () {
// var webStorage = function () {
// if (sessionStorage.getItem('access')) {
//   // 2回目以降アクセス時の処理
//   $(".loading").addClass('is-active');
// } else {
// // 初回アクセス時の処理
// sessionStorage.setItem('access', 'true');
// $(".loader").addClass('is-active');
// $(window).on("load", function () {
//   // ローディング画面を非表示にする
//   $(".loading").delay(1700).fadeOut(650);

//   // 2秒後に真っ暗な背景をフェードイン
//   setTimeout(function () {
//       $(".overlay").css("visibility", "visible");
//       $(".overlay").css("opacity", "1"); // 不透明にすることでフェードイン
//   }, 2000); // 2秒後にフェードイン

//   // 3秒後に真っ暗な背景をフェードアウト
//   setTimeout(function () {
//       $(".overlay").css("opacity", "0"); // 透明にすることでフェードアウト
//   }, 3000); // 3秒後にフェードアウト

//   // 4秒後にコンテンツが表示される
//   setTimeout(function () {
//       $(".content").css("visibility", "visible");
//       $(".content").css("opacity", "1"); // 不透明にすることでフェードイン
//   }, 4000); // 4秒後にコンテンツを表示
// });
// }
// }
// });


$(window).on("load", function () {
  // ローディング画面を非表示にする
  $(".loader").delay(1700).fadeOut(650);

  // 2秒後に真っ暗な背景をフェードイン
  setTimeout(function () {
      $(".overlay").css("visibility", "visible");
      $(".overlay").css("opacity", "1"); // 不透明にすることでフェードイン
  }, 2000); // 2秒後にフェードイン

  // 3秒後に真っ暗な背景をフェードアウト
  setTimeout(function () {
      $(".overlay").css("opacity", "0"); // 透明にすることでフェードアウト
  }, 3000); // 3秒後にフェードアウト

  // 4秒後にコンテンツが表示される
  setTimeout(function () {
      $(".content").css("visibility", "visible");
      $(".content").css("opacity", "1"); // 不透明にすることでフェードイン
  }, 4000); // 4秒後にコンテンツを表示
});