(function(){
	// UIの名前空間をさらに画面ごとに分割する
	// 今回は写真タブの画面をまとめているので photo と命名した
	app.ui.photo = {};
	
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
		
		// ステップ1: 写真イメージを並べる
		var scrollView = Ti.UI.createScrollView({
			contentWidth: 320,
			contentHeight: 'auto',
			showVerticalScrollIndicator: true
		});
		win.add(scrollView);
		
		var photos = app.photo.getAll();
		
		// 表示する写真の列や空白表示の大きさを設定する
		var row = 4;                                         // 写真の列の数
		var line = Math.floor((photos.length / row) + 1);    // 写真の行の数
		var space = 1;                                       // 写真と写真の隙間
		
		// 表示する画像の大きさを空白部分も考慮して求める
		var width = Math.floor((Ti.Platform.displayCaps.platformWidth - (space * (row + 1))) / row);
		var height = Math.floor((Ti.Platform.displayCaps.platformHeight - (space * (line + 1))) / row);
		
		photos.forEach(function(photo, index){
			var x = index % row;
			var y = Math.floor(index / row);
			
			var top = space + (height * y) + (space * y);
			var left = space + (width * x) + (space * x);
			
			var view = Ti.UI.createImageView({
				image: photo.path,
				top: top, left: left,
				width: width,
				height: height,
			});
			scrollView.add(view);
			
			// ステップ2: 写真イメージを表示する
			view.addEventListener('singletap', function(){
				var win = app.ui.photo.createPhotoWindow(view.image);
				tab.open(win);
			});
		});
		
		return tab;
	};
	
	// ステップ2: 写真イメージを表示するファクトリメソッドを定義する
	app.ui.photo.createPhotoWindow = function(/* string */ _image){
		var win = Ti.UI.createWindow({
			barColor: '#000',
			backgroundColor: '#fff',
			translucent: true
		});
		
		win.add(Ti.UI.createImageView({
			width: Ti.Platform.displayCaps.platformWidth,
			height: Ti.Platform.displayCaps.platformHeight,
			image: _image
		}));
		
		if (Ti.Platform.osname == "iphone") {
			win.navBarHidden = true;
			win.tabBarHidden = true;
			
			win.addEventListener('click', function(){
				win.showNavBar();
			});
		}
		
		return win;
	}
})();