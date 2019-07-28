const IPV4_REGEX = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/g;

export async function webrtcPrivateIp(): Promise<string | undefined> {
  return new Promise(async (resolve) => {
    const peer = new window.RTCPeerConnection();
    const datachannel = peer.createDataChannel('channel');
    const done = (ip?: string) => {
      peer.onicecandidate = null;
      try {
        datachannel.close();
      } catch (err) {
        // empty
      }
      try {
        peer.close();
      } catch (err) {
        // empty
      }
      resolve(ip);
    };
    peer.onicecandidate = (e) => {
      if (!e.candidate) {
        done();
      } else {
        const ip = e.candidate.candidate.match(IPV4_REGEX);
        if (ip) {
          done(ip[0]);
        }
      }
    };
    const sdp = await peer.createOffer();
    await peer.setLocalDescription(sdp);
  });
}
