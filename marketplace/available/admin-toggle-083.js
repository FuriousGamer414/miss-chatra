// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ma0RfP44KorfqRV1y+Z6K0YWC9gmarqy8RA6CRFjKRYNu96PFKkwHD2soKhUJJBoFeEgMAqi3tyNY9z6N/DD8bhVu/DQkuiLhx8QhasUXGfogA2/CjFZBfP1OcM69w9s8Fce1kWStDSFIElqgARzd40XuVBnl0EgTZrupEhOn3H5K6eV+JcssgQjiNtkauqMpSvvajFKL9OnWbgcy6/0IMRjKo5OIhBPbhyPaN/0LvW63a8JidaRfzFEM+ZlnSjvXFSwYNVZtwtuCYifjxRioz4eTh9xk+Z04whBjMBB8cndw1yx9c+Rjkh/qoqSz6F1lq/BEGeMHMbLMQ1IXTfAGOgDJ/IlkflEQ0tmuRF1YHJzk+R5TTcFKKqA6VT4/Y/tP0V/49A28SFRNytQZGf+vT2USI/RE7lFScn5TV/UkzcSC7AOKV+gw5DMMA5k+NEwtLDRwSky/M70x8mKC64LBdIai7IaXyG/jn78tmi0NWZqQL9ibWKPgyzmwVBWwlGU3tgZptTAlMgDrGTBdMFRyCeCsBNs2TpobhHhF8a/rLfybgIJ2S8MpDP7+8gk7hibKXTsvHd57PiGTTMkpQDwueH6E34mqEJ/WS3dUHSf3IMMmQ5jbuco8vf4oK0T2iHjZ4T9takUW9/ZV+qJlzytdr5z2S6sUy1OnftwVfYTrM7bTiffnW1MkHknMaQcXg01iRCm1THf3Oc/J4E2uLJ9cDUjC3InJpBipQNxTMZwQKMoWwlgXEXEiO6PPJg3USsxm6B2Rfgay+5Z/ZbKnV4joIUHrWSKrHqM1QWoYmD8kw+miqkfIy4t8YEM0uo9wcT4yxPi3kuxUti6Pxv/L+xk1oBtgr9q3Ol5xUutYhVyTUc0snXlt6T65O3z0Y2zIYGkJwsAJq6mIcUUyjo3TcPPXBznoN4Jdy46x0nE2CMraLSg2gup7E0ySUv1K/TdibOJAhS90l1JIjKVSbKFTnqz6rLhF2zyamgF+tISj2QG4bsHqG/GMrBUYUJ5QyeU';const _IH='43f543d85f7dace0a83ead4904257bc3fad87395d7e9a2b07dfa22b94587d20d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
