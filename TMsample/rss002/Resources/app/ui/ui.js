(function(){
	// 名前空間をさらに機能ごとに分割する
	// 今回はUIを作成するための機能を集約しているので ui と命名した
	app.ui = {};
	
	// ファクトリメソッド
	// アプリケーションを起動させるために必要なタブグループやウインドウを生成する
	app.ui.createApplicationTabGroup = function(){
		Titanium.UI.setBackgroundColor('#000');
		
		var tabGroup = Ti.UI.createTabGroup();
		
		var tab1 = app.ui.createRssTab('Developer Blog', 'http://developer.appcelerator.com/blog/feed');
		var tab2 = app.ui.createRssTab('Q&A', 'http://developer.appcelerator.com/questions/feed/newest');
		
		tabGroup.addTab(tab1);
		tabGroup.addTab(tab2);
		
		return tabGroup;
	};
	
	// ファクトリメソッド
	// RSSを読み込むで表示するタブを生成する
	app.ui.createRssTab = function(/* string */ _title, /* string */ _url) {
		var win = Titanium.UI.createWindow({
			title: _title,
			backgroundColor: '#fff'
		});
		
		var tab = Titanium.UI.createTab({
			title: _title,
			icon: 'KS_nav_views.png',
			window: win
		});
		
		// ステップ1: リストを作成する
		var tableView = Ti.UI.createTableView({
			data: [
				{title: "Foo", color: "#000", hasChild: true},
				{title: "Bar", color: "#000", hasChild: true},
				{title: "Hoge", color: "#000", hasChild: true}
			]
		});
		// tableView.setData([{title: "Foo"}, {title: "Bar"}]);
		// tableView.appendRow({title: "Foo"});
		// tableView.appendRow({title: "Bar"});
		win.add(tableView);
		
		return tab;
	};
})();