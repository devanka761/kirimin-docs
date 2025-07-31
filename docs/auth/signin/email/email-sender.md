---
sidebar_position: 1
sidebar_label: Kirim Email
slug: /auth/sign-in/email/sender
---

# Kirimkan OTP ke Email

Kirimkan request berisi email yang telah diisi oleh user dengan tipe `"application/json"`.

```shell title='Endpoint'
POST /x/auth/sign-in
```

## Form Data - JSON

Data yang perlu dikirimkan adalah seperti di bawah

```javascript
{
  "email": "user@email.com" // string
}
```

Contoh

```javascript
const url = "https://kirimin.devanka.id/x/auth/sign-in";

const emailSent = await fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    email: "user@email.com",
  }),
});
console.log(emailSent);
```

## Response - Success

Saat berhasil, Kirimin akan mengirimkan email yang berisi kode OTP ke alamat yang sudah user isi sebelumnya. Silakan arahkan user ke halaman form konfirmasi kode OTP.

Selanjutnya [tangani verifikasi kode OTP](/auth/sign-in/email/verify).

## Response - Failed

Jika mendapat response `code` di angka `413`, harap ulangi request setelah beberapa detik.
Jika mendapat response `code` di atas `400`, harap cek endpoint dan data yang dikirimkan.
