( function() 
{
    angular
        .module( 'tabs',[] )
        .directive( 'tabs',function()
        {
            return {
                restrict: 'E',
                templateUrl: "resources/templates/tabs.html"
            }
        })
        .controller( 'TabController',function()
        {
            this.active_tab = 1;
            this.setTab = function( tab )
            {
                this.active_tab = tab;   
            }
            this.isActive = function( tab )
            {
                return( this.active_tab === tab );
            }
        })
})();