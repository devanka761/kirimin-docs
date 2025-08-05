---
sidebar_position: 3
---

# Menghapus Postingan

```text title='HTTP(S)'
POST /x/posts/delete-post/{post_id}
```

Kirim request dengan method `POST` dengan tipe `application/json`. `{post_id}` adalah sebagai ID Postingan yang akan dihapus.

## Form Data - JSON

Contoh:

```javascript
const url = "https://kirimin.devanka.id/x/posts/delete-post/pm2yig6go";

const delPost = await fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({}),
});
console.log(delPost);
```

## Response - Success

Setelah berhasil, bisa langsung hapus element yang berhubungan dengan postingan terkait.

```javascript
{
  "ok": true, // boolean
  "code": 200, // number
  "data": {
    "postid": "pm2yig6go" // string
  }
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

Postingan terkait tidak dapat ditemukan atau telah dihapus sebelumnya. Harap periksa ID Postingan yang dikirimkan.

### code: 404

Postingan terkait tidak dapat ditemukan atau telah dihapus sebelumnya. Harap periksa ID Postingan yang dikirimkan.

### code: 429

Harap ulangi request setelah beberapa detik. Ini disebabkan server mendapat request serupa berulang kali dengan tempo yang cepat.
