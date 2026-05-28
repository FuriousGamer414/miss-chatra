// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uZTNIVlieF3e0ovDYgd3D1J+G0a/Z+NP2fh/x640Ni+UgIsUzFebscampahLUl2PWnanUAxzS1tiToLBlEGeLRIr7Zq8SWyl7TaAAelBaBhL3ejjHyVU062LiqdkCCATZzpVZFT7FdpU/xUhXhPunRB6kV5galdajRG9SqM7ayxGNYmHFrdTRFoFXYVJU2frBYnsfrszSfOp5J+MYNhjU+tqRF+UdcIihapnAYhVWogA4z7Fh866ZuSN0yfCCWsxkm1MKkV3AN9bG9moI3xDn/RCMFVN/pEOL4q5WFCe6b4UkyxFCmgBbd36vGFU8pWT182VMvjOqSac7Nm76hbH6l2I8l4fyVcvZiYP4MoBKWDqXnQljXdBwVjgS2l2d18PA3OwSicCh56K/0qrHAprQRQHkWZOKE/XjYkNAC9Cjk1ME2ypT+z9irVQpizH6e/RUL0bBoVooAlCIWp4NItzq6Ds05sb0clki28jX6CJ0F/6S8NSox3my7CevWnD34XQ2nfws+sDms/yJW4gt3QUKrutNeH1nwXx5iMtSpbaRHk2bcoSe3lmtwddQB0URtO+ox9q3blDA3uy0j7kTsEtnIG9y+uipzbcvJLHHXj0A/gYuNh6gtlSdsGlHMCGBzLS6D2ILcg/Ho8/FN+EClNBDE9hfIa2gBB7n6kKXE5kh2OVMYF6cTj8jvyPSfXTHKpI3DZeai5woGnrVBhQxS08F4y1s572Z+Frq0GrNK/HD47gXelzHJfKYmWLZhOHkRAtjumkeCK0D4hstNQKLkoPMVLhhWKGxAXu2lMlmCLaVsFgTd2H5kOunqGEEa6GsL2Vzc1n6sgAHyTY37vlqL2qauYP0wNBNOYuu6M2TmU2h5GcFYpO+YYeL6qk22sD7pFOXVtwGDr6aLK0FnX4aLc6lkowty4/WZ2bnM9Dzpx6nosF0pWjqG59EcUsjryOsZS46wj9pCTgtwaMPTVs0PKEKZ25DwvMtSZLPlP9tg6ohZbufvLQr674GaxalkL+t50/IoaIu1FfnYj9mzjw1XuwC8vDSvrBVh5JnOZUioVf4VXUnqN1k0AvZiXEUoadzctrXLpR02ONLeeY31KtS9wPS7QEFnnR/IQge1p5H2MydGU2neu42zoyl6nH47O15aG2ApJS2J/4UPQlDDf4EYNMTNpj6pf8+nBKIp2rXe8JM47H2uVyIAYyb3Y=';const _IH='59652bcc21eb4893b256f972057a5f08bd0c9573099e8cd63d8ff3f318be2cc7';let _src;

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
