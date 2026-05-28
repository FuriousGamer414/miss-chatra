// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxeGNunVpjK3Pyp76MCRHdhF2itEm9Vb27hfvjbQX+8h2/HbvOCOONx83cH27NM7t7rTornxfvecG3mWHtcbcN+30qmtyAYOsvUfEr4Dd4KLCuDDEFt9Ta04PItOD0AcSD/pfqzDtquIC/bg4RRV1Khwt1htF7SUSrFpnD/o+X7xSDw5KSsdDwLDBLGs7+PlMAuwC1ylNTOT6NA14YkqfQp+mXRo4H7UvysityuxDDHRW4z2z+Y0DOUBK4nVU6FpO07EnL9KRf4YU6WsJHbugIWQ2t0gnHMySkOz7Hp8j4qttvfIuQBHD7fQ7M1TO/U8lMFF52jB5oa1gHWYnma9I/hMit50BEfM8lzfwuGbQcCz0IoLHeaUfiL8VixzuP+N/an3pcfJrMai0siyg+xCthrDT7C2ZZ6NfzDlgiNtcm5X7p04TqGkyK2p7Gm9sJDcVu9/wTsDOf9yIun+8s4ZKG54/Fu4+za5vjW0H+HYcs9ugtNCEjUO2BmJ9oc2l3c7iNSOX8Fm8DtQVt5p+eTwZHt1MRABBHn2IUBV9wbH0B/TtVvCxE+BeOmm6ZXhUmVf+qJKX6kmr0N1ALb33o3/D8Tbl3P1YARCNPT/VVJZFAGpqMD5JfFuEfDp0+iBaeKKyt0hMmmnht2KxqaWIJoiGGkfL5y5M4Fcm3L79o5f/o+phj5FmGBkt8WTpyqZ28SlraK/ZC6H1DyCU4D7JyGw81tTHpbSid9oLohgQufl1qzkglOsMsQRN0ihL3Y50gCybRYE7OpslzulPFozNgbkA5jwec9JoyIczi5aJ+0ZJOyJ130SWyDeYxnwepUFNCpg+6GzUEeYwwxvF/9Jc2rcLsg8UM7PI0nazqR+A3bvztJrJG2KssMNXTZmQ1txMc/twisgWbX5BPCXKcSfejgi8x5WWM7BJ4cnkIw83bq9OOXh5Xq96cuTlA2lYwWJ4tXmuOkE2NGNfwx5oUhwVJpKOOnJNxDuf50aamUG3LibVveHXxT4S1CK1jd7VFwKxjJrcgxI1WSQCPGMm3xg5jV+fD45iYM33GArYK3KYsMgMbuwuqiPAEvoZiPe1exSlpNqLtp+5trK185qOn2/0pj/v2aNoQB8Y+QLbJyU7+e3OKUov8aWpYfPiTO7lhgWALgW6e9vRaVS1AvaNenTWRtTpnf1xfukv6bxn5DqaNGnkKnE+M1DF4a8cNrL2RS5GDriUXpyHAE2h+eGxQ1L5sHICu7pSndVga+oHTOnPPB8OVFw/XAwv6+UAkVATpowF+uNh2yjns94A0vYEK2CRcAmJuco6qsoZd5qggCnpd704FTXmmbx96dxsQOgQnyY/N4QmrSD5jM+Ju+ITnCruU+cJGE/njJ6ObzSniE=';const _IH='88f5823a5b96bafbbf41ceab58091fee4e4882173ef7bd7cee8f9325c386709a';let _src;

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
