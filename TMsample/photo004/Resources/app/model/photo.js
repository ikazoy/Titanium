(function(){
	app.photo = {};
	
	var db = Ti.Database.open("tiphoto");
	// カメラで撮った写真を保存するデータベースを生成する
	db.execute('CREATE TABLE IF NOT EXISTS photos(id INTEGER PRIMARY KEY, path TEXT, latitude REAL, longitude REAL, created_at REAL)');
	// テスト用の初期データを投入する
	if (!Ti.App.Properties.getBool('seed', false)) {
		for (var i = 0; i < 20; i++) {
			db.execute('INSERT INTO photos (path, latitude, longitude, created_at) VALUES (?, ?, ?, ?)', '/photo_example2.png', 0, 0, (new Date).getTime());
		}
		Ti.App.Properties.setBool('seed', true);
	}
	db.close();
	
	// 写真の一覧を返すメソッド
	app.photo.getAll = function(){
		var db = Ti.Database.open("tiphoto");
		
		// ダミー情報を返すようにする
		var photos = [];
		for(var i = 0; i < 20; i++) {
			photos.push({id: i, path: '/photo_example1.png', latitude: 0, longitude: 0});
		}
		
		db.close();
		
		return photos;
	};
	
	// 写真を登録するメソッド
	app.photo.save = function(options){
		var db = Ti.Database.open("tiphoto");
		db.close();
	};
})();
