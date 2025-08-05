---
sidebar_position: 2
sidebar_label: Dengan Google
---

# Google Login

:::danger EKSPERIMEN

Fitur ini tidak stabil dan masih dalam tahap pengembangan pada aplikasi mobile & desktop

:::

Buat user untuk menuju halaman Google Login **Kirimin** dengan membuka browser external ataupun browser dari dalam aplikasi. Berikan query tambahan `next` yang berisi url ke aplikasi/website kamu.

```text title='HTTPS - Redirect/Open'
/x/auth/google?next=yoururl
```

Contoh:

```shell
# mobile
https://kirimin.devanka.id/x/auth/google?yourapp://checkUser?user=recheck

# desktop
https://kirimin.devanka.id/x/auth/google?yourapp://recheck$attemp

# website
https://kirimin.devanka.id/x/auth/google?https://yourapp.com/checkUser?user=recheck
```
