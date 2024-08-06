$(document).ready(function(){

$('#girdi').keypress(function(event){
        
if (event.which === 13) {
            
var girdi = $(this).val().trim();
            
if (girdi !== '') {
                
if ($('ul li').length > 7) {
                    
alert('En fazla 8 adet hedef ekleyebilirsiniz.');
                
}else{
                
$('ul').append('<li>' + girdi + ' <i class="fa-regular fa-square-check" style="color: #63E6BE;"></i> <i class="fa-solid fa-trash-can" style="color: #da1010;"></i> </li>');
                    
$(this).val('');
                
}
            
}
        
}

})

$('ul').on('click','.fa-trash-can', function(){

$(this).parent('li').fadeOut(150)

})

$('ul').on('click','.fa-square-check', function(){

$(this).parent('li').toggleClass('yapildi')
    
})
    

})