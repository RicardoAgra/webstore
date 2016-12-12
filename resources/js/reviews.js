( function()
{
    angular
        .module( 'reviews',[] )
        .directive( 'reviewsForm',function()
        {
            return {
                restrict: 'E',
                templateUrl: "resources/templates/reviews.html"
            }
        })
        .directive( 'star',function()
        {
            return {
                restrict: 'E',
                templateUrl: "resources/templates/svgStar.html"
            }
        })
        .controller( 'ReviewController',function()
        {
            var ctrl = this;
            ctrl.lock = 0;
            ctrl.stars = 0;
            ctrl.number = [1,2,3,4,5];
            ctrl.review_body = "";
            ctrl.review_email = "";
            ctrl.invalid_review = false;
            ctrl.tittle = "Review This Product";
            
            ctrl.setStar = function( star )
                { this.stars = star; }
            ctrl.isActive = function( star )
                { return( star <= this.stars ); }
        
            this.addReview = function( product,valid_email )
            {                
                if( ctrl.lock && ctrl.review_body && valid_email )
                {
                    // SEND DATA TO SERVER HERE //
                    
                    // SEND DATA TO SERVER HERE //
                    
                    product.reviews.push(
                    {
                        stars: ctrl.lock,
                        comment: ctrl.review_body,
                        author: ctrl.review_email
                    });
                    
                    ctrl.lock = 0;
                    ctrl.review_text = "";
                    ctrl.stars = 0;
                    ctrl.tittle = "Review This Product";
                    ctrl.review_email = "";
                }
                else
                {
                    if( !ctrl.review_body )
                    {
                        ctrl.invalid_review = true;
                        ctrl.tittle = "Write a comment";
                    }
                    else
                    { 
                        if( ctrl.lock === 0 )
                        {
                            ctrl.tittle = "Please choose a number of stars";
                        }
                        else
                        {
                            if( ctrl.valid_email )
                            { 
                                ctrl.tittle = "Type your e-mail address";
                            }
                        }
                    }
                }
            };
        });
})();