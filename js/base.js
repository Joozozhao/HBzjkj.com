$(function () {
  $(".banner_slider").on("init", function (event, slick, currentSlide, nextSlide) {
    $(".banner_slider li").first().removeClass("slick-current");
    setTimeout(function () {
      $(".banner_slider li").first().addClass("slick-current");
    }, 1);
  });

  $(".banner_slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    fade: true,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 4500,
    cssEase: "linear",
    waitForAnimate: false,
    appendArrows: $(".appendArrows"),
    prevArrow: '<div class="banner-arrow banner-prev"></div>',
    nextArrow: '<div class="banner-arrow banner-next"></div>',
  });

  $(".banner_slider .con").each(function (i, t) {
    $(this)
      .find(".letter")
      .each(function (i, t) {
        var e = $(this),
          t = $(this).text().split("");
        e.empty();
        for (var i = 0; i < t.length; i++) e.append('<span class="char">' + t[i] + "</span>");
        $(this)
          .find("span")
          .each(function (i, o) {
            $(this).css({
              transition: "500ms " + (i * 100 + 400) + "ms",
              "-webkit-transition": "500ms " + (i * 100 + 400) + "ms",
            });
          });
      });
  });

  $(".s_pro_slide").slick({
    slidesToScroll: 1,
    slidesToShow: 4,
    arrows: false,
    dots: false,
    touchThreshold: 20,
    speed: 450,
    autoplay: false,
    autoplaySpeed: 5000,
    cssEase: "linear",
    infinite: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 996,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  $(".dw2").hover(function () {
    $(this).addClass("on");
  });
  $(".dw2").mouseleave(function () {
    $(this).removeClass("on");
  });

  $(".tc_btn[name]").click(function () {
    var tf_name_id = $(this).attr("name");
    $(".tc[name=" + tf_name_id + "]").addClass("act");
  });
  $(".tc_bg").click(function () {
    $(this).parents(".tc").removeClass("act");
    $(".input_tip").removeClass("act");
    $("input.focus_js").val("");
  });

  $("#nav_btn_box").click(function () {
    $("#nav_btn_box .point").toggleClass("on");
    $("#nav_btn_box").toggleClass("on");
    $("#m_nav").toggleClass("act");
    $(".nav_mask").fadeToggle();
  });

  $(".nav_mask").click(function () {
    $("#nav_btn_box .point").removeClass("on");
    $("#nav_btn_box").removeClass("on");
    $(this).fadeToggle();
    $(".nav_btn_box").removeClass("act");
    $("#m_nav").removeClass("act");
  });

  $("#m_nav .title .a").click(function () {
    var tt = $(this).parents(".title");
    if ($(tt).hasClass("on")) {
      $(tt).children(".list").slideUp(600);
      $(tt).removeClass("on");
    } else {
      $("#m_nav .title ").removeClass("on");
      $("#m_nav .title .list").slideUp();
      $(tt).children(".list").slideDown();
      $(tt).toggleClass("on");
    }
  });

  $("input.focus_js").focus(function () {
    $(".input_tip").addClass("act");
  });
});
