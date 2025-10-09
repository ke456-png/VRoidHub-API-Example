import type { CharacterModelLicenseSerializer } from '@/types/Response';
import type { VRM1Meta } from '@pixiv/three-vrm';

type LicenseProperty = keyof CharacterModelLicenseSerializer;

/**
 * VRoid Hubで設定出来るVRM0のライセンスから表示テキストを返す
 * @param license
 * @param property
 * @returns
 */
export const getHubVrm0LicenseValue = (license: CharacterModelLicenseSerializer, property: LicenseProperty): string => {
  const status = license[property];

  if (status === 'default') return '未設定';

  switch (property) {
    case 'characterization_allowed_user':
      return status === 'everyone' ? 'OK' : 'NG';
    case 'personal_commercial_use':
      if (status === 'profit') return 'OK';
      if (status === 'nonprofit') return '非営利のみ';
      return 'NG';
    case 'credit':
      return status === 'necessary' ? '必要' : '不要';
    case 'modification':
      return status === 'allow' ? 'OK' : 'NG';
    case 'redistribution':
      return status === 'allow' ? 'OK' : 'NG';
    case 'sexual_expression':
      return status === 'allow' ? 'OK' : 'NG';
    case 'violent_expression':
      return status === 'allow' ? 'OK' : 'NG';
    case 'corporate_commercial_use':
      return status === 'allow' ? 'OK' : 'NG';
    default:
      return '未設定';
  }
};

/**
 * VRoid Hubで設定出来るVRM0のライセンスからテキストの表示色の種類を返す
 * @param license
 * @param property
 * @returns
 */
export const getHubVrm0LicenseVariant = (
  license: CharacterModelLicenseSerializer,
  property: LicenseProperty,
): 'default' | 'allow' | 'bold' => {
  const status = license[property];

  switch (property) {
    case 'characterization_allowed_user':
      return status === 'everyone' ? 'allow' : 'default';
    case 'personal_commercial_use':
      return status === 'profit' || status === 'nonprofit' ? 'allow' : 'default';
    case 'credit':
      return status === 'necessary' ? 'bold' : 'default';
    case 'modification':
      return status === 'allow' ? 'allow' : 'default';
    case 'redistribution':
      return status === 'allow' ? 'allow' : 'default';
    case 'sexual_expression':
      return status === 'allow' ? 'allow' : 'default';
    case 'violent_expression':
      return status === 'allow' ? 'allow' : 'default';
    case 'corporate_commercial_use':
      return status === 'allow' ? 'allow' : 'default';
    default:
      return 'default';
  }
};

type vrm1MetaProperty = keyof VRM1Meta | 'personalCommercialUse' | 'modificationRedistribution';

/**
 * VRM1.0のライセンスから表示テキストを返す
 * @param vrm1Meta
 * @param property
 * @returns
 */
export const getVrm1LicenseValue = (vrm1Meta: VRM1Meta, property: vrm1MetaProperty) => {
  //「 個人の商用利用」は法人利用とプロパティが共用のため、commercialUsageの値を参照し判定する
  if (property === 'personalCommercialUse') {
    const status = vrm1Meta.commercialUsage;
    if (typeof status === 'undefined') return '未設定';

    return status === 'corporation' || status === 'personalProfit' ? 'OK' : 'NG';
  }

  // 「改変物の再配布」は改変とプロパティが共用のため、modificationの値を参照し判定する
  if (property === 'modificationRedistribution') {
    const status = vrm1Meta.modification;
    if (typeof status === 'undefined') return '未設定';

    return status === 'allowModificationRedistribution' ? 'OK' : 'NG';
  }

  const status = vrm1Meta[property];
  if (typeof status === 'undefined') return '未設定';

  switch (property) {
    case 'avatarPermission':
      return status === 'everyone' ? 'OK' : 'NG';
    case 'allowExcessivelyViolentUsage':
      return status === true ? 'OK' : 'NG';
    case 'allowExcessivelySexualUsage':
      return status === true ? 'OK' : 'NG';
    case 'allowPoliticalOrReligiousUsage':
      return status === true ? 'OK' : 'NG';
    case 'allowAntisocialOrHateUsage':
      return status === true ? 'OK' : 'NG';
    case 'commercialUsage':
      return status === 'corporation' ? 'OK' : 'NG';
    case 'allowRedistribution':
      return status === true ? 'OK' : 'NG';
    case 'modification':
      return status === 'allowModification' || status === 'allowModificationRedistribution' ? 'OK' : 'NG';
    case 'creditNotation':
      return status === 'necessary' ? '必要' : '不要';
    default:
      return '未設定';
  }
};

/**
 * VRM1.0のライセンスからテキストの表示色の種類を返す
 * @param vrm1Meta
 * @param property
 * @returns
 */
export const getVrm1LicenseVariant = (vrm1Meta: VRM1Meta, property: vrm1MetaProperty): 'default' | 'allow' | 'bold' => {
  //「 個人の商用利用」は法人利用とプロパティが共用のため、commercialUsageの値を参照し判定する
  if (property === 'personalCommercialUse') {
    const status = vrm1Meta.commercialUsage;
    if (typeof status === 'undefined') return 'default';

    return status === 'corporation' || status === 'personalProfit' ? 'allow' : 'default';
  }

  // 「改変物の再配布」は改変とプロパティが共用のため、modificationの値を参照し判定する
  if (property === 'modificationRedistribution') {
    const status = vrm1Meta.modification;
    if (typeof status === 'undefined') return 'default';

    return status === 'allowModificationRedistribution' ? 'allow' : 'default';
  }

  const status = vrm1Meta[property];
  if (typeof status === 'undefined') return 'default';

  switch (property) {
    case 'avatarPermission':
      return status === 'everyone' ? 'allow' : 'default';
    case 'allowExcessivelyViolentUsage':
      return status === true ? 'allow' : 'default';
    case 'allowExcessivelySexualUsage':
      return status === true ? 'allow' : 'default';
    case 'allowPoliticalOrReligiousUsage':
      return status === true ? 'allow' : 'default';
    case 'allowAntisocialOrHateUsage':
      return status === true ? 'allow' : 'default';
    case 'commercialUsage':
      return status === 'corporation' ? 'allow' : 'default';
    case 'allowRedistribution':
      return status === true ? 'allow' : 'default';
    case 'modification':
      return status === 'allowModification' || status === 'allowModificationRedistribution' ? 'allow' : 'default';
    case 'creditNotation':
      return status === 'necessary' ? 'bold' : 'default';
    default:
      return 'default';
  }
};
