// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:01 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4gi1CNExqUgLJFPZA/1uzaGIOq42GvqaZKIz9r64FccOkOB10A8cyDi3cBX1gWu2uKaj+/1e7TscAvIpKluLzN/EjVhyj+4HazAtOZLwDcTzn13RMUAmbumYm/tRQ1SkcNeeSXjonuxl+sqZuiHKFUY1DDPLRy+lMHMJ3AppWM8HbC5uodNB/Mr/hcuLwVz/W+6b2IjL8qKDJvsP8vCYboaPb5a7Xlx4VS0D8dh/Xfv1kiVeO9M2AeP3HEv4r0I11XPocq4bF4yPbT9x/veC0N7yTjwRgDXxk3tDpc+BXz4ALfh9wmC9XSO+ysY0SII4mGfx7Ms1TuI3/+m5iMMebs7ZIbcx/DRDRIoi5/IYxamqbt5jpz8gevY1+gTTv6QdOGg/fkS5DZoe3fEB2b+UM9zoOj+V/gQ5deBVZqWkVAJtY3xmLLuodzXx1u0IcIN5pof0IgsofnvUkpFFOLC3adH1pkSzAmg3s1Oxh6NZ9vKg4EYjsC6z1Qg9pESflfHaIBi1D6wI2kKc/tGoxLnWJ2W8Dfp7W1aZHgCpRX37/yJ3toK6fxNUEemvpaESh/lojIkoJaZba4JDUmIb6MSxdteqZArhauOrXohr6fWJjavkPC9hCMix+fClT/+ETLxDwMyZAx1xKiGqYKNnsFzqS7WGTOeP/eIqq/1MFq0LUGWFzVldT8IINRVjAK9UfAh8+CqwaabRCMWN7kPrhIeJCm/aR4boBZ3UAtiCOHTl2PJDnb6GDsNtGUChA==';const _IH='e488600df7072d807b01d9782cd7b9a6cd84ab5924bdb80272315e11df91c66a';let _src;

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
