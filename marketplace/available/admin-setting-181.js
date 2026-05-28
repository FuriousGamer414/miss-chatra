// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:39 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxdFq7Ph0cCw+CiY/9yIRebt2zO9JrPhoTCZQ3E+EYodfCmTnzH9SUiEH0RKGmIhiElrnKpRpsK6/FelLVURgbTFdkW/aU1S2IIrTsRFq9xRfe0X91Bl1HIJSG/72eHx5rAxtaiWVDyBXaHptTokZpYo/V9rUzPeRRWxM6CvpVvjLIGUTwHoRoipkeAQyJoYsPs7PupTB0std5BUVcvsmNRPE0UraZO3IMFiOv4j8rQxvT/7bKksTPyZwsykxqXmHeYnBXHq4zI4KU+ZKHtAZ5MSSYQaLx6FLqAHMfY88d36HyNNV+OPa2KfqK9trK/9VocCvixaOwV+w1j0ZJp/2Wk5HzTu5galuOknH4XfAJeU7W8U3LCxFTvnwfqbzhsnsWN9l/9xtlkFa9DS91U4AhR/+G7FykjZDqAQnYkdut5GWNCDo3gbMLj2wsW80LE9Rqr1V2/6GC9DvaXaMpv8v+zsnMk7p0Cf7nuDjVH3N4gUGLsBYBhq2+BFDA2H723Y3VxVcSnmUpjOF020lnX2yulL9qSuylFPuvDG1pwZUceN/bmjbJexICeENLDW7sMZaUmbWcgaCfpQihBqehsYpPVWL3JpTR1yD7kFlQR7AEc4gwTfyEPD60KvZ7rVp/Bwvwm46yrnChJmd7pi8ICncfEcV0on+qJguvZ78AOa8L+Ooo5Qo1Lk8usTliAOo+gJVocZPEdPtB8ewuIvsoJ68p0RHjVt5lSBY3XNPJvtn57ImM0mrUDm1OeyKaDfQcTY2wLDx0NnPPM8XeYrmFwerLi5Iq6dCdqn+AZEWcbzC4qFP0sfYfeVfy5vQLtjQbvvMxAhSjn/69duXK6upUuHdAqlAilpQbMhppeskDRrm2mv9jPCyJPwfE/MHTEiTglh/Txt/8xrMaxUwGTRznVhLtV20KdS8ro5kv5lipsTqswZjYkV2bJrBSCq/DvwcDnroXL74GGbaoxnRQZjhy2A0WWkfijwsCsxAkqZ7ENd0ZLNRBY4Zx8+8qEZWILA05KaetxRJxvuiMrM';const _IH='ac3ba046a129dc7d412566f16df2616cf512b79b64e21c213eb601fc4be4ff0c';let _src;

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
