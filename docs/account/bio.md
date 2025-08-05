---
sidebar_position: 4
---

# Perbarui Bio (About Me)

```text title='HTTP(S)'
POST /x/account/set-bio
```

Kirimkan request ke endpoint tersebut menggunakan method `POST` berupa `application/json`.

Data yang perlu dikirimkan adalah seperti di bawah ini.

## Form Data - JSON

```javascript
{
  "bio": "Seorang insan yang dihujani beribu kesedihan..\nNamun tetap tegar." // string
}
```

> Mendukung new line (garis baru).

Contoh:

```javascript
const url = "https://kirimin.devanka.id/x/account/set-bio";

const newBio = await fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    bio: "Seorang insan yang dihujani beribu kesedihan..\nNamun tetap tegar.",
  }),
});
console.log(newBio);
```

## Response - Success

Saat berhasil, akan mendapat response `code: 200` dan terdapat hasil bio yang baru dikirimkan di object `data.text`.

```javascript
{
  "ok": true, // boolean
  "code": 200, // number
  "data": {
    "text": "eorang insan yang dihujani beribu kesedihan..\nNamun tetap tegar." // string
  }
}
```

## Response - Failed

Cek pesan gagalnya melalui properti response yang didapat. Contoh response yang didapat:

```javascript
{
  "ok": false, // boolean
  "code": 413, // number
  "msg": "ACC_FAIL_BIO_COOLDOWN", // string
  "data": { ... } // any
}
```

### msg: ACC_FAIL_BIO_COOLDOWN

Bio (about me) sudah pernah diganti beberapa saat sebelumnya. Kamu bisa menghitung waktu saat ini ke batas waktu selanjutnya menggunakan properti `data.timestamp`.

```javascript
{
  ...,
  "msg": "ACC_FAIL_BIO_COOLDOWN", // string
  "data": {
    "timestamp": 1754050615149 // number
  }
}
```

### msg: ACC_FAIL_BIO_LENGTH

Panjang karakter bio tidak sesuai. Maksimal panjang bio adalah 200 karakter.

### code: 429

Harap ulangi request setelah beberapa detik. Ini disebabkan server mendapat request serupa berulang kali dengan tempo yang cepat.

### code: di atas 400

Kesalahan mungkin terdapat pada form data json yang dikirimkan. Seperti tidak mengirimkan properti `bio`.
