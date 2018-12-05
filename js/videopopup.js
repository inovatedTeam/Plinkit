/*
 * Author: Sławomir Netteria.NET https://netteria.net
 */
(function ($) {

    $.fn.VideoPopUp = function (options) {
        
        var defaults = {
            backgroundColor: "#000000",
            opener: "video",
            maxweight: "640",
            pausevideo: false,
            idvideo: ""
        };
        
        var patter = this.attr('id');

        var settings = $.extend({}, defaults, options);


        function stopVideo() {
            // $('#'+settings.idvideo+'').trigger('pause');
            var video = document.getElementById(settings.idvideo);//$("#"+settings.idvideo);//
            // video.pause();
            if (video.paused) {
                // video.play();
            } else {
                video.pause();
            }
            video.currentTime = 0;
        }
        
        $('#' + patter + '').css("display", "none");
        $('#' + patter + '').append('<div class="opct"></div>');
        $('.opct').css("background", settings.backgroundColor);
        $('#' + patter + '').css("z-index", "100001");
        $('#' + patter + '').css("position", "fixed")
        $('#' + patter + '').css("top", "0");
        $('#' + patter + '').css("bottom", "0");
        $('#' + patter + '').css("right", "0");
        $('#' + patter + '').css("left", "0");
        $('#' + patter + '').css("padding", "auto");
        $('#' + patter + '').css("text-align", "center");
        $('#' + patter + '').css("background", "none");
        $('#' + patter + '').css("vertical-align", "vertical-align");
        $(".videCont").css("z-index", "100002");
        $('#' + patter + '').append('<div class="closer_videopopup">&otimes;</div>');
        $("." + settings.opener + "").on('click', function () {
            $('#' + patter + "").show();
            setTimeout(function () {
                $('#'+settings.idvideo+'').trigger('play');
            }, 2000);


        });
        $(".closer_videopopup").on('click', function () {
            if(settings.pausevideo==true){
                    $('#'+settings.idvideo+'').trigger('pause');
                }else{
                    stopVideo();
                }
            $('#' + patter + "").hide();
        });
        return this.css({

        });
    };

}(jQuery));