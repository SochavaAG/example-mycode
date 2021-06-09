ChestCore.isOpenChest = false;
ChestCore.keyChosenClass = 'active';
ChestCore.game_id = 172;
ChestCore.type_action = 'poseidon';

ChestCore.setElements = function () {
    this.calcInp = $('.PSDN-panel-nav-inpCon .inp');
    this.calcMake = $('.PSDN-makeBut');
    this.gameStart = false;
    this.nav = $('.PSDN-panel-nav');
    this.mess1 = $('.PSDN-board-1 > div[data-txt="1"]');
    this.mess2 = $('.PSDN-board-1 > div[data-txt="2"]');
    this.back1 = $('.PSDN-back1');
    this.back2 = $('.PSDN-back2');
    this.board1 = $('.PSDN-board-1');
    this.board2 = $('.PSDN-board-2');
    this.girl = $('.PSDN-girl');
    this.summNum = $('.PSDN-keys-summ .summNum');
    this.keysCon = $('.PSDN-keys-div');
    this.keyChoice = $('.PSDN-keys-round');
    this.lock = $('.PSDN-chest-lock');
    this.lockCon = $('.PSDN-chest-lockCon');
    this.key = $('.PSDN-chest-key');
    this.key_ = $('.PSDN-chest-key > div');
    this.chestTop = $('.PSDN-chest-top');
    this.light1 = $('.PSDN-chest-light');
    this.light3 = $('.PSDN-chest-light3');
    this.prizeNum = $('.PSDN-chest-prize-num');
    this.finalSumm = $('#finalSumm');
    this.kofId = $('.PSDN-chest-prize-num-svg .PSDN-kofId');
};

ChestCore._init = function () {
    ChestCore.bubbles();

    $(document).on('click', '.PSDN-rules-but', function () {
        $('#PSDN-modal5').arcticmodal({
            beforeOpen: function(data, el) {
                $('.arcticmodal-container').addClass('overHide');
            },
            afterOpen: function(data, el) {
                $('.arcticmodal-container .box-modal.PSDN-modal').css({y: -300}).transition({y: 0,opacity: 1},500,'ease');
            },
            afterClose: function (data, el) {
                $(el).css('opacity', 0);
            }
        });
    });
};

ChestCore.toSecondScreen = function () {
    this.calcMake.addClass('disabled');
    this.calcInp.prop('disabled',true);
    this.keysCon.addClass('enablePoint');
    this.summNum.html(Games.winMsg(Games.getCurrBet, true));

    this.board1.animate({marginTop: '-510px'},500,'linear');
    this.girl.fadeOut(500,function(){
        ChestCore.nav.animate({marginTop: '400px'},500,'linear');
        ChestCore.back2.transition({opacity: 1},500,'linear',function(){
            ChestCore.calcMake.removeClass('disabled');
            ChestCore.calcInp.prop('disabled',false);

            ChestCore.keysCon.animate({marginTop: 0},500,'linear',function(){
                ChestCore.board2.animate({marginTop: 0},500,'linear');

                // демо подсветка ключей
                ChestCore.keyLightInterval = setInterval(function(){
                    var $key = $('.PSDN-keys-round:nth-child('+ Games.rand(1, 9)+ ')');
                    $key.addClass('light');
                    setTimeout(function(){
                        $key.removeClass('light');
                    },2500);
                },3000);
            });
        });
    });
};

ChestCore.errorCallback = function () {
    $(this.error.popup).css('opacity', 1);
};

ChestCore.keyChoose = function () {
    // демо подсветка ключей
    clearInterval(ChestCore.keyLightInterval);
    $('.PSDN-keys-round.light').removeClass('light');

    this.keysCon.removeClass('enablePoint');
    this.board2.animate({marginTop: '-250px'},500,'linear');

    ChestCore.selectedKey.find('.PSDN-key').delay(500).fadeOut(200);

    $('.PSDN-chest-key div').attr('data-key', ChestCore.selectedKey.find('.PSDN-key').attr('data-key'));

    this.lock.delay(200).transition({opacity: 1},500,'linear');
    this.key.delay(500).fadeIn(500).delay(200).transition({marginLeft: '-54px'},800,'ease',function(){
        ChestCore.key_.delay(300).transition({perspective: '1000px', rotateX: 60},200,'linear')
            .transition({perspective: '1000px', rotateX: 0},200,'linear')
            .transition({perspective: '1000px', rotateX: 60},300,'linear')
            .transition({perspective: '1000px', rotateX: 0},300,'linear')
            .transition({perspective: '1000px', rotateX: 60},200,'linear')
            .transition({perspective: '1000px', rotateX: 0},200,'linear',function(){

                //этот иф отвечает только за то, угадал игрок ключ, или нет.
                //если включены бонусы, то попап показывает выигрыш корректно.
                if (ChestCore.is_win) {	// победа

                    ChestCore.kofId.html(ChestCore.coef);

                    ChestCore.openChest(true);
                    ChestCore.light1.transition({opacity: 1},300,'linear',function(){
                        var m = 135;
                        for(var i = 1; i <= 7; i++){
                            var b = $('.PSDN-chest-bubble-'+i);
                            b.css('margin-top',m+'px')
                                .delay(i*100)
                                .transition({marginTop: '-=' + m + 'px',opacity: 1}, 800, 'out')
                                .transition({marginTop: '-=15px'}, 2500, 'linear')
                                .transition({marginTop: '-=' + m + 'px', opacity: 0}, 800, 'in');
                        }
                        ChestCore.prizeNum.css('margin-top',m+'px')
                            .delay(400)
                            .transition({marginTop: '-=' + m + 'px', opacity: 1}, 800, 'out')
                            .transition({marginTop: '-=15px'}, 2700, 'linear')
                            .transition({marginTop: '-=' + m + 'px', opacity: 0}, 800, 'in');

                        setTimeout(function(){
                            ChestCore.showResultMessage();
                        },5000);
                    });
                }else{	// проигрыш
                    ChestCore.light3.transition({opacity: 0.4},400,'linear').transition({opacity: 0},400,'linear');
                    ChestCore.tryToOpen(15);
                    setTimeout(function(){
                        ChestCore.showResultMessage();
                    }, 1000);
                }
            });
    });
};

ChestCore.showResultMessage = function () {
    refreshBalanceOnce();
    if (ChestCore.win_summ) {
        ChestCore.finalSumm.html(Games.winMsg(ChestCore.win_summ, true));
        ChestCore.popup('#PSDN-modal3');
    } else {
        ChestCore.popup('#PSDN-modal4');
    }
};

ChestCore.popup = function (modal) {
    $(modal).arcticmodal({
        beforeOpen: function(data, el) {
            $('.arcticmodal-container').addClass('overHide');
        },
        afterOpen: function(data, el) {
            $('.arcticmodal-container .box-modal.PSDN-modal').css({y: -300}).transition({y: 0,opacity: 1},500,'ease');
        },
        afterClose: function(data, el) {
            $(el).css({opacity: 0});
            ChestCore.gameEnd();
        }
    });
};

ChestCore.gameEnd = function () {
    this.board2.animate({marginTop: '-250px'},500,'linear');
    this.key.delay(500).transition({marginLeft: 0,opacity:0},300,'linear',function(){
        ChestCore.key.attr('style','');
        ChestCore.lock.transition({opacity:0.4},400,'linear');
        ChestCore.isOpenChest && ChestCore.openChest(false);
        ChestCore.light1.transition({opacity:0},300,'linear',function(){
            ChestCore.keysCon.transition({marginTop: 650},500,'linear',function(){
                ChestCore.back2.transition({opacity: 0},500,'linear',function(){
                    ChestCore.girl.fadeIn(500);
                    Games.destroy1xGamesBonus();
                    ChestCore.nav.animate({marginTop: 0},500,'linear',function(){
                        ChestCore.board1.animate({marginTop: 0},500,'linear',function(){
                            $('.PSDN-keys-round.enableKey').removeClass('enableKey');
                            $('.PSDN-keys-round.active').removeClass('active').find('.PSDN-key').show();
                            ChestCore.gameStarted = false;
                            ChestCore.openChest(false);
                            ChestCore.selectedKey = false;
                        });
                    });
                });
            });
        });
    });
};

ChestCore.bubbles = function () {
    var r1 = Games.rand(5, 95);
    for (var i = 1; i <= Games.rand(20, 50); i++) {
        var r2 = Games.rand(5, 18),
            r3 = Games.rand(400, 900),
            r4 = Games.rand(-900, 0),
            r5 = Games.rand(8000, 12000),
            div = document.createElement('div'),
            $newDiv = $(div);

        $newDiv.addClass('PSDN-bubbleOne');
        $newDiv.css({
            left: r1 + '%',
            bottom: 0,
            marginBottom: '-20px',
            x: Games.rand(-50, 50),
            width: r2,
            height: (r2 * 0.66),
            '-webkit-animation': r3 + 'ms linear ' + r4 + 'ms reverse none infinite running PSDN-bubbleOne-anim',
            '-moz-animation': r3 + 'ms linear ' + r4 + 'ms reverse none infinite running PSDN-bubbleOne-anim',
            'animation': r3 + 'ms linear ' + r4 + 'ms reverse none infinite running PSDN-bubbleOne-anim',
        });
        $('.PSDN-bubbleOne-con').append($newDiv);
        $newDiv.delay(i * Games.rand(30, 150)).transition({
            bottom: '100%',
            marginBottom: '20px',
            opacity: 0.2
        }, r5, 'linear', function () {
            $(this).remove();
        });
    }
    setTimeout(function () {
        ChestCore.bubbles();
    }, Games.rand(10, 15) * 1000);
};

ChestCore.openChest = function(open) {
    if (open) {
        this.chestTop.css('background-position','0 0');
        setTimeout(function () { ChestCore.chestTop.css('background-position','0 -240px');}, 150);
        setTimeout(function () { ChestCore.chestTop.css('background-position','0 -480px');}, 300);
    } else {
        this.chestTop.css('background-position','0 -480px');
        setTimeout(function () { ChestCore.chestTop.css('background-position','0 -240px');}, 150);
        setTimeout(function () { ChestCore.chestTop.css('background-position','0 0');}, 300);
    }
};

ChestCore.tryToOpen = function (n) {
    var r1 = Games.rand(-2, 2);
    var r2 = Games.rand(-2, 2);
    ChestCore.lockCon.transition({x: r1, y: r2},30,'linear',function(){
        if(n > 0){
            n--;
            ChestCore.tryToOpen(n);
        }else{
            ChestCore.lockCon.attr('style','');
        }
    });
};

ChestCore.checkSecondScreen = function () {
    return $('.PSDN-girl').css('display') === 'none';
};