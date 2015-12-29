
function detectDevice () {

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        }
    };

"modal-title"

    if( isMobile.Android() ) {
      // document.getElementById('.modal-tittle').innerHTML = 'Android plataform detected. If this is incorrect, select a device below. Otherwise close this menu';
    }else if( isMobile.BlackBerry() ) {
        window.location="http://www.whateverpage.com";
    }else if( isMobile.iOS() ) {
        window.location="http://www.whateverpage.com";
    }else if( isMobile.Windows() ){
        window.location="http://www.whateverpage.com";
    }else {
        //alert('DESKTOP MODE'); 
    
    } 

 $('#my-modal').modal('show');
    
}













    



 
    