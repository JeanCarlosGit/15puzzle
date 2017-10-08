let clique = 0;
$(document).ready(function(){
    $("#button").click(function(){
    	clique++;
    
    $('#cliques').html(function(i, val) { return val*1+1 });
	
        $.getJSON("https://api.myjson.com/bins/od8wt", function(result){
            $.each(result, function(i, field){
 
            	var cells = 16;
				var cell;
				var h;
				
				var x = field[0][0][0];
				var y = field[0][0][1];
				var z = field[0][0][2];
				var u = field[0][0][3];
				var i;


				function percorre(i){
					for(var k = i; k <= i; k++ ){

						if(i <= 3){
						return x[k];
						}if(i<= 7){
							for(var w = 4; w < 8; w++){
							return y[k - w];
							}
						}if(i>7 && i<= 11){
							for(var j = 8; j < 13; j++){
							return z[k - j];
							}
						}else{
							for(var m = 12; m <= 15; m++){
							return u[k - m];
							}
						}

						}
				}
			
				for(var i = 0; i < cells; i ++)
				{	
				    cell = $('<div class=borda>').addClass('cell').attr('data-cell', i).text(percorre(i));
					
				    $('#game').append(cell);
				}

				h = $('.cell:last-of-type').width();
				$('.cell').css({height: h, lineHeight: h + 'px'});
			            });
			        });
			    });
    });

$(document).ready(function(){ 
  $("#prox").click(function() { 
    $("#game1").fadeIn("slow");
  });

  $("#prox").click(function() { 
    $("#game").fadeOut("slow"); 
  });
});
