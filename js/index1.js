$(".landing").click(function () {
    location.href="home.html";
});
$(".factory_title").on("click","a",function () {
   // $(".factory_body").slideToggle(2000);
    $(this).parents(".factory").find(".factory_body").slideToggle("slow");
});