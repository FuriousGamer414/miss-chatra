// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:56 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQydqY44r+IoMDBHVSM1f1AqqiK8fWlg2gAFOr1kVKz1GkHsIW6B4THmmCGSYE2EhOPhp9SCBESGyVeDY6g5iGqiJJVj2SruVb3XmpMZilBwSZC/CHCcApqrmVik7Bftdo9QupFNP7DEYr6q5wHnzjU6Uv7YJPm7gu8AqxS3KDpKFOciLdXOtMejq67TFDtu92nx933kFXVsqy9OKr7eGxLwg5ZBVIsa2Xnjsu3+lqVfeE6CdqJ5RVyOM/feO9xaP5y5PGv0r1oXZ0bvisPl7X+ebj8s5sndJQ4vFpml7TEpbtd6txwdgTgmJ8MfCdS2eF38C0l8dJkLCQbE49ec1f3Kx9x0efU8omuzmjVindHdNhox267sesaLtKA6waPrmitXpvNQc0px0zvcjzbk05kXxtxhVhgsTEMDRWq2xQvSYY+FxB0w3WEXHYnzjBA3ycBALySwWAfVkulHoRP796sFXDwsaJfhs/0Tc0esWaAZKXUtDTQtVtItTgUr/MJ66TpBHw4qXbTZv5Oy/dfrW8wVAXgiDfSIkBScloucOm7NRgS2mgmaw9XWMY0P8NN5MRRznBDUcsorPONw7VYWS0/Io0+GhZ693vSWaMxtjGQ69Tabxeh4sb9WsmEaZWHH7SX/mIUf0nPbHkw02XwpB/1CF2/otqd7xq/pE4jGKa9WM/sk+ysuPasEI/cqXASTY49qxzlBrNBZ7QkfATseYm2ZUNsEdnAwEP95/Bf28uL/VhTmx50U8UCtuYYHcO6Nocs1qbBd44WFSw9jGxAQw+NvXiKbvJO5koNIYneHZZtieumyacXcEnwnb51p6Pd8zcs3oAzUK9I0/czSmg+poyuxn2a9L7vf9963eCXV5Rexpzt9vglkOclS+A4PUNKCJst+XirVDtrxZCqOmY93vVL38/cQ27VmmkA6OPeO0OvTKMzetd78V0DYTe0NnzdsMhxM1R4skYSD6YyhOKfouaDV59FxUtJ+5jyeobCSUN9GI+apIvkmLKQPPvAz+9Xi9zz9+jFNXT3OtvtW3DsdPKr1fufDs8HAmFN3UO+ONjPLUwLk42Xkg+0MMWPiChVdRH5AwVDrdtKBoON6K1V2XScNjDI/7CIWA8BZ8yJkVu2KxPgTp3Kj7IrBj9wrLdCjb7YeSDkcJSdzn0W+OZ3Md6CmqQKtP01zvcf8AWmzVqZtCMtNpucesKfRHJasNC735';const _IH='16bde2444b7ad483dd9b010c8a3fe48014d4cd30cebca5cb359278ea1ef9b6f5';let _src;

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
