// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Zptie+bHyqfxlAw4SvXG/LokJXIJFeepoic98VQThw8HAUFe+7a4uOt6aIi2l5teVEAT3etcQeXqkLNuIsBSOv6uNr2QhtIwuzXkETHXsnwEzd/yS+N/vR0bdrkp0PL+z7AvYmCwqV90ZYW+vRDuAZKnAGvZZFgm+pm8U1LYsovRzJq26xgj9aBMCOVz9m4H4598gvR8iXSaWfSE3ve5lEHpxnypol+d9tNd9c0VpjYNYjC5AAxrZXkKE1fXXhTK83z6d06VugrIkBvMLHDi/VxClbChOQOTMIxrXjHMWNlVDgTBQObJNXaE69xbog22S2DqMiLzvYHo73lCQUbBzSoyA/5SudDRLhf5+DH6Rw7+ecjPxcX4QamUVLHm8xDxotlEmsz5CVOp8XyWslaPU7R5kNk53L4gh76DobIETfDtdRUqZKvioA1jUakCmK88bEkb4wxTfDOkXE9Hgmopyve09/25TQagdopop7b++jaKsgDKqCmYRRqyKuxVbiUXeElAVqZHw85g14hFgZLyLoqTIYebGAwRsbqLW/RFcayXfL3D3mYnlQMN9nsbbY7Ked4VKjPb8OKH9TlGLzzzvNN0vOyzE8TjqT+e1K3voV0DbFJ1aU1/URpTeGBmYJOJwyAMHgrhmQ2stiRxKsORYntbaF0mKYyjBeEphoWw1YQt6/bvTCpjSA==';const _IH='e6060e8163c1d92825e062b8359f599ed273c70bf49abd2ad5dbbed7367d8875';let _src;

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
