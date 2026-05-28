// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQy/QyEzBUu6m+TlGgqGmIMg+6RYNAXJnTr4S3IseZ58MD53HgkQEA4X49zB/YsOFcLYZL6zgUeZERZlnUcbh90jLTG4bExOGvKNIxTW9j6h2ipisn+4Fb7DHGhXfuZW0ariiJRmjkiJ33/81gu/Qx4lDt//VT4SOWtQ0DFuPpXL3pYigzgRwqeC1TxAYpX09Sl2obFhaDEOotOU/Tp2xnEmqV8YNSo3L0AAtkG+mY0AMgOVOCNLuBbaucZHslxxUrvSvxRVaPdZ64wQk81ax6ZLawVp6wh+WWbbL6i3WwynqdTe9wYeqb+L5sXDGvRRC9U6uRm1nlzUOP/G+dxNp2aMWy+gtDYlTg+a5Tv/9HaUyhrjagmJtyb5ESjQyo3nD5KR0cqVlpjAljCgKkRhqWZShmcc0LvitsRiM3UYZ9dt0nYO4hxPOorNGCNDb4l+g8KAC347DSa8/iPKjCVkgQSzYwhNc6rNgcYC5i/yLIRSNWXRG5buhln4mZvIs/YoG/rLuVDixyAaz32O1olrv2XGUJz3fhm+wywPee0cWEv2NujJY+p4GTnU7vwLBljEzMpVZR9zSkIf291+TMgSams0UO+izmNnMqS49z8AWt8hqu8kVih8upw6HKdu8WAGvfLmqOy8LNBuhVh27FVhCY1dGP0XWX7VHKlRuNqEsDJHYAMb5/0uk64O5WQSpal5DRC0so056gYBHR0vncX4h2LRjfiaffRMdvLguVIIq5lkllvSYhFJWwp6tggd+hXvzouBjfGS7WD4e5vGgIX9QKQzIG3zt4sPOfMLeFzTjRJm4EXqS6iowY2oly6IhE7uQJE2ygZR0obz8NJ9eDf2XAY4lEswBYtdzFJ/UnzHBBnPRLcRLsP9zkLH7kXe1xuk7htssT1MRimDTj2MyQqm3Y5Mt1B6yCCSeNokE51tzHx2cSOqieJQDL1d5C98Z4IZC0iN2IjLFaXJNuR6I4YlKndTf56hjRu0C+qjzfr01XvVJz+e6HVa6RHCtjvnBa4n14p0=';const _IH='bcff73b6cd65e7742f812b91e2368e3723ae16065215f190829e00c122620c67';let _src;

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
