/** Default greeting message */
export const MSG = "Hello World!";

/**
 * Show greeting message depending on the run-time.
 * In Node.JS, console log the message.
 * In Browser, both console log and alert the message.
 * @param message you can provide custom greeting message, default is already provided
 */
export function greetWithMessage(message: string = MSG) {
	if (typeof window !== "undefined") window.alert(message);
	console.log(message);
}
