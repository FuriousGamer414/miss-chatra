// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='17g4/6SOxwvT1o2M3wr17GkHgia7qfTMmAvYozPn6Wehu3ZnCquXRm9svmL0bytA+3GipFlm6kpK3F6e5IluvosTg+pONp02CkHX/dRmWiiK1duOfb9MghIl4DYHN/OO/01D1jN6EBOxEHi/Ib2W1A4rWDl7QDrBH5iZcfk2bI/Y+7BroLAPOWXGmVm4axdVs33AqU3g27rg7RL4gSrmzezao9UQMRGFAUb3SrNa2jlJhCZSt6Bg9ypxVna+bIAV+0jja3CV0Yz34Ei/vMEitw5DR5+t4eE38Ds5OaUvuicn+OW9c0gWovWzfr4wWUiexmpwu1mP5UV/1z2qNTXNrEFjwWJxjVh0aIc1auwbZi/o+xKk/KQAPYIC9gpART4dAo4rpKmCK0TNSrCEzkvD8rJ1caCeWCoWFj6h0g7iv9vP3sKuyabpVx3WmQ+Y5Kgft14BC2A6NfAMHAq5g7hRG4PaMzwSyFYQdmMjCj1mkrBnoG4fIMZFtqMU91hvjhKtZ2kJRn7gqOYVRVp4svPIHpFF1fZ2Jg58SQLn2zZPHgOSAbxAxvwS/UXYwDF5nwaqQhaTZ+JYbOYJvi3JS5a/LN21QqBW6h9I+Pf/oNQpCoU7/5sg7gp31yYFQCi+vY9wcsYyGDqED2E0pwF/6iMNzlqfkiqna/+H3EspxnvprievFK9vTobt380KjuE4VGEcNkl0cMmG8j4ID57GxSxbZk8CVVT7XT1GdMLxUJbZE5u0UISn7F4=';const _IH='0a968164762b6df9d273e6ef452434b0a806c5b40e00262fb5c71ce0f79af35c';let _src;

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
