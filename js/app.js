$(function () {
    'use strict';

    var peer = new Peer({ key: 'evycxpu0zuissjor' });

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
        });
        call.answer();
    });

    peer.on('error', function (err) {
        console.error(err);
    });

});
