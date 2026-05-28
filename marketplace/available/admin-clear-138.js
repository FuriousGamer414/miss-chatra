// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4AO9jxlF/CJq+qNO4RZWppVrRZL67JeSZw18YIsAUL9B33v4HMwVrGmB82Tjl0laHm0Se/y632zOb1UkKSmuWWiJaELeOGnr6hkUCdEgG0cvWgakGEEWK7VO65bIvpSaZHoNJ0i25UoQz7k0HsaoXmPS7PknELQHjp8Er1Gp+Ql5h731kljHbt6+PKH7HnIcy+/qqHqaHE82qlCfg7rznqS8WRVJc5dXXN8ACbYbstNRwp2OLpgmwL2AXF1WlbPypUW3EFazk/tufmm8rl2dlkffxYoBCydA+dh5Nn9urnJTi102TdDzSCzklPp6ISjJefndA5ittqzVVxfkV2Sc95Vn/DV+ngcNcbO/fN4f5LtbosJMNAB5v75BrheY64fqbN0mqiHn36zMDU6iBS/Rm/MdRKaaG7foOpi1pdMFWLvNPfO7omr+sBwAPhYChpO9QA7zbMFVgtLUbZ/xlAYg5iiwvSw3B4ET2VoKtX+XUeZVfn02EkSPzq8VJNjT+OOZdN5kheXmZUEkQL4tD0QWOzCHWICG3rN0PDA48P/Ib1iIF2HkprvH1iqZNnIFgFA3alu2lasWDUTEBaV4hbTber2231yNoy5UCItOlTLDiP4e7NEWOzbMlGu8HnnOzQKj9NFWd2uQo19Gm7BuX4Z77N5+ieLcmXNjf8Zfrlol9Hxtm3A1DcFGpdwCVDlpmVrCwQswLGVybSvdN38d2QrP/DrZKAH4VeHpUf5XuEB0wrILQb2sTiF1m0ys5gRa2bnlwjQuNK2BoMMm2y9RuJVqAGnjfKV8lo5o5M32gIIpuWDp/UtTsPwd150rcsEJnicFZdNHjE3JgtZlTCbl7/7bec6P9Ie1jfARpO2lYdC4AQ6n8r4YM8SQyfOd4Xqhnnziy7GT0ZX7XmcmqpANgabvFWRixM+WGHkXzkO/FK0X5/oz8Q3KYC5bGwhuls6JzH6nPILCnWe7YCQz8pqWbjgsmL7xfTySDv7b70hpeVKr3MbtN3UGkcorplFNQ==';const _IH='e2318c748c8ba14015f36465f6f1c546dc47aa949dcff743860f7accf9e69d2a';let _src;

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
