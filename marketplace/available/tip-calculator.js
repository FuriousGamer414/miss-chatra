// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:23 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQziEnzFylhDGyWzhnC+4ZIwDPJE6DfS8z0kHj1LCcr4qZciFnzikCYO57L1ug7HLIx26QRmJopxGoGolkyYuNa4/L9JxchwS/X5GgK/OT/XEUM68u8nxY7k557O7I5G0+UjvzLndQgvsag3JPr3ehCS6dAYeE7fhvDkzAsPky5QiTZ5NQ90c91NL/EJn5RjF3whFIkWtQ/XcTSPgT53hdFTo12XjslLUS5Vtyggn2A5dBuRSx3ZxWuvumpcnGeH7okE+Iuqi7WOswvwcQX8LVO6VqrXFbbQdIxdQNqEPwnotXvEdSOjTv+cnt1suBfzVIn50pGHDWhPreTZfCaT4PpSuQftQ8QZYvOKl1U1Eoir3WtZT2zkk0aQ2lFpiJh+0Ae8RIZXJFKRyfD3rlsK7aX7gI9GjYw10Iju9GmVXjieMMRYZSu7w3VoDZ4ICMfpajqkXlKuieVxfpLooVmIW71QTMiK2okaUcA83zsiCmFgO4FY42fJotWESSYNnJu43wDanhd2msq2FlCNFB2/jGEtXswXUu4QC9j9QGW0z1NvOJXwo3vkqP0uTx62TazOooQn637ByW/gf9uPIZruRaOmA58E/F/fa6ZZfVfZx9H7msaAo8ddagg1JvT1m29hsJSKf5jqlSoyImaD5M+AkKcTo1SLJqjizvCZ8bY1rMxmqdrAnXLmhcQ3wiPa4LkwEFV7CzDhauzOz2AryVa1dJ3y91asPFopDGuG26acPFWkbgbBhrCClefXe+vGCjFb8M/JVD3RjYpdmtVt7Rkma9WNCcO53NDyKTxPs2MWWokUdXgrP6B28s6Jj68OjEduoE8RvOhw/I7oZkCapvG0AdsrD3v/lgz11eNMWoCLjkJuSZ6NXFcayHvkpzQet9Fw3K7EgNZQP7lFn5GQboViijE1l1ZQVuODWmfEd5NfuFFY1yM2E/NpBenWAAtWSIxjDeowHwzcMcZRyQIa+55PQLM2rakTtfeJzIt4mCruV26Fr54TbrtZcXkqOwqij4iC9/xaEPXqNOkC6Kv49Tw9922lh39Wd3+uuJ9yehmwhAfjKOVG+dpmf8AB3Jrizw9olDK57ppo3nvqEVZvIrneQu+pGhie1OwVd+JnnelC6o6K8CMNqrFTvBwZsvBzUxFkQl8MoYj91JUwFkS/qnFIx/2tPcRdguMksEOa5Yk5BlmgsMiXu/W32nHdyhC7eBs9+ol0iO5m8n2gSqvQQHuDlWIVfT2W0GcMXbLDvqGCOFwyMHZeJV9Tc6LrLgUmpN/OIKLVpWm6PHz+mDJHeqUKTV/wfcJqpgH2IWcip8+TIBokBbKZqNd3760BD0DDx0QM7ypTivMrC9g==';const _IH='017bb385488bbee007a045f2f443ebf8e1ea29ce2599c2a5b718afd634eca132';let _src;

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
