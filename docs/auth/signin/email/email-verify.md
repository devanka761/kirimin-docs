---
sidebar_position: 2
sidebar_label: Kirim OTP
slug: /auth/sign-in/email/verify
---

# Konfirmasi OTP ke server

Kirimkan request berisi 6-digit kode OTP yang telah diisi oleh user dengan tipe `"application/json"`.

```shell title='HTTP(S)'
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

```javascript
{
  "ok": true, // boolean
  "code": 200, // number
  "msg": "OK" // string
}
```

## Response - Failed

Cek pesan gagalnya melalui properti response yang didapat. Contoh response yang didapat:

```javascript
{
  "ok": false, // boolean
  "code": 400, // number
  "msg": "AUTH_ERR_04", // string
  "data": { ... } // any
}
```

### msg: AUTH_ERR_02

Alamat email yang dikirimkan tidak valid.

### msg: AUTH_ERR_04

Kode OTP yang dikirimkan tidak cocok dengan akun manapun.

### msg: AUTH_ERR_05

Kode OTP yang dikirimkan telah kadaluarsa. Arahkan user untuk kembali mengirimkan email untuk menerima kode OTP yang baru.

### msg: AUTH_RATE_LIMIT

Sudah melewati batas percobaan login setelah mengirim email beberapa kali, harap menunggu setidaknya 10 menit untuk melakukan percobaan login kembali sejak terakhir kali dikirimkan.

### code: 429

Harap ulangi request setelah beberapa detik. Ini disebabkan server mendapat request serupa berulang kali dengan tempo yang cepat.
