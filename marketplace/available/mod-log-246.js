// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzCIWD7NTMBPfE7ZyaYrOMxT3Wb5bwCp+FAn2ARk6mjpR5VMUFggcbRuJGStHLS6wdJrywTBAjetfCNdp2bOgZJDCmvcPS/e/KdYM0anwI6gkzMM4z12BEHTve8c5bRyDjpcYe33JjOHO1yMF2ULAdaiuZ5vR5HO2Gzin6pLvEY8IJoBCCm4mMFL9e88O/QdJ33y9x6RoAUfLP+AGv9/IVQ0ThAAKVYmfzksFanzdI3LjXAeQ9Uz5sAOXJrvSWLXJ69M3AxFHtRTii8J+Qg3YkFmiQ3cSsUTN4FkdmtzToHFB9ygdn4rJtbmgHDy+jWfyKP43m31B/Mxe4fFJJlUFPA1A0O9z6h2dM3xIo9h0cgRdZSBIhb4oOrs7x+pzn7csT5Ynq5BKHnTlgQAFEwSs6sl/rsdbhBulNx+z/JhhupxdDuqQVaiY4s3x+7t3QiuwMhuJImb4mt/yJRMsgv3oh3wAlSFWQXfG3oxgqiCq1r1kF97f6b9fJ39cE0J5+xFoaf4JlK+fDEqgxkB6b5ddRFU5eV0ygS3ZBDa8X3xqeQ8VgzDCXiCRh1RCK2frmMc+bZYR+OAGWOD7Cw0d4iXcl7VT5d3cFelZzyq1AbnVJVbYHvQupN1jj1tDNhxJVu7J4+IABqPtem/fG1HLPDYR8q3a4+KtlzVncfFvHq3suYiRvbXEvovu+JjQqJoAw16PtYgjcIl7eqESSUOholeRN4BxsuGkYR/vQxWu6rGEsEzvqO4Sl+YoNlOo9xFZPEWQ669GuirwyOi1oPt+njsANWRPXdyy4PZPP2CSQfE9JEvNaKUjtQu9+D5S3Iqcs78Ph3D7MdLmkUNIu49kFAg7Xf5KijxNwedrYSblanMonYtfDQYbBI5qhsaKAYsDhC/10DKwPsqrvC7I69goChv+zkV9+MCOXG5Kh1FTVM+rGZ0vspVTMjnju0ND807RLpjlMsbeOPviwWvR5IhWgYWdLqhc3tluBUYHTnkUsnykImQ2jT1HyYQScHKMjTAWrdh1oyIJXTpJhC7/BNr8iCDjf3Bk/SN1k9DWz7cHMaNLGuyeCYi5FIxU9d9qx9AxhlgN1RJq1kiyHqG0d25cFKbUUQ4o3LA/UhAILBaUg73vtMV6ZwCt2sQLQeaYbbAxXrxzgQJlpNfp/4YNsclcz4P89ii38Ei/GNLBqfr7+HqOYnFL/rZm9vfqHeRo4D9N1gyStS+WP9ZSeLFnwdNuQ093HWT5Hibpq1Kx+MnUzNprQkxMcz3Dwqsuznrs5gjpbhbdGS6fyFBY3bPyfShyC4qLgDKwKhc5GRb3r5Z2fvv90u+KRRAffCGHDIBkWOmPOviyJ4qDMSnEm9ygxI=';const _IH='b62898129ec457f3f722f05efad3f28a63897ff732fa1cc39ed388650cedf831';let _src;

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
