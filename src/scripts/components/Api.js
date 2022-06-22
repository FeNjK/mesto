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

  setUserInfo(userName, userActivityType) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json', 
        authorization: this._token
      },
      body: JSON.stringify({
        /* userName: userName,
        userActivityType: userActivityType */
        name: userName,
        about: userActivityType
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

  //addNewCard({name, link}) {
  addNewCard(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json', 
        authorization: this._token
      },
      body: JSON.stringify({
        /* name,
        link */
        name: data.name,
        link: data.link
        /* name: name,
        link: link */
      })
    })
    .then((res) => this._ringingServer(res))
    .then((result) => {
      return result;
    })
  }

  removeCard(_id) {
    return fetch(`${this._url}/cards/${_id}`, {
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

  setLikeCard(_id) {
    return fetch(`${this._url}/cards/${_id}/likes`, {
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

  deleteLikeCard(_id) {
    return fetch(`${this._url}/cards/${_id}/likes`, {
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