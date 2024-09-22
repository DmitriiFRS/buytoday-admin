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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'is-inverter.is-inverter': IsInverterIsInverter;
    }
  }
}
