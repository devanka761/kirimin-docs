---
sidebar_position: 6
---

# Reset Link Undangan

```text title='HTTP(S)'
POST /x/group/reset-link
```

Kirimkan request ke endpoint tersebut menggunakan method `POST` berupa `application/json`.

:::note
Hanya owner grup yang dapat memperbarui link undangan
:::

Data yang perlu dikirimkan adalah ID Grup yang akan diperbarui link undangannya.

## Form Data - JSON

```javascript
{
  "id": "6228482", // string
}
```

Contoh:

```javascript
const url = "https://kirimin.devanka.id/x/group/reset-link";

const resetGroupLink = await fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    id: "6228482",
  }),
});
console.log(resetGroupLink);
```

## Response - Success

Saat berhasil, akan mendapat response `code: 200` dan terdapat hasil nama grup yang baru dikirimkan di object `data.text`.

```javascript
{
  "ok": true, // boolean
  "code": 200, // number
  "data": {
    "text": "link-undangan-baru_12kjjaddwx" // string
  }
}
```

## Response - Failed

Cek pesan gagalnya melalui properti response yang didapat. Contoh response yang didapat:

```javascript
{
  "ok": false, // boolean
  "code": 403, // number
  "msg": "GRPS_OWNER_FEATURE", // string
  "data": { ... } // any
}
```

### msg: GRPS_OWNER_FEATURE

Terjadi karena yang mengeksekusi request bukanlah owner dari grup tersebut.

### code: 403

Terjadi karena yang mengeksekusi request bukanlah owner dari grup tersebut.

### msg: GRPS_404

Grup terkait tidak dapat ditemukan. Silakan cek kembali id grup yang dikirimkan.

### code: 429

Harap ulangi request setelah beberapa detik. Ini disebabkan server mendapat request serupa berulang kali dengan tempo yang cepat.

### code: di atas 400

Kesalahan mungkin terdapat pada form data json yang dikirimkan. Seperti tidak mengirimkan properti `id`.
