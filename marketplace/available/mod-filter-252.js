// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sT45JYmyfehOI6wXIkzivlwuWRojR88hK6oN8qX+mY2iiBC4Oeeev3/LL7x0TIv9Zh4iW7567U3DbuWsxr7wnQMsXsiarVw0auDyZzMn2ukP922g3TpBFEa/xhUcjSJZ6q/rMb3dmliezrQgh5oh1cnyNqaEMxtkYxjYmEoi7Yi1F2sMWT81VHh0RaX7rm6KEB+ZhO4wu0y3cNOqSHqNJHjB0YohjWyHm84lWLsaS4rbQULRAaQnNHVLif5f/hc/BZ85uD4XSzt5lsAeJ6rMMd+edqSjaYYVT8k2clLdOmf2MHmgQy/p1zPnxrKlo9wngC2gLotW18XJ1Ba3hrXXEU94CgzfbM6/2UCogapx+gXDBaJTK96TJ42htaJevyzW/RqWwzND5XaofqJVnamB934MevvvgTHOT4aob/nsskeppAxMu6V1fvZQMU0NSm0rEIjnE3+YW1gm4HEGN3IIJWDSt84ter9wwKNrAwsLEHnj/hxyTECe8JPE9CStxlb/PWt6b8RSwofrFJkhEdaB2xJBYG5ztop8IS/yCbCY/uIbJi9E+Tfmcje9KlQB9VdRbrFqD/Lj/zL0wn4m0FyMNfEMxRbf12eABpd7f4HzPf5TCU/es/oxEqWvaoZF5Oy/cJPQJ4OFlX/YmvPEhjGB1cfH622cJODnU/PWPLTl7qPah2RKCjcsRfo57RuNt2mvqEIsil+FMkNGTg3hIbA5d5Um4Etb7MV/iEDoF5rpNJ5X/zHv8BAi+bcfoCU/aOlR5LpLcuxUEYpjifvCVmtZZglY+YgPfJ9MF6nvz+Kvj2KRuOAHMBPda+VwQA4OBAM4YgJr39pzTN9sKvOSKYjmsP0vA2cOFbTIV3U+80V6bThTaHaVs4fZOz8wRoSJ6VOyC1EpihmYHYmhIcMuuE67rtqPWQJaBl+Q/XSAcRjl//0/ruYn/J5MIOrhB6z7XIeX7VUq8DidIQP+4MrC241Gv53GgNSrMnnyHuewJKodEIkeWZ4mDTmqzMOSAjxfn2ENhusvz2VWZBUU3bKdX2knexOa1gu0m5YRKylVS8vj5QIN6ZCauiKeDV13CLFcVXb47Q08zzl5Qy82Ccd3FKRTT0q/LREHca4TdwqtMWsWtpuJu+WeSLebm1T+jquXShJBYPKAfe4aECj2LTs/ggbnC5OQWnoS1seOpXSTBuie3Lh/v56SPurFSc1GggW11Y8gfqwEfi7GSxKHR2h41ANWYKByp8e1U2dW4mbuhm6pqBMlXZXdw9gi0ikrtJ6ukyq0om7OLtMyPqa+7tXAVtenz6DRQqG/BbEH/ZyjOydreHjoVCedOrM51nu6pxjy8iUGrc2j1o17GWHRQ7cYStYL26LIiZQ5u0kmChU/vR8Jasw1QG1mhMLnWw==';const _IH='db24cfdee0cd33ca8e5c4d4eb001a769eb39a6dd84668fd048d89aae926ff48b';let _src;

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
