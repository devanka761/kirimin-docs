---
sidebar_position: 4
sidebar_label: Dengan Discord
---

# Discord Login

:::danger EKSPERIMEN

Fitur ini tidak stabil dan masih dalam tahap pengembangan pada aplikasi mobile & desktop

:::

Buat user untuk menuju halaman Discord Login di **Kirimin** dengan membuka browser external ataupun browser dari dalam aplikasi. Berikan query tambahan `next` yang berisi url ke aplikasi/website kamu.

```text title='HTTPS - Redirect/Open'
/x/auth/discord?next=yoururl
```

Contoh:

```shell
# mobile
https://kirimin.devanka.id/x/auth/discord?yourapp://checkUser?user=recheck

# desktop
https://kirimin.devanka.id/x/auth/discord?yourapp://recheck$attemp

# website
https://kirimin.devanka.id/x/auth/discord?https://yourapp.com/checkUser?user=recheck
```
