const path = require('path')
const spawn = require('child_process').spawn

const command = [
	'node',
	path.resolve(__dirname, 'node_modules/jest-cli/bin/jest.js'),
	'-o',
	'--watch',
	'--passWithNoTests'
]

spawn('node', [
	path.resolve(__dirname, 'node_modules/concurrently/src/main.js'),
	'-k',
	`"${command.join(' ')}"`,
	'-r',
], { stdio : 'inherit' })