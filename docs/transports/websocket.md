---
sidebar_position: 2
---

# WebSocket

Untuk menghubungkan ke websocket pastikan sudah menerima konfigurasi websocket yang didapat setelah user berhasil login, seperti di [Cek Status User](/auth/is-user). Anggap saja data konfigurasi yang didapat adalah pada properti `data.socket`.

```text title='Socket Client'
CONNECT {data.socket.host}?id={data.socket.id}
```

## Terkoneksi dengan WebSocket

Hubungkan ke server menggunakan konfigurasi tersebut. Jika menggunakan protocol secure (https), maka gunakan `wss`. Jika tidak, maka gunakan `ws`.

Contoh dengan `JavaScript`:

```javascript
const protocol = window.location.protocol === "https:" ? "wss" : "ws";

const socket_host = data.socket.host;
const socket_id = data.socket.id;

const wsClient = new WebSocket(`${protocol}://${socket_host}?id=${socket_id}`);
// contoh hasil:
// new WebSocket("wss://kirimin-a1.devanka.id?id=6dr3jfhfmdr340pa");

// tangani saat websocket error
wsClient.addEventListener("error", handleError);

// tangani saat koneksi terputus
wsClient.addEventListener("close", handleClose);

// tangani saat menerima pesan relay dari server
wsClient.addEventListener("message", handleMessage);
```

## Kirim pesan Relay WebSocket

Setelah setup koneksi websocket, kamu bisa mulai mengirim pesan. Data yang dikirim **wajib** berupa `string` dengan aturan `json`. Oh ya, jangan lupa untuk memastikan `wsClient` sudah ready untuk mengirimkan pesan. Berikut contoh mengirim pesan Relay WebSocket.

```javascript
function sendSocket(data) {
  if (wsClient && wsClient.readyState === wsClient.OPEN) {
    wsClient.send(JSON.stringify({ ...data, identifier: "kirimin" }));
  }
}

sendSocket({
  identifier: "kirimin", // string "kirimin" - wajib
  type: "postlike", // string - wajib
  postid: "pm2yig6go", // string
});
```

## Tangani pesan Relay WebSocket dari Server

Di atas, kita sudah memberi setup untuk listener `onmessage`. Buatlah handler yang dapat menjalankan fungsi update dari pesan yang diterima.

```javascript
function handleMessage(data) {
  const msg = JSON.parse(data.data.toString());

  // contoh jika menerima pesan baru
  if (msg.type === "sendmessage") {
    chatRoom.update(msg);
  }
  // kamu akan menemukan semua data msg dari server di bagian yang perlu menggunakan websocket relay
}

// ... baris kodingan kamu

// tangani saat menerima pesan relay dari server
wsClient.addEventListener("message", handleMessage);
```

## List Halaman yang butuh handler Pesan Relay WebSocket

- [Gabung ke Grup](/group/join)
- [Keluar dari Grup](/group/leave)
- [Keluarkan Member dari Grup](/group/kick-member)

## List Halaman yang butuh untuk mengirim Pesan Relay WebSocket

- [Memberi/Menghapus Like Postingan](/posts/like)
