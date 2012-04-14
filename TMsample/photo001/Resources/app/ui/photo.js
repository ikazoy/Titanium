(function(){
	// UIの名前空間をさらに画面ごとに分割する
	// 今回は写真タブの画面をまとめているので photo と命名した
	app.ui.photo = {};
	
	// ファクトリメソッド
	// 「写真」タブを生成する
	app.ui.photo.createTab = function(){
		var win = Titanium.UI.createWindow({
			title: '写真',
			backgroundColor: '#fff',
			barColor: '#000',
			// Titanium Mobile 1.8.0.1 では生成時に指定しなければならない
			activity: {
				onCreateOptionsMenu: function(e){
					var menu = e.menu;
					var item = menu.add({title: '写真をとる'});
					item.setIcon('/dark_camera.png');
					item.addEventListener('click', app.ui.photo.openCamera);
				}
			}
		});
		var tab = Titanium.UI.createTab({
			icon: 'dark_book.png',
			title: '写真',
			window: win
		});
		
		return tab;
	};
})();