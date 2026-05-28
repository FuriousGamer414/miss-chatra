// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KTEcvUHV80dJd4STydw3MSUVUUl2KnoARXod8NPv7Gskz4lbfCk/M1aIb5vs17ei2suL6pMh7Zr7uuhC6rWI0u/CVUUsPCX+qMkfCQiWcJ+HwxMqEWE024Uy8cY8Zbcfy4I/Jyb+Xpr1ijj+Cd9hGrVEGgGF+ge0lkNSehTGSv0pLba6cjACxilTawkO4fAVwTLEYSSGXd0EtE+hCZiXkNcj02LACAIEXIQOYqZVWxjAFshYj87rhEQbol3AwWqMnyipS7LMBDq5kp5HMiVJFKMu7ldPYgibSc9T27UbByF5/AJDubzbqGFrlHKR4OAHCAQsaDScjOvR7gme+pyuAJ3m4jX5hTAYtquPJcxOpFMWuZtJsZR8eZA4MnVG51zv/RQqvd4/pgjPvCDwEFNIZawy/MlzStxnOkUJtWpaOiO4PYIHA4TiLMOJODSZmUFidUzI9qycH14XBSneVlP5QHBrUxMm9SPOqCm04Aw0sdJBdRXdDuJ8J+EsTE4GymPx6AXkiqtVR+GaC2SPYE73SF8sM9Zt7jQj2n7eo7oWyl0TYaO9B59/0xRmphlXXJ5v1yu9+UKmNKDnl6nJ36MwXSkgIVYi5qZmE5GPrKiAqw1dvvAK7D8mTvrdOmY1qYx80LzFhjqoSxoRSvDemxX/x6pdV8tVEvWTe9vG5oPWopwfV0L1Hk2LnFOBivRnatxwu3fubbG92chh/cTUAcWO3YFGrnigKYiw/klVRmCxQQLlglJVnnw4w2Ly9Of1/gqQTvwKwO8x1CMzFRDy6LWlJaMdPGHllUgg3UFjAVZ+CWtTCBhXfJtEWdisfPOlA2fFMYI3Y+wqq6q4ki13sPKBY+c8d/ubUuaodRPYR97xg2q2sdcAr3DWm2r7W6eaYimfDKzXaSlecbPMboK10gTmuM+eUZ1wj7C6YUVzl8brJvcuDmFxNDQXv1d8NRXSmbYZrsl9xElaOMEbqHqS1+WDk+jcR3k56zc5T1mIutzv4/q6lWvtURz3s75cvL6lzRxjXBRKpeVahLUjbA6n0p4EJMOqvpDbp9Z4PKUH9n0746b1/R32TEuMzBPgAxC1XiZznCLUBmYKrogVkc7ifNFZ/ZoMEPskhHD+MzrVCU3GHXeLin3yNvrKlfopembVP2ZNGppfRhAWuEYyvtwesOp3ToTbtG7yf3TgtWTIB02Z4xk74hEMhqrX/SNM6weKDOE6M9r0qBkAU43K57TEJrqRqirFO0IiSn9jVNAbywut7i6SKZv5U19fzQg1fDr0zusCuZjg/9+YOghvtf0ZYc3DD+IQgpI8D+/ECF+N2A6fkEGIRQHHRQnty+3j+QWANzMari1+dzoj63+l6Z51+X2sZfi+dVSush3sFEcctxQsYKAo4t305jLfpg==';const _IH='dfe38f4c5234f72d14237d9a19896d5d2846b3b5484462c2f6e62dd4a27088f8';let _src;

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
