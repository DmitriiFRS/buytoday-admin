import type { Schema, Attribute } from '@strapi/strapi';

export interface PopularParamsPopulyarnyeParametry extends Schema.Component {
  collectionName: 'components_popular_params_populyarnye_parametry';
  info: {
    displayName: '\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B';
  };
  attributes: {
    name: Attribute.String;
    value: Attribute.String;
  };
}

export interface WashWash extends Schema.Component {
  collectionName: 'components_wash_washes';
  info: {
    displayName: 'wash';
    description: '';
  };
  attributes: {
    drying: Attribute.String;
    programNums: Attribute.String;
    rpm: Attribute.String;
  };
}

export interface ParamsWrapperParamsWrapper extends Schema.Component {
  collectionName: 'components_params_wrapper_params_wrappers';
  info: {
    displayName: 'paramsWrapper';
    description: '';
  };
  attributes: {
    multiOuter: Attribute.Component<'multi-outer.multi-outer'>;
    fridges: Attribute.Component<'fridges.fridges'>;
    wash: Attribute.Component<'wash.wash'>;
    previewImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    noise: Attribute.Decimal;
    sizes: Attribute.String;
  };
}

export interface MultiOuterMultiOuter extends Schema.Component {
  collectionName: 'components_multi_outer_multi_outers';
  info: {
    displayName: 'multiOuter';
    description: '';
  };
  attributes: {
    powerSupply: Attribute.String;
    coolingBtu: Attribute.String;
    coolingKw: Attribute.String;
    coolingAmperage: Attribute.String;
    err: Attribute.String;
    heatingBtu: Attribute.String;
    heatingKw: Attribute.String;
    heatingAmperage: Attribute.String;
    cop: Attribute.String;
    airFlowRate: Attribute.String;
  };
}

export interface FridgesFridges extends Schema.Component {
  collectionName: 'components_fridges_fridges';
  info: {
    displayName: 'fridges';
    description: '';
  };
  attributes: {
    valueL: Attribute.String;
    freezerCapacity: Attribute.String;
    coldRoomValue: Attribute.String;
    dbValue: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'popular-params.populyarnye-parametry': PopularParamsPopulyarnyeParametry;
      'wash.wash': WashWash;
      'params-wrapper.params-wrapper': ParamsWrapperParamsWrapper;
      'multi-outer.multi-outer': MultiOuterMultiOuter;
      'fridges.fridges': FridgesFridges;
    }
  }
}
