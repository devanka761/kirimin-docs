---
sidebar_position: 1
slug: /posts/list
---

# Beranda

```text title='HTTP(S)'
GET /x/posts
```

Kirim request dengan method `GET` dengan tipe `application/json` untuk mendapatkan semua postingan.

## Form Data - JSON

Contoh dengan `JavaScript`:

```javascript
const url = "https://kirimin.devanka.id/x/posts";

const posts = await fetch(url, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
console.log(posts);
```

## Response - Success

Saat berhasil, akan mendapat response `code: 200` dan terdapat daftar semua postingan dengan mengakses properti `data` yang berupa `array`.

```javascript
{
  "ok": true, // boolean
  "code": 200, // number
  "data": [
    {
      "id": "pm2yig6go", // string - ID Postingan
      "user": { // rincian pembuat postingan
        "id": "761761", // string - ID User pembuat postingan
        "username": "dvnkz", // string
        ...
      }
      "ts": 1754050615149, // number - waktu postingan dibuat
      "img": "file-name_lcm2x0kh.png", // string
      "text": "Halo Semuanya!", // string - opsional
      "likes": 2, // number
      "comments": 1, // number
      "liked": true // boolean
    }
  ]
}
```

:::tip RESOLVING FILE PATH

Render gambar postingan tersebut dengan aturan seperti berikut ini.

`/file/post/{post_id}/{post_image_final_path}`

Contoh:

```javascript
const post_url = "https://kirimin.devanka.id/file/post";
const post_id = posts.data[index].id;
const post_file = posts.data[index].img;

const newImage = new Image() || document.createElement("image");
newImage.src = `${post_url}/${post_id}/${post_file}`;
```

:::

## Response - Failed

Cek pesan gagalnya melalui properti response yang didapat. Contoh response yang didapat:

```javascript
{
  "ok": false, // boolean
  "code": 429, // number
  "msg": "TOO_MANY_REQUESTS", // string
}
```

### code: 429

Harap ulangi request setelah beberapa detik. Ini disebabkan server mendapat request serupa berulang kali dengan tempo yang cepat.
