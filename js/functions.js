$(function(){$(".pop").on("click",function(){$(".imagepreview").attr("src",$(this).find("img").attr("src")),$("#imagemodal").modal("show")})}); $(window).width()<991?$("#social_bottom_footer").addClass("text-center"):$("#social_bottom_footer").removeClass("text-center"),$(window).width()<767?$(".text_center_js").addClass("text-center"):$(".text_center_js").removeClass("text-center"),$(".thumbnail").click(function(){$(".modal-body").empty();var a=$(this).parent("a").attr("title");$(".modal-title").html(a),$($(this).parents("div").html()).appendTo(".modal-body"),$("#myModal").modal({show:!0})});


// $(function() {
//  $(".pop").on("click", function() {
//    $(".imagepreview").attr("src", $(this).find("img").attr("src")), $("#imagemodal").modal("show")
//  })
// });
// $(window).width() < 991 ? $("#social_bottom_footer").addClass("text-center") : $("#social_bottom_footer").removeClass("text-center"), $(window).width() < 767 ? $(".text_center_js").addClass("text-center") : $(".text_center_js").removeClass("text-center"), $(".thumbnail").click(function() {
//  $(".modal-body").empty();
//  var a = $(this).parent("a").attr("title");
//  $(".modal-title").html(a), $($(this).parents("div").html()).appendTo(".modal-body"), $("#myModal").modal({
//    show: !0
//  })
// });
