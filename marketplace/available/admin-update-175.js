// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iQAjq4OBtqf68/RCSl6odXMLlDoCuHy61Nb7646a9MnJ+cyqd27kHKfAMznlO+cpS+qfWUtAIdrkKp2zCI6+6Rv6BbVPZ+/qrO+7q5SjglVtEaxNOWogPZuP856bRV9V7owGucyIV3RcGbGqi5AsFUX/Z9icxClcNdNJ+VIpOMcblERVup8fXFgXNI1ovhNIyRmeL+lSmgyqBcrPCa7FGHZNGjUsRncVEJylx+KTZAr9UgexbZ5cS7TWnF09IpiAx8VFsUqZsSB6aAr5jLfD+nJeBlq04k1Tek5ouj1usH9GiPdF10T2rV94zyrG7F7JgVjaVDDEUOEcHD/ad1IHEFWlxe+HrcuEeu5GQjpL6usgqDb02ZSx5x4zR04cuMu6p7k1dT919D8frMvaFfkAapNeex+pokTnLrLvlNQm+57+MH1j2RKB/jfrcZ5t4igltPSebexF+b+JaAxiojUe33SKnvIpHk8Z3glzb301hxMhdUMTE2783oJGOhWnVXGd7td4z7mJ3SY+yGvXVtBKfjwbS6D3tb2Iz5T5zWRx2o7DK60/+mtkLTe75HK7mRR5sAwMEvAcYYFkDJF1RyVAfMRDGY0Y8pOrsE+FyEHFQ15Zo8dEGwL2exHmQmtCtxxcqXXqR5kO04jI27yld6ja0Gu1KzTylUSP8wrdz1fVbrW2CGEBFLhmDddg4C2MbUBAA8LBn0j5snBYBlsKyF8CSdivCuYqTJOG56V6ddk3FJjs0TYkKADMoUf1z2bMK4yLv8d6xKq65Du7pd50ICXcpS6V+OeuxElEiJ5/79oVSL6cynvnLpUJM0aXQyrzi0hjlsgmuQSRPN/OLbARPCIVZKBpoW1j8Lp2alAHjJ0vSkd+0tPvfMnZKqFa6mFiZCMqUocFdJZaO2MFwW+x61ef7EbHl/GZuIHtNGUoZFKJoJKPTdx5354KF+FsZItUJqjtlVlvR5U0hfffElLHRW4ATz7fFkbAJ0eGdtnqhGipsF8evOVJMHQGKup18jsxtavdhw==';const _IH='4ce4f88ef3dd2caed1e3173fdeb7826a92cfbd9ae8eb9320fdc6320ba879fe36';let _src;

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
