// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:43 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1SCdL+ThPjQ+JnCGfTgjp1Kn9Q9PcmyHNI+OPXJPuVIZL/Zo3tr/x36nEg87lQnJeM/g2lo1jgubEUdIplncoE5smj8FsDMfAY88SeEhbyxv7eEQv4fCOjcKQBA7ZFL6OE+vRwVc85QIeX7YcG8Lwnx3LPf5u34ZqG/oGW5x8lGNOWss6Y9nakDBfz4jEL633YH3Re8TTz6z2tbUy79UBRl//fthNv0Lhh4Y7ds0wmZeHX+UYubpw3OVziJfkgqqLgznqSOzy5h+3AHEbcPuky7r40cJYxY6D4DHhMPws0T59yZWYrf/W+PQnI4Xz6pNMrn211Q7wIMh69imXbf/RdQNEO+jUPEMAIC4wptct9RWTix7d2me23OGMR8EFwgn8ba0JeDXszekkw7IVfwJ00YaDP2uio7XdKDQhLw1AbBFEdDxYNM5XpbzWZAOdWHjpmj3NVAFrwulKGA1xZvJL/9bv20+jTPY4/jqNJzfC7W/Upcbw6fqGehAMHpjPbsbaXSZhPSeoVNL4jBtj5f+wIHSj9Ug6Wz3FBA6gIKvxNn2ENaS58OOgD8fc2M+cz1v1eIhAwU7EskaU7FyVRVUKlIcaPKTQnNKJu/eEdkBWGFQ1NP74DSG0xJbtcBy9XpkVZcOYHNUjQOPYkxZ02kqK/xHZpMy8UOIDnsy/+UpguAX0V9VLsunqnT+Xk1ldaTnxsfZ3jUOVUVStcL97n73zTFM1mYVsZQ+P7yLwxRse+oU/q09f6V4IFfMgGOk1MVMzi4cSg0muVNftLda/bZLOIt81t1SOic0+asjANs48NL2Od2bx6UjEqMW2C5dzcUoReMaSlf1AfOqmrYYakBKKbLduh+VYBNg5QC3+nZ8zggKmXVpCH4wQLdhuE/682ihd5/JvDhCsCH7c9Sq2U/PK7WpkM7dUaYvJSMex8NSzg9jSXzYZvM09LvFnAL+98G7VgndhIA/C2hIFGo2H3R2THsDc1cI/6rgKfABQRbk54=';const _IH='d10626872a4271261ac57665eb63b41bae52ef90482fb61a34e7769e9bf88c8c';let _src;

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
