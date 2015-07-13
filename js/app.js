(function () {
    var peer = new Peer({key: 'lwjd5qra8257b9'});
    peer.on('open', function (id) {
        peer.connect('whoopsie');
    });

    peer.on('call', function (call) {
        call.answer();
    });

})();
