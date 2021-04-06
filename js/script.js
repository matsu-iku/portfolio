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