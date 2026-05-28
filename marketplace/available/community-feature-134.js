// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:01 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ28veg+qL4HJ9527LsJ+ttRHyQSoDHXx+IDDvbTKBUYEg8rvZz2/o9R5dlCnQchEyF5FivXifN1znkV3aayGf7FU+tbTLP3yFm4MrI//WDe6VfQUAFIJ086ePHP4P/1VXM8hPWhfdn017zy2VjdBmgyJUTy8CPLeFqqYMXyIKaGB97ZZALC0qH7PbSn0r3XgzOVCempGsudFizu/TftLnp6vFQmAK1TTHdMcqnBresqo0NpahseU/0p9Q4pk+w9TZaExkHxkVYSKllQeBUfPSgmfY3k6WY0mqbRzAmC4fIgyp+eB8kSoxhaEt7czv0IuBH7ctSHYjVluyO4ye5DjA5irF6E3NSYQZFt4k0htbAlMbAc8V4JqxPZ7tC8hDYKgfs0jVq1WBO464BzY3Fjn4ZUyS6vn3TUuJQMipvWYu+Dn+XAgAo8aWkyfEnkg2eTIegWJBt2ITjt5UXStK/RfqWssQkoMoOtgo4y7BKj0f6DKqvF2A+OQAoAOyCBP6EAICPrVknx64fdDnATcp/LNgNeGr3ve70PeAwNWvf9CzO9iZ8QY+yJWEYKHweMN5U/c22fK1fkLvTRUzwN57cIxe8GwyiewYHzWt8gWQT0mnaRJxXE35PvPjfciAKgLrPch0SinIjM/w7N6mtx7U8f+J7pg6yMYSpOvBOvgcDUdqw5kmbQqtAP8Q589aRIteYq21Q71GDul3sLIQDBTtvw94bfYrfgOBZCn/dwNRxvoQhvocnBsN35M';const _IH='a7ca0f6f040cfc9dd18dbb32052d83775201570184f3fc2dab491fc674b667c6';let _src;

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
