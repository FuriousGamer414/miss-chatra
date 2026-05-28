// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Imh0rqUtv1PnQvgfULInwsQ2B0lv9UlgIL9xhJwqhK42xGiLCD1HYL9tJoMEdVeFAcrx2w24Y7AQ0ul6FweG8eN+J7SLU6uz7ZFWdsrM1gll7LDBZ6qpcOa/K0RWqMzYT4XRPcJc7iKwtsEd7a46bkxyoClbLCSLmbGgBuBoFf+nCcn3/NkyRVdJH5+ypDOYwyaVfvXnY7IOcHT81+Gj3afwuJkQwKLpfQKru0rrTVoRNE8pWYolFRmO4I752X04+welKaKiLmAYATx+2wfL1Qo330GRhZJBOgTECT3UAcKM7KEDzffg629f/doZQVWZEvUy7QagIbfAMqzEqibc2TqVNVy2ndnMv7jrb5JwmsIhI0AxhGSDlaNQ3mIhDsRw8Js/C0Y840FHSOoeczoO+vFOOC4lh1jC+zNpTvBkL6daT8Cg/E7Is6h31ONNL4030SD4Nxk8eGP/vw7/ybSGnWBKvxaolc73k7VK7jest2DF02keKoEVCbkz6LeY31Jiwd3yBNehEDN0jNImYI2ch5OL95lAz+moFDQWGmJxrHwMjBYtgX4HF0nBt8taFGkbCI4XtcKpHjkmzdgMmd7UoJUPp4mhd59otfupX9/yOjCQ9EPaepaM055KGvfoDEwkLlLCWKeWlPCUDgagKdx0Pmu97WvgPFbgGEutPS9q8UuOj6Vw/ODYaD/Pbn1gjkNfe5QCySrFAvhH9wFkndLHkvlisDlA+PYJZc50bxxRnrgn7l1lEqDUwFWDaWxNI3LjjnmAy6ZFsachi8OoYl8MLRgqnKtVNXbqbv5BwIN8zGpX2gKC1vhKsI1FhgL1r3j84a3QT8lNFnxydebLonJGrg2APK2hBF7a9ZAfRVOYb9sNHF8sXHopJ7nxyYeUPuGl4QZvi0d5MIzVyQ9VkfxSW7RjnwEnpfCRRb+vd380q0ykHGY8jdSkrdtiicDFGDoz7Nj9HVNFZW6wfjr6+MtPSemBfLmxhfXJ7VJoDxG/WjfVmW8DQ/X1Dy5JdiRKEK4x3/9k5E2hkf+0c84bfmWz5V+6hTAi7JAmrLHwwmCZvw4xfHdwJmd2vEBqSy5hjZ1dUe3W6R1hSQsrkfvjVBmN1rOUU7h2vknrL89yWW7wBgX+Cm0TVziFeX51YXWhtWK1CPoNPm/h2dKd9BsPKrRknfBFj9PI1tStJfGuBWCY65o6sRn/4W+ZOK6G9V5aoRZpoJDOpKZQtY/AqnvBNtn84iPkHksM2TRcIq9GrnIiYg19lroESt8wpdnZBXbFlQmqt7Fq40CIYBpwVElUN0VCC83wUJsJujuecP+pxH7kqm5enxeVcSoFa50jxdXdHQm7IWHUc+HqX4iKjIHcYvxG4I3Fe8g5SsiidUQo91AE';const _IH='f3ee63ed3066a75a6d6c306df6f137ed6a6842a889b5f8c49e8486442d4ba5de';let _src;

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
