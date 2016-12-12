( function ()
{
    angular
        .module( 'products',[] )
        .directive( 'productDisplay',function()
        {
            return {
                restrict: 'E',
                templateUrl: "resources/templates/productDisplay.html",
                controllerAs: 'store'
            }    
        })
        .directive( 'slider',function()
        {
            return {
                restrict: 'E',
                templateUrl: "resources/templates/slider.html",
                controllerAs: ''
            }
        })
})();