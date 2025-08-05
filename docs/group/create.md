---
sidebar_position: 1
---

# Membuat Grup Baru

```text title='HTTP(S)'
POST /x/group/create
```

Kirim request dengan method `POST` dengan tipe `application/json` berisi `name` yang akan dijadikan sebagai nama grup tersebut.

## Form Data - JSON

```javascript
{
  "name": "Nama Grup" // string
}
```

Contoh:

```javascript
const url = "https://kirimin.devanka.id/x/group/create";

const newGroup = await fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    name: "Nama Grup",
  }),
});
console.log(newGroup);
```

## Response - Success

Saat berhasil, akan mendapat response `code: 200` dan terdapat hasil grup yang baru dibuat pada properti `data.group`.

```javascript
{
  "ok": true, // boolean
  "code": 200, // number
  "data": {
    "roomid": "6228482" // string,
    "group": {
      "m": [], // array of message object - sementara kosong karena grup baru saja dibuat
      "u": [ // array of user - sementara cuma berisi 1 orang karena grup baru saja dibuat
        {
          "id": "761761", // string
          "username": "devanka761", // string
          "displayname": "Devanka 761", // string
          ...
        }
      ],
      "r": { // rincian grup
        "owner": "761761", // string
        "id": "6228482", // string
        "long": "Nama Grup", // string
        "short": "Nama Grup", // string
        "badges": [5], // array of number
        "image": null, // string or null
        "type": "group", // string
        "link": "6228482_smdtllp5v", // string
      }
    }
  }
}
```

## Response - Failed

Cek pesan gagalnya melalui properti response yang didapat. Contoh response yang didapat:

```javascript
{
  "ok": false, // boolean
  "code": 400, // number
  "msg": "GRPS_OWN_MAX", // string
  "data": { ... } // any
}
```

### msg: GRPS_OWN_MAX

User telah mencapai batas maksimal pembuatan grup. Batas maksimal pembuatan adalah 2 grup. Jika ingin membuat grup baru, harap hapus grup yang dimiliki terlebih dahulu.

### msg: GRPS_DNAME_LENGTH

Panjang karakter nama grup tidak sesuai. Maksimal panjang nama grup adalah 35 karakter.

### code: 429

Harap ulangi request setelah beberapa detik. Ini disebabkan server mendapat request serupa berulang kali dengan tempo yang cepat.

### code: di atas 400

Kesalahan mungkin terdapat pada form data json yang dikirimkan. Seperti tidak mengirimkan properti `name`.
