'use strict'

const glob = require('glob')
const renameExtension = require('rename-extension')
const looksSame = require('looks-same')
const fs = require('fs');
const empty = require('empty-folder');
const path = require('path');

const resembleImages = function(pattern, cwd, testfolder, difffolder) {

	let paths = glob.sync(pattern, {cwd});

	if (!fs.existsSync(difffolder)){
		fs.mkdirSync(difffolder);
	} else {
		empty(difffolder, false, (o)=>{
			if(o.error) console.error(err);
			console.log(o.removed);
		});
	}

	console.log(paths)

	paths.map((refPath) => {

		const testDir = cwd.replace('reference', testfolder);
		// const diffDir = cwd.replace('reference', difffolder);

		// const referencePath = cwd + refPath
		// const testPath = testDir + refPath
		// const diffPath = diffDir + refPath

		const referencePath = path.join(cwd, refPath)
		const testPath = path.join(testDir, refPath)
		const diffPath = path.join(difffolder, refPath)

		looksSame(referencePath, testPath, function(error, equal) {
			if(equal !== true) {
				console.log('diff!')
				looksSame.createDiff({
					reference: referencePath,
					current: testPath,
					diff: diffPath,
					highlightColor: '#ff00ff', //color to highlight the differences
					strict: true,//strict comparsion
				}, function(err) {

					console.log(err);

				});
			}
		});



	})

}

module.exports = {
		test   : (pattern, cwd, testfolder, difffolder) => resembleImages(pattern, cwd, testfolder, difffolder)
}