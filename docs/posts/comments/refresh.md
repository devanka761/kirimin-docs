---
sidebar_position: 1
slug: /posts/comments/list
---

# List Komentar

```text title='HTTP(S)'
GET /x/posts/comments/{post_id}
```

Kirim request dengan method `GET` dengan tipe `application/json` untuk mendapatkan semua komentar dari postingan tertentu.

## Form Data - JSON

Contoh dengan `JavaScript`:

```javascript
const url = "https://kirimin.devanka.id/x/posts/comments/pm2yig6go";

const postComments = await fetch(url, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
console.log(postComments);
```

## Response - Success

Saat berhasil, akan mendapat response `code: 200` dan terdapat daftar semua komentar dengan mengakses properti `data` yang berupa `array`.

```javascript
{
  "ok": true, // boolean
  "code": 200, // number
  "data": [
    {
      "id": "cmt-1l0md2kiq", // string - ID Komentar
      "user": { // rincian pembuat komentar
        "id": "761761", // string - ID User pembuat komentar
        "username": "dvnkz", // string
        ...
      },
      "ts": 1754050615149, // number - waktu komentar dikirim
      "text": "Ini adalah komentar!", // string
    }
  ]
}
```

## Response - Failed

Cek pesan gagalnya melalui properti response yang didapat. Contoh response yang didapat:

```javascript
{
  "ok": false, // boolean
  "code": 404, // number
  "msg": "POSTS_NOT_FOUND", // string
}
```

### msg: POSTS_NOT_FOUND

Postingan terkait tidak dapat ditemukan atau telah dihapus sebelumnya. Harap periksa ID Postingan yang ingin dilihat isi komentarnya.

### code: 404

Postingan terkait tidak dapat ditemukan atau telah dihapus sebelumnya. Harap periksa ID Postingan yang ingin dilihat isi komentarnya.

### code: 429

Harap ulangi request setelah beberapa detik. Ini disebabkan server mendapat request serupa berulang kali dengan tempo yang cepat.
