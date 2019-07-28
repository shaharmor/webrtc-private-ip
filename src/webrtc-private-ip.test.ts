import { expect } from 'chai';
import { webrtcPrivateIp } from './webrtc-private-ip';

describe('webrtc-private-ip', () => {
  it('finds an IP', async () => {
    const privateIp = await webrtcPrivateIp();
    expect(privateIp).to.be.a('string');
    expect(privateIp).to.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/g);
  });
});
