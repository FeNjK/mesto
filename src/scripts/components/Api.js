export default class Api {
  constructor(options) {
    // Делал как в ТЗ по пункту "Требования к коду"!
    this._url = options.url;
    this._headers = options.headers;
  }

  // "res" в парамете - это значит "response"
  _ringingServer(res) {
    if (res.ok) {
      return res.json();
    }
      // если ошибка, отклоняем промис
    return Promise.reject(`Возникла ошибка ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
    .then((res) => this._ringingServer(res))
    .then((result) => {
      return result;
    })
  }

  setUserInfo(name, about) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name,
        about
      })
    })
    .then((res) => this._ringingServer(res))
    .then((result) => {
      return result;
    })
  }

  setUserAvatar(link) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: link
      })
    })
    .then((res) => this._ringingServer(res))
    .then((result) => {
      return result;
    })
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      headers: this._headers
    })
    .then((res) => this._ringingServer(res))
    .then((result) => {
      return result;
    })
  }

  addNewCard(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
    .then((res) => this._ringingServer(res))
    .then((result) => {
      return result;
    })
  }

  removeCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then((res) => this._ringingServer(res))
    .then((result) => {
      return result;
    })
  }

  setLikeCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
    .then((res) => this._ringingServer(res))
    .then((result) => {
      return result;
    })
  }

  deleteLikeCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then((res) => this._ringingServer(res))
    .then((result) => {
      return result;
    })
  }
}