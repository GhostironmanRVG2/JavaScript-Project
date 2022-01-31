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
     
    //candidates
    if(document.getElementById("candidatesList").value == 0 ) {  
        Swal.fire('', 'Indique o Candidato em Questão', 'error').then(function(){ operationalForm.candidatesList.focus()});
        return false & operationalForm.candidatesList.focus(); 
    }
    
    
    //personal data
    var name =  operationalForm.name.value;
    var qualifications = operationalForm.qualifications.value;
    var cc_number = operationalForm.cc_number.value;
    var birth_date  = operationalForm.birth_date.value;
    var district = operationalForm.district.value;
    var address = operationalForm.address.value;
    var phone_number = operationalForm.phone_number.value;
    var county = operationalForm.county.value;
    var post_code = operationalForm.post_code.value;
    var patent = operationalForm.patent.value;
    
    
    if (name == ''){
        Swal.fire(
                      '',
                      'Campo "nome" em falta!',
                      'error'
                    );
        return false;
    } 

    if (cc_number == ''){
         Swal.fire(
                      '',
                      'Campo "Nº CC" em falta',
                      'error'
                    );
        operationalForm.cc_number.focus();
        return false;
    }
    
    if (cc_number.length < 8 || cc_number.length > 8 ){
         Swal.fire(
                      '',
                      'Campo "Nº CC" incorreto! O nº de CC deve ter 8 digitos',
                      'error'
                    );
        operationalForm.cc_number.focus();
        return false;
    }

    if (address == ''){
         Swal.fire(
                      '',
                      'Campo "Morada" em falta!',
                      'error'
                    );
        operationalForm.address.focus();
        return false;
    }    

    if (county == ''){
         Swal.fire(
                      '',
                      'Campo "Localidade" em falta!',
                      'error'
                    );
        operationalForm.county.focus();
        return false;
    }

    if (district == ''){
         Swal.fire(
                      '',
                      'Campo "Distrito" em falta!',
                      'error'
                    );
        operationalForm.district.focus();
        return false;
    }

    if (post_code == ''){
         Swal.fire(
                      '',
                      'Campo "código-postal" em falta!',
                      'error'
                    );
        operationalForm.post_code.focus();
        return false;
    }
    
    if ( post_code.length < 8 || post_code.length > 8){
         Swal.fire(
                      '',
                      'Campo "código-postal" incorreto! O código-postal deve ter 7 digitos',
                      'error'
                    );
        operationalForm.post_code.focus();
        return false;
    }

    if (phone_number == ''){
         Swal.fire(
                      '',
                      'Campo "número de telemóvel" em falta!',
                      'error'
                    );
        operationalForm.phone_number.focus();
        return false;
    }
    
    if (phone_number.length < 9 || phone_number.length > 9){
         Swal.fire(
                      '',
                      'Campo "número de telemóvel" incorreto! O nº de telemeóvel deve ter 9 digitos',
                      'error'
                    );
        operationalForm.phone_number.focus();
        return false;
    }
    

    if (birth_date == ''){
         Swal.fire(
                      '',
                      'Campo "data de nascimento" em falta!',
                      'error'
                    );
        operationalForm.birth_date.focus();
        return false;
    }
    
    if (qualifications == ''){
         Swal.fire(
                      '',
                      'Campo "qualificação" em falta!',
                      'error'
                    );
        operationalForm.qualifications.focus();
        return false;
    }
    
    if (patent == ''){
         Swal.fire(
                      '',
                      'Campo "patente" em falta!',
                      'error'
                    );
        operationalForm.patent.focus();
        return false;
    }
    
    
    
    //login data
    var email  =  operationalForm.email.value;
    var password = operationalForm.password.value;
    var password_confirm  = operationalForm.password_confirm.value;


    if(document.getElementById("typeSelection").value == 0)  {  
         Swal.fire(
                      '',
                      'Indique o tipo de login pretendido!',
                      'error'
                    );  
        operationalForm.typeSelection.focus();
        return false;  
    }

    if (email == ''){
         Swal.fire(
                      '',
                      'Campo "email" em falta!',
                      'error'
                    );
        operationalForm.email.focus();
        return false;
        operationalForm.email.focus();
        
    }

    if (password == ''){
         Swal.fire(
                      '',
                      'Campo "password" em falta!',
                      'error'
                    );
        operationalForm.password.focus();
        return false;
    }    

    if (password_confirm == ''){
         Swal.fire(
                      '',
                      'Por favor repita a password!',
                      'error'
                    );
        operationalForm.password_confirm.focus();
        return false;
    }
    
    if (password_confirm != password){
         Swal.fire(
                      '',
                      'As passwords não coincidem!',
                      'error'
                    );
        operationalForm.password_confirm.focus();
        return false;
    }

}