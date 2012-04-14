(function(){
	// 名前空間をさらに機能ごとに分割する
	// 今回はUIを作成するための機能を集約しているので ui と命名した
	app.ui = {};
	
	// ステップ1: 共通のスタイルを定義する
	var style = {
		barColor: '#000',
		backgroundColor: '#000'
	};
	
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
		// ステップ1: 背景色やアイコンを整える
		var win = Titanium.UI.createWindow({
			title: 'ストップウォッチ',
			barColor: style.barColor,
			backgroundColor: style.backgroundColor
		});
		var tab = Titanium.UI.createTab({
			icon: 'dark_clock.png',
			title: 'ストップウォッチ',
			window: win
		});
		
		// ステップ2: ラベルやボタンを作る
		var label = Ti.UI.createLabel({
			text: '00:00:00.000',
			color: 'white',
			width: 'auto', height: 'auto',
			font: {fontSize: 40, fontWeight: 'bold'}
		});
		win.add(label);
		
		var button = Ti.UI.createButton({
			title: 'Start',
			width: 150, height: 40,
			bottom: 30
		});
		win.add(button);
		
		return tab;
	};
	
	// ファクトリメソッド
	// 「使い方」タブを生成する
	app.ui.createHowToPlayTab = function(){
		// ステップ1: 背景色やアイコンを整える
		var win = Titanium.UI.createWindow({
			title: '使い方',
			barColor: style.barColor,
			backgroundColor: style.backgroundColor
		});
		var tab = Titanium.UI.createTab({
			icon: 'dark_info.png',
			title: '使い方',
			window: win
		});
		
		return tab;
	}
})();