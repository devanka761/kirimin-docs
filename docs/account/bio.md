---
sidebar_position: 4
---

# Perbarui Bio (About Me)

```text title='Endpoint'
POST /x/account/set-bio
```

Kirimkan request ke endpoint tersebut menggunakan method `POST` berupa `application/json`.

Data yang perlu dikirimkan adalah seperti di bawah ini.

## Form Data - JSON

```json
{
  "bio": "Seorang insan yang dihujani beribu kesedihan..\nNamun tetap tegar."
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

## Response - Failed

### code: 429

Bio sudah pernah diganti beberapa saat sebelumnya. Kamu bisa menghitung waktu saat ini ke batas waktu selanjutnya menggunakan response di object `data.timestamp`.

```json
{
  "ok": false,
  "code": 429,
  "msg": "ACC_FAIL_BIO_COOLDOWN",
  "data": {
    "timestamp": 1754050615149
  }
}
```

### code: di atas 400

Kesalahan mungkin terdapat pada format bio, panjang karakter bio, dll. Kamu bisa cek kesalahannya menggunakan object `msg` di responsenya.

```javascript
{
  "ok": false,
  "code": 400,
  "msg": "ACC_FAIL_BIO_LENGTH"
}
```

## Response - Success

Saat berhasil, akan mendapat response `code: 200` dan terdapat hasil bio yang baru dikirimkan di object `data.text`.

```json
{
  "ok": true,
  "code": 200,
  "data": {
    "text": "eorang insan yang dihujani beribu kesedihan..\nNamun tetap tegar."
  }
}
```
