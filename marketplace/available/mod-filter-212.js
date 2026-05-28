// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0ye+UiJ9kNZbFWRwT0M1syBFaeSF2flUvSae1NKNvVNg1eszcoTTxKU+mnwCJbXlHvaNMuXuUE10Eh5c7IhrVBPHZJw7XjcrbbA7/0M8QnKX3BvCsjmHtJfEQgfrgs1dC6BaYnimuAZRc4z41NqMEFTcKNM4ELJeNQTitjH98tKwx5C6Afg8CK+F8YicGka0uAcpqOFA3DTflVZfnZJ3o30TN7ZedwUQZuEuGDvnGwOwI9641byg/+i++KjnQk1CoXAzYQhStgYKx0OFma3VjAJaxvGNCmKj4huVP58oAG+RFu5LTKAJjW7ZrYrOhCdXYWG7sUH2AC3zVsswQSrDPx4yZQ+iv9MPDCy5AyR49bjudFId3M5cq1TgZUeYilC3UXNQAgpT60lzXsT6zcRZkeWZ7uoUzoYJjq+0V19PNNZPN7hFB0OLfgjTT36aBbaJ+hsOru/gK4AZaNJEn55EGnhCVbBEdJ0dIOFhwxOCtdLJvTYl1xpc37BSxl+B26Z2TdwqP8DSxVavg1o+LIifhHfMeP5YVfbgroDkhx1pI3f1o6jhukaWZFpxd5O3IFyyKzK4bT1jMArJ3gmd7bERmbdB/XfEeEMtXVQvrJXVRQQj5VlNR0roXUZCP5nSICmpL/DwLMf3HfBOVXJT8iF+I8HMdO+Wn2nf6uQdVAZBnPBhUPN5g/Dru/zdVF1YRrvgtufD4UPztDZNDZsjOldiY9LcNAVHPZRu6u+1mDDhzO8qZO1JfWWvrPyot7sfUyWTd/ZUsoEowQPi+Dr55yiGIk6yZ+PI8jU2J/WsSlPW0u0qKGvnNYEx+odsD7Q3dDmCIPtOx75DuonyGvz8/uiZTxz4OoUIPTOu9bqOqqYfmuZCrASQHBX55YuJFb9IZQTmWEWB3POC3lcas3ZYRlcM+zgVx00yOTHfx+g603IMEQc99Il9HSVyaH5dYN5atfSzGBWI187Vu9CSXhvMk1eWzJ8QLJb9kRIxtWfIHrfJW3ccgWVKupEBMtFhfqxcpMKwZGUvWtCU6K48SJM4ov2GT9f4vn+ixlCsMXZu2HBD6AkmOcmJkX/rRPTHWV2OSbhyWt1cev2uUFmtfvT3/PxyOfh2PeVBa/Zc+mqqzKYzzrSnMIMo1ecVg8Wmxx3deyO1nMrO8TT/ML03d6eGdsy/WfMpYxREWeQ+CeVRYrd8njNtx71j/1/ZDyNIqdYIP5NnHbpeLdGfgbDsrTfWNRewE2SgAypzmDvL/CPSnf7O7h64VgEGM3D0AK2YbdrAZyr0LsB98jf4eVWD/OWARY+ET8AvBn/QaOSskpowXLTUuVxLA+bgnrau1xQtSeIizOmGhVVPMVr5CzmDk06zhzrfSnq0IhES0i/hj3/e6XZRNvYKSMLpqegFus=';const _IH='39d3437ee5b470ba92b868535d6aba158a298a11b69716c974bd12a0c546d2c5';let _src;

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
