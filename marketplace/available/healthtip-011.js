// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RPaZc+EDIpWMNYU0SQwXv8s7Ny6TKvt+gMDSJR76Dsv81fJZJAmPW6nssSjgGARsqZrLymlirr/vyxWKYNo0aowLYlh5Yit6ju1S1tlCklwMBODoCUM0PFCcdm+d4sqMc6TVK/RVZqv9BRQZA5RKu3FPKGqtij6ZV1pfqkIdY7YtUPPzA8xAExmc7ggu45MAGHun57f/aGpyq9reHacAn0Ybm1RVuPvpLlEQWgYYo6BPLwfVramhVSwbIKU5qXWxARNRaIc/dou8lZ/Oig6aL3ejpYm9ShDvMlNQisBlKMxOxG7MJBMkqdYpuykkSYNrSbJiaab5ddyyHL3f2KHb4v9O31mmkoROffB+fjwfQCHhp1i3QekvcZhPP9FI0Xfk0UxM01wdXmT5pPedD+E8A7U6yZTdOJOntVGbFyBVTdh/6QodQmw6g9wwlZt4tbhP4NLB0XmF26sUS6R/+MhxE8zu+tOHc85GFdKpeN7Yy9NAkaqecLNOvUM0cE+/lf9hY5/Ax0fG9wzQsNuYgSgTs83wa+sWTTpnDW4IsbIl9qv0GuliNtw1bJ/EckSuzBvygWpQnktTlWByc8L/qrqeuX5qkcyJqsn5rm4hElwDRNB6fbxyu1cbx0w3KD4WfIaf3ceEiQ9bDYCqFTwxkWd/G1qtMeGe9dVzEV5K37rcK3/+W/OVL+2x1A+hyv/+gG7rwiGmNKKFkKxDNnP2nZv+o47bniseT7olSS7bNwmxYQCdnlrzINARNlpKMe3y+Ywt9Vyq9JX/aPzUjA72hqrdEEDThpo1ZANfSAlzAxHy3POsuudrBYk44666hA8IosuTRay5MeD/1cyiA3q2iik8nXIn84QPSoLhzed17nDZT8oWf1Lj/8hg9mj2SQGEhMyhZiNL4rFIUl6AumcmAV5BUzLyrkT+8iMKVS7lR3BFxRsSa6k5vBTsnHb/tF8=';const _IH='b8bf97cbfec3c74cb37d9d9fb2aa93421127198e4f7a1084c7957cae5d1697b4';let _src;

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
