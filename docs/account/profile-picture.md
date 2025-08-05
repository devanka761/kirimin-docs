---
sidebar_position: 1
---

# Perbarui Foto Profil

```text title='HTTP(S)'
POST /x/account/set-img
```

Kirimkan request ke endpoint tersebut menggunakan method `POST` berupa `application/json`.

Data yang perlu dikirimkan adalah seperti di bawah ini.

## Form Data - JSON

:::info INFORMASI

`img` yang dikirimkan adalah berupa string dari result base64 seperti contoh di bawah.

Contoh dengan `JavaScript`:

```javascript
const file = input.files[0];
const img = await new Promise((resolve) => {
  const reader = new FileReader();
  reader.onload = () => {
    return resolve(reader.result?.toString());
  };
  reader.readAsDataURL(file);
});
console.log(img);
```

:::

```javascript
{
  "name": "file-name.png", // string
  "img": "data:image/png;base64,b01d078344bcd382" // string
}
```

Contoh:

```javascript
const url = "https://kirimin.devanka.id/x/account/set-img";

const newUserImg = await fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    name: "file-name.png",
    img: "data:image/png;base64,b01d078344bcd382",
  }),
});
console.log(newUserImg);
```

## Response - Success

Saat berhasil, akan mendapat response `code: 200` dan terdapat hasil final path dari gambar yang baru dikirimkan di object `data.text`.

```javascript
{
  "ok": true, // boolean
  "code": 200, // number
  "data": {
    "text": "user761761_file-name_1j1iqpl9k.png" // string
  }
}
```

:::tip RESOLVING FILE PATH

Render gambar user tersebut dengan aturan seperti berikut ini.

`/file/user/{new_user_image_final_path}`

Contoh:

```javascript
const newImage = new Image() || document.createElement("image");
const newSrc = `https://kirimin.devanka.id/file/user/${newUserImg.data.text}`;
newImage.src = newSrc;
```

:::

## Response - Failed

Cek pesan gagalnya melalui properti response yang didapat. Contoh response yang didapat:

```javascript
{
  "ok": false, // boolean
  "code": 413, // number
  "msg": "ACC_FILE_LIMIT", // string
  "data": { ... } // any
}
```

### msg: ACC_FILE_LIMIT

Ukuran file yang dikirimkan melebihi batas maksimal yaitu `2.5 MB`. Berikan alert atau notifikasi ke user untuk memilih gambar dengan ukuran file di bawah `2.5 MB`.

### code: 413

Ukuran file yang dikirimkan melebihi batas maksimal yaitu `2.5 MB`. Berikan alert atau notifikasi ke user untuk memilih gambar dengan ukuran file di bawah `2.5 MB`.

### code: 429

Harap ulangi request setelah beberapa detik. Ini disebabkan server mendapat request serupa berulang kali dengan tempo yang cepat.

### code: di atas 400

Kesalahan mungkin terdapat pada form data json yang dikirimkan. Seperti tidak mengirimkan properti `img` dan `name`.
