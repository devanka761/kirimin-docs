---
sidebar_position: 3
---

# Hapus Komentar

```text title='HTTP(S)'
GET /x/comment/delete/{post_id}/{comment_id}
```

Kirim request dengan method `POST` dengan tipe `application/json`. `{post_id}` adalah sebagai ID Postingan dan `{comment_id}` sebagai ID Komentar yang akan dihapus.

## Form Data - JSON

Contoh dengan `JavaScript`:

```javascript
const url =
  "https://kirimin.devanka.id/x/posts/comment/delete/pm2yig6go/cmt1l0md2kiq";

const commentRemove = await fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({}),
});
console.log(commentRemove);
```

## Response - Success

Saat berhasil, akan mendapat response `code: 200` dan data komentar yang terkirim dengan mengakses properti `data`.

```javascript
{
  "ok": true, // boolean
  "code": 200, // number
  "msg": "OK" // string
}
```

## Response - Failed

Cek pesan gagalnya melalui properti response yang didapat. Contoh response yang didapat:

```javascript
{
  "ok": false, // boolean
  "code": 404, // number
  "msg": "CMT_NOT_FOUND", // string
}
```

### msg: CMT_NOT_FOUND

Postingan terkait tidak dapat ditemukan atau telah dihapus sebelumnya. Harap periksa ID Komentar yang ingin dihapus.

### msg: POSTS_NOT_FOUND

Postingan terkait tidak dapat ditemukan atau telah dihapus sebelumnya. Harap periksa ID Postingan yang ingin dihapus komentar tertentunya.

### code: 429

Harap ulangi request setelah beberapa detik. Ini disebabkan server mendapat request serupa berulang kali dengan tempo yang cepat.
