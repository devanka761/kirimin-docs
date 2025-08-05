---
sidebar_position: 6
---

# Tolak Permintaan

```text title='HTTP(S)'
POST /x/profile/ignorefriend
```

Kirimkan request ke endpoint tersebut dengan berisi data `userid` dari target penolakan permintaan pertemanan.

## Form Data - JSON

```javascript
{
  "userid": "761761" // string
}
```

Contoh dengan `JavaScript`:

```javascript
const url = "https://kirimin.devanka.id/x/profile/ignorefriend";

const ignorefriend = await fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    userid: "761761",
  }),
});
console.log(ignorefriend);
```

## Response - Success

Kamu akan mendapat data user terbaru yang telah kamu kirimkan penolakan permintaan pertemanan. Dengan begitu, kamu bisa sinkronasi server dan client dengan baik. Gunakan properti `data.user.isFriend` untuk mengecek status pertemanan user tersebut.

```javascript
{
  "ok": true, // boolean
  "code": 200, // number
  "data": {
    "user": {
      "id": "761761", // string
      "username": "dvnkz", // string
      "displayname": "Devanka 761", // string
      "isFriend": 0 // number
    }
  }
}
```

```text title='Status Pertemanan'
isFriend 0: Belum Berteman
# tampilkan tombol tambahkan teman

isFriend 1: Sudah Berteman
# tampilkan tombol hapus pertemanan

isFriend 2: Permintaan Sudah Terkirim Ke Target User
# tampilkan tombol batalkan permintaan

isFriend 3: User Pengirim Memiliki Permintaan Pertemanan Dari Target User
# tampilkan tombol terima permintaan pertemanan dan tolak permintaan pertemanan
```

## Response - Failed

Cek pesan gagalnya melalui properti response yang didapat. Contoh response yang didapat:

```javascript
{
  "ok": false, // boolean
  "code": 404, // number
  "msg": "USERS_NOT_FOUND", // string
  "data": { ... } // any
}
```

### code: 404

Pengguna yang akan ditolak permintaan pertemanannya tidak ditemukan, telah membatalkan permintaan pertemanan, atau akun tersebut telah terhapus dari server.

### code: 429

Harap ulangi request setelah beberapa detik. Ini disebabkan server mendapat request serupa berulang kali dengan tempo yang cepat.

### code: di atas 400

Kesalahan mungkin terdapat pada form data json yang dikirimkan. Seperti tidak mengirimkan properti `userid`.
