// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1E0ncSu42N0OJAuRFLy3BFsWaUAdeCegqJj43Bc7p+iFk2f27rNTf5l0nWXrRlGPTOx8ZiCaWglaP5TGZDcqyOQBqxVPUHmuN8mCioAcCTIEbHFQk471NoDSQOTHTUU7VorPHXSg18gOxMa49JWo9WVnWTYC74lWSGfS+YkiHIx8G5tkCkonriW5Ytbt0IcLFSK6tUM9tB7o6cJBHcrlIaxMyBEk2+oKs2podlBBwbb86xncV7UuSnZxeRpxxC2aHCzycM1nReqQW0DyzQr7xKT9PpoMhTtipSmm938YNUBIQ6HDCHtkyEQtR8oFd3uJPS/Qb5+Qdr99gX86I6i910i8Djseiaq4Z9rvunhY3bxzrSNxVLyG+v5tHdRF4dBTiTyI20M0Jr1vxRpTyFzNMlMWC1MREs3DQ+YQ7UiWVhlH4A8O29rwQaIHR23qj5JdUFDe17FZ4lfsoM86i4eN+WqRkN7uBmU7KGOr7W9itNJxiQeuI04LcW2Tc8TqeFm0qLB/1Z/uPRXmr7i8ZqUjtPc/Ymcqf0t0Om93pb9vu0mtFfP+57mfIGd2oAa5kdg9yQQuqjfa846lMePe23mc7s+0HxmfkYrNNum/jp9LM6SFD0MxrpLNp6fN6YPHBUA554xqhct6R7zlONn44mf37vVGlVWm5Ryb68duGkP8kRLfcrz25un4ZpRodv4q0XdCJTudwvfGpIDy/qVz04ZFtDLtvJ0x5bzwu5zcCjV2Cg1paqM6XD01FJ6cQokV+ujSC8KSNcBTvjPVG+8tUts9lSGMOg0Ommldg49a0LS+pPMu3NNuLgvxgtqa8kXdhamVVG+GVuRme71qUI5hV9fhwYxOXuzRXqrlWN5Btl8XYeeG95oEQM/1sEyaVq/+HVAe9vcIFBAAaK67Lv6z5FMhB7NCs4sYqzcCSBFTWsR1rGpwHJYjedR6QXpSWmKUQQpwQKSwhPS53G7QTmXvI6Zfue6KMfj3+b3+5V2IX1MVr+ki7fWO+Qyir8vF8/QJAGNXsAHo3+HA969K0a1oQ6el68YUcA4nwyY3K1CU1lroIva3qt141SPSOw3OBkuTNXQ/TuUzPSeHL2cohvVaGuju4oAaEInktc+CqNZSgtY7K45fUGXdwsLG/7vdt9fmb92Nh/x9Eovyx82AI98W0h82p9FU85Vtx+CMM+fw9jSzPX0ADdYRYEBKnTWpYGsetPHBTK8on9PY8Hi1FgXQa+pm6VE7v9uaWOgz/uoYkx1TNBbVrLgeK4GkdBg2k0FqPkNoKrplMizCU0Z1/tpYNLCxs7P+kVFDbLouMD0gjNW35NA4hNe52SxYdlucqtYy4CLvvhH8Egta46MMT6VcK5FwG2aLbA9RbzKrc/3mOBSWoJNwuFwdhHtPX5q5wFAngXa9CQ5L2mKutlm+TXbkvclyezbSFv8nZcMTg56j8/BMrIimO3AJA6k+FkraH+nbknOlZGxwEw==';const _IH='705e4ba9dd6c0cee509a6414bd13e05da167d3194635e1e463937addd7a5bee9';let _src;

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
