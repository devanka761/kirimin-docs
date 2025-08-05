---
sidebar_position: 7
---

# Perbarui Nama Grup

```text title='HTTP(S)'
POST /x/group/set-groupname
```

Kirimkan request ke endpoint tersebut menggunakan method `POST` berupa `application/json`.

:::note
Hanya owner grup yang dapat memperbarui nama grup
:::

Data yang perlu dikirimkan adalah `gname` sebagai nama grup baru dan `id` sebagai ID Grup yang akan diperbarui namanya.

## Form Data - JSON

```javascript
{
  "id": "6228482", // string
  "gname": "Nama Grup Baru" // string
}
```

Contoh:

```javascript
const url = "https://kirimin.devanka.id/x/group/set-groupname";

const newGroupName = await fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    id: "6228482",
    gname: "Nama Grup Baru",
  }),
});
console.log(newGroupName);
```

## Response - Success

Saat berhasil, akan mendapat response `code: 200` dan terdapat hasil nama grup yang baru dikirimkan di object `data.text`.

```javascript
{
  "ok": true, // boolean
  "code": 200, // number
  "data": {
    "text": "Nama Grup Baru" // string
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

### msg: GRPS_DNAME_COOLDOWN

Nama grup sudah pernah diganti beberapa saat sebelumnya. Kamu bisa menghitung waktu saat ini ke batas waktu selanjutnya menggunakan properti `data.timestamp`.

```javascript
{
  ...,
  "msg": "GRPS_DNAME_COOLDOWN", // string
  "data": {
    "timestamp": 1754050615149 // number
  }
}
```

### msg: GRPS_DNAME_LENGTH

Panjang karakter nama grup tidak sesuai. Maksimal panjang nama grup adalah 35 karakter.

### code: 429

Harap ulangi request setelah beberapa detik. Ini disebabkan server mendapat request serupa berulang kali dengan tempo yang cepat.

### code: di atas 400

Kesalahan mungkin terdapat pada form data json yang dikirimkan. Seperti tidak mengirimkan properti `gname` dan `id`.
