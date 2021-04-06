'use strict';

//【ハンバーガーメニュー】
//①ボタンをクリックするとアイコンが×になり、メニューが出る
//②もう1度押すとアイコンが戻り、メニューも閉じる

const navBtn = document.getElementById('menu-btn');
const gNav = document.getElementById('gnavi');

navBtn.onclick = (e) => {
    e.preventDefault();
    document.getElementById('gnavi').classList.toggle('open');
    document.getElementById('menu-btn').classList.toggle('close');
};

//③開いているメニューをクリックしても動作するようにする
gNav.onclick = (e) => {
    document.getElementById('gnavi').classList.remove('open');
    document.getElementById('menu-btn').classList.remove('close');
};


// フェードイン
$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200){
                $(this).addClass('scrollin');
            }
        });
    });
});


//ページトップボタン
window.onscroll = function(event) {
    //スクロール値の取得
    let position = document.documentElement.scrollTop || document.body.scrollTop;

    //console.log(position);


    /*
    positionの値が300以上なら
        #page-top に .openTop を追加
    それ以外なら
        #page-top から .openTop を削除
    */
    const pageTop = document.getElementById('page-top');

    if(position >= 600) {
        pageTop.classList.add('openTop');
    } else {
        pageTop.classList.remove('openTop');
    }
};