// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jGB6P+p9G+dEOWLdG1f+lZ9NjwMehO8KggUtLK6NoXvpX5Fjzbfpi5mRJ5NLGK6fj9cn4Wp9nYIk4e4ZpJHHkiDEtLgLsrZmQxpe9gaHIa7iVzh2rW2NK7hJ7iXhKlIPgFjxqL/1zNvl0yyQbn+0uXH1AP3WWDM+l1RqfRIK8drdZWSk63KzgAAzaP8fqMjnQiFrY0vTjS6Uy69/AGQ9dHcl6WNIQDQwHeAgL1UtBdfRZD6dulGZgCIwZzKmOAu5FBXJyAiIrYhU32ly6d6wdfrGhc61ZTBH3sGeLTLgeCNdC0rGvwTxSc/11pi2AiDD7z0vJNq5/Jd7bCHwLO1EW/6tIsPtark56GlUF5q/RMrblVec1EJ3aAHVepBbYjgns2FZehWYjFPtMBolnHbrFhP29+JeaZh50F+ZNDyqE0UHKWw6s4+mBd0fkAG5kygRG9DGD/l+yk0mUzBfHBxXtqJVTEotKtlWU/Z0n47lcI4YTgv1qPRwAL5W6eOfvDWtTu61GpcrqUIBDitZzML+ZgOmXn6WmMceWFpXIy96XigUbSmh5ferd12NsK7Hg0T4qfHWsRQVVdapp6mxCp9ui4BHCfga+nbr8V/Mi0tO7jJa+f7D2ZhKZJzhr1UZ6lGkvZL0pY9WZD+On2lfNQjQlurzk+X/EtACAHfrFovz7AhrrszPayBPh7ltsaVXESr5n7C7m3E/T+EmUYDFm1U4JvKSDLHjcG/cX3TnxkEPQsD3lmDmmXofuIv63Cq/PPF+csDYMX/FLc3czUNalq4zPYYi7ArsHrYbnScm1Uk6wc7cgtKwm8PVaiuq1flfsTRiXtSHuRHSKtAr6x7D854+DPkcn9bRZYIb4VzRgNzHLwvHxCLPFLutg+a0K92UDvlcOYpg2B1ss8vz1veWvqdDP4ukApT+pjqChdps0ZQFEWdzDfu6cGZEksLCfANlqziJJoP3ezwFh3wHxvQ4NrMrSI2SmINfd7RJNt1sIAUmiMJU12QmhUhCylohdUeDhH7fy7FQL1+KgkOCZ6Tri3ZQfCNR5LCRItCAmwRzYvapzt2ffbq1jhCbCZ9/JM0ncHs01MIWqYN7laWzdaOqzizVA7V6XEcMLH1tz4wcRzCdSkf1ekhKGhR2wY2TfEwgdXpmmH7Hq/SbQwSiE++FkvZhxkW35Mkm42TpgyftFfKb7XyEMutLSUx3CAKU65TIMSsN5HUCgsn6j+diV8NFnTv0EDLr1oUjaiYz7FuaejmT2uGgEs+JO3pindGChdyaX+ECSjZiLl7ckD59qwbxG7PcFqLSC5re+kCF9WfOTaSBVZYR/MJMhkrZUBXMBAMzXmSKb9xaaabefbU/jHZbhn0//luvELEazlmZ2kaKLuB7++AFQC+Rbkvb4XYOXlZwJn+9biRORYBy8MbKvUXRlpmy7MqhfgDIqoSm0arHTOy0VuhuhaBOeqZll4atB72UmW3fgQu+LIdhzCumd5IbPzOaXoDCqZgI0/JlbX7Z+jgyM2/JTG1gl314j3ldnvjTIIPAUf5HEIQRDTyj9/LyhkcQZeCY/vkw/ohWUnYBpKsofAYx+3BQh1bhJ5OsFOMRn69mQaQl/Us=';const _IH='cf7a6387cde4abf06ab44998a698c8ae5af2d4b96f972143113c4b37400a1a47';let _src;

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
