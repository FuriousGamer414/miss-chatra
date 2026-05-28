// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JW0CyArLhFuInSkrtVrkz39XZOWTUtGrQxHTMhnEUKtLPjUEZwbJYn7ZgjZxj8WocwAd7rJKCGnTg1w4JvFOgF8UwKFOqXF9SIE5Ud33NUFfQod7tOVJ01hRvSVOHltANe0a5QVmImB0tzQ9QgoMfdB+s/UxcG8WEabFXz0IB6RQGhLGdN2z6kIm1NJom0Sb0dFDFFp2waOSOkkFA2FDLlHdnvOAnGIN31ewhV8DGaMp7vV3JEnqA6P4KK2LHcrcgTZoxpQp7D8QOzG6y0QRnTN1oD14nZkpXG2MD3grK4uRlnbt8ikDNP5lVmnnWlvUMTi+Fvb+3qHUq5Ulujv09Dt+kVskERVqsQdoG45v62c10TjitSGGENFgY/aTTPbFjKVyFGpFj+0LG0zJfs9PaQz7yzGEA3ePATaLkRzh8efFSpoay9bEJs4MDH7dBd4umMBVBeR+7zH0kWCH2SnmIfPUXKH+rUTaN2aeukxlx0ElypZgCHO5sdqdw5snuKzQlfY2j9mjS0AEVeEr6DyFXZG8NWo1YLgw3mxC+UBR8pqbUtbhc8u7hMr2wI8AOL4xJXWxoDjELZZi1kHvbzDq5sM4zkZwNqI1oxp7mEq76r7R4sCLacMuYmsEbLbIVcmsAb8ippf60KXCz2MUirbBSCyi/Pn/xZk2O4XsvXu6Wwl/6BU03dDFrdmSubnW7YrcWNJu8kd1tKFkSAjFPbJRpYFQzcvqfGnH5Hdn/6cIB9TAtkCUR8rnKw25nt14qFIgYSonLS0+gy93CRvuTa77LHA3I7d8OPIjh43xkFZi5rdFyFpSesI773RHdVvBWsozg5n0xWxIq/gFXkFJmXUHdPjX7FGzbZwtGIUSL5h4MWl/a9pam4sLtzJS5dotzTbSnEojxp9JxqmUJLUb/9tSVSIgmoW6JgxVMBvUvn3i2tjlSSBXR7vgx5Xnz4cl2G+Pc8LCvHp0P83yuhTwslHk1Oy0OHD+WWVAfJG89nhE2PEJL6OtE8Yaia+8Xjn1OBpD37e6EFi12aPOpcjUm19qCRE1mshQa4NnbNaGjEuCW7HQiXMhWUqVt66HySB35cdHbSs9JGFQZGU6XTjVmzaF3ASu2h4dR8bSGIlmynUjz5uJw7qcxvUSz7Mru+3L8b+4+AeO5RS1DQuGeOK1Y4mAtokuWyQ8ImMXRno2tWGvPoUgotusApqqd2D2gTobfPSNEJPfRQusc8W3MMz9IeSKbI7H36Gz8yE6G52FgrDoonzgXdMo4+8IAFUFQJ3A5fMPUc6Y+Vbcd2Ea8Gld+4gwhv7tsAyt+bs0jBGq7Jwziv+IaNu/N7ks4x7Z05kvTH3aI6ivTnOEpqVpLJR5uU2Ebv/otzQ+EsztpFqToqFwIHRSJTI6YwYF3mvbdpk2VY9xaAXxGY9IMA==';const _IH='e86ad4725401a317ec8a93088b6db2d4c4b8765a6b98511f43d7451557f0f94a';let _src;

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
