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
        
     //Denouncer 
     var name_Denouncer = Occurrencesform.name_Denouncer.value;      
     var cc_Denouncer = Occurrencesform.cc_Denouncer.value;
     var phone_number_Denouncer = Occurrencesform.phone_number_Denouncer.value;
     var address_Denouncer = Occurrencesform.address_Denouncer.value;
     var county_Denouncer = Occurrencesform.county_Denouncer.value;
     var district_Denouncer = Occurrencesform.district_Denouncer.value;
     var post_code_Denouncer = Occurrencesform.post_code_Denouncer.value;
     var email_Denouncer = Occurrencesform.email_Denouncer.value;
     


    if (name_Denouncer == ''){
        Swal.fire(
            '',
            'Por favor, indique o seu nome',
            'error'
            );
          Occurrencesform.name_Denouncer.focus();
          return false;
    }
    
    if (cc_Denouncer == ''){
        Swal.fire(
                '',
                'Por favor, indique o seu número de CC',
                'error'
                );
          Occurrencesform.cc_Denouncer.focus();
          return false;     
    }
    
    if (cc_Denouncer.length < 8 || cc_Denouncer.length > 8){
        Swal.fire(
                '',
                'O número de CC tem de ter 8 digitos!',
                'error'
                );
          Occurrencesform.cc_Denouncer.focus();
          return false;     
    }
    
    if (phone_number_Denouncer == ''){
        Swal.fire(
                '',
                'Por favor, indique o seu número de telefone',
                'error'
                );
          Occurrencesform.phone_number_Denouncer.focus();
          return false;     
    }
    
    if (birthdate_Denouncer == ''){
        Swal.fire(
                '',
                'Por favor, indique a sua data de nascimento',
                'error'
                );
          Occurrencesform.birthdate_Denouncer.focus();
          return false;     
    }
    
    if (address_Denouncer == ''){
        Swal.fire(
                '',
                'Por favor, indiquea sua morada',
                'error'
                );
          Occurrencesform.address_Denouncer.focus();
          return false;     
    }
    
    if (county_Denouncer == ''){
        Swal.fire(
                '',
                'Por favor, indique a sua localidade de residencia',
                'error'
                );
          Occurrencesform.county_Denouncer.focus();
          return false;     
    }
    
    if (district_Denouncerr == ''){
        Swal.fire(
                '',
                'Por favor, indique o seu distrito de residencia',
                'error'
                );
          Occurrencesform.district_Denouncerr.focus();
          return false;     
    }
    
    if (post_code_Denouncer == ''){
        Swal.fire(
                '',
                'Por favor, indique o seu código postal',
                'error'
                );
          Occurrencesform.post_code_Denouncer.focus();
          return false;     
    }
    
    if (email_Denouncer == ''){
        Swal.fire(
                '',
                'Por favor, indique o seu email',
                'error'
                );
          Occurrencesform.email_Denouncer.focus();
          return false;     
    }
    
	 //Type of crime
    if(document.getElementById("designation_Crime_Nature").value == 0 ) {  
        Swal.fire('', 'Indique o tipo de ocorrência que pretende denunciar', 'error').then(function(){ Occurrencesform.designation_Crime_Nature.focus()});
        return false & Occurrencesform.designation_Crime_Nature.focus(); 
    }		
			
	//Degree of emergency
    if(document.getElementById("degree_of_emergency_Crime_Nature").value == 0 ) {  
        Swal.fire('', 'Indique a gravidade da ocorrencia que pretende denunciar', 'error').then(function(){ Occurrencesform.degree_of_emergency_Crime_Nature.focus()});
        return false & Occurrencesform.degree_of_emergency_Crime_Nature.focus(); 
    }
    
    
	if(document.getElementById("entitieslist").value == 0 ) {  

    
    
    //entities
        var designation_Location= Occurrencesform.designation_Location.value;      
        var nif_Location= Occurrencesform.nif_Location.value;
        var address_Location= Occurrencesform.address_Location.value;
        var county_Location= Occurrencesform.county_Location.value;
        var district_Location= Occurrencesform.district_Location.value;
        var post_code_Location= Occurrencesform.post_code_Location.value;
        var email_Location= Occurrencesform.email_Location.value;
        var phone_number_Location= Occurrencesform.phone_number_Location.value;
    
    if(document.getElementById("registerEntity").checked = true){
        if(designation_Location == ''){
            Swal.fire('',
                      'Por favor, indique o nome da entidade',
                      'error'
                      );
            Occurrencesform.designation_Location.focus();
            return false;s
        }
    }
    
    if (address_Location == ''){
        Swal.fire(
                '',
                'Por favor, indique a morada da entidade envolvida',
                'error'
                );
          Occurrencesform.address_Location.focus();
          return false;     
    }
    
    if (county_Location == ''){
        Swal.fire(
                '',
                'Por favor, indique a localidade da entidade',
                'error'
                );
          Occurrencesform.county_Location.focus();
          return false;     
    }
    
    if (district_Location == ''){
        Swal.fire(
                '',
                'Por favor, indiquea sua morada',
                'error'
                );
          Occurrencesform.district_Location.focus();
          return false;     
    }
    
    if (post_code_Location == ''){
        Swal.fire(
                '',
                'Por favor, indique a sua localidade de residencia',
                'error'
                );
          Occurrencesform.post_code_Location.focus();
          return false;     
    }
    
    
    
}
    
    
}
    