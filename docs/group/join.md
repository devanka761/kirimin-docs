---
sidebar_position: 3
---

# Gabung Ke Grup

```text title='HTTP(S)'
POST /x/group/join/{group_id}
```

Kirimkan request ke endpoint tersebut menggunakan method `POST` berupa `application/json`. `{group_id}` merupakan ID Group.

:::tip
Pastikan user join dengan menekan sebuah tombol dan setelah mengintip undangan. Cek di menu **[Undangan Grup](/group/invite)**.
:::

Data yang perlu dikirimkan adalah `link` sebagai link undangan grup tersebut.

## Form Data - JSON

```javascript
{
  "link": "link-undangan-6228482_12kjjaddwx" // string
}
```

Contoh:

```javascript
const url = "https://kirimin.devanka.id/x/group/join/6228482";

const joinGroup = await fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    link: "link-undangan-6228482_12kjjaddwx",
  }),
});
console.log(joinGroup);
```

## Response - Success

Saat berhasil, silakan render tampilan rincian grup atau room chat grup tersebut dengan mengambil data dari properti `data.r` sebagai rincian, `data.u` sebagai daftar semua anggota grup yang saat ini tergabung, dan `data.m` sebagai daftar pesan yang sudah terkirim ke grup.

```javascript
{
  "ok": true, // boolean
  "code": 200, // number
  "data": {
    "r": {
      "owner": "808080", // string - id owner grup
      "id": "6228482", // string
      "long": "Nama Grup", // string
      "short": "Nama Grup", // string
      "badges": [5], // array of number
      "image": "foto-grup.png", // string
      "type": "group", // string
      "link": "link-undangan-6228482_12kjjaddwx" // string
    },
    "u": [
      {
        "id": "7234944", // string
        "username": "rchlambl",// string
        "displayname": "Rachel Amabel",// string
        "img": "rchlambl_l10d234ff.png",// string
        "b": [3, 4, 5], // array of number
        "isFriend": 1 // number
      }
    ],
    "m": [
      {
        "id": "cm23jd991i", // string
        "userid": "761761", // string
        "timestamp": 1753948802332, // number
        "type": "video", // string
        "text": "p balap", // string
        "reply": null, // string or null
        "edited": false, // boolean
        "source": "VID_20171211_11_12.mp4", // string
        "readers": ["761761"], // array of string
        "duration": 0 // number
      }
    ]
  }
}
```

### Sinyal WebSocket

Setelah tidak ada masalah saat meresponse member yang bergabung, server akan mengirimkan sinyal `WebSocket` kepada seluruh member grup tentang user baru yang tergabung sebagai member grup.

```javascript
{
  "key": "a1cea2ac677ae978b3b253ea60991d07", // string
  "from": "808080", // string - ID User yang bergabung
  "type": "memberjoin", // string
  "groupid": "6228482", // string - ID Grup
  "user": { // rincian user yang bergabung
    "id": "808080", // string
    "username": "rudi02", // string
    ...
  }
}
```

## Response - Failed

Cek pesan gagalnya melalui properti response yang didapat. Contoh response yang didapat:

```javascript
{
  "ok": false, // boolean
  "code": 400, // number
  "msg": "GRPS_MEMBER_LIMIT", // string
  "data": { ... } // any
}
```

### msg: INV_NOT_FOUND_DESC

Link undangan tersebut tidak valid atau telah kadaluarsa.

### msg: GRPS_MEMBER_LIMIT

Grup tersebut telah mencapai batas maksimal anggota. Batas maksimal anggota grup adalah 10.

### code: 429

Harap ulangi request setelah beberapa detik. Ini disebabkan server mendapat request serupa berulang kali dengan tempo yang cepat.
