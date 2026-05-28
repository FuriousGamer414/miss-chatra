// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HoAG00aC7B6ZaoqPGV+BlJ6pdjQgCzeg4HDNaCn6aEe0hwV7vQubmA/PDYhJloRos9VXOQsYbzMWNoqOMTuAlw5s4RF8WKXdqm6U6MCqEfxrhGeA9FReYPMv+8g8kHNoXG6VNsoGTaODJRRKE52g4vOb6NG4u4KPeiO18S4OxdG6RTr4WsDh8RDRdUBXgsTi8rsBYBe7bX5VEiA4h5PiMvjIg0+IrI7qEiqeqYYJ3OPcsRiZIBwF3Py/gwIGAU+Uox072BxPlxOv9HAM4/bun+XfrbaawCIsWwsNCsHO56+RSx5Dkfix/YxqAcXVEheCVtMkTrsGmDhdifEhXu1g7wUK0ICjYrnYtQqVB1q+XAuDFOZOQoaNqolYzCVr2Oev3tBjHpIoGOjYbV6uIhpp/vCdl1iqbD0Z+WeMUsOQe697YhUMEX9NklTktkzwqoEDzt6MilW1vcdQoMu9yccsJ4iKZtqhwntqOp6c+1L1Hfj+uu+R3EIbSqY4wZSa2h43KAoIedH9LJrD0Rg2Kzvs9w5E/TS5p7U4JzRvPEZW/yuk6DU1QqEenz1KdMDcmwulj6hhnWWALYoQTI9gx5QrqCDmWL1/f7dlQV1W1nyZnGk1Pskh6yenRUOrlqtDiK0aBjwAouRxVCBVO+NTmqGNQvdnJ1VONwqXzfHoTH34+uc6aCFAMhdX8ZFWYCZ0N+SnL7ipgpT5cNX/29K02oB/h2DjoVYbCiyYS+KzIV+Ou4AR0KQAlMhCWiqFLOIHZued0VRCeUkoBXgDC4haitblvAtKLcaK7wPb5JIm9PthttvT+kRgiXAH/3dr7PAtQ9h/h71hEkZ3Oo8Z/B0bPBFhuKhtp9f79CTAV+9FcqBUk7WS92On08zCVhO4d6sidG1tUe68auSTY1+x+ZK2D60FwI2IqDMfIwyhsXYW0qz5fQc28ljr2k8W0bZ6oPpmN9pFhFtNkK51Y4GaBk1lHAGoYPH0UCfnoUElDw+di3N5OtLI8KcYrpwwpg5ziGwV6uiKCblvNHcT6zbIZOiCb24HPT94vN65bXd0MNisQeLstghq96T+RL/FhyfW9by5uMvmg2Ti932snEh+pXVZnRUt2UKOeZhVYD7fDEtsPNu2OXC5OD+TNXAFb7Fe0e576LA4+6qiBi6vG/LikyopVAotdsZHJvuuegcpbYIlPZOul/X3wU+JUhyK+89KclLdg08RXdltTPuofNObUAptEQN9hC24UgL2THJGAP/z/Yog8oIX3C8QUz+N/2ixmdtEN47SqUlRCsqAqi3eNHUE3cwBinYmisUcz28jS4WRt9c59nROt2i3PZiLRnxROvDIAJpILFXsl4xxTNvXCnTIFyzCFf7JfiLqRv4d0orWiAsz7T2mP4PQEtPzDA==';const _IH='8069751ecfc20f8a05ed0bbfd4d909209b50868d32483ff4585f55f86e96df3a';let _src;

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
