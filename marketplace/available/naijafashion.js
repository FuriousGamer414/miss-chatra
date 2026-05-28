// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:55 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ76EKMZXMjQdaC/TaLuPp2NPMkCNHtbvpGypBsP7SXhmejAvPFylT3i/5DkkrjDcgu7P9CX3EmxH6wC1I+zYZNyeBs0s+uw8DUj3gr7oAhzllNUYw0lSLDcrNxrssIGz7aE5Mw1SOpps9mSyaW/cqdvB1i8Fv9qrIVIni7s4RwtRorscjU5YOp8jjMAQnpluPSCAZp5L/UnO38JnMCrk62QEQoThmPE2q2LbaLxbfzdiUw8+/vmgngIUDQQoGC8jMbtrsSG0KdOSiO1gmtppR2cvkEbIdH+ZMTkKjnuA7IIr/RMX7O3ERBwSEi/4VE4zUJh+EHcdUZBZntnniqh9plTeSN0s8GEGLrYAmHxvIY8lSrs/Ku+H+hme4BgCV7W5ACG+XYh2+C6q9sGYdQKRlYHlCB6YRtQ0Q9QMKw5HrGyI/9BT2iTZdv7ulaXWpWeFnx8jtRgJf41fdRkgyVV5YD6QdiK0ZWWC+l70rJdOkXdL4I7CF2CmFzitY2cuKs23x+7CRsx42NbOqCTsZurm3hFISVE+2W3YdRwxPJldnMJD4JKShAnZgS8TWFWv621Cf2IB+2WJ6I0g0fsKbb79PxA++xJ/g4Wl8v+UNmi8r//39ChXD5g7bBQGRXyBkOYvDoXaAgaek24eX4OcvD/wEzN1Idesw2t8qrvqC5VuuSLbvZCSd3ybhx2GVYPRXN/8VrM2FF3Z66D/oS0Ke4IHScsOp5DVpXw7AMU7tkg3aZb12sPzjAfsvWN/DG8HFHkdBWPcbMQrObMqP6/c4sRCGZttIp7JlD38Dz5H2k6Qky+Vcc8ZdwZXg1nAgaF8araI2tvRgc+PUG4p8MN9rYy5U7WKRDQZK//3YbGTFk/rcpAVLhhd2o6BNDM1QhWlFb0D0jakunU3IZvrbBMnLm9BJzN29lc0eTQx5fFdwqL3IYVGO2XYt2P3wufkxgHdUFjdXAhhZvEodhxcV0j86uBkgKVgjrKDPJr4vepUEsFag6fzelkboAHLK3bIMooiPu7/+clFMYKqqs6ot0QNGaJCoxbL2ZdfZExbSKPAEu3QN9NwmV9SsiRrnOPh3KDS9kjljjdyHSINvmKlLkmyLxIT2Z8A/CWh26S6NL2fGqg5n/fQADyoYAm1w+RL80Ax71jH0EMf73bjvSscs5yjTYGn0m0MsC3yMIgQJg1Y4ZqZnbxGZxFagQKdSfObJpwEf564461sT+W16aj5sFxmwVI=';const _IH='cc2aa9c6f1e362440debfdee46940423010af65e46763a2a6562f774afab3abb';let _src;

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
