$(document).ready(function() {
    $('#header_area').load('../includes/header.html')
    $('#footer_area').load('../includes/footer.html')

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
    
    $('.radio_list_wrap .radio_list .img_box').click(function(){
        let soldOut_check = $(this).closest('.radio_list').hasClass('sold_out');
        let checkde_radio2 = $(this).closest('.radio_list').find('input:radio').is(':checked');
        if(soldOut_check !== true){
            if(checkde_radio2 !== true){
                $(this).closest('.radio_list_wrap').find('.radio_list').removeClass('checked');
                $(this).closest('.radio_list').addClass('checked');

                $(this).closest('.radio_list_wrap').find('.radio_box_wrap').removeClass('checked');
                $(this).closest('.radio_list').find('.radio_box_wrap').addClass('checked');

                $(this).closest('.radio_list_wrap').find('input:radio').attr('checked', false);
                $(this).closest('.radio_list').find('input:radio').attr('checked', true)
            }else{
                $(this).closest('.radio_list_wrap').find('.radio_list').removeClass('checked');
                $(this).closest('.radio_list_wrap').find('.radio_box_wrap').removeClass('checked');
                $(this).closest('.radio_list_wrap').find('input:radio').attr('checked', false);
            }
        }
    });
    $('ol .radio_box_wrap').click(function(){
        let checkde_radio1 = $(this).find('input:radio').is(':checked');
        if(checkde_radio1 !== true){
            $(this).parents().find('.radio_box_wrap').removeClass('checked');
            $(this).addClass('checked');
            $(this).parents().find('input:radio').attr('checked', false);
            $(this).find('input:radio').attr('checked', true)
        };
    });
    $('.privacy_policy_area .check_box_wrap').click(function(){
        let checkde_checkbox1 = $(this).find('input:checkbox').is(':checked');
        if(checkde_checkbox1 !== false){
            $(this).closest('.privacy_policy_area').addClass('open');
        }else{
            $(this).closest('.privacy_policy_area').removeClass('open')
        }
    });
    $('.privacy_policy_area .agreement_btn').click(function(){
        let has_open = $(this).closest('.privacy_policy_area').hasClass('open')
        if(has_open !== true){
            $(this).closest('.privacy_policy_area').addClass('open');
        }else{
            $(this).closest('.privacy_policy_area').removeClass('open')
        }
    });

    $('.inquiry_case_list li').click(function(){
        $(this).closest('.inquiry_case_list').find('li').removeClass('on');
        $(this).addClass('on');
    });

    $('.inquiry_btn_wrap.single_choice li').click(function(){
        $(this).closest('.inquiry_btn_wrap').find('li').removeClass('checked');
        $(this).addClass('checked');
    });
    $('.inquiry_btn_wrap.multiple_choice li').click(function(){
        $(this).toggleClass('checked');
    });

    $('.close_btn').click(function(){       
        $('.popup').removeClass('on');
        $('.popup_dim').removeClass('on');
        $('html, body').removeClass('hidden');
    });

    $('.service_request_btn').click(function(){
        $('#popup_area').load('../includes/sub5_1.html');
        $('html, body').addClass('hidden');
    })

    
});