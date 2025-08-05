---
sidebar_position: 1
---

# HTTP/HTTPS

Untuk mengirimkan HTTP Request. Terdapat 2 method yang dominan digunakan untuk mengirim/menerima data di **Kirimin**. Yaitu **`POST`** dan **`GET`**.

## GET

Meskipun `GET` tidak secara langsung mengirim data, Kirimin memerlukan header `Contet-Type: application/json` untuk dapat bekerja.

:::info

Pastikan aplikasi/website kamu menerima response berupa `application/json` juga. Gunakan `Accept: application/json` sebagai contoh di JavaScript.

:::

Contoh dengan `JavaScript`:

```javascript
const url = "https://api-kirimin-a2.devanka.id";

fetch(url, {
  method: "GET",
  headers: {
    "Content-Type": "application/json", // wajib
    Accept: "application/json",
  },
});
```

## POST

Data yang dikirimkan melalui `POST` wajib berupa `json`. Kirimin juga memerlukan header `Contet-Type: application/json` untuk dapat bekerja.

:::info

Pastikan aplikasi/website kamu menerima response berupa `application/json` juga. Gunakan `Accept: application/json` sebagai contoh di JavaScript.

:::

Contoh dengan `JavaScript`:

```javascript
const url = "https://api-kirimin-a2.devanka.id";

fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json", // wajib
    Accept: "application/json",
  },
  // wajib json atau object yang sudah di stringify
  body: JSON.stringify({
    data_1: "ini cuma contoh",
    data_2: 761,
    data_3: true,
    data_4: null,
  }),
});
```

## Aturan Response

Response Kirimin akan selalu menyisipkan 3 properti pasti. Yaitu `ok` berupa `boolean`, `code` berupa `number`, dan `msg` berupa `string`. Akan ada tambahan properti tergantung pada endpoint request yang dilakukan.

Untuk pengecekan error, selalu dasarkan pada properti `msg`. Sebab, pesan error yang berbeda bisa saja memiliki `code` yang sama.

- Kamu akan mendapat `ok: true` apabila request berhasil disertai dengan properti `data` yang bisa berisi apa aja tergantung pada tiap-tiap endpoint.
- Sebaliknya, kamu akan mendapat `ok: false` apabila request error/gagal/nyangkut/ditolak, akan ada `msg` unik khusus saat mendapat error.
