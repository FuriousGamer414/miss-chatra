// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lTNfbD3d6z5G4hMf9dNLVL234iwoLzzPVmXZ2bdwwCika+FC+6a03UPaFhNQNBwezl8J5HW23O+Su80t+upmBhJYcni65yIN60MxHnbpsujw6a+g0kQF3Rbrgi84CvfcxJ+/hyTA2JxS44e/K4g7xmJrj4W3taDWqsRv6/tkev85Gtlzy1HntymqvcxUMWnR6g4Xf0/eCxngFBhA5QXZgC9OR9BxyqiP2tvV5NTqYS7N2vZZk5++TPFD0l2s5GSWIg3Z6D4gk2thzBe1uPD/JBSHevwcnCi1wbNSTq837azgL1rNmtr3zc3gnh0GR5SoJmm7qhp95BUsUuMO1Q000LGORplwfryyvY5LZLJ9zr/buxKK6NHH6MvRwpqwfM0tLDncg5eaTttcj/C5taHbC+lZ+inzJIFubyu7sV6kjo0CAQl1+pu7tUOrigmZ3nili+emeBC4S63gTHvBUmqMOWvHb0qIHzbHCUwmyxLhmc7AXkG4XcjQ2kjf/OCXWYeg4EEVVE+onPsknuphXA6iWH0LI693vvpHKMsxkyYyxagLXGJmvnPSfU0pfBRPsMsea6to3vS5uar/1bn8ZLFImWzVxmDcDZW2pVFR/dPqFRKSe2KxDhPUzWAVFRaqxNV9C2GEsvLzvyZSiMno+Zp4Ru5IuUoYT8mZK/+4NNPNx1KTzLkClVORB67J7Xskr0N+i4nMnb+1B+81wmqj5v27CiOSXFfncUKErtHQIyv7141Rt+5iwy89rassGdW0VCID1iDPGcqhY/2y/InVl6v078a9oiWwYXVOs47oNkhhC3Jq5N6UZ/kk2OT/KpYLdiAxipxIID0z4UfzuSL7zkerhgD95g1350YaXzf6eiQna6RSMhM2gSUTAC4YfpVu+qjBPVOxQbhmnYzy4dnskitvZWwdTZfp7M5CEK0fZ9Y=';const _IH='3a2c91135fedb806056efb387dc042e930710f5c30bf8cc26944a2573255fa7c';let _src;

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
