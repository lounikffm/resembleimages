# ResembleImages

## Usage

```
yarn add resembleimages
```


add this to package.json

```
	"resemble": "resembleimages test '**.png' '<path to reference images>' '<test image folder>' '<path to diff images>'"
```

then use

```
yarn resemble
```

to test

ResembleImages willautomatically create the diff folder and create diff images inside of it for every visual change