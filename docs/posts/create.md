---
sidebar_position: 2
---

# Membuat Postingan

```text title='HTTP(S)'
POST /x/posts/new-post
```

Kirim request dengan method `POST` dengan tipe `application/json`.

Data yang perlu dikirim adalah seperti di bawah ini.

## Form Data - JSON

:::info INFORMASI

`file` yang dikirimkan adalah berupa string dari result base64 seperti contoh di bawah.

Contoh dengan `JavaScript`:

```javascript
const inputImg = input.files[0];
const file = await new Promise((resolve) => {
  const reader = new FileReader();
  reader.onload = () => {
    return resolve(reader.result?.toString());
  };
  reader.readAsDataURL(inputImg);
});
console.log(file);
```

:::

```javascript
{
  "file": "data:image/png;base64,b01d078344bcd382", // string
  "name": "file-name.png", // string
  "text": "Halo Semua!", // string atau null - opsional
}
```

Contoh:

```javascript
const url = "https://kirimin.devanka.id/x/posts/new-post";

const newPost = await fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    file: "data:image/png;base64,b01d078344bcd382",
    name: "file-name.png",
    text: "Halo Semua!",
  }),
});
console.log(newPost);
```

## Response - Success

Setelah berhasil, bisa langsung arahkan user untuk kembali ke halaman beranda postingan dan tambahkan postingan yang baru saja user upload tersebut. Data postingan bisa diakses melalui properti `data`.

```javascript
{
  "ok": true, // boolean
  "code": 200, // number
  "data": {
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
}
```

:::tip RESOLVING FILE PATH

Render gambar postingan tersebut dengan aturan seperti berikut ini.

`/file/post/{post_id}/{post_image_final_path}`

Contoh:

```javascript
const post_url = "https://kirimin.devanka.id/file/post";
const post_id = posts.data.id;
const post_file = posts.data.img;

const newImage = new Image() || document.createElement("image");
newImage.src = `${post_url}/${post_id}/${post_file}`;
```

:::

## Response - Failed

Cek pesan gagalnya melalui properti response yang didapat. Contoh response yang didapat:

```javascript
{
  "ok": false, // boolean
  "code": 400, // number
  "msg": "POST_NO_FILE", // string
}
```

### msg: POST_NO_FILE

Server tidak menerima file gambar dari unggahan. Pastikan user mengirim properti `file` dan `name`.

### msg: ACC_FILE_LIMIT

Ukuran file yang dikirimkan melebihi batas maksimal yaitu `2.5 MB`. Berikan alert atau notifikasi ke user untuk memilih gambar dengan ukuran file di bawah `2.5 MB`.

### code: 413

Ukuran file yang dikirimkan melebihi batas maksimal yaitu `2.5 MB`. Berikan alert atau notifikasi ke user untuk memilih gambar dengan ukuran file di bawah `2.5 MB`.

### code: 429

Harap ulangi request setelah beberapa detik. Ini disebabkan server mendapat request serupa berulang kali dengan tempo yang cepat.

### code: di atas 400

Kesalahan mungkin terdapat pada form data json yang dikirimkan. Seperti tidak mengirimkan properti `file` dan `name`.
