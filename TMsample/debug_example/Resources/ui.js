(function() {

	sample.db = {};

    sample.db.name = "sample";
	var db = Ti.Database.open(sample.db.name);
	
	var tables = ['users', 'books']
	for(i = 0; i < tables.length; i++) {
		var table = tables[i]; 
		db.execute("CREATE TABLE IF NOT EXISTS " + table + "(id INTEGER PRIMARY KEY, name TEXT);");
	};

	db.close();

	sample.db.list = function(_type) {
		var db = Ti.Database.open(sample.db.name);
		var sql = "SELECT id, name FROM " + _type;
		var rows = db.execute(sql);
		var data = [];
		while(rows.isValidRow()) {
			data.push({
				title : rows.fieldByName("name"),
				hasChild : true,
				id : rows.fieldByName("id"),
				name : rows.fieldByName("name")
			});
			rows.next();
		}
		rows.close();
		db.close();

		return data;
	}

	sample.db.del = function(id, _type) {
		var db = Ti.Database.open(sample.db.name);
		var sql = "DELETE FROM " + _type + " WHERE id = ?"
		db.execute(sql, id);
		db.close();
	}

	sample.db.add = function(name, _type) {
		var db = Ti.Database.open(sample.db.name);
		var sql = "INSERT INTO" + _type + " (name) VALUES (?)";
		db.execute(sql, name);
		db.close();
	}
})();
