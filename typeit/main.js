new TypeIt('#name', {
    speed: 250,
    startDelay: 900,
    loop: true,
      afterComplete: (instance) => {
        $('.loader').fadeOut();
    },
})
    .type('<em class="c-b" style="margin-right: 6px;">ನಮಸ್ಕಾರ ಕೆ</em>')
    .pause(500)
    .delete(2)
    .pause(300)
    .type('<em class="c-b">, </em>')
    .pause(750)
    .type('<em class="c-b">ನಾನಾ</em>')
    .pause(500)
    .delete(2)
    .pause(500)
    .type('<em class="c-b">ನು </em>')
    .pause(750)
    .type('<em class="bold">ಕುಶಾಲ್</em>')
    .pause(1500).go();
