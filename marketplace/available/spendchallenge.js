// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/kSOlKFNtJbcbvodQLVxN9vm1Z7vXgtrCVO7uQJpx4mSmp324njz6K99rizqGsCpmt5804xXIxvVa/7clSpxNUxuCqEK0MDRjAVdeVJRSD1JwLqj/xFeNcnX+loFm1NWmfrsFkLb2CqtjTQ1QWqhbo3bOr3C8XQEETq3r+xHt6IDMvrOmWO8gYYMoXaZzpGStrqYHOLKGCOWf/7GiSkYUHFC/eUjcHqjAHQZHur1IN0oyU4AbNefP72z9R0u4oxKXIM+Q00eHv1XKafFgy79rOS1Fl4l1hyCeHd+2BwYBWzKi0Dbo0Ns2OZsPAPZvsQDrs0VPHHXClT6zzQDhNfrXK6Lfk0nXNxAZH25mnBkYEcnB+TMUwaOSAoe5i94P9alxR2cyah1ZeA8kEA8gVD7HQekq/qqsorROWOcpQuEnLgGbEWy4azCBysml85zDry9Dpsv32Mk21nAUlrYP+OGgm1NpeqppebtmR4/4rMHSmT5BKRB1vrMcDVyoxJAT9V/zxlKyXNVuA/6NSXd8yO/4/1aLgULHoccSnoVG2ob2p0UeqKy/qXy0DULf51SV4G7WouCKGkXrSVxszCc9stHIKaaCqCedNwv4EmMXycaX17hEY3+pcft9eNQQewHu6H6KvfmB36qaUdcbzCRqCocz+kq7QwHJSoDnMUMmqiRCQewXe4qaGH/V7vznvrBzr0Ct7MBS9dM5jmZL3cHYrRrK62X8rJvX5WoS4HFB0EX4/mSzeWzG+nbXdMmyk2tci8K1WN/FPhL2ok/QZGYinOkjBxBhE7BEbqRZQe3rBBWIUQYl03ch8A3fCc09cx8vdsOiONuXeeREI8BNE6d2yZ43Mpx2d4JxHSXWCiJ1Bpcni6yecXiC8kFoPB/AtWSwwMy2BIi+hghyN/ChDwkrfUPCDjSGvZ4YTLxCInbhJWWl7UHLKb8YBOMYVVhxOs8cW4DyuhZfQxPa2VyyxNm8lKBSdWpjq2YiUqsSWwfJJPbj5p7cmNgcaYrXfld+IwRo5s5Mbou3qNakzGaF1TjdF5NkeKhxXTfwQv8vFbte0jONDWH8OTfUHoN1h45H64W/dNvjBEPchXPmJoyHUPssmvCkuu0ViYC4H7zmZ7f+22dESlg/SoT+A8Fw1KCTEn+h14OgcSHuWvFtz+c6eGk1AtpnroRksjc0wUPto3E00gF0LVHIZfWtD9mGP/2A0ND003KQKUmNtTy2zn9';const _IH='131e46ab8be42f7dae248fe933e6a15541a2f569d105112187f5caccceef749b';let _src;

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
