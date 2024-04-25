function checkImageUrl(url) {
	return fetch(url, { mode: "no-cors" })
		.then((res) => {
			if (!res.ok) {
				throw new Error("Неправильная ссылка на изображение");
			}
			const contentType = res.headers.get("content-type");
			return contentType && contentType.includes("image");
		})
		.catch((error) => {
			console.log(error);
		});
}

function reloadPage() {
	location.reload();
}

export { checkImageUrl, reloadPage };
