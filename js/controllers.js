angular.module('robin.controllers',[])

.controller('MainController',function($scope){
  $scope.test = function(){
    alert('Hola');
  }
  $scope.vector = function(mag,corx1,cory1,corz1,corx2,cory2,corz2){
    if(mag == undefined || corx1 == undefined || cory1 == undefined || corz1 == undefined || corx2 == undefined || cory2 == undefined || corz2 == undefined){
      alert("Complete todos los campos");
    }else{
      if(!NaN(mag) && !NaN(corx1) && !NaN(corx2) && !NaN(cory1) && !NaN(cory2) && !NaN(corz1) && !NaN(corz2)){
        alert("Solo ingrese numeros");
      }else{
        var x = corx2-corx1;
        var y = cory2-cory1;
        var z= corz2-corz1;
        var sum = (x^2 + y^2 + z^2)^0.5;
        $scope.vectorResultado = (mag*(x/sum)) + " i " + (mag*(y/sum)) + " j " (mag*(z/sum)) + " k";
      }
    }
  }
})
