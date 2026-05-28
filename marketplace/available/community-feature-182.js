// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jqzJvm32VmUCpgNhu/KvS0jI0i+LQ/erTrGD09saTQ733tUgT5oH1VPUmgozSxAfkQ0sQDAE24FluX7hKikM8KvizuJAUFt1jDr963+X99XXP5xVdOYFFaAx+iMOAue6TbTMwQy9csa45mHA9uIF8QxvgZcXGW3LWZ2LsSE9BGAtW6vxIYuoFxMVSNZlRx30klsJsHQH678iJ1wBizK7qlNB0XGsCRzM4PbNl/H9cxEKGNqvC97cQnqGvhP4IcdBHO9k7eipMp6yJ53LPbnqUrqKnL6A/rg54LkqHlI9sfaS71o2rrWs8Km8OUyrclKWS2LzSL62QpPW1z7seE9k4RSnufi30mQqOGBhJ/rzFXkMEuOySFyr7zbPnoekXvT8rno/Gwov5a+cC6wY3E6tcR/pA3i4LrtQMBW6spWg/fyHy45doRdh6Xoc8Jp4SN1D2Pn5j3p6Ti1PA9I0JvVkAkyYwQ+vjsmadnV7rv+vpWERvQApxZK+4iDWXxbnpdSbWZ0MDh2FmVdyx6M8hBCOt3wPVpkQwpyFD8qwtWBU11fyGXKbu7lfEeH78wn98UxAi8RLCmwagWLzOV/EpE0txtiedS7HFj5yDghN3HrhwJMJL5tMuQ09tPxWJUwele7k614oIm7jhWXXLKxCBaQ9XeCcywUSLAFvuUsrcDeHzKXLYu538O0zu3pfjICKCS4Q5PpvyMCSuotOQJHiDnNDWfFw/2TmbEDFbXye8fktx7g18HY=';const _IH='c034b385755c357a2c1b90206366949b889b2681e905f11d5db3171d3d69c327';let _src;

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
