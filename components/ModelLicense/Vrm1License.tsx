import type { VRM1Meta } from '@pixiv/three-vrm';
import { LicenseItem } from './LicenseItem';
import { getVrm1LicenseValue, getVrm1LicenseVariant } from './licenseUtils';

/**
 * VRM1.0向けのライセンス要約コンポーネント
 * モデルデータの利用条件表記ガイドラインに基づく
 * https://developer.vroid.com/guidelines/conditions_of_use.html
 */
export const VRM1License = ({ meta, version }: { meta: VRM1Meta; version: string }) => {
  return (
    <div>
      <LicenseItem label="フォーマット" value={`VRM${version}`} variant="default" />
      <LicenseItem
        label="アバター利用"
        value={getVrm1LicenseValue(meta, 'avatarPermission')}
        variant={getVrm1LicenseVariant(meta, 'avatarPermission')}
      />
      <LicenseItem
        label="暴力表現での利用"
        value={getVrm1LicenseValue(meta, 'allowExcessivelyViolentUsage')}
        variant={getVrm1LicenseVariant(meta, 'allowExcessivelyViolentUsage')}
      />
      <LicenseItem
        label="性的表現での利用"
        value={getVrm1LicenseValue(meta, 'allowExcessivelySexualUsage')}
        variant={getVrm1LicenseVariant(meta, 'allowExcessivelySexualUsage')}
      />
      <LicenseItem
        label="宗教・政治目的での利用"
        value={getVrm1LicenseValue(meta, 'allowPoliticalOrReligiousUsage')}
        variant={getVrm1LicenseVariant(meta, 'allowPoliticalOrReligiousUsage')}
      />
      <LicenseItem
        label="反社会的・憎悪表現での利用"
        value={getVrm1LicenseValue(meta, 'allowAntisocialOrHateUsage')}
        variant={getVrm1LicenseVariant(meta, 'allowAntisocialOrHateUsage')}
      />
      <LicenseItem
        label="法人利用"
        value={getVrm1LicenseValue(meta, 'commercialUsage')}
        variant={getVrm1LicenseVariant(meta, 'commercialUsage')}
      />
      <LicenseItem
        label="個人の商用利用"
        value={getVrm1LicenseValue(meta, 'personalCommercialUse')}
        variant={getVrm1LicenseVariant(meta, 'personalCommercialUse')}
      />
      <LicenseItem
        label="再配布"
        value={getVrm1LicenseValue(meta, 'allowRedistribution')}
        variant={getVrm1LicenseVariant(meta, 'allowRedistribution')}
      />
      <LicenseItem
        label="改変"
        value={getVrm1LicenseValue(meta, 'modification')}
        variant={getVrm1LicenseVariant(meta, 'modification')}
      />
      <LicenseItem
        label="改変物の再配布"
        value={getVrm1LicenseValue(meta, 'modificationRedistribution')}
        variant={getVrm1LicenseVariant(meta, 'modificationRedistribution')}
      />
      <LicenseItem
        label="クレジット表記"
        value={getVrm1LicenseValue(meta, 'creditNotation')}
        variant={getVrm1LicenseVariant(meta, 'creditNotation')}
      />
    </div>
  );
};
