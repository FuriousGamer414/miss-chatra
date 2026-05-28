// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:29 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6ZM3OwTVxEwBBq1LJAmue3VTt9yuJPr20DS7tST00W1iNNZhOT4qhAMOkyvskeZq5j3bVAzKaPiYNDySxltQs4u5nC8kQN3r6tG9XYGtoBObDcoj4BJ09DJqswqDH5w4fRao0/0hpiAQXr3/2uIb+6kAXDWmHNYosW5w+1H3exiO8R7s+s4C1cLTC4abS+J9IGVWtr4CyqOMYbTMq2US+0h5NNbYD3475ISF4HOqLsA4+wnIwh8yRDFg8jwQqGdfmFVuP1sMEaz+gswlk2IO1jaiTUKlvqAtzObz3oEATq+TWPY6NDakK2PMf5PPwafbLltmsnnULg1UXu2IMe7U0ygoQW8zerD5coF8xKPa6juyQbIKq8MdyHz01hJTVPqhM/usDRJsRCJn4Qs9/Eer9qpD/DRdkeRNfsKrxunURXntGUdooDvVhTBgX/5PBCORvZ4zjzW9Nj/g1ABnDjvKG0g4WYkuKItmjnLVyO6n09o/cn70ryqxpGv3mbOF1PMN78u/kcsAsX8B2lpaLV2XveF87P2B/2eYDiGOrHzvVTG7MFeiCThgxVHt5fG0CAK2MmF1iEXlilmjEyoE13bKX/JY8d7EuRccUU15Ls9Z8YTqBL/qtuyxnsPHxcjicYsz2B0Yizg7p1WnovMH8q6jkru/VsgrHLjHK5Cv0T0GFOZzRwm3X6B5Y1Cdjo3Y4MLb95HoIv0Knsqw6rUBMaab3JXtbi+eBgnYNjYexbULp8biO9HYxbEjh54LF3kD4r3j5fJXFMJiB+0Oefx+QZbYYNN40P0UVaQpE3nVayo/R6l2xFBFR5iqZdXpgeqHjA27M7GZ5LYB2xEffRMrj1umpA6uR+v1X5ET1atMxQPefn/nXJc7EW/G9e26srPtNZNy83NFmYMoSMHWzoDjEDHUuUq8fc8mQwP6yeswO/ePVBLSRIWv3fdPOBtcipgmNksTYP8P8KIcmr+UVOZ+Brsc+bYp+V5Ipu4Bx0VLZ2aMsS1jFfa1Bdmo7uUCujBrDZNC+wadgkxLQg0dkRWLrPhKT9XD/HhE9YFlqiu5LeulqXKAavu7ZKIUnjPoW99JZItSfRSIfC4X5m9+XJvdnJv4z+f2UyuAAMnn/AKek8dPx7yvEnaw3PxgDJmi9SYCCGootWjA4kHTc70f0c0Knsy/3Ho/Pcp5/LlYVFum/vOFsC+Vya2VIwxvu9TOC0O3aOAqr5MXeus/x6WsElQY33ZP0Cb4BqQL4zayfSV5JWgUwVeXSJybVAnzPgBVlr0eOn9RlftyaqddJvu0IxCAfZ7TYR6Aoj0ouL+mlfA/0RsisBsYoH1eD28ihTjaeYO8uTsA6QSp3mlVoqmHILubST85uYfad8ismIr+y0v/6NF9Q==';const _IH='3679a160941dd43602f795485bb7b2b315c9f8a43e4733c6149be9e67a7ea112';let _src;

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
