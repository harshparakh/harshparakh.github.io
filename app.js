$rootScope.$on('$locationChangeStart', function() {
            ga('set', 'page', $location.path());
            ga('send', 'pageview');
});
