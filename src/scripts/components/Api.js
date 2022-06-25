export default class Api {
  constructor({ url, token }) {
    this._url = url;
    this._token = token;
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
      headers: {
        'Content-type': 'application/json',
        authorization: this._token
      }
    })
    .then((res) => this._ringingServer(res))
    .then((result) => {
      return result;
    })
  }

  setUserInfo(name, about) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
        authorization: this._token
      },
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
      headers: {
        'Content-type': 'application/json',
        authorization: this._token
      },
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
      headers: {
        'Content-type': 'application/json',
        authorization: this._token
      }
    })
    .then((res) => this._ringingServer(res))
    .then((result) => {
      return result;
    })
  }

  addNewCard(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        authorization: this._token
      },
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
      headers: {
        'Content-type': 'application/json',
        authorization: this._token
      }
    })
    .then((res) => this._ringingServer(res))
    .then((result) => {
      return result;
    })
  }

  setLikeCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        authorization: this._token
      }
    })
    .then((res) => this._ringingServer(res))
    .then((result) => {
      return result;
    })
  }

  deleteLikeCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        authorization: this._token
      }
    })
    .then((res) => this._ringingServer(res))
    .then((result) => {
      return result;
    })
  }
}