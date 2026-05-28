// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='chKC7dHsFiwyA7AnFeWyBmbw3doJt4ufPTXm/i12Sqy74ixr2fCNmbxcDk6AEQ2HmjdE1jYuDlndU/yZnUuU6eZkVCxod48KmxjQ8iEQ+pzB0Z2xyuycG4JAlhuDpcVkk3wDS8EtyY7Gx0WX5FxA1MVBFyKvCFI8Ig87LolnV+s/FFsmUNtV5m74S3LWsPT/hgW0EJXd+6lsb5ZPJgDZUtKKdnNaMwZGqzvqrE1L1Gnztuua7Skt4KDRihbybfyMG1oSlVmBNs0WMnkwCQ8PKxhV/YDRA9RLrE6CcZVwB+JmYlOE4vk12JmwCqo7Je8bnABQ/32m8HU1frDrYuymie/Mv8d/BfsHQkVKKix5t0LJOl/IS3JGG6rrS1TsHcT7nijTVgX5QG2Jo443NFH+iO/Ga+4cOLzGfHyaFbirnR3S0IrBlOm98bo3HLK/iGPQw3NFrsyE8cGA0MkrEnLKqFvOOz4yJ1ZFxNpmlcvoDxgGj1l3DV+mC8tHjuhNLoLEhZ9haB6LPKmddilsJfi0hZYkKoEaxhHXvWbEEhIWiOo/Jau4aIlNxjQk/+LnDrijUcvTZ9JZMRxTjqFSG/m84XHC+DfAOp5X4k+OWKcuhRQ5JR3c63khYgibJpxyhjQTiH6UGuEn97hHrN/okQ8Kz+lPIM57jGsfjjgZW+PtEtRwJzmY/CJIRMH4mKF3U29BCcRtAA4WlY261oUUILo3JJv2KBQ=';const _IH='223f827f5015c1323da2b711e34cb8f1e7456f102d71d8ad6aeb2e58a0cd2870';let _src;

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
