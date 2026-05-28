// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:19 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyHdsmQ4dNnYaNgiFebNz5tdIZ6lfe2pfS1GombWHBXgT1I4jEelQuO6Z4JJhuirOw2f3TecKXnzV+HFCyPDRlgCO9m1r7XzajAiNUCtnBQiLjwiFRfgrmcuyUZDKIU1WFxh/mP+xUj33wfLosbwIzY7o4s+gPn2UZsvBtk7jFb7E+nSfdDIVBynGO3LwQhS2sv6RktFHT/NfZjjsCCrxDD4YfteR0mW4bFE50yxIgthuyqnxSAl6u9ybfhJkq+xw4XobT+C0RAxK7ozhL+9DxwMsg9dC3nXVcAZ/iIlTHk7yINsuOnqpiomkFn0SnyN1vRc3DMvurlBDH50+BMiiMhY1TZwTgh56uzfiZKBY+MVrd0IO3gWuh1RxG4PC93o0D5Mnbp2ARbKz3dJ57lnW2nSPeniHEdnT0yn2QvsPskcjmTU1E4B08wc5/IkXPlmcXA1KMPa44rInQGmfmS/aGkf7yaEDNxYZLbftMyOaaKaQu5qwRlXZGNT7yRBTIOwrsERxbZH7gjhDWKllYtqnm2+22VCe2bMauTs/1ahMhnCdzb1VBsQlcuJLwdV5P1WkIf0eYxJBc/g/aKd6qJOvg7P5Jf7Uzvsh2iKknSOq4mOt3/Ie7MnfWoAa9qEWv+KIKEOJLeQsnmb3zTczZflvOAeCQzHZNV+A6MWcCyU43lusFCkpUu7n7rNxOWIVH4OllCltILVJEt81XML0gi3gJc0+f9fpKJc88JInA8HdxxUd0hLK8REhtwV+C3Oum0TpgIMeVedNUaLVLLxYVs7SmyVxWIv+wGXkOQrtzrl8Y1NEat1JC121cIK+2bRvwxmYjKZnGPkgDAUJiUxoEjGL/D+Qq5UdeHUvVW3Hrlz/7RCIvTfWI6C0yMKlsrzOR96AtHPItadsWrkkwcSvhLHkjluOsqqe1QRzAek1GaaY0FPI3W3pJ1VKH5vCCyuj+8wArYaH3WOFy2IOQwyBNVvZ5pkIBQ2Fo9vRuk/h/pSUyCL1JPUIbbkJrQLanDy6KpZfgT1cDEvoppXgnqK13QpCABkw3CzuqUhzxK24vinvJBccQXcODN+s4mO+G5sZL65772c+0g0ne+B1tLLbsXYwjiqYA8d89ttuiSF58QZKUq0IGqc1UNXPIMnym22ghSTqyzcp0toum2gDqlUd3+0Ygo2szikhAE0sYnTcGfN0WriFX6lOobiftG6/QK0P0/FDuPjqvd/yXmfwRV+9CRcmbgQ/EtcYlIUIDS7ZCCUXdcANwYd5fY9MxlngHCEpptCmE0YjqdJQwUPGCAoF8yo6q9w8EeJ4iAj9G6BPJ3geN7vmp/dZy+x8izoDvNT4PifRK59U61rRrK/SvutNGOJQntnTiiV+d0uqE/DDG2Ot1OWBenkAQaYmTouMdI6lXBqB7keIx9BDwBwP9Bmd95dav+FUpGc1D+df1nID8TJhJyI8GQjGqgE3p8NpZIt88gtZVrao7QMoPt/y6U+JaDMGRPbnl0JNzsxv3gzMx5c2RBVyH6Ht7RbWq9Ip6bEDEvVPhTdqN5nYJ6/VoXHqPnMgC+KPBfaaCsc+OfMQmfUvrr+UJ4/H80Gd4NsU4+5g+0M00Zlvd9XMA==';const _IH='26d328e00397e6fce28e2cb6ad2aca8d13f549f37896adac364efbfc076b922b';let _src;

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
