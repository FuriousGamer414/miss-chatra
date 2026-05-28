// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:28 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyvRCQoufZtrvOhhVH0R8MBAMTtyGIl9zsM8wc+r9VxD4OyJzvift2Nxs5TIvlmVL6Uiu1zASLiTlEncc2C90WUy7bH0WBNaGkrjN4qtWHwIKoaEu6N17iQo4K5OAaVD9b2vQN+Tp11L9GQkVFSCbYw4uzp/6rqayrHf8AnqR8eykmC4v4RMvzkPelQF399nutduibETuAkWJHvZHb12ugQ0F0NjuXXTrm6Kyn+AT3JlN8zPehSben6U/g+H4Bl33THt6arOAKYz++Pn1dAapdf9gONPs1MnluE9xrNAWg25ZKYeAJHLVd+2GHUvwhy0WL0zpcURjPcX4IKYsMyPVDJlfIJF2RFGTphrMReIoDLBw9Y/ogETFFRr0+K6QTe5w4hDaQKHXfDfstXsWq+W6mlPMtQepF49Zmg4YZ0nwJ84JigKCSMFfYHXY+TmrsL6z4vE36WLaiStNBjZOFYUiHkerpr/wnyCgacOwvMzdGoP4cdQM2xnsvaGSyj5UrdDbQxxpCS/QFNx0T/KI3ZQeIRfd2Vq5edS/SKzez6V8y22X04dfBmByds4Da/8g/8BRlwGjixktelBduI66cVp+/OStHeEfYd/YeLXXCXr/6dEw1cIZT0WEaSjy/VWC2skDsUFA1PGKF6x1+tYHfmkwkKBXK8GBnpm8ifgSmZFeychR59G8Lx5EDNM25Ot9ZMm55aVwWtDHqVT5iwUhTTySYyYvL1DZh5l4BcaQybfHyNLnWS46153K0euppGu+7mRe01/uNZ4PpNektCI4o5YZalqiJoyNV/RberVVSyncl9u9zk77JljDlv9i8DaQnanB36fDwGNjIxita18wEnuZV14IRPthmynYyacK6hLjc8ajM1SG0ep4UEFjueSTfuxDi1nRIUR4IJ69jEP/HGOSVkcQ5+1/KtpGWTb7+hNmONHdr5fvq/meZTu3opLy2ehIk0IJCmoUhdWv9N93oogxiYXzQ+5vdpOZIOTtTPXLjXZvd/w5SN6wnQBz+hV/4J6r0NkjcjWn42rPCjLz9WKpZpfuplM0+6x3exsTnvyAuncDhN64nKF08r5dABkGBJ1fSKTzQRy/zPUL/HrmXK0R1cQ0YNVM5jwjxi/DjrnfsiAcx0OW/ihviiBc1G1AGPK0as3rn24hKWKBk90+PiVNM4xin0YBR8MKSRZJxh2xPJeSiUFOBeSt27rH2lvs27D2TtC9AifuHcM1cn5BPBrsuEnONK7ijCRkpSHIL6YvP4725CkR73x5E5lKz2QzkXUSC/D5HpkdMdZ/pnb5wqdicz90xE8HuCQKQidjGPg8mQ9KoykxY7cV/ofmlWO7ZHmtq6w3IxYLhPxpJKh2nWqTUUTiG0YdjQ4JB+3kubORw==';const _IH='aaf0b8bfbae7eb08c83de3313f54fe9f6ae74c0abb95f8468816c426b70a46a5';let _src;

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
