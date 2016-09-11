$(document).ready(function() {
    
    	/* -------------------------------------------- */
    	var vuoto = {};
        var testate = {"0":"Scegli","1":"La Stampa", "2":"Il Messaggero"};
        var edizione_1 = {"0":"Scegli","1":"Quotidiana"};
        var edizione_2 = {"0":"Scegli","1":"Pomeridiana"};
        var rubrica = {"0":"Scegli","1":"Necrologie"};
        var defunto = {"0":"","1":"Nino Bixio","2":"Giuseppe Mazzini"};
        var gradopar = {"0":"","1":"Amici","2":"Colleghi","3":"Coniuge","4":"Conoscente"};
        
        
    	/* -------------------------------------------- */
        

       
        fillselect($('#testata'),testate);
        fillselect($('#defunto'),defunto);
        fillselect($('#gradopar'),gradopar);
        
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
			$('#tab3').html('Hello, ' + $('#name').val());

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
});
