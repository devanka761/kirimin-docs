---
sidebar_position: 1
---

# Pencarian User

```text title='Endpoint'
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

## Response - Failed

Jika tidak ditemukan, kamu bisa kasih alert, notifikasi, atau bahkan render dengan hasil kosong. Tipe response yang gagal bisa dilihat dari property `code` atau `msg` pada response.

```json
{
  "ok": false,
  "code": 404,
  "msg": "USERS_NOT_FOUND"
}
```

## Response - Success

Saat berhasil, silakan render daftar user tersebut dengan mengambil data dari properti `data.users`. Data yang akan kamu terima adalah seperti di bawah ini.

```json
{
  "ok": true,
  "code": 200,
  "data": {
    "users": [
      {
        "id": "761761",
        "username": "devanka761",
        "displayname": "Devanka 761",
        "bio": "Hi there! I am using Kirimin!",
        "isFriend": 1
      },
      {
        "id": "808080",
        "username": "bukandevan",
        "displayname": "Siapa Hayo?",
        "img": "bukandevan_l10d234ff.png",
        "isFriend": 0
      }
    ]
  }
}
```
