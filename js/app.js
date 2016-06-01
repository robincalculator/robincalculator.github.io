angular.module('robin',['robin.controllers'])
.controller('MainController',function($scope){
  function signo(v){
    if(v>=0){
      return "+";
    }else{
      return "";
    }
  }
  $scope.vector = function(mag,corx1,cory1,corz1,corx2,cory2,corz2){
    if(mag == undefined || corx1 == undefined || cory1 == undefined || corz1 == undefined || corx2 == undefined || cory2 == undefined || corz2 == undefined){
      alert("Complete todos los campos");
    }else{
      if(isNaN(mag) || isNaN(corx1) || isNaN(corx2) || isNaN(cory1) || isNaN(cory2) || isNaN(corz1) || isNaN(corz2)){
        alert("Solo ingrese numeros");
      }else{
        var x = corx2-corx1;
        var y = cory2-cory1;
        var z= corz2-corz1;
        var sum = Math.sqrt((Math.pow(x,2))+(Math.pow(y,2))+(Math.pow(z,2)));
        $scope.vectorResultado = signo(x) + mag*(x/sum) + " i " +signo(y)+ mag*(y/sum) + " j " + signo(z) + mag*(z/sum) + " k";
      }
    }
  }
  $scope.momento1 = function(x,y,z,corx1,cory1,corz1,corx2,cory2,corz2){
    if(x == undefined || y == undefined || z == undefined || corx1 == undefined || cory1 == undefined || corz1 == undefined || corx2 == undefined || cory2 == undefined || corz2 == undefined){
      alert("Complete todos los campos");
    }else{
      if(isNaN(x) || isNaN(y) || isNaN(z) || isNaN(corx1) || isNaN(corx2) || isNaN(cory1) || isNaN(cory2) || isNaN(corz1) || isNaN(corz2)){
        alert("Solo ingrese numeros");
      }else{
        var px = corx1-corx2;
        var py = cory1-cory2;
        var pz= corz1-corz2;
        var compx = ((py*z)-(pz*y));
        var compy = -((px*z)-(pz*x));
        var compz = ((px*y)-(py*x));
        $scope.momentoResultado1 = signo(compx) + compx + " i " + signo(compy) + compy + " j " + signo(compz) + compz + " k ";
      }
    }
  }
  $scope.momento2 = function(x1,y1,z1,x2,y2,z2,corx1,cory1,corz1,corx2,cory2,corz2){
    if(x1 == undefined || y1 == undefined || z1 == undefined || x2 == undefined || y2 == undefined || z2 == undefined || corx1 == undefined || cory1 == undefined || corz1 == undefined || corx2 == undefined || cory2 == undefined || corz2 == undefined){
      alert("Complete todos los campos");
    }else{
      if(isNaN(x1) || isNaN(y1) || isNaN(z1) || isNaN(x2) || isNaN(y2) || isNaN(z2) || isNaN(corx1) || isNaN(corx2) || isNaN(cory1) || isNaN(cory2) || isNaN(corz1) || isNaN(corz2)){
        alert("Solo ingrese numeros");
      }else{
        var px = corx1-corx2;
        var py = cory1-cory2;
        var pz= corz1-corz2;
        var compx = x2*((py*z1)-(pz*y1));
        var compy = -y2*((px*z1)-(pz*x1));
        var compz = z2*((px*y1)-(py*x1));
        $scope.momentoResultado2 = compx + compy + compz;
      }
    }
  }
  $scope.momento3 = function(x1,y1,z1,x2,y2,z2){
    if(x1 == undefined || y1 == undefined || z1 == undefined || x2 == undefined || y2 == undefined || z2 == undefined){
      alert("Complete todos los campos");
    }else{
      if(isNaN(x1) || isNaN(y1) || isNaN(z1) || isNaN(x2) || isNaN(y2) || isNaN(z2)){
        alert("Solo ingrese numeros");
      }else{
        var compx = (y2*z1)-(z2*y1);
        var compy = -(x2*z1)-(z2*x1);
        var compz = (x2*y1)-(y2*x1);
        $scope.momentoResultado3 = signo(compx) + compx + " i " + signo(compy) + compy + " j " + signo(compz) + compz + " k ";
      }
    }
  }
})
