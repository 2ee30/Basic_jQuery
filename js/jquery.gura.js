(function($){
    //새로운 액션 정의하기
    $.fn.gura=function(options){
        //기본 설정값 정의
        var settings=$.extend({
            msg:"안녕! 나는 구라야~",
            color:"#fff"
        }, options);

        //this 는 $(선택자)  에 의해 선택된 jquery 배열이다 

        this
        .text(settings.msg)
        .css("background-color", settings.color);

        //return 값 결정하기
        return this;
    };
})(jQuery);