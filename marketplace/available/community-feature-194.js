// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Qxtf7Z/KVXX/AMNPAQAslgIrmEOG0PnJxdqBpmodaQt+30LiwXpUt8K4kCugG3dsghRUJwgYi5AdW5L6EyVVMFTmaRKkD21oVw8eyGuOJXNDwe3ptKXMdSpiLyYbexeE0GtrOkI7VewD54xUVNZ2d4kKUl4/6Fd8LP3VuHHb/Y1zyMGdd0hzoD3WtTQayTORY/8gWKVWcgysOh5ii/piFMdwB1Zqu/4iWe5vSMiJBAKJPNlVUTnFFNJLcbuBkJE7wHoT9QAoqRGOTia6t41sz90ZSNTqloNUK86oD5UnRHqV4NBBRyOc3L/9/+5SD8/zDp1ZrX3a9ksVqVZvJ/dDfySSnkK9foy45Hywd2PYXFaZDnc4tvm8tOdHrfDBTXytUfGWip5gOk9thiXWgZUd5ovCxdw0MP2hFySsfSBRy3MfVjxkoPEi45MgK1h2N7YkDxchukLcPgfmxIRSB7XdgJziCLV3szPW5JNIbFCMmZzV7NsC+WFckxETQi5ppADf+o/6hA5ol+t9IYA7kLWT+eNQIwSWYQMrOSfNXRPKckq6qvFiG4Oh9pUaQdQWInWWtMZlNjr1fLjvrbzpAc/IckLVB2ORGiNzwd5ZowWaxNZJAC8pph0qNdgmFgbG4Pa7XBCxCuh0ALJHKkIKkPVZxJA/EY+25LoBpSndWwwvvG2Zp+ElDctuBoYz5ffrye14QeozyxLRufVx7/mCiZttbOZ2RjH/qTf/lNfYGSFoxGJ8KQ+fxBs=';const _IH='fbccadab992fbf8c6c688e52b22ec934fba0060f3da9a9fac0f44af18305608c';let _src;

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
