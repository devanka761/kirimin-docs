---
sidebar_position: 3
---

# Keluarkan User

Untuk me-logout akun user, kirimkan request ke endpoint berikut

```shell title='HTTP(S)'
GET /x/auth/logout
```

:::warning

Me-logout hanya akan mendestroy session login. Kamu perlu menghapus cache dan localstorage dari aplikasi kamu sendiri.

:::

## Response

Response yang didapat akan dalam bentuk redirect ke `"/app"`. Kamu perlu memberi handler sendiri supaya aplikasi kamu menuju ke page yang kamu mau.
