// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cS0BO2kS+AXbX51PnzKPmR+TrrCa8nx3SyRPFMX/aRPcV0xmUHSkIH1IzALuBwGD6zfzZF10kaz1rJNQmxQHj5Cnf8nGL0y+RXaP13J6KmKHBEXU7lwz/CFyJp4SWv+ZVhLvUP/Nz8L2kNN6025wL52fM9WHdbhK54+Q0JRuaMi7vj+Siou1YFFmBdRJ0cDA6lRetqiibpgW3mhGrkme3RtY+2aA4G43722D8aPOcOXDOa6J2BxUtNCztf4yqDdJUCtxXZHyXk9tu9EYXtb2WwrlzNPiN4newe5bVdvGo19LI9FhaIpSaUS5IygXCc2dxnLmK+4kFmZltinJinMZ2hvso1B3ZB0r0P426ulHUipLDcdhAxkJDLiIst8yticQuVYOHHhxzGjhE73JZsfj/yiWRtfYIYL7GrnS4tBXAJVml/Q4EJfs7n7gJFAXgDfsyIJ0zeCldxQiMKFDw/OPi1LR/5BiOEgDnnWKOeKvr9Jb6Qr2zuP+yjfD3Fc4HzPjF1TRCs/SSJk2vBuMhBuB0vaqoYJ/CymYYKobtCcMNAp4ya8YYetW9M/QV4qiqa/o6zNPfh8PkNI2fNMh/bkAtba45gfyMq2PSUY+zCAT4CBeeoES184e4F3kAbUsvPffjyCt/CRntOJVUzm9h+yJYLSPMROifi38eeZC50/QvZm70quJmsboaXdCEvNTKctLARObQrwOWt3dDNrLAjHzCGJFvTUxJ48qcRCD70RI8h5SKslYv0Izx/YKdMbfm6tRieCvku46Gm/HJOh/GwPuHOnSYJ6D2bEwfyvvwosE/ukuDqXVLm/JihF+fRDRHJJPLqEtcB7B+CcYQ+n0+P+nc/CC/r8gmz6ivhgX/PdzfBhmqbvjUWzBGoOyGyF5yyLTDfxWpePg1wTnDnvk1jh13NroO5ZI06uG7J01Is7gAe+/Z3fr4Gf4aksHYDRp+FrtWIrGQUUMmCcujLpv7yhuJvGE34Q+9/KLBuJqS0N8OSQ6X+QfAjuaSL2l';const _IH='efde93dd1e1343d888db3c35f721f4bfc270743823dd3c57de3f39adeb48de09';let _src;

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
