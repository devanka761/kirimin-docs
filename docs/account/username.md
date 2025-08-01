---
sidebar_position: 2
---

# Perbarui Username

```text title='Endpoint'
POST /x/account/set-username
```

Kirimkan request ke endpoint tersebut menggunakan method `POST` berupa `application/json`.

Data yang perlu dikirimkan adalah seperti di bawah ini.

## Form Data - JSON

```json
{
  "uname": "username.baru"
}
```

Contoh:

```javascript
const url = "https://kirimin.devanka.id/x/account/set-username";

const newUsername = await fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    uname: "username.baru",
  }),
});
console.log(newUsername);
```

## Response - Failed

### code: 429

Username sudah pernah diganti beberapa saat sebelumnya. Kamu bisa menghitung waktu saat ini ke batas waktu selanjutnya menggunakan response di object `data.timestamp`.

```json
{
  "ok": false,
  "code": 429,
  "msg": "ACC_FAIL_UNAME_COOLDOWN",
  "data": {
    "timestamp": 1754050615149
  }
}
```

### code: di atas 400

Kesalahan mungkin terdapat pada format username, panjang karakter username, dll. Kamu bisa cek kesalahannya menggunakan object `msg` di responsenya.

```javascript
{
  "ok": false,
  "code": 400,
  "msg": "ACC_FAIL_UNAME_FORMAT"
}
```

## Response - Success

Saat berhasil, akan mendapat response `code: 200` dan terdapat hasil username yang baru dikirimkan di object `data.text`.

```json
{
  "ok": true,
  "code": 200,
  "data": {
    "text": "username.baru"
  }
}
```
