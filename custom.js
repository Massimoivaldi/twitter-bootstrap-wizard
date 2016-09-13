$(document).ready(function() {
    
    	/* -------------------------------------------- */
    	var vuoto = {};
        var testate = {"0":"Scegli","1":"La Stampa", "2":"Il Messaggero"};
        var edizione_1 = {"0":"Scegli","1":"Quotidiana"};
        var edizione_2 = {"0":"Scegli","1":"Pomeridiana"};
        var rubrica = {"0":"Scegli","1":"Necrologie"};
        var defunto = {"0":"","1":"Nino Bixio","2":"Giuseppe Mazzini"};
        var gradopar = {"0":"","1":"Amici","2":"Colleghi","3":"Coniuge","4":"Conoscente"};
        var tipoannuncio = {"0":"Scegli","1":"Adesione/Partecipazione","2":"Anniversario","3":"Famiglia/Annuncio","4":"Ringraziamento/Trigesimo"};
        
        
    	/* -------------------------------------------- */
        

       
        fillselect($('#testata'),testate);
        fillselect($('#defunto'),defunto);
        fillselect($('#gradopar'),gradopar);
        fillselect($('#tipoannuncio'),tipoannuncio);
        
        $("#testata").change(function(){
            var testataid = $('#testata').val();
            //alert(testataid);
                if(testataid == 1){
                    fillselect($('#edizione'),edizione_1);  
                }
                if(testataid == 2){
                    fillselect($('#edizione'),edizione_2);  
                }
                if(testataid == 0){
                    fillselect($('#edizione'),vuoto); 
                    fillselect($('#rubrica'),vuoto);  
                }
        })
        
        $("#edizione").change(function(){
            var edizioneid = $('#edizione').val();
            //alert(testataid);
                if(edizioneid == 1){
                    fillselect($('#rubrica'),rubrica);  
                }
                if(edizioneid == 0){
                    fillselect($('#rubrica'),vuoto);  
                }
        })
        
        $("#tipoannuncio").change(function(){
            var edizioneid = $('#tipoannuncio').val();
            //alert('suca');
                if(edizioneid == 1){
                    $("#fotoadesione").css("display","block")
                } else {
                    $("#fotoadesione").css("display","none")
                }
                
        })
        
        
        
        
  	$('#rootwizard').bootstrapWizard({onNext: function(tab, navigation, index) {
			if(index==2) {
				// Make sure we entered the name
				/*if(!$('#name').val()) {
					alert('You must enter your name');
					$('#name').focus();
					return false;
				}*/
			}

			// Set the name for the next tab
		//	$('#tab3').html('Hello, ' + $('#name').val());

		}, onTabShow: function(tab, navigation, index) {
			var $total = navigation.find('li').length;
			var $current = index+1;
			var $percent = ($current/$total) * 100;
			$('#rootwizard .progress-bar').css({width:$percent+'%'});
		}});
	window.prettyPrint && prettyPrint()
	
	/* -------------------------------------------- */
	
	function fillselect(myselect,myjson){
            
            myselect.find('option').remove();  
            $.each(myjson,function(key, value) 
            {
                myselect.append('<option value=' + key + '>' + value + '</option>');
            });
        }
	
	/* -------------------------------------------- */
	
	$("#citazione").keyup(function(event) {
      var stt = $(this).val();
      $("#ante-citazione").text(stt);
      $("#riep-citazione").text(stt);
    });
    
    $("#firmacitazione").keyup(function(event) {
      var stt = $(this).val();
      $("#ante-firmacitazione").text(stt);
      $("#riep-firmacitazione").text(stt);
    });
    
    $("#testoiniziale").keyup(function(event) {
      var stt = $(this).val();
      $("#ante-testoiniziale").text(stt);
      $("#riep-testoiniziale").text(stt);
    });
    
    $("#onorificienza").keyup(function(event) {
      var stt = $(this).val();
      $("#ante-onorificienza").text(stt);
      $("#riep-onorificienza").text(stt);
    });
    
    $("#nomecomdefunto").keyup(function(event) {
      var stt = $(this).val();
      $("#ante-nomecomdefunto").text(stt);
      $("#riep-nomecomdefunto").text(stt);
    });
    
    $("#vedovanza").keyup(function(event) {
      var stt = $(this).val();
      $("#ante-vedovanza").text(stt);
      $("#riep-vedovanza").text(stt);
    });
    
    $("#dianni").keyup(function(event) {
      var stt = $(this).val();
      $("#ante-dianni").text(stt);
      $("#riep-dianni").text(stt);
    });
    
    $("#testoinserzione").keyup(function(event) {
      var stt = $(this).val();
      $("#ante-testoinserzione").text(stt);
      $("#riep-testoinserzione").text(stt);
    });
    
    $("#listanomi").keyup(function(event) {
      var stt = $(this).val();
      $("#ante-listanomi").text(stt);
      $("#riep-listanomi").text(stt);
    });
    
    $("#luogodata").keyup(function(event) {
      var stt = $(this).val();
      $("#ante-luogodata").text(stt);
      $("#riep-luogodata").text(stt);
    });
    
    
    
    
    
});
