import * as vscode from 'vscode';

import { logger } from './logging';

const log = logger(__filename);

/**
 * Entry point into the extension.
 */
export function activate(context: vscode.ExtensionContext) {
	log.trace('activate()');

	// Implementation of the helloWorld command (declared in package.json)
	let disposable = vscode.commands.registerCommand('norms.helloWorld', () => {
		log.trace('command: helloWorld');

		vscode.window.showInformationMessage('Ohai from Norms!');
	});

	context.subscriptions.push(disposable);
}

/**
 * Unload point for the extension.
 */
export function deactivate() {
	log.trace('deactivate()');
}
