( function()
{
    angular
        .module( 'store',[ 'products','tabs','reviews' ] )
        .controller( 'StoreController',[ '$http',function( $http )
        {
            var ctrl = this;
            ctrl.loadedData = [];

            $http.get( 'resources/json/gems.json' ).success( function( data )
            {
                ctrl.products = data;
            });
        }]);
})();
