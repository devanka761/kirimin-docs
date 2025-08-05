---
sidebar_position: 2
---

# Tambah Komentar

```text title='HTTP(S)'
GET /x/posts/comment/add/{post_id}
```

Kirim request dengan method `POST` dengan tipe `application/json`. `{post_id}` adalah sebagai ID Postingan yang akan ditambahkan komentarnya.

Data yang perlu dikirimkan:

## Form Data - JSON

```javascript
{
  "text": "Ini adalah komentar!", // string
}
```

Contoh dengan `JavaScript`:

```javascript
const url = "https://kirimin.devanka.id/x/posts/comment/add/pm2yig6go";

const commentAdd = await fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    text: "Ini adalah komentar!",
  }),
});
console.log(commentAdd);
```

## Response - Success

Saat berhasil, akan mendapat response `code: 200` dan data komentar yang terkirim dengan mengakses properti `data`.

```javascript
{
  "ok": true, // boolean
  "code": 200, // number
  "data": {
    "id": "cmt1l0md2kiq", // string - ID Komentar
    "user": { // rincian pembuat komentar
      "id": "761761", // string - ID User pembuat komentar
      "username": "dvnkz", // string
      ...
    },
    "ts": 1754050615149, // number - waktu komentar dikirim
    "text": "Ini adalah komentar!", // string
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

Postingan terkait tidak dapat ditemukan atau telah dihapus sebelumnya. Harap periksa ID Postingan yang ingin ditambahkan komentarnya.

### msg: POST_COMMENT_LENGTH

Panjang komentar tidak sesuai. Komentar harus berisi antara 1 - 300 karakter.

### code: 404

Postingan terkait tidak dapat ditemukan atau telah dihapus sebelumnya. Harap periksa ID Postingan yang ingin ditambahkan komentarnya.

### code: 429

Harap ulangi request setelah beberapa detik. Ini disebabkan server mendapat request serupa berulang kali dengan tempo yang cepat.
