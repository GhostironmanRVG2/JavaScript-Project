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
    var designation =  entityform.designation.value;
    var nif  =  entityform.nif.value;
    var adress = entityform.adress.value;
    var locality  = entityform.local.value;
    var district = entityform.district.value;
    var zip = entityform.zip.value;
    var phone = entityform.phone.value;
    var email = entityform.mail.value;
    

    

    if (nif != ''){
    if(nif.length < 9 || nif.length > 9){
        Swal.fire('','Nif incorreto! O nif deve ter 9 digitos','error');
        entityform.nif.focus();
        return false;
    }
}

    if (adress == ''){
        Swal.fire('','Preencha o campo com a Morada','error');
        entityform.adress.focus();
        return false;
    }    

    if (locality == ''){
        Swal.fire('','Preencha o campo com a Localidade','error');
        entityform.locality.focus();
        return false;
    }

    if (district == ''){
        Swal.fire('','Preencha o campo com o Distrito','error');
        entityform.district.focus();
        return false;
    }
    
    if (zip == ''){
         Swal.fire(
                      '',
                      'Campo "código-postal" em falta!',
                      'error'
                    );
        entityform.zip.focus();
        return false;
    }
    
    if ( zip.length < 8 || zip.length > 8){
         Swal.fire(
                      '',
                      'Campo "código-postal" incorreto! O código-postal deve ter 7 digitos',
                      'error'
                    );
        entityform.zip.focus();
        return false;
    }
    
    if (phone != ''){
    if (phone.length < 9 || phone.length > 9){
         Swal.fire(
                      '',
                      'Campo "número de telemóvel" incorreto! O nº de telemóvel deve ter 9 digitos! Remova os espaços entre os números!',
                      'error'
                    );
        entityform.phone.focus();
        return false;
    }
    }

    


}