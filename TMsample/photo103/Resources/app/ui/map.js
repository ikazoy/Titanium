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
		
		// ステップ7: 自分の現在位置を中心に地図を表示する
		win.addEventListener('open', function(){
			// 位置情報サービスが有効かどうか確認する
			if (!app.util.geolocationEnabled()){
				alert('位置情報サービスはサポートされていないか、利用を許可されていません');
				return false;
			}
			
			// 精度を設定して、位置情報を取得する
			Ti.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
			Ti.Geolocation.getCurrentPosition(function(e){
				if (e.error) {
					alert(e.error);
					return;
				}
				
				var mapView = Ti.Map.createView({
					mapType: Ti.Map.STANDARD_TYPE,
					region: {
						latitude: e.coords.latitude,
						longitude: e.coords.longitude,
						latitudeDelta: 0.05,
						longitudeDelta: 0.05
					},
					regionFit: true,
					animate: true,
					userLocation: true
				});
				mapView.addEventListener('regionChanged', function(){});
				win.add(mapView);
			});
		});
		
		return tab;
	};
})();
