const fs = require('fs')
const path = require('path')
fs.readdir(path.resolve('./'), (_, arr) => {
	for(const name of arr) {
		fs.rename(name, name.replace('_00000', '').replace('VBox.Icons.', ''), () => {})
	}
})
