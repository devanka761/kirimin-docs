---
sidebar_position: 1
sidebar_label: User Status
---

# Cek Status User

Pastikan apakah user telah login sebelum melakukan pembuatan permintaan login dengan fetch/http request.

```shell title='HTTP(S)'
GET /x/auth/isUser
```

## Request - JSON

Di aplikasi yang sedang kamu kerjakan, kirimkan request untuk mengecek status user

Contoh dengan fetch pada `JavaScript`.

```javascript
const url = "https://kirimin.devanka.id/x/auth/isUser";

const isUser = await fetch(url, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
console.log(isUser);
```

## Response - Success

Apabila user telah login, maka akan mendapat response `ok: true` beserta dengan data user tersebut. Untuk me-logout user, cek [User Logout](/auth/logout).

```javascript
{
  "ok": true, // boolean
  "code": 200, // number
  "data": {
    "me": {
      "id": "666666", // string
      "email": {
        "email": "contact@devanka.id", // string
        "provider": "kirimin" // string
      },
      "username": "devanka761", // string
      "displayname": "Devanka 761", // string
      "image": "devanka_l1j1fm45l9.png", // string
      "bio": "Too tired to miss you anymore", // string
      "badges": [1, 5], // array of number
      "req": [
        {
          "id": "808080", // string
          "username": "rudi04", // string
          "displayname": "Rudi Aja", // string
          "bio": "Hi there! I am using Kirimin!", // string
          "isFriend": 0 // number
        },
        {
          "id": "999999", // string
          "username": "rchlambl", // string
          "displayname": "Rachel Amabel", // string
          "img": "rchlambl_l10d234ff.png", // string
          "b": [3, 4, 5], // array of number
          "isFriend": 1 // number
        }
      ]
    },

    "socket": {
      "id": "6dr3jfhfmdr340pa", // string
      "host": "kirimin-a1.devanka.id" // string
    },

    "v": 41, // number

    "publicKey": "6cadc8b15f091a0442e682d5832462cf", // string

    "c": [
      {
        "u": [
          {
            "id": "7234944", // string
            "username": "rchlambl",// string
            "displayname": "Rachel Amabel",// string
            "img": "rchlambl_l10d234ff.png",// string
            "b": [3, 4, 5], // array of number
            "isFriend": 1 // number
          }
        ],
        "m": [
          {
            "id": "cm23jd991i", // string
            "userid": "761761", // string
            "timestamp": 1753948802332, // number
            "type": "video", // string
            "text": "p balap", // string
            "reply": null, // string or null
            "edited": false, // boolean
            "source": "VID_20171211_11_12.mp4", // string
            "readers": ["761761"], // array of string
            "duration": 0 // number
          }
        ],
        "r": {
          "id": "999999", // string
          "short": "rchlambl", // string
          "long": "Rachel Amabel", // string
          "image": "rchlambl_l10d234ff.png", // string
          "badges": [3, 4, 5], // array of number
          "type": "user" // string
        }
      }
    ],

    "peer": { ... } // any - konfigurasi peer
  }
}
```

Setelah dapetin data user tersebut, arahkan user ke dalam aplikasi.

**Catatan:**

```
data.me >> data personal user terkait.

data.socket >> data untuk terkoneksi ke websocket.

data.c >> data data semua chat user terkait.
data.c[index].u >> data array member (kumpulan user) yang berpartisipasi di room chat.
data.c[index].m >> data array untaian (kumpulan pesan) yang terkirim di room chat.
data.c[index].r >> data room chat (user/group).

data.peer >> data konfigurasi untuk koneksi peer.
```

## Response - Failed

Cek pesan gagalnya melalui properti response yang didapat. Contoh response yang didapat:

```javascript
{
  "ok": false, // boolean
  "code": 401, // number
  "msg": "UNAUTHORIZED", // string
  "data": { ... } // any
}
```

### msg: UNAUTHORIZED

User tersebut telah dipastikan belum login atau login telah kadaluarsa. Inilah saatnya kamu mengarahkan user untuk melakukan login terlebih dahulu. Lihat [User Sign-in](/auth/sign-in).

### code: 401

User tersebut telah dipastikan belum login atau login telah kadaluarsa. Inilah saatnya kamu mengarahkan user untuk melakukan login terlebih dahulu. Lihat [User Sign-in](/auth/sign-in).

### code: 429

Harap ulangi request setelah beberapa detik. Ini disebabkan server mendapat request serupa berulang kali dengan tempo yang cepat.
