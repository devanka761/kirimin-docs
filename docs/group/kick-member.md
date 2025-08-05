---
sidebar_position: 5
---

# Keluarkan Member

```text title='HTTP(S)'
POST /x/group/kick/{group_id}/{user_id}
```

Kirimkan request ke endpoint tersebut menggunakan method `POST` berupa `application/json`. `{group_id}` merupakan ID Group dan `{user_id}` merupakan ID User yang akan dikeluarkan.

:::note

Hanya owner grup yang dapat mengeluarkan member grup

:::

## Form Data - JSON

Contoh:

```javascript
const url = "https://kirimin.devanka.id/x/group/kick/6228482/808080";

const memberKick = await fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({}),
});
console.log(memberKick);
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

:::tip
Pastikan kamu sudah mengatur konfigurasi websocket. Baca **[Terkoneksi Dengan WebSocket](/transports/websocket)**.
:::

Setelah tidak ada masalah saat meresponse member yang dikeluarkan dari grup, server akan mengirimkan sinyal `WebSocket` kepada seluruh member grup tentang member yang baru saja dikeluarkan dari grup. Kemudian mengirimkan sinyal `WebSocket` tambahan kepada target member yang dikeluarkan tersebut.

```javascript title='Sinyal ke seluruh anggota grup'
{
  "key": "a1cea2ac677ae978b3b253ea60991d07", // string
  "from": "808080", // string - ID User yang dikeluarkan
  "type": "memberleave", // string
  "groupid": "6228482" // string - ID Grup
}
```

```javascript title='Sinyal ke user yang dikeluarkan'
{
  "key": "a1cea2ac677ae978b3b253ea60991d07", // string
  "from": "666666", // string - ID User yang mengeluarkan
  "type": "memberkick", // string
  "groupid": "6228482" // string - ID Grup
}
```

## Response - Failed

Cek pesan gagalnya melalui properti response yang didapat. Contoh response yang didapat:

```javascript
{
  "ok": false, // boolean
  "code": 400, // number
  "msg": "GRPS_OWNER_FEATURE", // string
  "data": { ... } // any
}
```

### msg: GRPS_404

Grup terkait tidak dapat ditemukan. Silakan cek kembali id grup yang dikirimkan.

### msg: GRPS_OWNER_FEATURE

Terjadi karena yang mengeksekusi request bukanlah owner dari grup tersebut.

### msg: FIND_NOTFOUND

User memang sudah tidak menjadi bagian dari grup tersebut. Ini bisa disebabkan karena sinkronasi member grup, atau user keluar bersamaan dengan owner grup yang mengeluarkan member terkait.

### code: 429

Harap ulangi request setelah beberapa detik. Ini disebabkan server mendapat request serupa berulang kali dengan tempo yang cepat.
