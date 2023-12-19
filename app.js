(function () {
'use strict';

angular.module('app', [])

.controller('massageChanger',massageChange);
massageChange.$inject = ['$scope'];
function massageChange($scoop){
        $scoop.lunchItems=''
        $scoop.lunchItems_n=''
        $scoop.mchange = ()=>{
        $scoop.massage =''
        $scoop.lunchItems_n= $scoop.lunchItems.split(',')
            if($scoop.lunchItems_n.length == 1 && $scoop.lunchItems_n[0].length == 0 )
            {
                $scoop.massage ='Please enter data first'
             }else if($scoop.lunchItems_n.length > 3)
             {
                $scoop.massage='Too much!'
             }else if($scoop.lunchItems_n.length <=3)
             { 
                $scoop.massage='Enjoy!' 
             }
    }
}
})();
