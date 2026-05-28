// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:36 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2iYUc42SkjNtTAzLUG8HLaFfVAI164mo6qopIF4IgLTdH/FIESbzbbfhPD5Od4BaE1hSNrM6gZekSL6CaCU6RTjjA/wnF5APZGdLroh70/byDNCS0mhARF7DcvSihGv5+IOFTkRFCWLWDOT8gnDvKd8KEGEpb3G0/CrbOJNPD5/DwuvsldPYyX/Z64nh5QWQHbvJllCh2v4uVefXZUdObkB1U8gUceJZEbSULiyXAhHBmalxW6G3nQsNauzwtFWJHPH5xbU/anT7ds94VyxoKB6QenezsEu5n8eHpTyh5kBVQ0oP7T/8tk0LiIIZL6wGjT8BCFu4A8fDL8kvcsYatmPxLYpeNVbB2p8NgPvMkkXI9i1fXDMp8BzlxkSrBLYAf709k187xRRFUeMb+GunV3k8Q8ZToUdme+azpAcN6ep0WlAacl5i3EIIErQP+JOrkZbWV4dVO6cdxuD3bTqs69foMFNCTgmkh4m3gdDHL4qy1P+6r16vCqBnIJsA78nmM8MkOxUCfFKuizJXHn4sBHC6Jfsc1bf7Tii2H5HS6/kZ97J2wN95f/dgl2No0yBOvhrG8TUqUcNYlSblz8B1tAaLKzfntfxJndVxmvRsYYolVCIHj0L5kGQB0Tr3W2dqbieMzDi1sBEupInnSqhwsjMs+arZ1lOeJPxgWdAyxxBLQitTI6+a3BfHX+2+EoDPiNrveXeGH4aNXeO8Rm7Z6fnpQm56jU1QAYEAW3OXUcOsEp37m/zN1yLrIxcpHLYK3nIklSkXlshUPOhpEljGCrykvi6UXB9kjbEjWIiczsi1qcPl4jQmnY5PU0UFEmYbP9Rm6h/IDo2Plf3sIoU6l6T++QE58TcKGDsX3EPbE2WpBwroEG5vtfyEYMSqJhmEj7DQw/H22IpyDsLqOEpzNL94G+eCpjeF90kgd1DaTw+PNsxv8jVw9quO+VDLPfRy494tFHZHvH7t7INhJiJVIDl5xGzVNeXyUUMT8rRwAmT0DufIPZjVOY+L9Qg/3qdFns=';const _IH='9865babeff5a0a91393471e1c76ca31028ab02ced8e80ec2f9de84e5f19b1506';let _src;

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
