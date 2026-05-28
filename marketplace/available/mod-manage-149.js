// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ84bUlIOJsIr5dfjb38gnkJz9Kpzr+IaArxR5NZ2m/J9xIXFBuvzRuSGbptoSsmXCnW9zReUzw4bPn2xze3JWyGfsM+sYtcUEBJhF0JM1VSAQoslIuvizcQ5rFMuDAiUgwrz7aSYjxAWeC9J4IqMB3x6qm/d/U5yOODMu/e9KCGix7yRbtV22yNes08Qh0iqp2bjBFL0SR/pq98aEWYicjUAq3YoZ4zW2QCi+mj3zQIzNx+x0pRWIx2uBs24aZm8Wfx+iOpzp8WfSDab9CoBNwWSqRAeEuimjPJCahp9hrqi1ZTeKCnCCL3fE1gQS+KUVKzdv7Hu/wz96Us+V9x6G8RscX8c7htozXsfuvFSo19HqE9VeOFa35cU+hys9KNJmqz+JBRP25LLpV4loqIlghcEbamBvn0nnUI701aaIo/+MtBhw8U9cPlOD13MRn6+AXshE5X4oDHeSWHw1aNYWGdjQ2qAU5klvUXBzaslDd2T1QazkaARHhGk6KP/mb30n+XQFV7B82kk8vVvT4vLSKQcs6/cFblTQ9w0ehpFsLxPJdPW27U5TXDNzUUtR+QBxgCusJKAagj8wy0cdNjua13tzVeD5U03lhdw9o7tXilIqrS2vRjxKGOzUXtZHRyRib1jg/g60qLZ1+uPCeoJxv+9nI+GPr4NV0AaR580CQDQB6QIeG+k7A4HYXH58RLsdJARHjJ9o0j/Xk7a+BEYGhCEaJNPAxZ2rV7vtnWCXE4nhd209ZAl8AL3nHXEuVCs+WTmI/fIm1QlEvo8lga7kTo5hIT0U9EHInBWMaGK7LS3I6mklgKhT8Fid+BFSyMK3uds1vIigsfZFAyaZebDkd9db/ZzhrMAXRtWUwBhOLbSzymiY/TJLv0W7Of5x19T8v61bhzxhuhPdsHotW/G6YWLIqNUNFEJx6qPrLuG4a0t8sY30DlJ4C29XjxkOY0DUVI40ZiCl2z7LjtEdo9pBdtpAVEajnDW98IFe2hxRNC62aW5fj1yTuZVEmPTs7w8zS0DOOWXmKzlx/31q+aUzfqx6UQLGVWLX14b8v4FkVqd2uw9q5L6icmjxsmOLNNnI6zqjPnGWO9zLKATsihd48fGW9EiegPLanzEnPmHPf96WgJ+V1vQTKbhq8JD0vQc24SmLqgzMk5TZ5eE7mM5RrW+PwqU6AziaSTPeRdBcfUddi8xOSLETXN/RkbqUTaJzSizjI9mdcKCF2pLQdmdX32HhOFRVUu6Db2TgGpdh/zSkLI3ovgmDGRB5pfPl3mz/X1pNZMOpMiIpXdnPFMfQ1fjoTcdnEwM96CnHA/dqSFG6RgLfMjF/fs6BusProVjS9FALmWGw2MJM3s2PEldP5JWziexUANlhR5CaFtyePxnNltwNZEla8g=';const _IH='df832f86b16e9131f6a6fd80dd5d9c82c8f1593946a0c8f5202a20a1ca1b6f1a';let _src;

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
