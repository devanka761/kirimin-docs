---
sidebar_position: 8
---

# Perbarui Foto Grup

```text title='HTTP(S)'
POST /x/group/set-img
```

Kirimkan request ke endpoint tersebut menggunakan method `POST` berupa `application/json`.

:::note
Hanya owner grup yang dapat memperbarui gambar grup
:::

Data yang perlu dikirimkan adalah `img` sebagai file gambar grup baru, `name` sebagai nama file gambar, dan `id` sebagai ID Grup yang akan diperbarui gambarnya.

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
  "id": "6228482", // string
  "name": "file-name.png", // string
  "img": "data:image/png;base64,b01d078344bcd382" // string
}
```

Contoh:

```javascript
const url = "https://kirimin.devanka.id/x/group/set-img";

const newGroupImage = await fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    id: "6228482",
    name: "file-name.png",
    img: "data:image/png;base64,b01d078344bcd382",
  }),
});
console.log(newGroupImage);
```

## Response - Success

Saat berhasil, akan mendapat response `code: 200` dan terdapat hasil final path dari gambar yang baru dikirimkan di properti `data.text`.

```javascript
{
  "ok": true, // boolean
  "code": 200, // number
  "data": {
    "text": "group6228482_file-name_1j1iqpl9k.png" // string
  }
}
```

:::tip RESOLVING FILE PATH

Render gambar user tersebut dengan aturan seperti berikut ini.

`/file/user/{new_user_image_final_path}`

Contoh:

```javascript
const newImage = new Image() || document.createElement("image");
const newSrc = `https://kirimin.devanka.id/file/group/${newGroupImage.data.text}`;
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

### msg: GRPS_OWNER_FEATURE

Terjadi karena yang mengeksekusi request bukanlah owner dari grup tersebut.

### code: 403

Terjadi karena yang mengeksekusi request bukanlah owner dari grup tersebut.

### msg: GRPS_404

Grup terkait tidak dapat ditemukan. Silakan cek kembali id grup yang dikirimkan.

### msg: ACC_FILE_LIMIT

Ukuran file yang dikirimkan melebihi batas maksimal yaitu `2.5 MB`. Berikan alert atau notifikasi ke user untuk memilih gambar dengan ukuran file di bawah `2.5 MB`.

### code: 413

Ukuran file yang dikirimkan melebihi batas maksimal yaitu `2.5 MB`. Berikan alert atau notifikasi ke user untuk memilih gambar dengan ukuran file di bawah `2.5 MB`.

### code: 429

Harap ulangi request setelah beberapa detik. Ini disebabkan server mendapat request serupa berulang kali dengan tempo yang cepat.

### code: di atas 400

Kesalahan mungkin terdapat pada form data json yang dikirimkan. Seperti tidak mengirimkan properti `img`, `name`, dan `id`.
