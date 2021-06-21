//Дэлгэцтэй ажиллах контроллер
var uiController = (function () {

})();
// Санхүүтэй холбоотой контроллер
var financeController = (function () {

})();
// Програмын холбогч контроллер
var appController = (function (uiController,financeController) {

var ctrlAddItem = function() {
    
}

    document.querySelector('.add__btn').addEventListener('click',function(){
        ctrlAddItem();
    //Оруулах өгөгдлүүдийг дэлгэцээс олж авна. 
 
    //Олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална.  

    //Олж авсан өгөгдлүүдээ веб дээрээ тохирох хэсэгт нь гаргана 

    // Төсвийг тооцоолно 

    // Эцсийн үлдэгдэл тооцоог дэлгэцэнд гаргана. 
});
    document.addEventListener('keypress',function(event){
        if(event.keyCode === 13 )
        {
            ctrlAddItem();
        }
        else {

        }    
    });
})(uiController,financeController);