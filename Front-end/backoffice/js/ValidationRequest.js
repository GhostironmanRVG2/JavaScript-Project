    //dependencies
    var cookieParser = require('cookie-parser');
    var bodyParser = require('body-parser');
    var expressValidator = require('express-validator');
    var app = express();
    
    
    //middleware
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(validator());
    
    app.post('')
    
 function validation(){   
    
    //occurrence
    if(document.getElementById("designation_Crime_Nature").value == 0) {  
        Swal.fire('', 'Indique o natureza do crime ocorrido!', 'error');  
        Occurrencesform.designation_Crime_Nature.focus();
        return false;  
    }
    
    if(document.getElementById("degree_of_emergency_Crime_Nature").value == 0) {  
        Swal.fire('', 'Indique a gravidade do crime!', 'error'); 
        Occurrencesform.degree_of_emergency_Crime_Nature.focus();
        return false;  
    }
    
    
    
    //denouncer data
    var name_Denouncer =  Occurrencesform.name_Denouncer.value;
    var cc__Denouncer  =  Occurrencesform.cc__Denouncer.value;
    var adress_Denouncer = Occurrencesform.adress_Denouncer.value;
    var county_Denouncer  = Occurrencesform.county_Denouncer.value;
    var district_Denouncer = Occurrencesform.district_Denouncer.value;
    var post_code_Denouncer = Occurrencesform.post_code_Denouncer.value;
    var phone_number_Denouncer = Occurrencesform.phone_number_Denouncer.value;
    var email_Denouncer = Occurrencesform.email_Denouncer.value;
    


    if (name_Denouncer == ''){
        Swal.fire('', 'Indique o seu Nome!', 'error'); 
        Occurrencesform.name_Denouncer.focus();
        return false;
    }

    if (cc__Denouncer == ''){
         Swal.fire(
                      '',
                      'Campo "Nº CC" em falta',
                      'error'
                    );
        Occurrencesform.cc__Denouncer.focus();
        return false;
    }
    
    if (cc__Denouncer.length < 8 || cc__Denouncer.length > 8 ){
         Swal.fire(
                      '',
                      'Campo "Nº CC" incorreto! O nº de CC deve ter 8 digitos',
                      'error'
                    );
        Occurrencesform.cc__Denouncer.focus();
        return false;
    }

    if (adress_Denouncer == ''){
        Swal.fire('', 'Indique a sua morada', 'error'); 
        Occurrencesform.adress_Denouncer.focus();
        return false;
    }    

    if (county_Denouncer == ''){
        Swal.fire('', 'Indique a sua Localidade', 'error'); 
        Occurrencesform.county_Denouncer.focus();
        return false;
    }

    if (district_Denouncer == ''){
        Swal.fire('', 'Indique o seu Distrito', 'error'); 
        Occurrencesform.district_Denouncer.focus();
        return false;
    }

    
    if (post_code_Denouncer == ''){
         Swal.fire(
                      '',
                      'Campo "código-postal" em falta!',
                      'error'
                    );
        Occurrencesform.post_code_Denouncer.focus();
        return false;
    }
    
    if ( post_code_Denouncer.length < 8 || post_code_Denouncer.length > 8){
         Swal.fire(
                      '',
                      'Campo "código-postal" incorreto! O código-postal deve ter 7 digitos',
                      'error'
                    );
        Occurrencesform.post_code_Denouncer.focus();
        return false;
    }

    if (phone_number_Denouncer == ''){
        Swal.fire('', 'Indique o seu número de telemóvel', 'error'); 
        Occurrencesform.phone_number_Denouncer.focus();
        return false;
    }
    
    if (phone_number_Denouncer.length < 9 || phone_number_Denouncer.length > 9){
         Swal.fire(
                      '',
                      'Campo "número de telemóvel" incorreto! O nº de telemeóvel deve ter 9 digitos',
                      'error'
                    );
        Occurrencesform.phone_number_Denouncer.focus();
        return false;
    }

    if (email_Denouncer == ''){
        Swal.fire('', 'Indique o seu email', 'error'); 
        Occurrencesform.email_Denouncer.focus();
        return false;
    }
    
    if(Occurrencesform.getElementById("checkid").checked){
        
    
    //entity Data
    var designation_Location =  Occurrencesform.designation_Location.value;
    var nif_Location  =  Occurrencesform.nif_Location.value;
    var address_Location = Occurrencesform.address_Location.value;
    var county_Location  = Occurrencesform.county_Location.value;
    var district_Location = Occurrencesform.district_Location.value;
    var post_code_Location = Occurrencesform.post_code_Location.value;
    var phone_number_Location = Occurrencesform.phone_number_Location.value;
    var email_Location = Occurrencesform.email_Location.value;


    if (designation_Location == ''){
        Swal.fire('', 'Indique a DESIGNAÇÃO da respetiva entidade', 'error'); 
        Occurrencesform.designation_Location.focus();
        return false;
    }

    if (nif_Location == ''){
        Swal.fire('', 'Indique o NIF da respetiva entidade', 'error'); 
        Occurrencesform.nif_Location.focus();
        return false;
    }
    
    if (nif_Location.length < 9 || nif_Location.length > 9 ){
         Swal.fire(
                      '',
                      'Campo "Nif" incorreto! O nif deve ter 9 digitos',
                      'error'
                    );
        Occurrencesform.nif_Location.focus();
        return false;
    }

    if (address_Location == ''){
        Swal.fire('', 'Indique a MORADA da respetiva entidade', 'error'); 
        Occurrencesform.address_Location.focus();
        return false;
    }    

    if (county_Location == ''){
        Swal.fire('', 'Indique a LOCALIDADE da respetiva entidade', 'error'); 
        Occurrencesform.county_Location.focus();
        return false;
    }

    if (district_Location == ''){
        Swal.fire('', 'Indique o DISTRITO da respetiva entidade', 'error'); 
        Occurrencesform.district_Location.focus();
        return false;
    }

    if (post_code_Location == ''){
        Swal.fire('', 'Indique o CÓDIGO POSTAL da respetiva entidade', 'error'); 
        Occurrencesform.post_code_Location.focus();
        return false;
    }
    
    if (post_code_Location.length < 8 || post_code_Location.length > 8){
         Swal.fire(
                      '',
                      'Campo "código-postal" incorreto! O código-postal deve ter 7 digitos',
                      'error'
                    );
        Occurrencesform.post_code_Location.focus();
        return false;
    }

    if (phone_number_Location == ''){
        Swal.fire('', 'Indique o Nº TELEMÓVEL da respetiva entidade', 'error'); 
        Occurrencesform.phone_number_Location.focus();
        return false;
    }
    
    if (phone_number_Location.length < 9 || phone_number_Location.length > 9){
         Swal.fire(
                      '',
                      'Campo "número de telemóvel" incorreto! O nº de telemeóvel deve ter 9 digitos',
                      'error'
                    );
        Occurrencesform.phone_number_Location.focus();
        return false;
    }

    if (email_Location == ''){
       Swal.fire('', 'Indique o EMAIL da respetiva entidade', 'error'); 
        Occurrencesform.email_Location.focus();
        return false;
    }
    }
}