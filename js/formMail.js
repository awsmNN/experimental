$(".form_button").on("click", function() {
    var name = $(".form_input").val().trim();
    var phone = $(".form_input2").val().trim();
    var email = $(".form_input3").val().trim();

    if (name == "") {
        $ ("#error").text ("Введите Ваши данные");
        return false;
        
    }   else if (name == "+","-") {
        $ ("#error").text ("Введите корректные данные");
        return false;

    }   else if (phone == "") {
        $ ("#error").text ("Введите Ваш номер телефона");
        return false;

    }  else if (email == "") {
        $ ("#error").text ("Введите адрес Вашей эл.почты");
        return false;}

 
    $("#error").text ("")

});

