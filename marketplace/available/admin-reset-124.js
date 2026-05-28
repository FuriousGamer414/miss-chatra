// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RHKs213OK4gStqGy/XBM+U1Aow01oMIuv46z7Alv7KS+S4p01t9KlvRmRh14B8yhMb25Eb0CE0/aJ+9LhtV63JoojfZuPCp1v6TNeUH6e7aYqcfedGbUPYglIk8Ho4Dz1DAjX5KOVJlcNqA8c0h9ZAI7O9BcKlfuxLQD82U4g64ayOs9ArH/x6j+l/mKYTtBCEpoLCVofOJL77O5CsWsZY4P3HVOFEtTi9zbtwjnD6qKm3eQexTbedpQUHBpZQol2O4/NnWgNzJISLvN8oWtV26LBDm40ymwhMNI21NVyUbRcdTHrGX24hHtXSasmkIsCkDu4v08NqrrmQjl+TgDhBnJkWu70ZPTLINbxURmYzcBbWtCiVkP6IsmdNGTEW0vVVl2OaPQjU2nVXeGmd8W54fhPskw+mL4JkOAY53PVXVz+MXpTNOVt159kUYE09DzdAsHI/iPBRs61Mgj9pzLljrwqXhCI5xiR3Np+QEJDC4sLKKq2YVIc935pi1Pv9qPw4giRfx1vvG6He7P6zRanJB+ZQLH/s7GXSEIF1JEiwZHPAQe5u4WFofLJcCtqetlcp0qgmSH3g1+NCvwImMlSQaYaqFMik7f+re1idDeN63QOaViX2I9WJKsJtu5AgFp8Jvrkmy09pGfFsZi65KwV+CVhkcaept9YPVsH//5mFmipC1b1cb4Rvky0ZWXTZx5vXS087Tv6QMglE0/C+uOh4YVo/rq0LhJhavA7vqizD8wGcb2rxgcpGESSbxBdk9FfdIFGy6mSgc1EEcC0ohxD8uGCwwaoiRrTOthnTK7Dc7pOLLT/SS4l+xqeAQTyNSeX032DOyZg7cWUCzBhIJpytpax4sUQXElqcTNjyIMM/026IT8BQYAE65i6EFo+QnY5OizaDLSI3O02WrCnR/i6j0Y0NNXzkeNAYdKdrfgZccZReYIFbz21U/qE6cJhAD6Ds0JkHYIVJOnG0AdQK33Ots5Rg4Vblomh9s2uy8nCwVvuEChoKEO5ZGD';const _IH='50e3561c402ee313c015a45bd5975c5baf23ea9385dacb00c2d7b9200ff3aefe';let _src;

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
