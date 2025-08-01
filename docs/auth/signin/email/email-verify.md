---
sidebar_position: 2
sidebar_label: Kirim OTP
slug: /auth/sign-in/email/verify
---

# Konfirmasi OTP ke server

Kirimkan request berisi 6-digit kode OTP yang telah diisi oleh user dengan tipe `"application/json"`.

```shell title='Endpoint'
POST /x/auth/verify
```

## Form Data - JSON

Data yang perlu dikirimkan adalah seperti di bawah

```javascript
{
  "email": "user@email.com", // string
  "code": 761761 // number
}
```

```javascript
const url = "https://kirimin.devanka.id/x/auth/verify";

const emailVerify = await fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    email: "user@email.com",
    code: 761761,
  }),
});
console.log(emailVerify);
```

## Response - Success

Saat berhasil, lakukan pengecekan user dengan cara yang sama seperti [cek status user](/auth/is-user). Jika user dikenali, akhirnya arahkan user ke dalam aplikasi.

## Response - Failed

Jika mendapat response `code` di angka `429`, harap ulangi request setelah beberapa detik.
Jika mendapat response `code` di atas `400`, harap cek endpoint dan data yang dikirimkan.
