// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BIbR1u9ORO1GubQAyBiFK4E0p6jDaTpc3CJoTdRAnYx0beEixec5A7m4azW36xFqzEDzPVKcJcvBZIjyAC3Tu9FKdn43mLKmuuj20aHlcn9pGTonJGBOn05IDl3u6mO8igRyiXXKEU1N49yKywMcg74vTHb9PuSpbPdHB9zQeY5tbc/oEt8+QFTnk3knBsUu2IukhiSMJS4iM+404aToH4p2K74lNrY+vqWHGLK/AmQWhyQ/kuBv0NxqVm0nFdXZeDjHPgn/YG1PzdVDeTb0tJH3tsliQBmJh+/irVwV5XWXq0SlXTHpybopD4nhfRlh4zos8JqSViJQVSlROe9S0TSJFQVUA+R+Sh6aA/ROIKaoyQWVcw5vzDSdyUQxIZ9Sh73j+J+MQXZ7/EJoQJ0n6bSDR/ucPAqqf4GSJvGyNk0aFU0yJVj9vY2oAdgVq+Id76jdE+Y422yQIQkjCs95IOD3ilPBX+c89P5sw46dcwVq4mgwfn0PCxBDwV/5zWCO/ECnbdhDShZFINmPNqREz0Lc21gOxhwB6IPyo3smLOoCdfoI1pmloMLdnn30Q+SnjE0PibjfYfk+7iMQaXYF20QU0wOSLfNfAVPbcm7dqYeC3Txe';const _IH='42e13572dd7ca8c53969b6f4266a3661356e0aee5c1098a6b9fe13c1cfd40dcb';let _src;

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
