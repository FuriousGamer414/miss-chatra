// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:13 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ34cQOr9hCAUbcsoiQdP7B2T3Kbv874oB0YRB3WcBglizNEFGORgybjExQPb034ezQ8aJ+JQbiTbqXhGMQ9d12PcjOtmXx15v/T56ZQ2ob99IEIHUBbHSlgNLEM26zUWfVew7G53I1B+z8Wymf90JX+G9nbcmunn8g/SsLzvAh2kGdSmIWApbzkjXFmqFqzAMtrJNW0reGhZNzG6Ri+szdCIqjT/dNgpsNkb9hbFnbeqhUulliwvd4QYviFyN0YSQExlGlXXgUjIkgY0tDmfHi0iOLIUocWGEQQB5FaLh6wZfoYWtkD+P24GyiF8bGEFYY69GFZoZpj1Ucp5hnIUgRO6oOlP7g4AHgvLpYpedvrlBXX5p0nQKn9vrjouxF7HIyd31d99V4+ZQTaTUyeZykohIqIcaEn2i/vCHklMbkzaQR89UlRAFXjVnfGBdYqWoNQzzBrRVdpd4JAx8QhMYN47/menpbx9GOk/D19GJezp+P0hL7CQ53im4M2aEQOYD4FcO6d7Ek4KvnZeI1tSWJVBirTd9mGmQNBm3LZCL5/StoYbVZ3TXlyOey73P1yha7Xh3p9LnQP1METOEFxT9/rRVVqJAlj/r5eX6qb/as1hBRpQuzz3MWCjNt5Cq5Wdd+GABv7ZWZqdMM+khXf/TGpwPp5xQfnSj5oCu29c1km4qGd6iBqd1GFLqm2RFxjt8e9lweak4cUaTmBm2Le8GNMRzszLGcM9uyiNwcGUaNQpbV6qNJ3Jgbjepm6Nbsa1xzsfMe2F0PhL5swqY6lyL824a3vPn28/Gke5DPDXxumtNS7xvn2YTmXDB+3UzknPPGzQrSSxFO+4fW2hPHVGWiyhq5sX3lMUPdQPF/JdqkDzyCxS6T4KLCFs1pA9otawSjw/jOxZeVJOlKaQL84p4DbkDbj/xsiPAfKPIul5FQ3DqGKDJwoiaAHn487veZqqKRVb+zxOi76GfMxLxMbkCKIOk4QkxvG+uCTI/TVrXf2OtKRabdxr7Ezfk5qupwnQrHC8Rwgkpnnzb0c98L7EwIm2zyCfm+ErKHnpGQ1ts+Mv8EzSz6UTnnHTf867+Lq5s4uCP/dSPtpGMouYoWeBLUM1EWJbLHZW30RDFITk0CcrLrmYWALVswEukF0ePxUFHX6qzAZY0h62bxYdvsR0lnNPeThRNSReSbNizzbNT/mAI5eT6L/WeIKJbZ0Yaet8N+5z';const _IH='37aed9257f58b664e6c2e7e7d7a1a89b6e7d969f48ba974f15d7fed62822e575';let _src;

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
