---
sidebar_position: 4
---

# Keluar Dari Grup

```text title='HTTP(S)'
POST /x/group/leave/{group_id}
```

Kirimkan request ke endpoint tersebut menggunakan method `POST` berupa `application/json`. `{group_id}` merupakan ID Group.

:::warning PERINGATAN
Jika yang keluar merupakan owner dari grup tersebut, maka grup tersebut akan otomatis dibubarkan dan seluruh riwayat chat akan dibersihkan.
:::

## Form Data - JSON

Contoh:

```javascript
const url = "https://kirimin.devanka.id/x/group/leave/6228482";

const leaveFromGroup = await fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({}),
});
console.log(leaveFromGroup);
```

## Response - Success

Saat berhasil, akan mendapat response `code: 200`.

```javascript
{
  "ok": true, // boolean
  "code": 200, // number
  "msg": "OK" // string
}
```

### Sinyal WebSocket

Setelah tidak ada masalah saat meresponse member yang keluar dari grup, server akan mengirimkan sinyal `WebSocket` kepada seluruh member grup tentang member yang baru saja keluar dari grup.

```javascript
{
  "key": "a1cea2ac677ae978b3b253ea60991d07", // string
  "from": "808080", // string - ID User yang keluar
  "type": "memberleave", // string
  "groupid": "6228482" // string - ID Grup
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

### code: 400

User memang sudah tidak menjadi bagian dari grup tersebut. Ini bisa disebabkan karena sinkronasi member grup, atau user keluar bersamaan dengan owner grup yang mengeluarkan member terkait.

### code: 429

Harap ulangi request setelah beberapa detik. Ini disebabkan server mendapat request serupa berulang kali dengan tempo yang cepat.
