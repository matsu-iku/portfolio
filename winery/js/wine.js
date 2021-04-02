'use strict';

//【ハンバーガーメニュー】
//①ボタンをクリックするとアイコンが×になり、メニューが出る
//②もう1度押すとアイコンが戻り、メニューも閉じる

const navBtn = document.getElementById('mobile-menu');
const gNav = document.getElementById('gnavi');

navBtn.onclick = (e) => {
    e.preventDefault();
    document.getElementById('gnavi').classList.toggle('open');
    document.getElementById('mobile-menu').classList.toggle('close');
};

//③開いているメニューをクリックしても動作するようにする
gNav.onclick = (e) => {
    document.getElementById('gnavi').classList.remove('open');
    document.getElementById('mobile-menu').classList.remove('close');
};

