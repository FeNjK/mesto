export default class Api {
  constructor({ url, token }) {
    this._url = url;
    this._token = token
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json', 
        authorization: this._token
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Возникла ошибка ${res.status}`);
      }
    })
    .then((res) => {
      return res;
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
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Возникла ошибка ${res.status}`);
      }
    })
    .then((res) => {
      return res;
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
        userName: userName,
        userActivityType: userActivityType
      })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Возникла ошибка ${res.status}`);
      }
    })
    .then((res) => {
      return res;
    })
  }

  addNewCard(title, link) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json', 
        authorization: this._token
      },
      body: JSON.stringify({
        name: title,
        link: link
      })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Возникла ошибка ${res.status}`);
      }
    })
    .then((res) => {
      return res;
    })
  }

  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json', 
        authorization: this._token
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Возникла ошибка ${res.status}`);
      }
    })
    .then((res) => {
      return res;
    })
  }

  setLikeCard(id) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json', 
        authorization: this._token
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Возникла ошибка ${res.status}`);
      }
    })
    .then((res) => {
      return res;
    })
  }

  deleteLikeCard(id) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json', 
        authorization: this._token
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Возникла ошибка ${res.status}`);
      }
    })
    .then((res) => {
      return res;
    })
  }
}