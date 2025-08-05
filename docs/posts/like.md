---
sidebar_position: 5
---

# Like/Unlike Postingan

Kirimkan via relay WebSocket bertipe `string` dari hasil `json`. Untuk memberi atau menghapus like pada postingan terdapat 1 paket cara dengan 2 type.

:::tip
Pastikan kamu sudah mengatur konfigurasi websocket. Baca [Terkoneksi Dengan WebSocket](/transports/websocket).
:::

## Memberi Like

```text title='WEBSOCKET - WS(S)'
SEND TYPE "postlike"
```

Contoh dengan `JavaScript`:

```javascript
wsClient.send(
  JSON.stringify({
    type: "postlike", // string
    postid: "pm2yig6go", // string
    identifier: "kirimin", // string
  })
);
```

Setelah mengirim via relay WebSocket, tambahkan sebanyak 1 (satu) terhadap jumlah like sebelumnya.

## Menghapus Like

```text title='WEBSOCKET - WS(S)'
SEND TYPE "postunlike"
```

Contoh dengan `JavaScript`:

```javascript
wsClient.send(
  JSON.stringify({
    type: "postunlike", // string
    postid: "pm2yig6go", // string
    identifier: "kirimin", // string
  })
);
```

Setelah mengirim via relay WebSocket, kurangi sebanyak 1 (satu) terhadap jumlah like sebelumnya.
