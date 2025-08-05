---
sidebar_position: 1
---

# Pencarian

```text title='HTTP(S)'
GET /x/profile/search/{userid|username}
```

Kirimkan request dengan method `GET` ke endpoint tersebut dengan tipe `application/json`. `{userid|username}` isi dengan Username atau ID User yang ingin ditemukan.

```shell title='Contoh'
# contoh username
/x/profile/search/devan

# contoh user id
/x/profile/search/761761
```

:::note

Hasil yang akan didapatkan adalah berupa `array`. Jika tidak ada yang cocok, maka yang akan didapat adalah `Error`.

:::

## Form Request

Contoh dengan `JavaScript`:

```javascript
const url = "https://kirimin.devanka.id/x/profile/search/devan";

const users = await fetch(url, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
console.log(users);
```

## Response - Success

Saat berhasil, silakan render daftar user tersebut dengan mengambil data dari properti `data.users`. Data yang akan kamu terima adalah seperti di bawah ini.

```javascript
{
  "ok": true, // boolean
  "code": 200, // number
  "data": {
    "users": [
      {
        "id": "761761", // string
        "username": "devanka761", // string
        "displayname": "Devanka 761", // string
        "bio": "Hi there! I am using Kirimin!", // string
        "isFriend": 1 // number
      },
      {
        "id": "808080", // string
        "username": "bukandevan", // string
        "displayname": "Siapa Hayo?", // string
        "img": "bukandevan_l10d234ff.png", // string
        "isFriend": 0 // number
      }
    ]
  }
}
```

## Response - Failed

Cek pesan gagalnya melalui properti response yang didapat. Contoh response yang didapat:

```javascript
{
  "ok": false, // boolean
  "code": 404, // number
  "msg": "USERS_NOT_FOUND", // string
  "data": { ... } // any
}
```

### code: 404

Tidak ada pengguna yang ditemukan. Beri user sebuah alert, notifikasi, atau render dengan hasil kosong.

### code: 429

Harap ulangi request setelah beberapa detik. Ini disebabkan server mendapat request serupa berulang kali dengan tempo yang cepat.
