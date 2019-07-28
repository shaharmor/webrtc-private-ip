# webrtc-private-ip

> Get your private-ip using WebRTC

## Install

```
$ npm install webrtc-private-ip
```

## Usage

```js
import { webrtcPrivateIp } from 'webrtc-private-ip';

(async () => {
  const ip = await webrtcPrivateIp();
  if (ip) {
    //=> '192.168.1.1'
  }
})()
```
