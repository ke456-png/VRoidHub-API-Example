import type { CharacterModelLicenseSerializer } from '@/types/Response';
import { LicenseItem } from './LicenseItem';
import { getHubVrm0LicenseValue, getHubVrm0LicenseVariant } from './licenseUtils';

/**
 * VRoid Hubで設定できるVRM0.0向けのライセンス要約コンポーネント
 * モデルデータの利用条件表記ガイドラインに基づく
 * https://developer.vroid.com/guidelines/conditions_of_use.html
 */
export const VRM0License = ({ license, version }: { license: CharacterModelLicenseSerializer; version: string }) => {
  return (
    <div>
      <LicenseItem label="フォーマット" value={`VRM${version}`} variant="default" />
      <LicenseItem
        label="アバター利用"
        value={getHubVrm0LicenseValue(license, 'characterization_allowed_user')}
        variant={getHubVrm0LicenseVariant(license, 'characterization_allowed_user')}
      />
      <LicenseItem
        label="暴力表現での利用"
        value={getHubVrm0LicenseValue(license, 'violent_expression')}
        variant={getHubVrm0LicenseVariant(license, 'violent_expression')}
      />
      <LicenseItem
        label="性的表現での利用"
        value={getHubVrm0LicenseValue(license, 'sexual_expression')}
        variant={getHubVrm0LicenseVariant(license, 'sexual_expression')}
      />
      <LicenseItem
        label="法人利用"
        value={getHubVrm0LicenseValue(license, 'corporate_commercial_use')}
        variant={getHubVrm0LicenseVariant(license, 'corporate_commercial_use')}
      />
      <LicenseItem
        label="個人の商用利用"
        value={getHubVrm0LicenseValue(license, 'personal_commercial_use')}
        variant={getHubVrm0LicenseVariant(license, 'personal_commercial_use')}
      />
      <LicenseItem
        label="再配布"
        value={getHubVrm0LicenseValue(license, 'redistribution')}
        variant={getHubVrm0LicenseVariant(license, 'redistribution')}
      />
      <LicenseItem
        label="改変"
        value={getHubVrm0LicenseValue(license, 'modification')}
        variant={getHubVrm0LicenseVariant(license, 'modification')}
      />
      <LicenseItem
        label="クレジット表記"
        value={getHubVrm0LicenseValue(license, 'credit')}
        variant={getHubVrm0LicenseVariant(license, 'credit')}
      />
    </div>
  );
};
