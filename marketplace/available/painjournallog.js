// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:59 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/1BxzuB7ETfesROpCbsdLMKKyIM1UGeDSq3n9irfNwhkWk3VnCE6iSMgNQsjCpE7sDTf6lQwqS/h6OFhuK+OQZFrtDRPDj+zBVTqRadEKOGtWoNaNXkmppcAg0QVpJXeZBBtbTK3GhW4/DL8dBG+od8K/YmfqygqIsx1MuyBX27kk+uWXTcJx/qE6rFZurWLPbiuF73KoX9ZZSdUc6MvONCNxMz8q9Mo1X942Jjm7fkTHZRJNIGrVd7ihkYKn0vBXGFGhHsWD/YNPWbDN9iqJDhu7Q96wGEmll04kF4NxpEguyJwIGzK39R6VNe38kyhm6R2BWrzsS44S7m4/tH5x9k0xhSBC2tZ4KNl6RMXBRtBzD5SEgWsbXEqJ6KsDg9ygqenw7NWTid8Sy2UwVgn+9Bf329vzyoBf93WOwuWA2r3K2DD/FcL6XSwKOSNJXJ0GhCm+j3o5d4+pY0QrYenEDQyAXwaQ3zeVyPmP/x4VxL3Umuozh2lEz194eIcu5OJOfPmOyiWIwsmBvbCo/2FNHNUfYZVKHw5w6sxyWT4yf29E0ahOLs1SZ7au6rvOSieX+db51fESJY3QufeLse36qHwPUxKWSDMRxWbyyRjM/3bfl0TVu/0B4XmDD92UyO4BtUoElwTV8PYIFrw7qL3wTUULsOyfNvqH8aj28X4FVyU3n6kSry6l3jY98B9hHvnU/7zJAuAJNqAcOxdz4gKvlaSl2ouiD3vu31Aa2HaapsDl+DM8XgMWyFtBedd67FQg6GLXiAwBihdD2hLTO+cCq2Ruf0qKKgTI7zjOFKDVn0p0WOhGPMuA5N14yZF/5gRlxqNlVKMIaHVmPqoXmyXzogM7t1IcquJsEFp8hw+81ng4osywfzLGsBjb67JfI/FuZDJ/O6I6usPfGCHJTvfqlrJIegWz4Z1hgXx8/foGUhFEe4YHyuOR8SQiZdjyh9z0gWK3nW/nDkgnmeTwXxDEEjXx58ArlTIww5C68smk/GUWPNv2MokhZIHYQ0DQTvMG/ULyBC9jWiL7TuXuZCyb5adPz347oK6mV0dSijynwNufjIghAzy8uGbSYIbYSTXQymjNAx59ykTeaGPTpFvqeJSNjWwblML6XoiEroGxTUys8iVPXetBRjZyXnGiYso+GyqZiGcPW4xMh+7BgV/eIyefH32IA3Zu3KfN75UJp9qod7Tg71zCYBAFLkNSz5kV8iGBpFN5fCVGSb';const _IH='75d2a1264bb2edf3c5a310bed8484b1729439ee6e494090d11b621308792564f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
