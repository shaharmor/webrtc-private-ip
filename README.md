# webrtc-private-ip

> Get your private-ip using WebRTC

## Install

```
$ npm install webrtc-private-ip
```

Or using a CDN:

```html
<script src="https://unpkg.com/@shaharmor/webrtc-private-ip"></script>
```

## Usage

```js
(async () => {
  const ip = await webrtcPrivateIp();
  if (ip) {
    //ip => '192.168.1.1'
  }
})()
```

## Limitations

- Will only works when WebRTC mDNS is not enabled.
