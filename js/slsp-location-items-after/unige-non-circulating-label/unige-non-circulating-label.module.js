angular
    .module('unigeNonCirculatingLabel', [])
    .controller('unigeNonCirculatingLabelController', ['$scope','$translate', function ($scope, $translate) {
        var vm = this;
        this.$onInit = function() {
            // Prepare messages to be displayed
            var displayMessage;
            $translate('nui.message.itemlogin').then((translation) => {if (angular.isDefined(translation)){displayMessage = translation}});
            var displayNotLoanable;
            $translate('unige_non_circulating').then((translation) => {if (angular.isDefined(translation)){displayNotLoanable = '<div class="unige-closed-txt">' + translation + '</div>'}});
            $scope.$watch(
                function () {
                    if (angular.isDefined(vm.parentCtrl.loc) && angular.isDefined(vm.parentCtrl.loc.items)) {
                        // As soon as there are location details, watch for changes in the list of location items
                        return vm.parentCtrl.loc.items;
                    }
                    return 0;
                },
                function () {
                    // This listener function is called both during initial run and whenever the watched variable changes.
                    if (angular.isDefined(vm.parentCtrl.loc)){
                        // Prevent the listener from running when the locations list hasn't been defined yet (initial run)

                             // If a user is connected, the loanable status display is correct in case of loanable items 
                             if (vm.parentCtrl.isLoggedIn()){
                                 // user logged in: check the status dispayed
                                 // console.log('unige_non_circulating label : ' + displayNotLoanable);
                                 // console.log('User is logged in: check for loanable status');                            
                                 var itemLocations = vm.parentCtrl.loc.items;                             
                                 for(var i = 0; i < itemLocations.length; i++){
                                     // console.log('itemLocations ' + i + ' : ' + itemLocations[i].itemFields[1]);
                                     if ((typeof itemLocations[i].itemFields[1] !== "undefined") && ((itemLocations[i].itemFields[1] == null) || (itemLocations[i].itemFields[1] == '') || (itemLocations[i].itemFields[1] == ' '))){
                                         // itemLocation empty -> dsplay non loanable message
                                         // console.log('itemLocations ' + i + ' empty');
                                         itemLocations[i].itemFields[1] = displayNotLoanable;
                                     } else {
                                         // itemLocation not empty -> do nothing
                                         // console.log('itemLocations ' + i + ' not empty');
                                     }
                                 }
                             } else {                    
                                 // If the user is not logged in, Primo use the "not loanable" label even if this may not be the case.
                                 // Replace that status with a note asking users to log in to get more info.
                                 // console.log('User is not logged in : Found some holdings to correct');
                                 var itemLocations = vm.parentCtrl.loc.items;
                                 for(var i = 0; i < itemLocations.length; i++){
                                    itemLocations[i].itemFields[1] = displayMessage;
                                 }
                             }
                         }
                    }
            );
        }
    }])
    .component('slspLocationItemsAfter', {
        bindings: {parentCtrl: `<`},
        controller: 'unigeNonCirculatingLabelController',
        template: ''  
    });