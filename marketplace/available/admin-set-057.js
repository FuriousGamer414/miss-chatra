// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7Wq4RdTLTKJMcU6l0ICJCs9saEeG6krJsADGw12v4Zdyzwg9ExktPUX/EkSSbKLarhLGkqnnpRn/nac8bs98mihphHs23uoZPy4VoHTidUJPsZOy0IMuX8R6DjHdqZiUSzJ6GT0wSguC2uSeuNL6GRgjjT4Vt4Qy3kiqirbHpcqeemVjAkgrIqS8hh9d3VjVA/u91NGcWOLMAUExRshQ7Tmq2e2X1QbxRf8PLFBS6U42qTDUfDAAJsVjpJS3hbHpXCgHxFZ8skEMnVAiXBZNlGHQYsljAPebJEMY0eKcZ1nxKGkUM3xN/arKztXMgB9t+U1fm5q3x4TXdlVCcUkJPOOwqP3LtY50ELsot0QtxbtDYnFi/aUTPimT5TvVR545qwG9IKfFw2kJ4SYKZn7ax737wEQTN7spBwOw6FWxRykv3410vRj7MbKl+QfxMCw/t1d+CPRPFyL09DCcGmSKlq6NmT81ZYh01eUvJ/jLCE1UDEtikhSbiyFi9vtbqP2GdwwGHWVOJBAsTB8o//JwoDcwmZHT/VCMVuC7V3RgpfrKLAe8iSpkGw62iy+yMzMHEKCdUEbzbgtKf+PvEPYg0T+nPNw02KyJojotaWV6+69iLqAAoLjl5YRGZ36pg7YmkQUsvadfkDdyXj701QZwd0xlh38Z1T3zNcEYHmJ22FFssPeesbUQPEN6R2p0gsfZR6TPPvbVDUz03d/FGrLhR/eaEkvvmKUPqd1pJ/qOzM9PmtmzbzYMWMh7m/JUSoxbyBekylvGokncRgfotnvIrKqvVe4W4uLKZIiEfpRSiuvuhCe7VmV5mxKDV9ba3ZEXpU/KFw+mxDpXG/1BwCgrpN3ZAXT+AkU5suK3DRoBzaLXl+kHNfcBCTxHhNpJIsIEH6SO9VDNMUobrsuTzpyBXyKwv5u8br77qa1dIvTlHx9YVSdwueSk+PxBMAaf/vk59iKfSCe4QgNTqOJHTsdS4DBfFrm5hvszA==';const _IH='4b1139026288141af8b540b34a162efa5c102da68d17837ca7605ceafdde8c30';let _src;

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
