---
sidebar_position: 3
sidebar_label: Dengan GitHub
---

# GitHub Login

:::danger EKSPERIMEN

Fitur ini tidak stabil dan masih dalam tahap pengembangan pada aplikasi mobile & desktop

:::

Buat user untuk menuju halaman GitHub Login **Kirimin** dengan membuka browser external ataupun browser dari dalam aplikasi. Berikan query tambahan `next` yang berisi url ke aplikasi/website kamu.

```text title='HTTPS - Redirect/Open'
/x/auth/github?next=yoururl
```

Contoh:

```shell
# mobile
https://kirimin.devanka.id/x/auth/github?yourapp://checkUser?user=recheck

# desktop
https://kirimin.devanka.id/x/auth/github?yourapp://recheck$attemp

# website
https://kirimin.devanka.id/x/auth/github?https://yourapp.com/checkUser?user=recheck
```
