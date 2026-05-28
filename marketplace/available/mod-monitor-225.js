// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:43 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1AM+GUUoOPzEP/ujD2ZrAHrNei1U2/RE87JEtJ5/wmU00kk5f4SI9/+fqBw4ms3dGq1jy6rnKvNWxmMR07z6GCHIM9Q4loEkkV7VFYTSScZuq/IJwKPTj7u3qIxKiXLMEeTmtOyFWVKKFrU6YYqL3fewLp4BrdFerlWhG+qW2Nu4XVXTPDZPJEbD6RN8SedGJXZh6If0JroWDPHIm1v9ftwUAV1OwCNTETXScAZyuJIurmSCV/xq/0LxHlpZ/4ED3YNXCv2cd7JGoOnfrQjuTqNO26VRHFC+bn/ScTf8nFSjUqOPFc5JU1I/3dTxI4FrQpOkTTRghKIDRSbmsgM8V1EKEuUxTi6amc25TDyZO6FDMEq2qC0H60YnpQnb24gZtqb+tq6k2SkXr3UnBk6SE1aXpKWY+ta/9p2W4ZGpMQHM8fsyidPqGhYir5VncZMnPIbjZMIiNiRBJXe3FVhN0DDKCVrZkPzCS+sEqWtlO+cviSdl8DTT9t+L9JRtYqUY5l88Gn9ou9C3TtAuBjozkAJGy2puPlC89vTHvzDLaOQwm4n4n0rZHHFJ6soMt0KBUO+v1nHkvYau8HkyrtoXkrSAHR1lV0RPuWOKqvXCOv/gxN6ncN1ovNjcroJELP15DQls6gw+TWQA61Gu/YHhdYiqNkQie9wO6POopniiPcwQ1ixcuaKxSF1m0zG3kgQnOhzA/MDClq3Qwi2OSK0R316ZR4dc8f/QufIZ5LzozeG6Egn2YUR8v4Lw9RxoBodjXP8al1LaE6pnXIAk+Smk/OpTYdB5zI6xMbbGZXyStY4/yIAhOTBLs/5kj6LZRcEO/tjqcCFZdfPjIcEXPsnbe8WbdMM19t9xbg4IY/uvXtruea6ZQxTut13W1LeD1jAgc85D57xXpVPO1ly4WlRicL06aTqVcRu5ZMNjIpHi8QgeJ9mv/Rfl/WT6YYgLi91Lfwixr5N1wHjuM3o++gVqbRUuAeUC4Mce5kpruGLTAB+eXC0qv6QdiHqHRX/PD36mQbW+HrD+25fH6C64kpw7wXHndioXHWNyk1TadbOsdcY4bc8k+Fszb0lTgcWFduXH/AGfW99jdy1annCcfWBKjM3R7MU7nJxgwr5N6qLwisLDxkoIbj7EYdRTbV6aw3t/euwNEDQqGJGU9Y2RCRjzc3/6lwRh9o3Zk47plLPIfcAVyQHJY/eddsnMF82qfE7VTn9weBwI/CsSKfrft/+OYqOyaG2vFJHE3GepmEO2QyljJQDAula34NBin2E3t6sSgDq6yZEPszZuw6W9cTh4OZ/syVTiaxVsPiHhK88V143EKvdv557iX8SgfoBNlkeg59ECzjPYPaOO0c5H5zNK37CFYc9SDeHu8wSCNQER4GnG6+kw8OReUJ8vg6ECSXJUHPF';const _IH='0bc932e363124b72b7bf2621f33403805cbaf95b4815a7691f8d823fe376704a';let _src;

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
