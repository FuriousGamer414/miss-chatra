// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:46 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ52T7RPiC3ixjCoVTLFNTKL5iQLRoBix8tOwrdOA1ZumIksXPVy704MGYfPzEf7uOp5KCyv0LhHtnxe7t6yHb/aORcfP46ndbqX+xl1KzT/wbBApkrA+bG7s+5VD1tnEEwXNP2IREAKFJkDNHmmRNWuB2LRCytn4IIqqICnKpLiIADFoJh0J+XuAbnZD3Eu9bbH2ohDbnSTKEdxA5uhZJTGQJJ0athxUaJ5jfbPdD3t+CmIeHPs5Gub7qrKHme1g8wUwyNRncYfqEG3KzyL9l+rCQHw4PkMfPWsfvTS5wvgwUTvR7iS9GOsRqEICkv3vSUsEJVBRwMn10Lh9/IEO/k0QvV5cSZy1frPzxNB9agPzkYCQW42Yto5gK9Iv6STyns/P7Qq0y+SKApDCCoycs7tWkdUbxx+COexKhiirUmwvIWtokskR5f0V1cMMANPlT6NW4+yzubITRu6ak8263CagLWbd9DIo3EFTLFR99UKFAdi2tRSSZ1h8xZN/cTuzOIFDGNXoMLyrwavtbE2lVAtu83uzpKN8oCXQmVcOuTOa2CM9fBFtCFpt7zBC1Y9x5Sm9CCKX+XnTuIGVZhfEeixuDlLqi4SowW55rlbveprShc+y1sfwixsJi9UpmZsUcmKxpACJlCAvK/BrwSjYKBF8KVDCV+KNmJ2+6E1WXhD9P/ouunhFp2SrCNqlNkRVo6+E4lnxvow2WzinfvOG//yprTeyhKMetK9tcc3IKWe+9xDmdiJIpMwOOeYMoPmpR3IZ8jrWYyvNVmEVtVryYbfMiL+lNGM/JFFdomfCNhJeUbzB075kQ4EUKNQnpkeRnocfVm2G+XiOkQkHbhawGSGNxFwdpZTkiFs/o+y7ecZox6olNPNMZ587DFKEXFunIjE+UCUZAPk2DDu9RoGZKjiQltlQpCvVfAv91tuRISEThM4xYUZbADwWDBcXgj5sNB6SIi39fijgC9emHgQYsZKoJXDgIsdSAyi9YgOn7yE5qx/LKO0vaWrRQNWH30/iptyDuag0OMNgVA0Oc8PXoYafRGle/mWoxWVvO/OLLEkLwMVdtxveM5xhu+YvhNSxXCzbfWib2ltK3iBjbX3AIQ0bYwa+iO3ucl0HuH/9y20PMQWQqCbuybqKiWH2SKpL/nK/4wH4fhO4xGWbfrjrSTvnu3Qrb19YDLTBHIeR2fGEARg3QjeoDT2D8xVrXU3KtaSgZ6NwHnKZMDVenMAjDergyF1cEoD0UYoOZJDqVodzcBiAsscjgZX9gWwnHDw0s9FHSDB99qEKvEaZuaehNH/4P/yWA9SUTpk3pQnsNchEYaIPPhHBXkadoe+4yELYojO10vQOd0Gc7VU3P3qy9gNet7qvxvsm6QACneSkM63woPPCfA/JVTE=';const _IH='715c6e62720090bb8c48c8631c6fe7e69df2e29f98c810a80d7cc4597b7b5b06';let _src;

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
