// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:13 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQz8QhkXIQ4NLIsoqDJr6FX3mNlpbIu7F5hG1RJji0fqBE6owSE3WJogMCVa4ewIfpORYY6SG8AU9g9WHHzzBaAbxbzc6IpjR/nBPEOYQ35FMGG+S8Zysi4fIhRLf7hFuXY3iWbtl+1c/K1yPQ8BBk9gkIRJJivhoFTG4ZSR7bIhTr9nxUEy0vBrWWtzmza8W8LNKKuomgUF3Q5MRjmEY8TnsbRz40yVSBHJt1YjXoDxYMIYiNLf5DLYteREqR5M5Sq4uCHWNDDXPWHWID+kxHST4HHOAkQB2cnMJ0tLATK6DtsygLkyE3WOb5SDTDztXvHwNYua/H588YWzhayaArzF7fp9fwXfEAqWgggSUyk+E6moRCkub+n7nhywJ+GycGmduJ4gkdLr0YsN3ORhalXDN3jnLi16pWE+I+2fVbjlOfwGzZMicMp4Oe5sqY/CLQRWeVsme82DxHwho1gwRqX2M38f6RwySP8wULku5asa2LbQ9vBKSF1Wm80wdT73Ek5H0+3R+OtbWrlPDL25IqeKHj/UY/Ig1IUoOCXwbJQ3OlIV69eNH05i/B8CyGc6GAqKeXDo8dbHUwCQoXqBYCc+0CeLXPAZqZM5rig8UvRwEchbke1K4agwGYvt5rqTdDhIxqLfWoRSUo2L5P6ySFZK7iMpzu3TFVsRPDKqzIP9FJbwEn9JBFp/c7AAtSf254g+rUQ4H/tbfvCF0hJZV2SFBrCP+ZjubpvmnYBngMNsq0ezi5t3lNsOfhgS9cwbdUgMOhPcN8vFnvoauC4oa4UaW2RiTfuS7Kb2KrUkWAEI2dQEmqFGd58L797zbP6RAXO7iUBfVK6dM7LmTIeReDauEAt1xSmYigNSBnDGsfhuKYSpECCTHJOrGlZbrUpYEf4NA+cG9yxkZHUI7mFopo2dTaqReycUYo4fIVAMjQEFwnui6KipHbVe9M9XlUNMs9qlffsbpcCfcsXUrk2PR6Spw85teT+22B9cmzuDiS4D7A+sAC7CoLj7oOsvT2O+LiF58rFZ09LDnrWHTKU5ATo2ph9xDl8cRins9XOoxJBcxhyerbxwEDjMId4qrCKptY1o1Ol3wyv72TdwWo0TahSHnIS3LttMECkDpLcJKInew9ELfSzwAndu0rsXB4qLUb7JrYQ15S8dg545KDISklqxwzX9X1QVhFmIxwczkjoEVLaX0JOkJ88NaX0x7XMk1PWOT9+Z4Q6akBA0=';const _IH='a53d0350042cc945d163c8dd89a71e1094de8519bb795286ff53844b1508a041';let _src;

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
