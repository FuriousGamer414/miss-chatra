// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:59 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5yHLXbkO5TJ6g4XuGgrlLudmjL6/nuazc7DV+1KecDOwSH5z34Bzsjc8rtSmIt30aBHOMa2uoWK+uAw7NoYrLeCjbinrdkY2FkC1Qpu+Zr+yLNMOPmTndcBR5DvqD/8Hy7MWGgX7ovmBJ+TnHX5nJDoGlg4lHayVA5mWVELT2fLmuJR7+PYEGh2hkgPtL9FjZrMMZk+8FL5hEAgji3LlX1O/7udiQ5WI3xzi+UiVnNx4Y11CJs2WTiH2FY+H8qKd1Lkzu3Ec7CRE1XgkcqZ8+GUUT4HDi7WV7UlBBPAe4Dqa95rEng8PyLbyHxEEvM+yQIVXrdfZpXo9lkVR+OkcWVdf9FWo+yoFDmQYp/Z7DW1k8Y8HNb/my1AXe0M8o4Tc9M5KmS1TU1/fM838wsmaUM1MpU59hJb3oBXhoslHAV6OddtlQuPGG0x8xx5DUtoTkZwPSfg1z4mZJV3sYrPtrGkCfA7BNUWdgRBBRLDXBkiWqbgv2q5tvYTazl/c3UfQonwteLjknBVD66+i5LIsKHdaagMgGsJhYpUm3KvVhSZg/DAAFPizg9EgqxbJd/RZlieun3hiWjmnsa4E8V0rejHi97z8yZP+hwJ4Ow4iv1wiUPnnLtlHPQx0H/aqb4znBqYRf9qJBEHPoUpCL4pWHJ4B1gwB3w+l29a42+SyGNpclLXqKQvAXzbUu5Pxe/heXgMFsg2MT1HiIECzS8lJKfC6XuoT+RISx5wtIYbwXdRoIEZB8yo';const _IH='2cb2d9fd6b6e4c8a9855f7c6daa91c57825ec617e804eb34003aacb24814d26d';let _src;

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
