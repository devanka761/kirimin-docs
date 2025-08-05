---
sidebar_position: 2
---

# Undangan Bergabung

```text title='HTTP(S)'
GET /invite/{invite_link}
```

Kirimkan request ke endpoint tersebut menggunakan method `POST` berupa `application/json`. `{invite_link}` merupakan link undangan bergabung grup.

## Form Data - JSON

Contoh:

```javascript
const url =
  "https://kirimin.devanka.id/invite/link-undangan-6228482_12kjjaddwx";

const getGroup = await fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
console.log(getGroup);
```

## Response - Success

Saat berhasil, silakan render sedikit tampilan intipan rincian grup tersebut dengan mengambil data dari properti `data.group` sebagai rincian, `data.joined` sebagai status tergabung atau tidaknya user saat ini, dan `data.members` sebagai jumlah anggota yang telah tergabung.

```javascript
{
  "ok": true, // boolean
  "code": 200, // number
  "data": {
    "group": {
      "owner": "808080", // string - id owner grup
      "id": "6228482", // string
      "long": "Nama Grup", // string
      "short": "Nama Grup", // string
      "badges": [5], // array of number
      "image": "foto-grup.png", // string
      "type": "group", // string
      "link": "link-undangan-6228482_12kjjaddwx" // string
    },
    "joined": false, // boolean
    "members": 3, // number
  }
}
```

## Response - Failed

Cek pesan gagalnya melalui properti response yang didapat. Contoh response yang didapat:

```javascript
{
  "ok": false, // boolean
  "code": 404, // number
  "msg": "GRPS_404", // string
  "data": { ... } // any
}
```

### code: 404

Ada beberapa kemungkinan saat mendapat error code 404.

- Grup dengan link undangan tersebut tidak ditemukan
- Link undangan telah kadaluarsa
- Link undangan telah diperbarui
- Grup telah dibubarkan

### code: 429

Harap ulangi request setelah beberapa detik. Ini disebabkan server mendapat request serupa berulang kali dengan tempo yang cepat.
