---
sidebar_position: 2
---

# Perbarui Username

```text title='HTTP(S)'
POST /x/account/set-username
```

Kirimkan request ke endpoint tersebut menggunakan method `POST` berupa `application/json`.

Data yang perlu dikirimkan adalah seperti di bawah ini.

## Form Data - JSON

```javascript
{
  "uname": "username.baru" // string
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

## Response - Success

Saat berhasil, akan mendapat response `code: 200` dan terdapat hasil username yang baru dikirimkan di object `data.text`.

```javascript
{
  "ok": true, // boolean
  "code": 200, // number
  "data": {
    "text": "username.baru" // string
  }
}
```

## Response - Failed

Cek pesan gagalnya melalui properti response yang didapat. Contoh response yang didapat:

```javascript
{
  "ok": false, // boolean
  "code": 413, // number
  "msg": "ACC_FAIL_UNAME_COOLDOWN", // string
  "data": { ... } // any
}
```

### msg: ACC_FAIL_UNAME_COOLDOWN

Username sudah pernah diganti beberapa saat sebelumnya. Kamu bisa menghitung waktu saat ini ke batas waktu selanjutnya menggunakan properti `data.timestamp`.

```javascript
{
  ...,
  "msg": "ACC_FAIL_UNAME_COOLDOWN", // string
  "data": {
    "timestamp": 1754050615149 // number
  }
}
```

### msg: ACC_FAIL_UNAME_LENGTH

Panjang karakter username tidak sesuai. Minimal panjang username adalah 4 karakter dengan maksimal 20 karakter.

### msg: ACC_FAIL_UNAME_FORMAT

Format username tidak sesuai. Username harus berisi campuran dari huruf(a - z), angka(0 - 9), underscore(\_), dan titik(.).

### msg: ACC_FAIL_CLAIMED

Username tersebut telah digunakan oleh user lain. Perintahkan user untuk memilih username yang lain.

### code: 429

Harap ulangi request setelah beberapa detik. Ini disebabkan server mendapat request serupa berulang kali dengan tempo yang cepat.

### code: di atas 400

Kesalahan mungkin terdapat pada form data json yang dikirimkan. Seperti tidak mengirimkan properti `uname`.
