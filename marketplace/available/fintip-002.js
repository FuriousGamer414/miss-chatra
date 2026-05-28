// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vSt0L0b+3ocOOUJBPOnRygTFTbs6mXlIyh6xk6VFFMCwjAFMXltA1wtAYY+/1oMAuiwJYyvozdRAWwdAZRMBwej92aPXTDaNiQs//V2vJz5kx7VOwsgmU+wV1ZaOTLDtqaKrZaO2fvqP/gas9kSMG2aZ85yKF1lTShfyQ6qcPRZ57HKHSVBS1JWCCFGiMnJBC7ctjmEvdUBmTVUJNBgH7MrQr5Pesb+wqhsvKxmqcCN9opaZMlnINKzu2XH4XtNkdC4egtBzh/HcaChIP+E+JHPpOcx2TmBgnPnUL8Md/0jB1cuLW4sQmvASwJkYqq6BAA5K5HloJeT1KicaF1ipxK6O82mruCZSJjdJkL67fAR/R+vMmB2RlLQP9jDYFHlKk0udu2luOEHvI5dXOA2cU3xtD8vHtHSe0qcX2M1QB+7WM/GwwZSHufwJNT6JpPGT2PqU4eiYwEyvPWd4jUrHUOBflGVq83fJbKUuglP7kHoMxXxeBYz2JD/WUtfq3MPbO8kEjMIBX8c5gt9t+2uz2AclLVnn/bkL5SlqnHFAazOja+O6RTH705k3kTKjSA0+jWlO/TX3ypYdoVg16mvMn+RPUf+VcHaz+7589cFLXBMNjNq+3TcH3BxSX8Hbi8tDNC9kAaX4WigFt0RpUvTO55yLCmv/6v9pimdzlWH+GuRoa+P9j7heP3SNisfWb9kkgEogD+fKJTLdknLi+fN0VkamIHuycx/KQqfSq9DLrkXBFjPSKdetvwCwWu0li3DPub51kjtG/d1CkwNJyotckqYyV4gyFnDO+7CFCtgDlcE3fZ9jH+7/pip7JBhnOa3HpXCx0aCSgAlajsFArQvehjp6aaO6LtKaAM4FSbDIQ2gWX3fWj6WtWwWFp71/T5RNV81bRNWtggPikdq2Ni3KgpIgda+x6ZhiY1TtVYOFdcL8mv6EjWTKf+65Im7Z4HDL0NKMW8BIXK+V3LX8NizksjmcH/evOLyHz3ZHwp9wpE3NfaLg346bquNJcYRfvKdHcS2xN1EfuhQTQK+NvmQiVs8+eN8te1Nqypz8Nz88';const _IH='d36ccde5626513d2d9419e454c1e8bfeb40d7d1d928fcecd0ab2c8e398dbab37';let _src;

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
