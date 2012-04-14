(function(){
	// UIの名前空間をさらに画面ごとに分割する
	// 今回は撮影地タブの画面をまとめているので map と命名した
	app.ui.map = {};
	
	// ファクトリメソッド
	// 「撮影地」タブを生成する
	app.ui.map.createTab = function(){
		var win = Titanium.UI.createWindow({
			title: '撮影地',
			backgroundColor: '#fff',
			barColor: '#000',
			translucent: true
		});
		var tab = Titanium.UI.createTab({
			icon: 'dark_flag.png',
			title: '撮影地',
			window: win
		});
		
		return tab;
	};
})();
