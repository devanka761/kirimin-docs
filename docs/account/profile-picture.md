---
sidebar_position: 1
---

# Perbarui Foto Profil

```text title='Endpoint'
POST /x/account/set-img
```

Kirimkan request ke endpoint tersebut menggunakan method `POST` berupa `application/json`.

Data yang perlu dikirimkan adalah seperti di bawah ini.

## Form Data - JSON

:::info INFORMASI

`img` yang dikirimkan adalah berupa string dari result base64 seperti contoh di bawah.

Contoh dengan `JavaScript`:

```javascript
const file = input.file[0];
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

```json
{
  "name": "file-name.png",
  "img": "data:image/png;base64,b01d078344bcd382"
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

## Response - Failed

### code: 413

Ukuran file yang dikirimkan melebihi batas maksimal yaitu `2.5 MB`. Berikan alert atau notifikasi ke user untuk memilih gambar dengan ukuran file di bawah `2.5 MB`.

```json
{
  "ok": false,
  "code": 413,
  "msg": "ACC_FILE_LIMIT",
  "error": "payload-too-large"
}
```

### code: di atas 400

Kesalahan mungkin terdapat pada format gambar atau hal lainnya. Kamu bisa cek kesalahannya menggunakan object `msg` di responsenya.

```javascript
{
  "ok": false,
  "code": 400,
  "msg": "ACC_FILE_IS_NOT_IMAGE"
}
```

## Response - Success

Saat berhasil, akan mendapat response `code: 200` dan terdapat hasil final path dari gambar yang baru dikirimkan di object `data.text`.

```json
{
  "ok": true,
  "code": 200,
  "data": {
    "text": "user761761_file-name_1j1iqpl9k.png"
  }
}
```

:::note RESOLVING FILE PATH

Render gambar user tersebut dengan aturan seperti berikut ini.

`/file/user/{new_user_image_final_path}`

Contoh:

```javascript
const newImage = new Image() || document.createElement("image");
const newSrc = `https://kirimin.devanka.id/file/user/${newUserImg.data.text}`;
newImage.src = newSrc;
```

:::
