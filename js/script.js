$(document).ready(function() {
    $('#header_area').load('/includes/header.html')
    $('#footer_area').load('/includes/footer.html')

    $('.selected').click(function(){
        let sel_has = $(this).parents('.select_wrap').hasClass('active');
        $('.select_wrap').removeClass('active');
        if(sel_has !== false){
            $(this).parents('.select_wrap').removeClass('active');
        }else{
            $(this).parents('.select_wrap').addClass('active');
        }
    });
    $('.select_wrap .select_option').click(function(){
        let option_val = $(this).text();
        $(this).closest('.select_wrap').find('.selected_value').text(option_val);
        $(this).closest('.select_wrap').toggleClass('active');
    });
});