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


//テキストのカウントアップの設定
var bar = new ProgressBar.Line(splash_text, {//id名を指定
	strokeWidth: 0,//進捗ゲージの太さ
	duration: 1000,//時間指定(1000＝1秒)
	trailWidth: 0,//線の太さ
	text: {//テキストの形状を直接指定
		style: {//天地中央に配置
			position:'absolute',
			left:'50%',
			top:'50%',
			padding:'0',
			margin:'0',
			transform:'translate(-50%,-50%)',
			'font-size':'1.2rem',
			color:'#fff',
		},
		autoStyleContainer: false //自動付与のスタイルを切る
	},
	step: function(state, bar) {
		bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
	}
});

//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
	$("#splash").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
});