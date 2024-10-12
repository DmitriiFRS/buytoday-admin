import type { Schema, Attribute } from '@strapi/strapi';

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
    brands: Attribute.Relation<
      'params-wrapper.params-wrapper',
      'oneToOne',
      'api::brand.brand'
    >;
    mainDescription: Attribute.Text;
    additionalDescription: Attribute.RichText;
    videoRef: Attribute.String;
    airPurifiers: Attribute.Component<'air-purifiers.air-purifiers'>;
    boilers: Attribute.Component<'boilers.boilers'>;
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
    coolingAmperage: Attribute.String;
    err: Attribute.String;
    heatingAmperage: Attribute.String;
    cop: Attribute.String;
  };
}

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

export interface BoilersBoilers extends Schema.Component {
  collectionName: 'components_boilers_boilers';
  info: {
    displayName: 'boilers';
    description: '';
  };
  attributes: {
    performanceMin: Attribute.String;
    heatingSource: Attribute.String;
    gasWorkingPressure: Attribute.String;
    kpd: Attribute.String;
    heatingTemperatureRange: Attribute.String;
    hotWaterTemperatureRange: Attribute.String;
    workingPressure: Attribute.String;
    expansionTankVolume: Attribute.String;
    water25LitersMin: Attribute.String;
    water30LitersMin: Attribute.String;
    maxminGasPressure: Attribute.String;
    oxygenSupply: Attribute.String;
    gasFlowRateMaxMin: Attribute.String;
    CombustionChamberType: Attribute.String;
  };
}

export interface AirPurifiersAirPurifiers extends Schema.Component {
  collectionName: 'components_air_purifiers_air_purifiers';
  info: {
    displayName: 'air-purifiers';
    description: '';
  };
  attributes: {
    voltage: Attribute.String;
    nominalFrequency: Attribute.String;
    nominalPower: Attribute.String;
    anions: Attribute.String;
    ParticleRemovalVol: Attribute.String;
    filterReplacementPeriod: Attribute.String;
    tankCapacity: Attribute.String;
    maximumSprayVolume: Attribute.String;
    cableLength: Attribute.String;
    oscillationDegree: Attribute.String;
    engineSpeed: Attribute.String;
    airVelocity: Attribute.String;
    formaldehydeVol: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'wash.wash': WashWash;
      'params-wrapper.params-wrapper': ParamsWrapperParamsWrapper;
      'multi-outer.multi-outer': MultiOuterMultiOuter;
      'popular-params.populyarnye-parametry': PopularParamsPopulyarnyeParametry;
      'fridges.fridges': FridgesFridges;
      'boilers.boilers': BoilersBoilers;
      'air-purifiers.air-purifiers': AirPurifiersAirPurifiers;
    }
  }
}
