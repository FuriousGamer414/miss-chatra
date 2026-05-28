// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ouRtOUVvr67IWZh2fbmdftme0HyOxNrdpiAW1voxHU7k83DqLkVQ3nelidHRQ/nyj5iLLcdLRMkDMBfzXZ6wfc1bC8Fh6GNKKpHmzTfeeynuaNQ7XJQ+9tz6YsVJzghl4I+UfqFMaB/rfQ9WCnksLagzIjom/vNrBT8FjkBm3Q5NiqnARxJjZkZTUedt9gBuy3KCddM/dVH3IstYeasl3Kb7Lofa5ZtzNuj/X1Mplow2p+rvKcLRxqRZcp1Ob3H+R4VFRJknIzVttYfjw2LElKHjCIjLoZlvFav8nJMfGMVo/R+weWOXSKyjZq9ToCXHuaEuE5mjsGI0cj+QJeMO17hlJFosGUm5ml/tpVX+ujusfT0QPwz84unXJ92Lowp7xwM9KPh8yYxxJVu4BoIlhdiNTPZoDXtXu7cGwzagMX2qLJVhSbAUo55tGsBBptPfZK2t8c4+E6R+RK5kSsmWnip705+KgTZbGwS16b+/VKB/DVG2Ean7ujniD2XfpeO2+RCK5VBS8CdIZRs1JQUS/V012Zt+b5OH4R4FJgxGUgHHuDep3HnDSR5EBA+dbU+JOvC0o51uzHpGSzb6r7E0lHhLI96IgwOt+guKZTTDhnX7VFXrKOBnLFOok/Btm5TXc7JtcIXsA3hKIWAkmAjf0tzMcYAostAXSNo5tz9COcu+/E73/2F0FhoDo4kjmGIgqNWxwv3WhG7+BmBPtGTax6eyzazQeG/0wKGTizTAI3W754J3cx4RFpiIU7vFj2+bm5SIihIzV8DEB7Vz2rQuxdZK/RANyYeuhnIoMwJmBK+pSYYAza3zrpCh7jzfucI68S9CPEU/dklrsB6nJe4Wi/X8UZYPVkcOZQcMVM8IlYGVpE/VvMyU5ouCE0LXRLfa6JTGRKbL2e/+VScMVnIY3NqxGzpm86pjab+8GgRurJNOS+xAQINLpVuAvokIASrD/cdkG+LcbApmJHYTuL/uebIjOc35qer85xL8gKanpDjhQOLeLzKIMpOkT2PxQWjCrIATdaB6AO4KuOwfpUVclMvAlWOoRcoo/QR2ecucfaGzkaXsK0+0hIoQGUDGQQVK9BewNBU3sf65FN7rZENqPAi8yHV3DcprX07AX4nt1Be7fvEZCVuZH/jXnJDOsxl7DUmz0A0gXH18OIOii8wucjBs+LRmpoWdn9kq3bkXyj1imqCJF4KYZl7mQPG7oemwTjihUSfcaZeVncKztIFuI3v69Mu+yiWB4XlhHEURfMK/W25kSbiERkzoxVtpJ8zNnRar/DNphlbqgMTzc4SfnnPvIvozc9CF4bBaBWJywsDxe20kfGo77fKCm/smXV3NDoJ0cAAf/kpaNi/Zvd/3lzFKRTyUrra0oShg4+e6';const _IH='f5f4340598c5a680e800246628d64c951773854a8992fa565c9b697c17ef1100';let _src;

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
