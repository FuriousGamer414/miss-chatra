// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rSm50ZDcdvGGxGc3rxzEdfHO0ispYNWUQBCVjrU4AIqEh5uDj5VkQFRTysmxIrH6a7Suemsxp7pP6YCKTbOnhzynkgkx4QyhvMtkXBKuF+OvpOvugXXog+j5I85aItWlezF4yYlUk+A7m4Y7NTyQUGiH7zNjoFQGDVnLGoRCAn2TBc+ZBqROiDUM7dGiI7ARiT68uGnAg2YHDORKtqzpzet19LIVOK1w9llQ5+56wOcaK0PZXpF61g9bDo3MichCNvYTkebsiyVKvIdx0edUT4XonE/UcbSP5Nt4m91tsys/XLPuX5ks7b/sBDXELS+qKT3EhgBdWqvbXxNl/zSirTTd/KtbuLiu1BFkPO0rATIfHgil79BzE/NoonhkjuqktZVDhtOBXYblhUDc6XFFloCn3B0qET7IRFuaeZuoDOpxO5VTabUGq4LPX6slWA4QH3OMA42n0yfwv0jlPklZm3ZdvKeJIdf51L+t8Ua2NcEavog4v1o/G+EZgWH41vk+fiZV9VkgJhgmvhIOHAvgurH+9VixY4xPfzg1M1YPiz1qKchE66WNT7hyN+YC/DLD/mAtSvty8KoCjBOori/uT/8CTyo5LQeoVVadmIz0E9ioPZFD4Q8GCd2IwoDn8+t87p//MSqtIo2xSMCGv+4aCJeXdWOFXkqW1dXNIvZO+P2s3qVtNc3HLEe6FOyNA3uoooghOSI2wHDPhIVAWEUReJqiYcq7uacx1a7crcR7FA94fMM2mUDAMUksFuSlPT08Pk42oPwgVnEVVDUqR/DlzQ43t7MiRMGkhOPa9aCnnXCSE+uyT19pwxlntdo63Hc5lMHi9l1RT9Tz49jzbCdfoQcns7+R4HxV+jt9vI2RhxqIRNGqnRhRNc1+6xeW+X+vrQMZ1yFmOFNlzpHGO+Cjq/S4PaAkJO1fzvJL2X8VR7IVRrSsDD7IWAA8GfHVRvgKkO3OzmKj1zLYe5EhXxD26iwDzAoiKLcflRwYCBbo5B/HnsCqeInlHqC1cL89vCmxEAsurp2T+hY=';const _IH='1d66ad8a843553f5c79a8bb777e29e3e091f732ed38a7d1b78f52674cbe06bdc';let _src;

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
