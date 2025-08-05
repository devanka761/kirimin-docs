---
sidebar_position: 3
---

# Perbarui Display Name

```text title='HTTP(S)'
POST /x/account/set-displayname
```

Kirimkan request ke endpoint tersebut menggunakan method `POST` berupa `application/json`.

Data yang perlu dikirimkan adalah seperti di bawah ini.

## Form Data - JSON

```javascript
{
  "dname": "Display Name Baru 07" // string
}
```

Contoh:

```javascript
const url = "https://kirimin.devanka.id/x/account/set-displayname";

const newDisplayName = await fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    dname: "Display Name Baru 07",
  }),
});
console.log(newDisplayName);
```

## Response - Success

Saat berhasil, akan mendapat response `code: 200` dan terdapat hasil display name yang baru dikirimkan di object `data.text`.

```javascript
{
  "ok": true, // boolean
  "code": 200, // number
  "data": {
    "text": "Display Name Baru 07" // string
  }
}
```

## Response - Failed

Cek pesan gagalnya melalui properti response yang didapat. Contoh response yang didapat:

```javascript
{
  "ok": false, // boolean
  "code": 413, // number
  "msg": "ACC_FAIL_DNAME_COOLDOWN", // string
  "data": { ... } // any
}
```

### msg: ACC_FAIL_DNAME_COOLDOWN

Display name sudah pernah diganti beberapa saat sebelumnya. Kamu bisa menghitung waktu saat ini ke batas waktu selanjutnya menggunakan properti `data.timestamp`.

```javascript
{
  ...,
  "msg": "ACC_FAIL_DNAME_COOLDOWN", // string
  "data": {
    "timestamp": 1754050615149 // number
  }
}
```

### msg: ACC_FAIL_DNAME_LENGTH

Panjang karakter display name tidak sesuai. Maksimal panjang display name adalah 35 karakter.

### code: 429

Harap ulangi request setelah beberapa detik. Ini disebabkan server mendapat request serupa berulang kali dengan tempo yang cepat.

### code: di atas 400

Kesalahan mungkin terdapat pada form data json yang dikirimkan. Seperti tidak mengirimkan properti `dname`.
