const config = {
	baseUrl: "https://nomoreparties.co/v1/wff-cohort-12",
	headers: {
		authorization: "8bfa14b5-dac7-4d94-bb9c-231fe312ee6e",
		"Content-Type": "application/json",
	},
};

const APIErrorMessages = {
	getUserInfo: "Не удалось получить информацию о пользователе",
	updateUserInfo: "Не удалось обновить информацию о пользователе",
	updateUserAvatar: "Не удалось обновить аватар",
	getCards: "Не удалось получить карточки",
	addCard: "Не удалось добавить карточку",
	deleteCard: "Не удалось удалить карточку",
	addLike: "Не удалось поставить лайк",
	deleteLike: "Не удалось удалить лайк",
};

class APIError extends Error {
	constructor(message, status) {
		super(message);
		this.name = "APIError";
		this.status = status;
	}
}

function handleResponse(response, errorMessage) {
	if (!response.ok) {
		return Promise.reject(new APIError(errorMessage, response.status));
	}
	return response.json();
}

async function getUserInfo() {
	try {
		const response = await fetch(`${config.baseUrl}/users/me`, {
			headers: config.headers,
		});
		const data = await handleResponse(response, APIErrorMessages.getUserInfo);
		return data;
	} catch (e) {
		return Promise.reject(e);
	}
}

async function updateUserInfo({ name, about }) {
	try {
		const response = await fetch(`${config.baseUrl}/users/me`, {
			method: "PATCH",
			headers: config.headers,
			body: JSON.stringify({ name, about }),
		});
		const data = await handleResponse(
			response,
			APIErrorMessages.updateUserInfo
		);
		return data;
	} catch (e) {
		return Promise.reject(e);
	}
}

async function updateUserAvatar(link) {
	try {
		const response = await fetch(`${config.baseUrl}/users/me/avatar`, {
			method: "PATCH",
			headers: config.headers,
			body: JSON.stringify({ avatar: link }),
		});
		const data = await handleResponse(
			response,
			APIErrorMessages.updateUserAvatar
		);
		return data;
	} catch (e) {
		return Promise.reject(e);
	}
}

async function getInitialCards() {
	try {
		const response = await fetch(`${config.baseUrl}/cards`, {
			headers: config.headers,
		});
		const data = await handleResponse(response, APIErrorMessages.getCards);
		return data;
	} catch (e) {
		return Promise.reject(e);
	}
}

async function addCard({ name, link }) {
	try {
		const response = await fetch(`${config.baseUrl}/cards`, {
			method: "POST",
			headers: config.headers,
			body: JSON.stringify({ name, link }),
		});
		const data = await handleResponse(response, APIErrorMessages.addCard);
		return data;
	} catch (e) {
		return Promise.reject(e);
	}
}

async function deleteCard(cardId) {
	try {
		const response = await fetch(`${config.baseUrl}/cards/${cardId}`, {
			method: "DELETE",
			headers: config.headers,
		});
		const data = await handleResponse(response, APIErrorMessages.deleteCard);
		return data;
	} catch (e) {
		return Promise.reject(e.message);
	}
}

async function addLike(cardId) {
	try {
		const response = await fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
			method: "PUT",
			headers: config.headers,
		});
		const data = await handleResponse(response, APIErrorMessages.addLike);
		return data;
	} catch (e) {
		return Promise.reject(e);
	}
}

async function deleteLike(cardId) {
	try {
		const response = await fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
			method: "DELETE",
			headers: config.headers,
		});
		const data = await handleResponse(response, APIErrorMessages.deleteLike);
		return data;
	} catch (e) {
		return Promise.reject(e);
	}
}

export {
	APIError,
	getUserInfo,
	updateUserInfo,
	updateUserAvatar,
	getInitialCards,
	addCard,
	deleteCard,
	addLike,
	deleteLike,
};
