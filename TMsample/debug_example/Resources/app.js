// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var sample = {};

Ti.include('ui.js', 'database.js');

// create tab group
var tabs = sample.ui.createApplicationTabGroup();

// open tab group
tabs.open();
