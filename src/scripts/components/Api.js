export default class Api {
  constructor({ url, token }) {
    this._url = url;
    this._token = token
  }

  // "res" в парамете - это значит "response"
  _ringingServer(res) {
    if (res.ok) {
      return res.json();
    } else {
      // если ошибка, отклоняем промис
      return Promise.reject(`Возникла ошибка ${res.status}`)
    }
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json', 
        authorization: this._token
      }
    })
    .then(this._ringingServer)
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json', 
        authorization: this._token
      }
    })
    .then(this._ringingServer)
  }

  setUserInfo(userName, userActivityType) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json', 
        authorization: this._token
      },
      body: JSON.stringify({
        userName: userName,
        userActivityType: userActivityType
      })
    })
    .then(this._ringingServer)
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
    .then(this._ringingServer)
  }

  addNewCard({name, link}) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json', 
        authorization: this._token
      },
      body: JSON.stringify({
        name,
        link
      })
    })
    .then(this._ringingServer)
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json', 
        authorization: this._token
      }
    })
    .then(this._ringingServer)
  }

  setLikeCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json', 
        authorization: this._token
      }
    })
    .then(this._ringingServer)
  }

  deleteLikeCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json', 
        authorization: this._token
      }
    })
    .then(this._ringingServer)
  }
}