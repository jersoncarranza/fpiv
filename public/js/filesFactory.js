angular.module('filesFactory', [])
       .factory('files', function($http){
        return {
          list: function (callback){
            $http({
              method: 'GET',
              //url: 'http://127.0.0.1:5000/files/Nombres/',
              url: 'https://bpiv.herokuapp.com/files/list',
              cache: true
            }).success(callback);
          },
          find: function(id, callback){
            $http({
              method: 'GET',
              url: 'https://bpiv.herokuapp.com/files/see/'+id,
              cache: true
            }).success(callback);
          }
        };
      });