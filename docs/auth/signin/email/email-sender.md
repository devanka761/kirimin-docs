---
sidebar_position: 1
sidebar_label: Kirim Email
slug: /auth/sign-in/email/sender
---

# Kirimkan OTP ke Email

Kirimkan request berisi email yang telah diisi oleh user dengan tipe `"application/json"`.

```shell title='HTTP(S)'
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

```javascript
{
  "ok": true, // boolean
  "code": 200, // number
  "msg": "OK" // string
}
```

Selanjutnya [tangani verifikasi kode OTP](/auth/sign-in/email/verify).

## Response - Failed

Cek pesan gagalnya melalui properti response yang didapat. Contoh response yang didapat:

```javascript
{
  "ok": false, // boolean
  "code": 400, // number
  "msg": "AUTH_ERR_02", // string
  "data": { ... } // any
}
```

### msg: AUTH_RATE_LIMIT

Sudah melewati batas percobaan login setelah mengirim email beberapa kali, harap menunggu setidaknya 10 menit untuk melakukan percobaan login kembali sejak terakhir kali dikirimkan.

### msg: AUTH_ERR_02

Alamat email yang dikirimkan tidak valid.

### code: 429

Harap ulangi request setelah beberapa detik. Ini disebabkan server mendapat request serupa berulang kali dengan tempo yang cepat.
