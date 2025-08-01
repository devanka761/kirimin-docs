---
sidebar_position: 6
---

# Tolak Permintaan

```text title='Endpoint'
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

## Response - Failed

### Code: 429

Saat menerima error code `429`, harap ulangi request setelah beberapa detik kemudian. Ini dikarenakan server telah menerima request yang serupa berulang kali dengan tempo yang cukup cepat.

```json
{
  "ok": false,
  "code": 429,
  "msg": "TOO_MANY_REQUESTS"
}
```

### Code diatas 400

Jika code yang diterima adalah angka di atas 400, maka silakan cek tipe errornya dengan mengakses properti `data.msg`.

```json
{
  "ok": false,
  "code": 404,
  "msg": "USER_NOT_FOUND"
}
```

## Response - Success

Kamu akan mendapat data user terbaru yang telah kamu kirimkan penolakan permintaan pertemanan. Dengan begitu, kamu bisa sinkronasi server dan client dengan baik. Gunakan properti `data.user.isFriend` untuk mengecek status pertemanan user tersebut.

```json
{
  "ok": true,
  "code": 200,
  "data": {
    "user": {
      "id": "761761",
      "username": "dvnkz",
      "displayname": "Devanka 761",
      "isFriend": 0
    }
  }
}
```

```text
isFriend 0: Belum Berteman
# tampilkan tombol tambahkan teman

isFriend 1: Sudah Berteman
# tampilkan tombol hapus pertemanan

isFriend 2: Permintaan Sudah Terkirim Ke Target User
# tampilkan tombol batalkan permintaan

isFriend 3: User Pengirim Memiliki Permintaan Pertemanan Dari Target User
# tampilkan tombol terima permintaan pertemanan dan tolak permintaan pertemanan
```
