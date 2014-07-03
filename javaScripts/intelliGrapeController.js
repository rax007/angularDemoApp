/**
 * Created by rakesh on 3/7/14.
 */

var angularDemoApp = angular.module('angularDemoApp', []);

angularDemoApp.factory('nodeJSTeamDetailsData', function () {

    var nodeJSTeamDetailsData ={};

    nodeJSTeamDetailsData.data= [
        { EmpID:'1',
            FirstName:'Rakesh',
            LastName:'Sherwal'
        },
        { EmpID:'2',
            FirstName:'Amit',
            LastName:'Raj'
        },
        { EmpID:'3',
            FirstName:'Mohit',
            LastName:'Tyagi'
        },
        { EmpID:'4',
            FirstName:'Rishabh',
            LastName:'Dixit'
        },
        { EmpID:'5',
            FirstName:'Sandeep',
            LastName:'Chhapola'
        },
        { EmpID:'6',
            FirstName:'Kashish',
            LastName:'Gupta'
        },
        { EmpID:'7',
            FirstName:'Vineeta',
            LastName:'Sharma'
        },
        { EmpID:'8',
            FirstName:'Rubi',
            LastName:'thomas'
        }
    ];
    console.log('factory', nodeJSTeamDetailsData);

//    $scope.nodeJSTeamDetailsData = nodeJSTeamDetailsObj;
    return nodeJSTeamDetailsData;

});

var ShowDetailsController = function ($scope, nodeJSTeamDetailsData) {
    console.log('akjshdkja');
    $scope.nodeJSTeamDetailsData = nodeJSTeamDetailsData;

}
