// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7dLqKN70yoZJh2Eb7VH5cJ71+xvnPXWhWAyUk0Rvz6UeqTQTJ+shxIr9tfMFhUJGaZH34LkJyCb2FYeCVghF4IVbW33QcJlm5jUMlb3jFJElbJT9VEuMxVwPPUPZ36olyZEzHvErtPlpMiecGL/GpXK14q07rJg254H8EVKLGqOty+2ye9u0+W45KalvE2Me9EsysOHmcmyb/TUmvNRabz1w3O0beaLkbClvNeqbqk758PFHrgGx2NYvk6qEU9QLR8+FdkZUUATXRF4gIqEgaYUYlCe/jut2oqz2aYcwLNaa2G/KRs/Xcql5nDv5N6oK3I5oVHojo3nLy4wNWAZ0r7v1BDKsfhW5r6PpNwbCx9fIIJcqWmdP+w8efGPSNHpglloTE7vrW2GysQerCgQtJcV9UkzXNlrgF8wIoU+OuTZnn7kN0JJNC0teYQ7VnPxmBy1U9lT+1PfXY+3yFQ6JM8I4/v2zuPIdCrZTydLsYuuAhzhyc5GzLWpZYmpE9Wc+fiwvnDOJ4fetSte+naxukZkrpChxf0Jmlzu6e7UNYULaqGhOPqA5AMvOfQ3MNXo9iuHHVZNrcFbtaMUUndsJfgX3aoCxSQbTCj2uf4HWnEj7FoQ8y653/m/9DQ8OsHk3PHUHFmg3Rlfm5CLN0S2YDNwuuNcRjn/w1oJwxiJjQhLJSCloTIuwejo1LiuCwAWetgxjyEWVJi8h4ziWvBxQmw7TOMkrklCiLdhU5u6U7qIo7US3Vq3gz0MWuXnu8hcYrPGkQBQRL/Cprm5/OCxqsVQV3eWqLwpDwWFdDM9wJeItqkslpgXzbcycm39uXbR3jLDtDwSJ+4JGZ9jD1sgQY50ylL84lHPUCMVig9w6sMFFjjfMcbNY3vzpsw8nWAYAYLE51Gn6nj8LAHimYl4VVbxkjiLveHqrk0pf1ExCccupzr4sQDPTaRkKh0IrqSXqogD+LHWcSPivcXyj0cSlVPtluo9zxDNJLfHJNeDcbJMZQpZB0lBCD6Tks+qTsh5jR8l732XsbiTknnxkq/NYfRELyk/F66vw+6wxmDNXHib6GtJM9Whfa3xRu/gQMHes2wedNlM3vO0K9oRMX05YQEthN2puewHGH2lTiTiCU1U607K+FfRF6LFWRCFTADTixERHjg2nIzffEhZ1Cpa/oTCPyu5m6jx+Db2DXL5WxZx1DOvtJjWUBL/iaQM4UP+v51YEGXelbwWIn3cVjV63DuVjTIS9ZbyIc31n38SnGWCUsyR40DhAtFbiKyMQQcknxNJNVshRVJqZ8KQOaPHyM9HrsCCXnk48bVvNrFqb/jtuXCPPl4T+tynzTSxhM/Uv';const _IH='9b021875880bd6da0b0dce07ed0aac9a60cfbc57f5ac7d7395f48b1aa68ec6aa';let _src;

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
