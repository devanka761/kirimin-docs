---
sidebar_position: 2
sidebar_label: Dengan Google
---

# Google Login

:::danger EKSPERIMEN

Fitur ini tidak stabil dan masih dalam tahap pengembangan

:::

Buat user untuk menuju halaman Google Login **Kirimin** dengan membuka browser external ataupun browser dari dalam aplikasi. Berikan query tambahan `next` yang berisi url ke aplikasi/website kamu.

```text title='HTTPS - Redirect/Open/Popup'
/x/auth/google?next=yoururl
```

Contoh:

```shell
https://kirimin.devanka.id/x/auth/google?next=https://yourapp.com/app
```
