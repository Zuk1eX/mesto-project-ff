const config = {
	baseUrl: "https://nomoreparties.co/v1/wff-cohort-12",
	headers: {
		authorization: "8bfa14b5-dac7-4d94-bb9c-231fe312ee6e",
		"Content-Type": "application/json",
	},
};

async function getUserInfo() {
	try {
		const response = await fetch(`${config.baseUrl}/users/me`, {
			headers: config.headers,
		});
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
		const result = await response.json();
		return result;
	} catch (e) {
		return Promise.reject(e);
	}
}

async function updateUserAvatar({ avatar }) {
	try {
		const response = await fetch(`${config.baseUrl}/users/me/avatar`, {
			method: "PATCH",
			headers: config.headers,
			body: JSON.stringify({ avatar }),
		});
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
			throw new Error("Не удалось удалить карточку");
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
		const result = await response.json();
		return result;
	} catch (e) {
		return Promise.reject(e);
	}
}

export {
	getUserInfo,
	updateUserInfo,
	updateUserAvatar,
	getInitialCards,
	addCard,
	deleteCard,
	addLike,
	deleteLike,
};
