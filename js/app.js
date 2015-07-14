$(function () {
    'use strict';

    var peer = new Peer({
        host: 'api.tandembox.co',
        port: 80,
        path: '/peer'
    });

    peer.on('open', function (id) {
        $('h1').html('Hi ' + id + ' :)');
        peer.connect('defaultId');
    });

    peer.on('call', function (call) {
        call.on('stream', function (stream) {
            var streamUrl = URL.createObjectURL(stream);
            var audio = new Audio();
            audio.src = streamUrl;
            audio.play();
            console.log('Playing %s', streamUrl);
        });
        call.answer();
    });

    peer.on('error', function (err) {
        console.error(err);
    });

});
