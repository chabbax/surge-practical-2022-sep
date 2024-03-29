/**
 *  Define response payloads for Spring RestController
 * 	MessageResponse: { message }
*/
package com.surge.spring.jwt.mongodb.payload.response;

public class MessageResponse {
	private String message;

	public MessageResponse(String message) {
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
