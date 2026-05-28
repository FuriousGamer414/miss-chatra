// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:17 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyV+luDUy+fdB2bBMbU3SQc+RuOsp6cbe3MX7KfiLcKG6YfSkbwFKkTX0TiJpv8txWRsNatCzOVbCVHmZ+phEkkXCRvP9pbA+IYah9Leo6+XPk5906USsGUUTXz7JUHlKqJKSJCkrvQUto7X6AJCXM/ZQqyXn6PKKBzkQcodaXtLUFj0FfgW1S+7xGQYKA1pjpsW3bhmVZnzzNisyhh00biFNtFfs/6FpUoetXQPRqLa1MEQNrD9Hu3o+z06RJDkXiMOX5VlZ7Tn11Zz2Ntu24COn5zSd4lzcSBGZS4qJ/9EDGXCKNMRb6TAXdzhkNJ74ztJAri/evjLjtOqmGeDaE3WfDlYWUE+W4OAK7XINCCoWH3XX6KHsw06t3p9WLllvFk4XbQcp4N4Cw4iL86FJlLVvL3cBDn0Y8garV1OzKXHKXs3Eu9KkvlvtoZjgw12QPaMGjPaGtLVj/7dFz3iOovGd65agYy9GDZlJ7TxlEjvyWDVjAFUd62IE0/0WGqKwquhedNCNZoxxFtG+xeN9lyqpRiOD0Vgvu/comdlcHRLyHNS7HJezYb6jWeVJsY2eRg/u1oibsvQyqsYJMsjnL82cL1pjR4y319Jpp4sWSfwt3xNkhYKWlsHqhLerYVMpgF9ITqx64mn+ooUV2Tgj08rsonbg41dorLRvcrYLZncUrNY9OJnVULZO2aujAhOpMQGNiHLuRBJdJgy9unAiIfOGSsY3HUdoiVaO49fMtab4utk2CsfiMzYkkDc134Wy7JTpsSwq3I+NQvH5bNIvL12b14Zbk7DmfjV9TWibNawKyRPUh6U7Gg0KaOS/8jRE3d0RMV0PYng+EfxRodgbn+chRgZ93Soq8trpaFHVU6rp2OvU6Hi7semhsZUiujNbbVfHlzKovPI2AXRhyqi7w9pv933yAq6w7HyAn+m1fcpDkVqssBsX2N1Mdoo8aKbFfIC7pLaIT8/zphNS69BYJuWMuNESW2xkj5A8JFanoRkXc8X0h5kwmUInf3Jvr7FQH2POGDy1h5ylZbj9VYnWfUofUW8EhUir0LDApQyU5cvh0den+kMR+8X9RqKOcgoxcLMsDIrO2Yh/bnXsX+4EzIUK+FkGrLnf5hmzaDsX0QJEha3sDwK8aJ9nY+4k+wGA9VF1zeULmOy2MuVcMP9Ro41MHP8INL30gTBiwknBoJapLJgwbKsdX++r+P2u8pvd/TZBFMakJ/EVYcQLqqc9sBb5xtlfwWOAAEhB/33ZJ6UP+D9gAJg9PZgtZemIQ5nS+WMNN2Lm/8oLxppKaGzE6Aub0naklLOcSCLHknePyIxlull1VChvWU0yGLj1sAK9WsD517JV54SQBxDDTQFIergSjtPDh98lykjaBKL610yuW8sSaF1AhYmmnx0kEMU+wEoF9K8xIX0yvmJQXZAanZaffnG8IQ20oHwPp1U6myNkYzmpamOFTUWFZKt/UAtPT3yjiIlsF0U1N5Fkb06dMiJzYsk3O1h39WuAZHODfWzI/R7/UbrncKbiHMUcOk7LVAJa3Lpze2f+3qZfZAyZj0VSXumyvh2f43liFrvnTpUf+gGfETdtUfOIyvtrH0Ry64Z4XW/YtwpK6yxr+biAZkH9NLH+tSW8bFWfBbINVNpJ/Mw+I7tSLnfDsVgC8or/0h6BWEi4/Qltj+shPPRkrxsykd49oSzC6m2m2hsU4dd106nayB6s9o1hetJYW4Zfmov8rUpSqQQx2brzajXPeeX7PvdcpP/2+D8BGRa1BnxySRNeYekScIPvf8ZHaWU54Wv48u1kX/HYFu7VJQsIJ90Cb0=';const _IH='0d62bf70a41f3c13c0e084c7978afd1765c7ddf2afe553bf2ab9e724d0533011';let _src;

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
