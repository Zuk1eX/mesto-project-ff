const config = {
	baseUrl: "https://nomoreparties.co/v1/wff-cohort-12",
	headers: {
		authorization: "8bfa14b5-dac7-4d94-bb9c-231fe312ee6e",
		"Content-Type": "application/json",
	},
};

class APIError extends Error {
	constructor(message, status) {
		super(message);
		this.name = "APIError";
		this.status = status;
	}
}

async function getUserInfo() {
	try {
		const response = await fetch(`${config.baseUrl}/users/me`, {
			headers: config.headers,
		});

		if (!response.ok) {
			throw new APIError(
				"Не удалось получить информацию о пользователе",
				response.status
			);
		}

		const data = await response.json();
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

		if (!response.ok) {
			throw new APIError(
				"Не удалось обновить информацию о пользователе",
				response.status
			);
		}

		const result = await response.json();
		return result;
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

		if (!response.ok) {
			throw new APIError("Не удалось обновить аватар", response.status);
		}

		const result = await response.json();
		return result;
	} catch (e) {
		return Promise.reject(e);
	}
}

async function getInitialCards() {
	try {
		const response = await fetch(`${config.baseUrl}/cards`, {
			headers: config.headers,
		});

		if (!response.ok) {
			throw new APIError("Не удалось получить карточки", response.status);
		}

		const data = await response.json();
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

		if (!response.ok) {
			throw new APIError("Не удалось добавить карточку", response.status);
		}

		const result = await response.json();
		return result;
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

		if (!response.ok) {
			throw new APIError("Не удалось удалить карточку", response.status);
		}

		const result = await response.json();
		return result;
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

		if (!response.ok) {
			throw new APIError("Не удалось поставить лайк", response.status);
		}

		const result = await response.json();
		return result;
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

		if (!response.ok) {
			throw new APIError("Не удалось удалить лайк", response.status);
		}

		const result = await response.json();
		return result;
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
