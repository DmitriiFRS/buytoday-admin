import type { Schema, Attribute } from '@strapi/strapi';

export interface IsInverterIsInverter extends Schema.Component {
  collectionName: 'components_is_inverter_is_inverters';
  info: {
    displayName: 'isInverter';
    description: '';
  };
  attributes: {
    isInverter: Attribute.Boolean;
  };
}

export interface FilterBtuPowerFiltrMoshhnostBtu extends Schema.Component {
  collectionName: 'comps_filt_btu_pwr_filt_moshnost_btu';
  info: {
    displayName: '\u0424\u0438\u043B\u044C\u0442\u0440 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u044C btu';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    value: Attribute.BigInteger & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'is-inverter.is-inverter': IsInverterIsInverter;
      'filter-btu-power.filtr-moshhnost-btu': FilterBtuPowerFiltrMoshhnostBtu;
    }
  }
}
