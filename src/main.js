window.__TAURI_IPC__ = (args) => {
	//The parent window callback points to the child window
	window.parent[`_${args.callback}`] = window[`_${args.callback}`];

	// Call the function of the parent window
	window.parent.__TAURI_IPC__(args);
};
