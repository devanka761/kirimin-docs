---
sidebar_position: 4
sidebar_label: Dengan Discord
---

# Discord Login

:::danger EKSPERIMEN

Fitur ini tidak stabil dan masih dalam tahap pengembangan

:::

Buat user untuk menuju halaman Discord Login di **Kirimin** dengan membuka browser external ataupun browser dari dalam aplikasi. Berikan query tambahan `next` yang berisi url ke aplikasi/website kamu.

```text title='HTTPS - Redirect/Open/Popup'
/x/auth/discord?next=yoururl
```

Contoh:

```shell
https://kirimin.devanka.id/x/auth/discord?next=https://yourapp.com/app
```
