'use strict';

app.controller('PostsCtrl', function ($scope, $location, Post) {
  $scope.Posts = Post.all;

  $scope.post = {url: 'http://', title: ''};


  $scope.deletePost = function (post) {
    Post.delete(post);
  };

});