## package-catalog

Command Line Tool for tracking and organising node.js packages.

### Motivation

Motivation for this cli is to build alternative version to package.json that will hold extra metadata that package.json doesn't allow.

## Why not package json file

Package.json files are designed to work with code. 
This command focuses on cataloging packages and it will have different requirements over the time.

## Usage

```
npm install -g package-catalog
pacat init
```

### Commands

#### Initialize package catalog

Initializes `.packages.json` file in current directory

`npx package-catalog init`

#### Add new package to catalog

Add new package to `.packages.json` file

`npx package-catalog add <package-name>`

#### Verify package package in catalog

Verify `.packages.json` file

`npx package-catalog verify`
