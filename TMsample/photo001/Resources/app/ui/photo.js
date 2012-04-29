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
		
		// ScrollView
		var scrollView = Ti.UI.createScrollView({
			contentWidth: Ti.Platform.displayCaps.platformWidth,
			contentHeight: 'auto',
			showVerticalScrollIndicator: true,
		});
		win.add(scrollView);
		
		var photos = app.photo.getAll();
		
		// 表示する写真の列や空白表示の大きさ
		var row = 4;
		var line = Math.floor((photos.length / row) + 1);
		var space = 1;
		
		var width = Math.floor((Ti.Platform.displayCaps.platformWidth - ( space * (row +1) ) ) / row);
		var height = Math.floor((Ti.Platform.displayCaps.platformWidth - ( space * (line +1) ) ) / row);
		
		photos.forEach(function(photo, index){
			var x = index % row;
			var y = Math.floor(index / row);
			
			var top = space + (height * y) + (space * y);
			var left = space + (width * x) + (space * x);
			
			var view = Ti.UI.createImageView({
				image: photo.path,
				top: top, left:left,
				width: width,
				height: height,
			});
			
			view.addEventListener('singletap', function(){
				var win = app.ui.photo.createPhotoWindow(view.image);
				tab.open(win);
			});
			
			scrollView.add(view);
		});

		app.ui.photo.createPhotoWindow = function(/* string */ _image){
			var win = Ti.UI.createWindow({
				barColor: '#000',
				backgroundColor: '#fff',
				translucent: true,
			});
			
			win.add(Ti.UI.createImageView({
				width: Ti.Platform.displayCaps.platformWidth,
				height: Ti.Platform.displayCaps.platformHeight,
				image: _image
			}));
			if (Ti.Platform.osname == "iphone"){
				win.navBarHidden = true;
				win.tabBarHidden = true;
				var show_flg = false;
				win.addEventListener('click', function(){
					if (!show_flg) {
						win.showNavBar();
						show_flg = true;
					} else {
						win.tabBarHidden = true;
					}
					Ti.API.debug('show_flg:' . show_flg);
				});
			}
			
			return win;
		}

		return tab;
	};
})();