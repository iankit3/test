(function($){
 
 // $.popup = function(elem,options){
   
 // }  

  var body = $('body');

   var head =  $(document.createElement('h1')) 
       .html('Are you looking for <b>&lsquo;White dresses&rsquo;</b>')
       .addClass('h1')  
   var close = $(document.createElement('span'))
       .html('X')
       .addClass('close')    

   var oneimg1 = $(document.createElement('span'))
          .addClass('img')
         .css('background-image',"url('./images/b1.jpg')");
   
   var oneimg2 = $(document.createElement('span'))
          .addClass('img')
         .css('background-image',"url('./images/b3.jpg')");

   var one  =  $(document.createElement('span'))
          .append(oneimg1).append(oneimg2)

   var  p1   =  $(document.createElement('p'))
          .html('Cottom White dresses')

   var twoimg1 = $(document.createElement('span'))
          .addClass('img')
         .css('background-image',"url('./images/n1.jpg')");
   
   var twoimg2 = $(document.createElement('span'))
          .addClass('img')
         .css('background-image',"url('./images/n2.jpg')");

   var two  =  $(document.createElement('span'))
           .append(twoimg1).append(twoimg2)
   var  p2   =  $(document.createElement('p'))
          .html('Cottom black dresses')                    

   var elem1 = $(document.createElement('span'))
        .append(one).append(p1) 
        .addClass('elem') 
   var elem2 = $(document.createElement('span'))
        .append(two).append(p2)  
        .addClass('elem') 
                 
   var card =  $(document.createElement('div'))
       .addClass('card') 
       .append(elem1)
       .append(elem2)
   
   var inner = $(document.createElement('div'))
       .append(head)
       .append(card)
       .addClass('inner')
  
   var outer = $(document.createElement('div'))
       .append(close)
       .append(inner)
       .addClass('outer')

   body.append(outer)

})(jQuery)