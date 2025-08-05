---
sidebar_position: 3
sidebar_label: Dengan GitHub
---

# GitHub Login

:::danger EKSPERIMEN

Fitur ini tidak stabil dan masih dalam tahap pengembangan

:::

Buat user untuk menuju halaman GitHub Login **Kirimin** dengan membuka browser external ataupun browser dari dalam aplikasi. Berikan query tambahan `next` yang berisi url ke aplikasi/website kamu.

```text title='HTTPS - Redirect/Open/Popup'
/x/auth/github?next=yoururl
```

Contoh:

```shell
https://kirimin.devanka.id/x/auth/github?next=https://yourapp.com/app
```
