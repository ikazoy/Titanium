(function(){
	// 名前空間をさらに機能ごとに分割する
	// 今回はUIを作成するための機能を集約しているので ui と命名した
	app.ui = {};
	
	// ファクトリメソッド
	// アプリケーションを起動させるために必要なタブグループやウインドウを生成する
	app.ui.createApplicationTabGroup = function(){
		Titanium.UI.setBackgroundColor('#000');
		
		var tabGroup = Ti.UI.createTabGroup();
		
		var tab1 = app.ui.createStopWatchTab();
		var tab2 = app.ui.createHowToPlayTab();
		
		tabGroup.addTab(tab1);
		tabGroup.addTab(tab2);
		
		return tabGroup;
	};
	
	// ファクトリメソッド
	// 「ストップウォッチ」タブを生成する
	app.ui.createStopWatchTab = function(){
		var win = Titanium.UI.createWindow({
			title: 'Tab 1',
			backgroundColor: '#fff'
		});
		var tab = Titanium.UI.createTab({
			icon: 'KS_nav_views.png',
			title: 'Tab 1',
			window: win
		});
		
		return tab;
	};
	
	// ファクトリメソッド
	// 「使い方」タブを生成する
	app.ui.createHowToPlayTab = function(){
		var win = Titanium.UI.createWindow({
			title: 'Tab 2',
			backgroundColor: '#fff'
		});
		var tab = Titanium.UI.createTab({
			icon: 'KS_nav_ui.png',
			title: 'Tab 2',
			window: win
		});
		
		return tab;
	}
})();