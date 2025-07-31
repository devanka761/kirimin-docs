---
sidebar_position: 1
sidebar_label: User Status
---

# Cek Status User

Pastikan apakah user telah login sebelum melakukan pembuatan permintaan login dengan fetch/http request.

```shell title='Endpoint'
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

## Response - Failed - Not Logged In

Jika mendapat response `code` di angka `413`, harap ulangi request setelah beberapa detik.
Jika mendapat response `code` di atas `400`, maka user belum login.

```json
{
  "ok": false,
  "code": 401
}
```

Dengan user yang belum login tersebut, inilah saatnya kamu mengarahkan user untuk melakukan login terlebih dahulu. Lihat [User Sign-in](/auth/sign-in).

## Response - Success - Logged In

Apabila user telah login, maka akan mendapat response code `200` beserta dengan data user tersebut. Untuk me-logout user, cek [User Logout](/auth/logout).

```json
{
  "ok": true,
  "code": 200,
  "data": {
    "me": {
      "id": "666666",
      "email": {
        "email": "contact@devanka.id",
        "provider": "kirimin"
      },
      "username": "devanka761",
      "displayname": "Devanka 761",
      "image": "devanka_l1j1fm45l9.png",
      "bio": "Too tired to miss you anymore",
      "badges": [1, 5],
      "req": [
        {
          "id": "808080",
          "username": "rudi04",
          "displayname": "Rudi Aja",
          "bio": "Hi there! I am using Kirimin!",
          "isFriend": 0
        },
        {
          "id": "999999",
          "username": "rchlambl",
          "displayname": "Rachel Amabel",
          "img": "rchlambl_l10d234ff.png",
          "b": [3, 4, 5],
          "isFriend": 1
        }
      ]
    },

    "socket": {
      "id": "6dr3jfhfmdr340pa",
      "host": "kirimin-a1.devanka.id"
    },

    "v": 41,

    "publicKey": "6cadc8b15f091a0442e682d5832462cf",

    "c": [
      {
        "u": [
          {
            "id": "7234944",
            "username": "rchlambl",
            "displayname": "Rachel Amabel",
            "img": "rchlambl_l10d234ff.png",
            "b": [3, 4, 5],
            "isFriend": 1
          }
        ],
        "m": [
          {
            "id": "cm23jd991i",
            "userid": "761761",
            "timestamp": 1753948802332,
            "type": "video",
            "text": "p balap",
            "reply": null,
            "edited": null,
            "source": "VID_20171211_11_12.mp4",
            "readers": ["761761"],
            "duration": 0
          }
        ],
        "r": {
          "id": "999999",
          "short": "rchlambl",
          "long": "Rachel Amabel",
          "image": "rchlambl_l10d234ff.png",
          "bages": [3, 4, 5],
          "type": "user"
        }
      }
    ]
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
