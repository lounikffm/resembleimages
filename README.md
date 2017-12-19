# ResembleImages

## Usage

```
yarn add resembleimages
```


add this to package.json

```
"resemble": "resembleimages test '**.png' '<path to reference images>' '<test image folder>' '<path to diff images>'"
```

##Example:

If the folder structure looks like this:

package.json
screenshots
	reference
	test

in your package.json it should look something like this:

```
"resemble": "resembleimages test '**.png' 'screenshots/reference/' 'test/' 'screenshots/diff/'"
```

then use

```
yarn resemble
```

to test

ResembleImages will automatically create the diff folder and create diff images inside of it for every visual change