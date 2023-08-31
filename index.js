

$(document).ready(function(){

    $("#signinform").validate({
        rules:{
        name:{
            required:true,
            minlength:4,
           
            text:true
        },
        email:{
            required:true,
            email:true
        },
        subject:{
            required:true
        },
        message:{
            required:true
        },
        number:{
            required:true,
            number:true

        }


    }
    })
})