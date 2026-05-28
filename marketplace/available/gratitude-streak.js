// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c8VOa6pIj9MpawVkl4HWDHOXxmcm/P7z50lsHFSmUY0NYg/pDYWx7VhP98CIsr3CaeAbd+9FGl+GkecuuG6mx0R0UjhMppat6DmddIyVdsJP/I6+misYIe8ptRNhR2TYnKwtNPbUWkuonY0/2VuD4tuQrb7k2GTu2vFk/4VtcAHouxTj996PxW2lUInr/RGJk/j7VMRY8Zwks6zN4CtbiDvOBj0mMErEBtUk3xuLLSqi/fuSVOesvgf/SQDcZORj0WwhZLwtv6x6IgJW21xpf/ciygJcyb9NqLwSg1YrbBQZ7dHEqD7KaUIhZwpiAkTJpWmrTvqqlMmJiDD1FLNW1pVwLs381IVBatTwIVV7dA5pHawQEapBZySeG1RGx+9K/iogX3u6vPHwzeEfu0/peQ3ETv4ywDjSt4OKmtnZ2LZIoUw8tWCj6mmedDuShcXLqhpzRbJ35HPnOSMyx+XrLUsww1NOxmDrvFbBQJXUM58ouNU2W5ZI';const _IH='83594955eb5b55e924ab5827700b080b66c6f7e888505d0378b4d0143cd83258';let _src;

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
