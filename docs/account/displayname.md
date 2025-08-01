---
sidebar_position: 3
---

# Perbarui Display Name

```text title='Endpoint'
POST /x/account/set-displayname
```

Kirimkan request ke endpoint tersebut menggunakan method `POST` berupa `application/json`.

Data yang perlu dikirimkan adalah seperti di bawah ini.

## Form Data - JSON

```json
{
  "dname": "Display Name Baru 07"
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

## Response - Failed

### code: 429

Display Name sudah pernah diganti beberapa saat sebelumnya. Kamu bisa menghitung waktu saat ini ke batas waktu selanjutnya menggunakan response di object `data.timestamp`.

```json
{
  "ok": false,
  "code": 429,
  "msg": "ACC_FAIL_DNAME_COOLDOWN",
  "data": {
    "timestamp": 1754050615149
  }
}
```

### code: di atas 400

Kesalahan mungkin terdapat pada format display name, panjang karakter display name, dll. Kamu bisa cek kesalahannya menggunakan object `msg` di responsenya.

```javascript
{
  "ok": false,
  "code": 400,
  "msg": "ACC_FAIL_DNAME_LENGTH"
}
```

## Response - Success

Saat berhasil, akan mendapat response `code: 200` dan terdapat hasil display name yang baru dikirimkan di object `data.text`.

```json
{
  "ok": true,
  "code": 200,
  "data": {
    "text": "Display Name Baru 07"
  }
}
```
