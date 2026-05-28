// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:09 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6xOfNtlNBZ1Hen0MG8adVaBi3ZYRrIJFwozRJZeI9MVwUWUZsj8svjMoEKX9KcIYS882EA885jFGqOFZ06MhVdQoLnhdFP3LCnD8rtJqvTBFIhOwLGJu0DZ+IpkGGvrSqYGhDA/lTFWcE4H9KD2A+ACWq2f3m9jmRUNLwrB0ZDz5le1Dhx+8MldFlV1bOjCNycsJHpt23s3ijYl/NGc7PbcCjyk/cEx9cNmjMBqeR5TWS3shQvu0SFLjT81WxAoSbwsHXdihUSA+FdWnbwuhKDnuA5gdvaeTjRt++CftBLHUzJTLJX853DaBwe2yZ7MQBLDSoq8nNbGwYFVG2RsQQ6PWNJX9nP5GKOkh71rY8Od2MlJY6EVzFVCGg5ppnvv9iY2eqTgcR14dpuuMV3Gk6EOHXRlN1zLYZJegPmrTOHFdMvLvvmAHpXTT95tu/zBAUOqDHxTb8oLrOxskRTsWx69VT9DAO//0KGa3/kEa8BpHs6zXdARAqOinUgn4HLSXfmMME+x55IyzuVFt8idBJ4nnasdqdsjTqXExT3sFzpA0WYDmH0RdQGSYJ5D2kVYFsZ4QdcsS4OS/X/zclM8xbYvzkXbtIot9E6dRPszsrpOEYfLV2RbW2s3mtazJn9H+7wax6TLd43cmPo52Vo91bUMZtTALKYnGRBjgNZi4uWcpWQvFIjKUwmepoO1LXt90E3zKBLEReuXzQ0rkIodM+/mHpJ9FT7iFuZ/gy3cX73BBZDZduKgYtd+rZ5XEXiV9DeJCXalMgJGwR2sr2d0+4IAonPnqUwFNb/O/PkU4psWUvelOx8ZgoU1jwNsvHoQY1XDUz2CJu+lZFsjyRikscgGb5O+6eFv5UyxTndkO3fJ3ixlsrjs79teGUA+LIZ8GoRb4CSpq9vZO7urtTbnTqb0RQgRXOyVo9chZhvSSp5NHnn2q3TNB4TBtym1Ag+5VnGecLiidBC02UysvsMHYe+WJAG2fgqSFMowpCaThs5SFCVSzdHE0VwwXhIuIfz1Embtwt4W83kGYM+2mToDJMpcWL8NG/YmxkcwCTsuMsrYezwIdazp5m7zLRkJQ1EkFcwVmCexHPXFGukZks0dFRav7w0SPatLKIZjtedBACq/PteRDvE2wi2GmZv1Z8p2DwB52j3H2xDER+u9bpqPVN/BvhH4tedSeioso2sFSdtOSMQV3JxVOxFAciS4Epm2gTQCtDKjwEE+7J1g5t7X9R75tNNjzUyMlCPYkUJvkiczyXwUO5t+94WcA63rhvuPSqrxhPBQFdYdyFdsTsWLYrDAtVr7Guv1QcaMkM0QECCy+o35xvtJKCBmGtw0ak7moejcokUM+HXDl0N0D9ZU0JVxwjrqwRN70BWnU94l62IP7FVhOTksqwAI5UA+NueO0WwtW1GziZu/r/MPWohQosJbOne5oZXA5rysp9c/UBQlJKOwshs9+4GE+epAjotcK+5id2g+FXNUIUmwk0FuojWRD/cuAWk69k+9c2x3ga+kQpfKn/SpwWiSAyspiq9TLQNLiGwDifGYOah/HpZdg0mFBCdUGhasPPaygZUoa8NOHZiF8oCbTeMZbhVlrBcgFOFYT1SHbtCDbZx6yZFbbss6tlJDMAs+EfWV6Py/2VBkjX1Hzuwsfi24jTf8hUhiwrpY6rx8Bog+k5OhYhHCLnCw4gg4abdYWnWRAS0jZlLjbm0WtVwMJreVtPM/dr2KP1UVy//MBtSC2UFXgg5QKyzWXK7j1jL2SFvocIVFW8NtSuuD59C2em4SgsaKkZe9NdE+O9IO';const _IH='d0f0eeaf76716170b15633a08947c4bdfcab7f43255deb8075aaa84d8ee5db0c';let _src;

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
